import { education } from '../content/education';
import { experiences } from '../content/experience';
import { profile } from '../content/profile';
import { projects } from '../content/projects';

/** En dev : liste dans la console les valeurs encore à "TODO" dans src/app/content/. */
export function reportTodos(): void {
  const found: string[] = [];
  const walk = (value: unknown, path: string): void => {
    if (typeof value === 'string') {
      if (value.startsWith('TODO')) found.push(`${path} = ${value}`);
    } else if (value && typeof value === 'object') {
      for (const [key, child] of Object.entries(value)) walk(child, `${path}.${key}`);
    }
  };
  walk({ profile, experiences, projects, education }, 'content');
  if (found.length) {
    console.warn(
      `[portfolio] ${found.length} valeur(s) à compléter (masquées sur le site) :\n` +
        found.join('\n'),
    );
  }
}
