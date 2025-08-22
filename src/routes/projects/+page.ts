import type { ProjectMetadata, ContentModule } from '$lib/types';
export async function load() {
  const contentModules = import.meta.glob('./[slug]/content/*.svelte');

  const projectPromises = Object.entries(contentModules).map(async ([path, importFn]) => {
    const module = (await importFn()) as ContentModule;
    return module.metadata;
  });

  const projects = await Promise.all(projectPromises);

  const sortedProjects = projects.sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;

    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return {
    projects: sortedProjects
  };
}
