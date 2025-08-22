import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  const componentMap: Record<string, () => Promise<any>> = {
    pngme: () => import('./content/pngme.svelte')
  };

  const componentImport = componentMap[slug];
  if (!componentImport) {
    throw error(404, 'Project not found');
  }

  const component = await componentImport();
  return {
    ContentComponent: component.default,
    metadata: component.metadata
  };
};
