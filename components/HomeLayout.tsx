/** @jsx h */
import { h } from "preact";

const title = "imkreative";

interface HomeLayoutProps {
  title: string;
  children: any;
}

export function HomeLayout(props: HomeLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0"
        />
        <title>{props.title}</title>
        <base href="/" />
        <link rel="stylesheet" type="text/css" href="css/normalize.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" type="text/css" href="css/index.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Exo:wght@800&family=Mukta&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <main class="imkreative">
           <header>
                <nav>
                    <div><a href="/"><img class="logo" src="logo.svg" alt="imkreative.com" /></a></div>
                </nav>
            </header>
            {props.children}
            <footer>
                <nav>
                    <div><a href="/"><img class="logo" src="logo.svg" alt="imkreative.com" /></a></div>
                </nav>
            </footer>
        </main>
      </body>
    </html>
  );
}
