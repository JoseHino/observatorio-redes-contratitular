/* ============================================================================
   app.js — Observatorio de redes de Contratitular.
   Cifras de cada vídeo en Instagram, TikTok, YouTube y Facebook (API de estadísticas de Upload-Post), actualizadas
   cada hora por la Action, y lo que se aprende de ellas. assets/ es el kit y no se toca.
   ========================================================================== */
(function () {
  'use strict';

  var D = window.DATOS || {};
  var F = Obs.fmt;
  var R = D.redes || {};
  var A = D.aprendizaje || {};

  var NOMBRES = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', facebook: 'Facebook' };
  var ORDEN = ['tiktok', 'instagram', 'youtube', 'facebook'].filter(function (r) { return R[r]; });

  var FUENTE_UP = { txt: 'Upload-Post · API de estadísticas', url: 'https://docs.upload-post.com/api/get-analytics' };
  var CHIP_VIVO = { txt: 'Cada hora', tipo: 'live' };
  /* Índices en base 100 (100 = lo normal) y la interacción por cada 1.000 vistas: cifras enteras que se leen de un vistazo */
  var base100 = function (a) { return (a || []).map(function (v) { return v == null ? null : Math.round(v * 100); }); };
  var porMil = function (a) { return (a || []).map(function (v) { return v == null ? null : Math.round(v * 10); }); };
  var ent = function (v) { return v == null || !isFinite(v) ? '—' : F.num(v, 0); };
  var col = function (r, k) { return (R[r].videos || []).map(function (v) { return v[k]; }); };
  var titulos = function (r) { return (R[r].videos || []).map(function (v) { return v.titulo; }); };

  /* ---------------------------------------------------------- Resumen --- */
  var resumen = {
    id: 'resumen', nombre: 'Resumen',
    titulo: 'Todas las redes',
    desc: 'Vistas de todos los vídeos publicados, por red. Cada hora se vuelve a medir cada publicación: las de menos de 72 horas, cada hora (es cuando se decide si un vídeo despega); las de hasta dos semanas, cada 6 horas; las más antiguas, una vez al día.',
    render: function () {
      var total = ORDEN.reduce(function (s, r) { return s + (R[r].kpi.vistas || 0); }, 0);
      var dias = ORDEN.length ? R[ORDEN[0]].evolucion.x : [];
      return {
        hero: {
          valor: total, label: 'Vistas en todas las redes', formato: F.num,
          extra: ORDEN.map(function (r) { return { label: NOMBRES[r] || r, valor: R[r].kpi.vistas, formato: F.num }; })
        },
        kpis: ORDEN.map(function (r) {
          return { label: (NOMBRES[r] || r) + ' · seguidores', valor: R[r].kpi.seguidores };
        }),
        cards: [
          {
            titulo: 'Vistas acumuladas por red', sub: 'Suma de las vistas de todos los vídeos, día a día',
            chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full',
            spec: { type: 'line', xType: 'cat', xLabel: 'Día', x: dias, yFormat: 'num',
              series: ORDEN.map(function (r) { return { name: NOMBRES[r] || r, data: R[r].evolucion.v }; }) }
          },
          {
            titulo: 'Vistas por red', sub: 'Total acumulado',
            chips: [CHIP_VIVO], fuente: FUENTE_UP,
            spec: { type: 'barh', xLabel: 'Red', x: ORDEN.map(function (r) { return NOMBRES[r] || r; }), yFormat: 'num',
              series: [{ name: 'Vistas', data: ORDEN.map(function (r) { return R[r].kpi.vistas; }) }] }
          },
          {
            titulo: 'Interacción media por red', sub: 'Me gusta, comentarios, compartidos y guardados por cada 1.000 vistas',
            chips: [CHIP_VIVO], fuente: FUENTE_UP,
            spec: { type: 'barh', xLabel: 'Red', x: ORDEN.map(function (r) { return NOMBRES[r] || r; }), yFormat: ent,
              series: [{ name: 'Por cada 1.000 vistas', data: porMil(ORDEN.map(function (r) { return R[r].kpi.interaccion; })) }] }
          }
        ]
      };
    }
  };

  /* ------------------------------------------------------ Una por red --- */
  function seccionRed(r) {
    var N = NOMBRES[r] || r;
    return {
      id: r, nombre: N,
      titulo: N,
      desc: 'Cada vídeo frente a la mediana de la propia cuenta en ' + N + ' (índice 100 = lo normal; 300 o más, viral). ' +
        'El crecimiento compara los vídeos a la misma edad: así se ve cuál arranca mejor aunque se publicara antes.',
      render: function () {
        var k = R[r].kpi, cards = [];
        cards.push({
          titulo: 'Vistas por vídeo', sub: 'Del más reciente al más antiguo',
          chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full',
          spec: { type: 'barh', xLabel: 'Vídeo', x: titulos(r), yFormat: 'num', series: [{ name: 'Vistas', data: col(r, 'vistas') }] }
        });
        cards.push({
          titulo: 'Cómo crece cada vídeo', sub: 'Vistas a la misma edad desde que se publicó',
          chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full',
          nota: 'Los últimos 8 vídeos. Un hueco significa que el vídeo aún no ha llegado a esa edad o que no hubo medición entonces.',
          spec: { type: 'line', xType: 'cat', xLabel: 'Edad', x: R[r].crecimiento.x, yFormat: 'num', desdeCero: true,
            series: R[r].crecimiento.series.slice(0, 8) }
        });
        cards.push({
          titulo: 'Frente a la cuenta', sub: 'Índice de vistas: 100 = la mediana de la cuenta',
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'barh', xLabel: 'Vídeo', x: titulos(r), yFormat: ent, series: [{ name: 'Índice', data: base100(col(r, 'indice')) }] }
        });
        cards.push({
          titulo: 'Interacción por vídeo', sub: 'Me gusta, comentarios, compartidos y guardados por cada 1.000 vistas',
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'barh', xLabel: 'Vídeo', x: titulos(r), yFormat: ent, series: [{ name: 'Por cada 1.000 vistas', data: porMil(col(r, 'interaccion')) }] }
        });
        if (R[r].retencion) cards.push({
          titulo: 'Retención segundo a segundo', sub: 'Porcentaje de espectadores que siguen viendo',
          chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full', alto: 'tall',
          nota: 'Los primeros segundos deciden: una caída fuerte al principio es un gancho que no engancha.',
          spec: { type: 'line', xType: 'cat', xLabel: 'Segundo', x: R[r].retencion.x, yFormat: 'pct', desdeCero: true, zoom: false, series: R[r].retencion.series.slice(0, 8) }
        });
        if (R[r].fuentes) cards.push({
          titulo: 'De dónde llegan las visitas', sub: 'Media de todos los vídeos',
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'donut', x: R[r].fuentes.x, yFormat: 'pct', series: [{ name: 'Visitas', data: R[r].fuentes.v }] }
        });
        var kpis = [
          { label: 'Vistas', valor: k.vistas },
          { label: 'Vídeos', valor: k.videos },
          { label: 'Interacción media', valor: k.interaccion, unidad: '%', dec: 1 },
          { label: 'Compartidos sobre vistas', valor: k.compartir, unidad: '%', dec: 2 },
          { label: 'Guardados sobre vistas', valor: k.guardar, unidad: '%', dec: 2 }
        ];
        if (k.visionado != null) kpis.push({ label: 'Visionado medio', valor: k.visionado, unidad: '%', dec: 0 });
        if (k.completado != null) kpis.push({ label: 'Lo ven entero', valor: k.completado, unidad: '%', dec: 1 });
        if (k.paraTi != null) kpis.push({ label: 'Visitas desde «Para ti»', valor: k.paraTi, unidad: '%', dec: 0 });
        return { kpis: kpis, cards: cards };
      }
    };
  }

  /* ----------------------------------------------------- Aprendizajes --- */
  var NOMBRE_FACTOR = { hora: 'Hora de publicación', 'día': 'Día de la semana', franja: 'Franja del día', sonido: 'Familia de sonido',
    estilo: 'Estilo de dibujo', serie: 'Serie', 'duración': 'Duración', gancho: 'Tipo de gancho', 'gancho largo': 'Largo del gancho',
    'escenas de datos': 'Escenas de datos', voz: 'Voz', red: 'Red' };
  var aprendizajes = {
    id: 'aprendizajes', nombre: 'Aprendizajes',
    titulo: 'Qué funciona y qué no',
    desc: 'Para cada rasgo de los vídeos, el alcance y la interacción que consiguen frente a lo normal en su red (100 = lo normal). ' +
      'Con pocos datos, el cálculo tira hacia 100 para no sacar conclusiones exageradas. Las conclusiones se vuelcan a la skill, que las aplica en los vídeos siguientes.',
    render: function () {
      var c = A.conclusiones || [];
      var lista = c.length
        ? '<ul style="margin:.4em 0 0 1.1em">' + c.map(function (x) {
            return '<li><b>' + (x.tipo === 'regla' ? 'Regla' : 'Hipótesis') + '</b> · ' + x.texto.replace(/</g, '&lt;') + '</li>';
          }).join('') + '</ul>'
        : ' Aún no hay datos suficientes para sacar conclusiones: hacen falta varios vídeos de más de 12 horas en cada red.';
      var horas = (A.horas || []).length ? ' Mejores horas para publicar hasta ahora: <b>' + A.horas.join(' y ') + '</b>.' : '';
      var cards = Object.keys(A.factores || {}).filter(function (f) { return f !== 'red'; }).map(function (f) {
        var x = A.factores[f];
        return {
          titulo: NOMBRE_FACTOR[f] || f, sub: 'Índice: 100 = lo normal en su red (n = publicaciones)',
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'bar', xType: 'cat', xLabel: NOMBRE_FACTOR[f] || f, x: x.x, yFormat: ent, ref: 100, refLabel: 'Lo normal',
            series: [{ name: 'Alcance', data: base100(x.vistas) }, { name: 'Interacción', data: base100(x.interaccion) }] }
        };
      });
      return {
        nota: '<b>' + F.num(A.videos || 0) + ' vídeos · ' + F.num(A.publicaciones || 0) + ' publicaciones con más de 12 horas.</b>' + horas + lista,
        cards: cards
      };
    }
  };

  Obs.init({
    titulo: 'Observatorio de redes · Contratitular',
    subtitulo: 'Cifras de cada vídeo en cada red, actualizadas cada hora, y lo que se aprende de ellas',
    secciones: [resumen].concat(ORDEN.map(seccionRed)).concat([aprendizajes]),
    actualizado: (D.meta || {}).actualizado,
    fuentes: [FUENTE_UP],
    metodologia: 'Una Action de GitHub consulta cada hora la API de estadísticas de Upload-Post: lista las publicaciones de cada red, ' +
      'las empareja con su vídeo y guarda una medición de cada una con la hora, de modo que se puede ver cómo crece cada vídeo. ' +
      'El índice de cada vídeo es su número de vistas dividido entre la mediana de la cuenta en esa red (a las 72 horas cuando ya las tiene). ' +
      'Los aprendizajes promedian, para cada rasgo, el logaritmo de ese índice, con un encogimiento hacia 1× que evita conclusiones con pocos datos.',
    pie: 'Las cifras son las que devuelve cada red en el momento de la medición y pueden revisarse después (las redes depuran visitas no válidas).'
  });

  Obs.estado('Datos actualizados cada hora', 'live');
})();
