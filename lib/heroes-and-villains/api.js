// Read Files
import path, { resolve } from 'path';
import { readFile, writeFile } from '../fs-helpers';

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
  // console.log('---data:', data);
  return data;
};

async function fetchAPI(id) {
  let json = null;
  if (USE_CACHE) {
    // Try read cached file
    try {
      const fullPath = path.join(PROJECT_ROOT, '/lib/heroes-and-villains/cached', `/${id}.json`);
      const data = await readFile(fullPath);
      json = JSON.parse(data);
      console.log('Li o cache');
    } catch (_) {
      console.log('Não tenho cache para ler');
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
    console.log('Busquei da internet');

    if (USE_CACHE) {
      // Create cached file
      const fullPath = path.join(PROJECT_ROOT, '/lib/heroes-and-villains/cached', `/${id}.json`);
      await writeFile(resolve(fullPath), JSON.stringify(json));
      console.log('Gravei o cache');
    }
  }

  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json;
}