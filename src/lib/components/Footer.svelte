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
<footer>
    <nav>
        <div><a href="/"><img class="logo" src={darkmode ? `${base}/logo-light.svg` : `${base}/logo.svg`} alt="imkreative.com" /></a></div>
        <ul>
            {#each urls as {label, url}}
                <li><a href={url}>{label}</a></li>
            {/each}
        </ul>
    </nav>
</footer>

<style>
    footer {
        padding: 1em;
        grid-area: footer;
        height: 3em;
    }

    footer nav {
        display: grid;
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto;
        grid-template-areas: 'logo . nav';
    }

    footer nav div {
        grid-area: logo;
    }

    footer .logo {
        height: 1.8em;
    }

    footer nav ul {
        grid-area: nav;
        display: flex;
        justify-items: space-between;
    }

    footer nav ul li {
        padding: .5rem;
        opacity: .8;
        color: light-dark(#454545, #ACACAC);
    }

    footer nav ul li a {
        color: inherit;
        text-decoration: inherit;
        transition: color .2s ease-in-out;
    }

    footer nav ul li:hover a {
        color: light-dark(var(--green), var(--green));
    }

    @media (max-width: 480px) {

    }
</style>
