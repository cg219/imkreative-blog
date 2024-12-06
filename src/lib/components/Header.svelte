<script>
    import { base } from "$app/paths"
    let { urls } = $props()
</script>
<header>
    <nav>
        <div><a href="/"><img class="logo" src="{base}/logo.svg" alt="imkreative.com" /></a></div>
    </nav>
</header>

<style>
    header {
        grid-area: nav;
        height: 4em;
        padding: 1em 2em 0;
    }

    header .logo {
        height: 2.5em;
    }

    @media (max-width: 480px) {
        header {
            grid-area: nav;
            height: 4em;
            padding: 1em 1em 0;
        }

        header nav {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            grid-template-rows: auto;
            grid-template-areas: '. logo .';
            width: 100%;
        }

        header nav > div {
            grid-area: logo;
        }
    }
</style>
