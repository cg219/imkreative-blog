<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import { base } from "$app/paths"

    let { data } = $props();

    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const post = data.posts[0]
    const date = new Date(post.published_at);
    const updatedDate = (post.updated_at !== post.published_at) && new Date(post.updated_at);
</script>

<svelte:head>
    <meta name="description" content={post.excerpt || ''} />
    <meta property="og:url" content={post.canonical_url || data.url} />
    <meta property="og:type" content="article" />
    <meta property="og:title" content={post.title} />
    <meta property="og:description" content={post.excerpt || ''} />
    <meta property="og:image" content={post.og_image || post.feature_image || data.settings.og_image} />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={post.canonical_url || data.url} />
    <meta property="twitter:title" content={post.title} />
    <meta property="twitter:description" content={post.excerpt || ''} />
    <meta property="twitter:image" content={post.twitter_image || post.feature_image || data.settings.twitter_image} />
    <title>{post.title}</title>
    <link rel="stylesheet" href="{base}/prism.css" />
    <script defer src="{base}/prism.js" data-website-id="730c6c26-d1f9-4e0b-8f78-26c37ce5093e"></script>
</svelte:head>


<Header urls={data.settings.navigation}></Header>
<div class="content single-post">
    <h1 class="title">{post.title}</h1>
    <div class="metadata">
        <span class="date">Published: {formatter.format(date)}</span>
        {#if updatedDate}
            <span class="updated">Updated: {formatter.format(updatedDate)}</span>
        {/if}
        <span><a href={post.primary_author.website} target="_blank">{post.primary_author.name}</a></span>
    </div>
    <div class="post-data">{@html post.html}</div>
</div>
<Footer urls={data.settings.secondary_navigation}></Footer>

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
            'title'
            'metadata'
            'post';
        grid-template-columns: minmax(100px, 2fr);
        grid-template-rows: fit-content(50%) fit-content(1rem) auto;
        grid-row-gap: 2rem;
    }

    .metadata {
        grid-area: metadata;
        opacity: .8;
        color: light-dark(var(--dark-alt-font), var(--light-alt-font));
        font-size: 1.2rem;
        padding-bottom: 1rem;
        border-bottom: 1px dotted light-dark(var(--dark-border), var(--light-border));
        display: grid;
        grid-row-gap: .2em;
    }

    .metadata .updated {
        font-style: italic;
    }

    .metadata span {
        line-height: 1;
    }

    .metadata span a {
        color: inherit;
        text-decoration: inherit;
        transition: .2s color ease-out;
    }

    .metadata span a:hover {
        color: light-dark(var(--green), var(--green));
    }

    .post-data {
        grid-area: post;
    }

    @media (max-width: 480px) {
        .title {
            font-size: 2.2rem;
        }
    }
</style>
