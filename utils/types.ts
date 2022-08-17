export interface HomeLayoutProps {
  title: string;
  children: unknown;
  nav: Array<NavigationItem>;
  description?: string;
  url?: string;
  fbImage?: string;
  twitterImage?: string;
}

export interface NavigationItem {
  label: string;
  url: string;
}

export interface SettingsProps {
  navigation: Array<NavigationItem>;
  secondary_navigation: Array<NavigationItem>;
  twitter_image: string;
  og_image: string;
  title: string;
  description: string;
}

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
  canonical_url?: string;
}
