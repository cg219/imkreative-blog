export async function load() {
    const url = Deno.env.get("IMK_REDIRECT_TO");
    const kv = await Deno.openKv();
    // const kv = await Deno.openKv("https://api.deno.com/databases/b410a3cf-acb8-4017-9008-8b12fddf1d4c/connect");
    const postsRes = await kv.list({ prefix: ["posts"]})
    const rawPosts = await Array.fromAsync(postsRes)
    const posts = rawPosts.map((d) => d.value).sort((a, b) => {
        if (a.published_at > b.published_at) return -1
        if (a.published_at < b.published_at) return 1
        return 0
    })
    const settingsRes = await kv.get(["settings"])
    const settings = settingsRes.value

    return {
        posts,
        settings,
        url
    }
}
