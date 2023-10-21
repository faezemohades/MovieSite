import React from 'react';
import { Helmet } from "react-helmet-async";

function MyHelmet({ title, description, keywords, image, url }) {

  return (
      <Helmet defer={false}>
          <title> {title}</title>

          <meta name='description' content={description} />
          <meta name="keywords" content={keywords} />
          <meta itemprop="name" content=" kids.mp4.ir - دنیای کارتون"/>
          <meta itemprop="image" content={image} />

          <meta property="og:site_name" content="دنیای کارتون" />
          <meta property="og:url" content={url} />
          <meta property="og:type" content="video"/>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />

          <meta property="og:image" content={image} />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:alt" content={title} />
          <meta property="og:image:width" content="778" />
          <meta property="og:image:height" content="438" />

          <meta property="og:video:type" content="video/mp4" />
          <meta property="og:video:width" content="640" />
          <meta property="og:video:height" content="360" />

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={image} />
          <meta name="robots" content="index,follow" />
          <link rel='canonical' href={url} />

          <script type="application/ld+json">
              {`
            {
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": "${title}",
              "description": "${description}",
              "contentUrl": "${url}",
              "publisher": {
                "@type": "Organization",
                "name": "دنیای کارتون",
                "url": "https://kids.mp4.ir/"
              }
            }
          `}
          </script>
      </Helmet>
  );
}

export default MyHelmet;