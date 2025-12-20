export async function load() {
    const url = Deno.env.get("IMK_REDIRECT_TO");
    const dataUrl = Deno.env.get("IMK_API_URL");
    const [postsRes, settingsRes] = await Promise.all([fetch(`${dataUrl}/posts`), fetch(`${dataUrl}/settings`)])
    const [postData, settingsData] = await Promise.all([postsRes.json(), settingsRes.json()])
    const posts = postData.posts.sort((a, b) => {
        if (a.published_at > b.published_at) return -1
        if (a.published_at < b.published_at) return 1
        return 0
    })
    const settings = settingsData.settings

    return {
        posts,
        settings,
        url
    }
}
