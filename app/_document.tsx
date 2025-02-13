import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                var mode = localStorage.getItem('theme');
                var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                if (!mode && supportDarkMode)  document.documentElement.classList.add('dark');
                if (!mode) return;
                document.documentElement.classList.toggle('dark', mode === 'dark');
              } catch (e) {}
            })();
          `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

