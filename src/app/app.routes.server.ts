import { RenderMode, ServerRoute } from '@angular/ssr';

/** Tout est prérendu au build : /en et /fr deviennent des pages HTML statiques. */
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
