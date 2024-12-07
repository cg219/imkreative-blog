<script>
    const { data } = $props();
</script>
<h1>Portfolio</h1>
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

<style>
ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}

.portfolio-item {
    width: 25%;
    height: 25vw;
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
        bottom: 0;
        width: 100%;
        height: 50%;
        background-color: rgba(0, 0, 0, .8);
        transform: translateY(100%);
        transition: .2s transform .1s ease-out;
        color: var(--alt);
        display: grid;
        padding: 10rem;
        grid-template-columns: auto 1fr 10rem;
        grid-template-rows: 30rem 15rem 15rem 15rem 15rem 15rem auto;
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
            font-size: 24rem;
            margin: 0;
        }

        .date {
            grid-area: date;
            font-size: 13rem;
            margin-left: 10rem;
            align-self: center;
            color: var(--green);
            text-transform: uppercase;
        }

        .client {
            grid-area: client;
            font-size: 13rem;
        }

        .agency {
            grid-area: agency;
            font-size: 13rem;
        }

        .role {
            grid-area: role;
            font-size: 13rem;
        }

        .tech {
            grid-area: tech;
            font-size: 11rem;
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
}
</style>
