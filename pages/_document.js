import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <body className = ' bg-gray-100 dark:bg-[#23242a] font-roboto' >
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
