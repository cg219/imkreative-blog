<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Post from "$lib/components/Post.svelte";

    let { data } = $props();
</script>
<Header urls={data.settings.navigation}></Header>
<div class="content">
    <h1 class="title">blog</h1>
    <div class="posts">
        {#each data.posts  as { title, excerpt, slug, published_at }}
            <Post title={title} excerpt={excerpt} slug={slug} published_at={published_at}></Post>
        {/each}
    </div>
</div>
<Footer urls={data.settings.secondary_navigation}></Footer>

<svelte:head>
    <meta name="description" content={data.settings.description || ''} />
    <meta property="og:url" content={data.url} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.settings.title} />
    <meta property="og:description" content={data.settings.description || ''} />
    <meta property="og:image" content={data.settings.og_image} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={data.url} />
    <meta property="twitter:title" content={data.settings.title} />
    <meta property="twitter:description" content={data.settings.description || ''} />
    <meta property="twitter:image" content={data.settings.twitter_image} />
    <title>{data.settings.title}</title>
</svelte:head>

<style>
    .title {
        font-size: 2.8rem;
        font-weight: bold;
        grid-area: title;
    }

    .content {
        grid-area: content;
        display: grid;
        grid-template-areas:
            '. title .'
            '. posts .';
        grid-template-columns: 1fr minmax(450px, 50vw) 1fr;
        grid-template-rows: 5rem auto;
    }

    .posts {
        grid-area: posts;
        margin: 0;
        padding: 0;
    }

    @media (max-width: 480px) {
        .title {
            font-size: 2.2rem;
        }

        .content {
            grid-template-columns: 1fr minmax(300px, 80vw) 1fr;
            grid-template-rows: 4rem auto;
        }
    }
</style>
