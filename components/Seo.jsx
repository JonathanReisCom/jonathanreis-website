import { NextSeo } from 'next-seo';

const Component = (props) => {
  return (
    <NextSeo
      // INFO BY WOORANK.COM
      // Idealmente o seu título deveria conter entre 20 e 70 caracteres espaços incluídos.
      // Certifique-se que o seu título é explícito e contem as suas palavras-chaves mais importantes.
      // Certifique-se que cada página tem um título único.
      title="JonathanReis.com FullStack Developer"
      // Idealmente, a sua meta descrição deveria conter entre 70 e 160 caracteres espaços incluídos
      // As descrições Meta irão ajudá-lo a influenciar como as suas páginas são descritas e exibidas nos resultados de pesquisa.
      // Certifique-se que todas as suas páginas têm uma meta descrição única que é explicita e contém as suas
      // palavras-chave mais importantes para cada página
      // (estas aparecem em negrito quando correspondem à parte ou totalidade da procura do utilizador)
      // Uma boa meta descrição age como publicidade orgânica, por isso use mensagens atraentes com um apelo
      // à acção claro para maximizar a taxa de cliques.
      // Verifique a sua conta de Webmaster Google (clique "Search Appearance" e depois "Melhoramentos HTML"
      // para identificar quaisquer problemas que possa ter com as suas descrições.
      // Por exemplo, podem ser muito curtas/longas ou podem estar duplicadas em mais de uma página.
      description="Desenvolvedor Full-Stack apaixonado por tecnologia e principalmente por desenvolvimento, quero por em prática todo o meu conhecimento na área de desenvolvimento"
      canonical="https://www.jonathanreis.com/"
      openGraph={{
        type: 'website',
        url: 'https://www.jonathanreis.com/',
        site_name: 'JonathanReis.com',
        title: 'JonathanReis.com FullStack Developer',
        description:
          'Desenvolvedor Full-Stack apaixonado por tecnologia e principalmente por desenvolvimento, quero por em prática todo o meu conhecimento na área de desenvolvimento',
        // images: [
        //   {
        //     url: 'https://www.example.ie/og-image-01.jpg',
        //     width: 800,
        //     height: 600,
        //     alt: 'Og Image Alt',
        //   },
        //   {
        //     url: 'https://www.example.ie/og-image-02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //   },
        //   { url: 'https://www.example.ie/og-image-03.jpg' },
        //   { url: 'https://www.example.ie/og-image-04.jpg' },
        // ],
      }}
      // twitter={{
      //   handle: '@handle',
      //   site: '@site',
      //   cardType: 'summary_large_image',
      // }}
    />
  );
};

export default Component;
