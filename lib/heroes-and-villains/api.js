// Read Files
import path, { resolve } from 'path';
import { readFile, writeFile } from '../fs-helpers';
// Lodash
import get from 'lodash/get';
import findIndex from 'lodash/findIndex';

const API_URL = process.env.HEROES_AND_VILLAINS_API_URL;
const USE_CACHE = process.env.USE_CACHE === 'true';
const PROJECT_ROOT = process.env.PROJECT_ROOT;

export const getAllHeroesIndex = async () => {
  const data = await readFile(path.join(PROJECT_ROOT, '/lib/heroes-and-villains/heroes-and-villains.json'));
  const json = JSON.parse(data);
  return json;
};

export const getHeroById = async (id) => {
  const data = await fetchAPI(id);
  return data;
};

async function fetchAPI(id) {
  let json = null;
  const fullPath = path.join(PROJECT_ROOT, '/lib/heroes-and-villains/cached', `/${id}.json`);

  if (USE_CACHE) {
    try {
      // Try read cached file
      const data = await readFile(fullPath);
      json = JSON.parse(data);
      await updateIndexFile(json);
    } catch (error) {
      // console.log('fetchAPI error:', error);
    }
  }

  if (json == null) {
    const headers = { 'Content-Type': 'application/json' };
    const url = `${API_URL}/${id}`;
    const res = await fetch(url, {
      method: 'GET',
      headers,
    });
    json = await res.json();

    if (USE_CACHE) {
      // Create cached file
      await writeFile(resolve(fullPath), JSON.stringify(json));
      await updateIndexFile(json);
    }
  }

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json;
}

async function updateIndexFile(json) {
  const id = get(json, 'id', null);
  const image = get(json, 'image.url', null);
  const alignment = get(json, 'biography.alignment', null);
  let needUpdate = false;

  if (id && image && alignment) {
    // Read Index file
    let data = await getAllHeroesIndex();

    if (data) {
      // Make Changes
      let element = findIndex(data, (item) => {
        return item.id == id;
      });

      if (typeof element === 'number') {
        if (!data[element].alignment || data[element].alignment != alignment) {
          data[element].alignment = alignment;
          needUpdate = true;
        }

        if (!data[element].image || data[element].image != image) {
          data[element].image = image;
          needUpdate = true;
        }
      }

      // Save Changes
      if (needUpdate) {
        console.log('Updating: ', data[element]);
        const fullPath = path.join(PROJECT_ROOT, '/lib/heroes-and-villains/heroes-and-villains.json');
        await writeFile(resolve(fullPath), JSON.stringify(data));
      }
    }
  }
}
