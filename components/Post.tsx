/** @jsx h */
import { h } from "preact";

const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
});

export interface PostProps {
  title: string;
  excerpt: string;
  slug: string;
  published_at: string;
  updated_at?: string;
  primary_author?: {
    name: string;
    website: string;
  };
  html?: string;
}

export function Post(props: PostProps) {
  const date = new Date(props.published_at);

  return (
    <div class="post">
      <h1>{props.title}</h1>
      <span>{formatter.format(date)}</span>
      <p>{props.excerpt}</p>
      <a href={`/read/${props.slug}`}></a>
    </div>
  );
}
