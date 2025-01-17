<script>
    const { published_at, title, excerpt, slug } = $props()
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    const date = new Date(published_at);
</script>

<div class="post">
    <h1>{title}</h1>
    <span>{formatter.format(date)}</span>
    <p>{excerpt}</p>
    <a href={`/read/${slug}`}></a>
</div>

<style>
    .post {
        border-top: 1px dotted light-dark(#32323230, #32323230);
        padding-top: 2rem;
        padding-bottom: 2rem;
        display: grid;
        position: relative;
        grid-template-areas:
            'date title'
            '. excerpt';
        grid-template-columns: 25% 75%;
        grid-template-rows: auto auto;
        grid-gap: 1rem;
        cursor: pointer;
    }

    .post h1 {
        font-size: 1.6rem;
        font-weight: bold;
        grid-area: title;
        transition: all .2s ease-in-out;
    }

    .post:hover h1 {
        color: light-dark(var(--green), var(--green));
    }

    .post p {
        font-size: 1rem;
        grid-area: excerpt;
        line-height: 1.3;
        color: light-dark(var(--dark-font), var(--light-font));
    }

    .post span {
        grid-area: date;
        opacity: .8;
        color: light-dark(#454545, #ACACAC);
    }

    .post a {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 480px) {
        .post {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            grid-template-areas:
                'date'
                'title'
                'excerpt';
            grid-template-columns: 100%;
            grid-template-rows: 1em auto auto;
        }

        .post h1 {
            font-size: 1.3rem;
        }

        .post p {
            font-size: 1rem;
            line-height: 1.4;
        }
    }

</style>
