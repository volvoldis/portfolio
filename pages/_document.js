import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='shortcut icon' href='/img/LogoIcon.svg' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
