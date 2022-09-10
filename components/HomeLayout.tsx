import { HomeLayoutProps, SettingsProps, NavigationItem } from '../utils/types.ts';

const title = "imkreative";

export function HomeLayout(props: HomeLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0"
        />
        <meta name="description" content={props.description || ''} />
        <meta property="og:url" content={props.url || Deno.env.get('IMK_REDIRECT_TO')!} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description || ''} />
        <meta property="og:image" content={props.fbImage || ''} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={props.url || Deno.env.get('IMK_REDIRECT_TO')!} />
        <meta property="twitter:title" content={props.title} />
        <meta property="twitter:description" content={props.description || ''} />
        <meta property="twitter:image" content={props.twitterImage || ''} />
        <title>{props.title}</title>
        <base href="/" />
        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="canonical" href={props.url || Deno.env.get('IMK_REDIRECT_TO')!} />
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
                    <ul>
                      {props.nav.map((item) => <li><a href={item.url}>{item.label}</a></li>)}
                    </ul>
                </nav>
            </footer>
        </main>
      </body>
    </html>
  );
}
