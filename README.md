# Observatorio de redes · Contratitular

Vistas, interacción y retención de cada vídeo en Instagram, TikTok, YouTube y Facebook, actualizadas cada hora,
y lo que se aprende de ellas (mejor hora, sonido, estilo, duración, gancho).

- Web: https://josehino.github.io/observatorio-redes-contratitular/
- Datos: API de estadísticas de Upload-Post (clave como secreto de GitHub).
- `pipeline/colector.mjs` lo genera el proyecto privado de Contratitular (`npx tsx src/analitica/cli.ts sincronizar`);
  la Action lo ejecuta cada hora y publica `data/data.js` y el historial en `datos/`.
- Montado sobre el kit de observatorios: `assets/` no se toca.
