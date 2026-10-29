// Finalise la sortie statique pour GitHub Pages.
import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = 'dist/my-portfolio/browser';

// 404.html : GitHub Pages le sert pour toute URL inconnue ; l'app redirige alors vers /fr.
const fallback = ['index.csr.html', 'fr/index.html'].map((f) => join(out, f)).find(existsSync);
if (!fallback) throw new Error(`Aucune page de repli trouvée dans ${out}`);
copyFileSync(fallback, join(out, '404.html'));

// Désactive Jekyll (sinon les fichiers commençant par "_" seraient ignorés).
writeFileSync(join(out, '.nojekyll'), '');

console.log(`postbuild: 404.html (depuis ${fallback}) et .nojekyll créés.`);
