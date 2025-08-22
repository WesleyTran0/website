import type { SvelteComponent } from 'svelte';

export interface ProjectMetadata {
  title: string;
  slug: string;
  date: string;
  pinned?: boolean;
  image?: string;
  technologies?: string[];
}

export interface ContentModule {
  default: typeof SvelteComponent;
  metadata: ProjectMetadata;
}
