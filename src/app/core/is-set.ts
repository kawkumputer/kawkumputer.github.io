import { Localized } from '../content/content.model';

/** Une valeur est « renseignée » si elle existe et ne commence pas par TODO. */
export function isSet(value: Localized | null | undefined): boolean {
  if (!value) return false;
  const text = typeof value === 'string' ? value : value.fr;
  return !!text && !text.startsWith('TODO');
}
