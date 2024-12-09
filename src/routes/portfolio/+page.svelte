<script>
import Header from '$lib/components/Header.svelte';
import Footer from '$lib/components/Footer.svelte';

const { data } = $props();
</script>

<Header urls={data.settings.navigation}></Header>
<div class="content">
    <h1 class="title">Portfolio</h1>
    <ul>
        {#each data.projects as {name, date, active, url, client, agency, role, technology, thumbnail}}
            <li class="portfolio-item">
                {#if active}
                    <a href="{url}" target="_blank"></a>
                {/if}
                <div class="info">
                    <h2 class="title">{name}</h2>
                    <span class="date">{date}</span>
                    <span class="client">Client: {client}</span>
                    <span class="agency">Agency: {agency}</span>
                    <span class="role">Role: {role.join(', ')}</span>
                    <span class="tech">Technology Used: {technology.join(', ')}</span>
                </div>
                <img src="{thumbnail.url}" alt="" />
            </li>
        {/each}
    </ul>
</div>
<Footer urls={data.settings.secondary_navigation}></Footer>

<style>


.content {
    grid-area: content;

    h1.title {
        font-size: 2.8rem;
        font-weight: bold;
        grid-area: title;
    }

    ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
    }
}

.portfolio-item {
    width: 25%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    position: relative;

    &:hover {
        .info {
            transform: translateY(0);
            transition-delay: .4s;
        }
    }

    .info {
        position: absolute;
        overflow: hidden;
        z-index: 2;;
        bottom: 0;
        width: 100%;
        height: 50%;
        background-color: rgba(0, 0, 0, .8);
        box-sizing: border-box;
        transform: translateY(100%);
        transition: .2s transform .1s ease-out;
        color: var(--light-font);
        display: grid;
        padding: 0.625rem;
        grid-template-columns: auto 1fr 0.625rem;
        grid-template-rows: 1.875rem 1.06rem 1.06rem 1.06rem 1.06rem 1.06rem auto;
        grid-template-areas:
            "title date ."
            ". . ."
            "client client ."
            "agency agency ."
            "role role ."
            ". . ."
            "tech tech .";

        .title {
            grid-area: title;
            font-size: 1.5rem;
            margin: 0;
        }

        .date {
            grid-area: date;
            font-size: 0.8125rem;
            margin-left: 0.625rem;
            align-self: center;
            color: var(--alt);
            text-transform: uppercase;
        }

        .client {
            grid-area: client;
            font-size: 0.8125rem;
        }

        .agency {
            grid-area: agency;
            font-size: 0.8125rem;
        }

        .role {
            grid-area: role;
            font-size: 0.8125rem;
        }

        .tech {
            grid-area: tech;
            font-size: 0.6875rem;
        }
    }

    a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
    }

    img {
        z-index: 1;
        position: absolute;
        height: 120%;
        transform: translate(-50%, -50%);
        top: 50%;
        left: 50%;
    }
}
</style>
