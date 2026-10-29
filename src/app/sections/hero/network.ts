/**
 * Fond « réseau de points connectés » dessiné sur un canvas.
 * Léger : nombre de points proportionnel à la surface, pause hors écran / onglet caché,
 * et une seule image fixe si l'utilisateur préfère réduire les animations.
 * Retourne une fonction de nettoyage.
 */
export function startNetwork(canvas: HTMLCanvasElement): () => void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return () => {};

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const linkDistance = 140;
  let width = 0;
  let height = 0;
  let points: { x: number; y: number; vx: number; vy: number }[] = [];
  let frame = 0;
  let inView = true;

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.round(Math.min(90, Math.max(28, (width * height) / 16000)));
    points = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
    }));
    draw();
  };

  // Les lignes sont regroupées par niveau d'opacité : quelques stroke() par image au lieu d'un par ligne.
  const buckets = 6;
  const bucketPaths: Path2D[] = [];

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    for (let k = 0; k < buckets; k++) bucketPaths[k] = new Path2D();
    const maxSq = linkDistance * linkDistance;
    for (let i = 0; i < points.length; i++) {
      const a = points[i];
      for (let j = i + 1; j < points.length; j++) {
        const b = points[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const sq = dx * dx + dy * dy;
        if (sq < maxSq) {
          const k = Math.min(buckets - 1, Math.floor((Math.sqrt(sq) / linkDistance) * buckets));
          bucketPaths[k].moveTo(a.x, a.y);
          bucketPaths[k].lineTo(b.x, b.y);
        }
      }
    }
    ctx.lineWidth = 1;
    for (let k = 0; k < buckets; k++) {
      ctx.strokeStyle = `rgba(56, 189, 248, ${0.28 * (1 - k / buckets)})`;
      ctx.stroke(bucketPaths[k]);
    }
    const dots = new Path2D();
    for (const p of points) {
      dots.moveTo(p.x + 1.6, p.y);
      dots.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
    }
    ctx.fillStyle = 'rgba(100, 255, 218, 0.75)';
    ctx.fill(dots);
  };

  // ~30 images/s suffisent pour un mouvement aussi lent, et divisent le coût par deux.
  let last = 0;
  const step = (time: number) => {
    frame = requestAnimationFrame(step);
    if (time - last < 33) return;
    last = time;
    for (const p of points) {
      p.x += p.vx * 2;
      p.y += p.vy * 2;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
    }
    draw();
  };

  const play = () => {
    if (!reduced && !frame && inView && !document.hidden) frame = requestAnimationFrame(step);
  };
  const pause = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(canvas);

  const viewObserver = new IntersectionObserver(([entry]) => {
    inView = entry.isIntersecting;
    if (inView) play();
    else pause();
  });
  viewObserver.observe(canvas);

  const onVisibility = () => (document.hidden ? pause() : play());
  document.addEventListener('visibilitychange', onVisibility);

  return () => {
    pause();
    resizeObserver.disconnect();
    viewObserver.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
  };
}
