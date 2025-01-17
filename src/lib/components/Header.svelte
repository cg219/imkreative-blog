<script>
    import { base } from "$app/paths"
    import { onMount } from "svelte"
    let { urls } = $props()
    let darkmode = $state(false)

    onMount(() => {
        let colorscheme = window.matchMedia('(prefers-color-scheme: dark)')
        darkmode = colorscheme.matches
        colorscheme.addEventListener("change", (e) => darkmode = e.matches ? true : false)
    })
    
</script>
<header>
    <nav>
        <div><a href="/"><img class="logo" src={darkmode ? `${base}/logo-light.svg` : `${base}/logo.svg`} alt="imkreative.com" /></a></div>
        <ul>
            {#each urls as {label, url}}
                <li><a href={url}>{label}</a></li>
            {/each}
        </ul>
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

    header nav {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto;
        grid-template-areas: 'logo . nav';
    }

    header nav ul {
        grid-area: nav;
        display: flex;
        justify-items: space-between;
    }

    header nav ul li {
        padding: .5rem;
        opacity: .8;
        color: light-dark(#454545, #ACACAC);
    }

    header nav ul li a {
        color: inherit;
        text-decoration: inherit;
        transition: color .2s ease-in-out;
    }

    header nav ul li:hover a {
        color: light-dark(var(--green), var(--green));
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
