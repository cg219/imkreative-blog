import { PageProps, Handlers, HandlerContext } from "$fresh/server.ts";
import { HomeLayout } from "../../components/HomeLayout.tsx";
import { PostProps, SettingsProps } from "../../utils/types.ts";

interface GhostData {
  posts: Array<PostProps>;
  settings: SettingsProps;
}

const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});

export const handler: Handlers<GhostData> = {
  async GET(req: Request, ctx: HandlerContext) {
    const API_URL = Deno.env.get("IMK_API_URL");
    const API_KEY = Deno.env.get("IMK_API_KEY");
    const API_VERSION = "v4";
    const postFetch = await fetch(`${API_URL}/ghost/api/content/posts/slug/${ctx.params.slug}?key=${API_KEY}&include=tags,authors&limit=1`);
    const postData = await postFetch.json();
    const settingsFetch = await fetch( `${API_URL}/ghost/api/content/settings/?key=${API_KEY}`);
    const settingsData = await settingsFetch.json();

    ctx.state.title = `${postData.posts[0].title} | ${settingsData.settings.title}`;

    return ctx.render({...postData, ...settingsData});
  },
};

export default function SinglePost(props: PageProps<GhostData>) {
  const post = props.data.posts[0]
  const date = new Date(post.published_at);
  const updatedDate = (post.updated_at !== post.published_at) && new Date(post.updated_at!);

  return (
    <HomeLayout title={`${post.title} | ${props.data.settings.title}`}
      nav={props.data.settings.secondary_navigation}
      description={post.excerpt}
      twitterImage={post.twitter_image || post.feature_image || props.data.settings.twitter_image}
      fbImage={post.og_image || post.feature_image || props.data.settings.og_image}
      url={post.canonical_url} >
      <div class="content single-post">
        <h1 class="title">{post.title}</h1>
        <div class="metadata">
          <span class="date">Published: {formatter.format(date)}</span>
          {updatedDate && <span class="updated">Updated: {formatter.format(updatedDate)}</span>}
          <span><a href={post.primary_author!.website} target="_blank">{post.primary_author!.name}</a></span>
        </div>
        <div class="post-data" dangerouslySetInnerHTML={{ __html: post.html! }}></div>
      </div>
    </HomeLayout>
  );
}
