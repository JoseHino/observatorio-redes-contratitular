/* ============================================================================
   app.js — Observatorio de redes de Contratitular (español e inglés: el idioma lo da el lang del <html>;
   la versión inglesa es en/index.html, que carga este mismo archivo).
   Cifras de cada vídeo en Instagram, TikTok, YouTube y Facebook (API de estadísticas de Upload-Post), actualizadas
   cada hora por la Action, y lo que se aprende de ellas. assets/ es el kit y no se toca.
   ========================================================================== */
(function () {
  'use strict';

  var D = window.DATOS || {};
  var F = Obs.fmt;
  var R = D.redes || {};
  var A = D.aprendizaje || {};
  var EN = Obs.idioma === 'en';
  var L = function (es, en) { return EN ? en : es; };

  var NOMBRES = { instagram: 'Instagram', tiktok: 'TikTok', youtube: 'YouTube', facebook: 'Facebook' };
  var ORDEN = ['tiktok', 'instagram', 'youtube', 'facebook'].filter(function (r) { return R[r]; });

  var FUENTE_UP = { txt: L('Upload-Post · API de estadísticas', 'Upload-Post · analytics API'), url: 'https://docs.upload-post.com/api/get-analytics' };
  var CHIP_VIVO = { txt: L('Cada hora', 'Hourly'), tipo: 'live' };

  /* Índices en base 100 (100 = lo normal) y la interacción por cada 1.000 vistas: cifras enteras que se leen de un vistazo */
  var base100 = function (a) { return (a || []).map(function (v) { return v == null ? null : Math.round(v * 100); }); };
  var porMil = function (a) { return (a || []).map(function (v) { return v == null ? null : Math.round(v * 10); }); };
  var ent = function (v) { return v == null || !isFinite(v) ? '—' : F.num(v, 0); };
  var col = function (r, k) { return (R[r].videos || []).map(function (v) { return v[k]; }); };
  var titulos = function (r) { return (R[r].videos || []).map(function (v) { return v.titulo; }); };

  /* Etiquetas que llegan en datos neutros y se rotulan en el idioma de la página */
  var MES = EN ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] : ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  var dia = function (iso) { return +iso.slice(8, 10) + ' ' + MES[+iso.slice(5, 7) - 1]; };
  var edad = function (h) { return h >= 168 ? L('7 días', '7 days') : h + ' h'; };
  var FUENTES = { 'For You': L('«Para ti»', 'For You'), Follow: L('Siguiendo', 'Following'), 'Personal Profile': L('Perfil', 'Profile'),
    Search: L('Búsqueda', 'Search'), Sound: L('Sonido', 'Sound'), 'Direct Message': L('Mensajes', 'Messages'), Others: L('Otros', 'Others'), Hashtag: L('Etiquetas', 'Hashtags') };
  var NIVELES_EN = {
    lunes: 'Monday', martes: 'Tuesday', 'miércoles': 'Wednesday', jueves: 'Thursday', viernes: 'Friday', 'sábado': 'Saturday', domingo: 'Sunday',
    'mañana': 'morning', 'mediodía': 'midday', tarde: 'afternoon', noche: 'night',
    pregunta: 'question', 'con cifra': 'with a number', 'afirmación': 'statement', 'corto (≤12)': 'short (≤12 words)', 'largo (>12)': 'long (>12 words)',
    'sí': 'yes', no: 'no', papel: 'paper', neon: 'neon', pop: 'pop', pizarra: 'chalkboard', limpio: 'clean',
    gota: 'drop', madera: 'wood', marimba: 'marimba', kalimba: 'kalimba', campanita: 'bell', cuerda: 'string', burbuja: 'bubble', tum: 'thump',
    Ciencia: 'Science', Historia: 'History', 'Tal día como hoy': 'On this day', 'Cuerpo humano': 'Human body', Dinero: 'Money', 'Geografía': 'Geography',
    Animales: 'Animals', Datos: 'Data', 'Récords': 'Records', Espacio: 'Space', Inventos: 'Inventions', Comida: 'Food', 'Psicología': 'Psychology', Palabras: 'Words',
    historia: 'history', ciencia: 'science', naturaleza: 'nature', 'cuerpo humano': 'human body', 'tecnología': 'technology', 'economía': 'economy', sociedad: 'society',
    'geografía': 'geography', cultura: 'culture', deporte: 'sport', otro: 'other', asombro: 'awe', intriga: 'intrigue', 'indignación': 'outrage', miedo: 'fear', humor: 'humour',
    ternura: 'tenderness', orgullo: 'pride', 'cifra chocante': 'shocking number', 'contradicción': 'myth-busting', misterio: 'mystery', peligro: 'danger',
    'segunda persona': 'second person', 'historia en marcha': 'story in motion', 'España': 'Spain', Europa: 'Europe', mundo: 'world', universal: 'universal',
    bucle: 'loop', 'dato final': 'final fact', moraleja: 'moral', 'llamada a la acción': 'call to action', 'con titular': 'with headline', 'sin titular': 'no headline',
    corto: 'short', largo: 'long', 'pausado (<2,4 pal/s)': 'slow (<2.4 words/s)', medio: 'medium', 'rápido (>2,9 pal/s)': 'fast (>2.9 words/s)',
    'pocos (<12/min)': 'few (<12/min)', medios: 'medium', 'muchos (>18/min)': 'many (>18/min)',
    '0-1,5 s (gancho)': '0-1.5 s (hook)', 'resto de la 1.ª escena': 'rest of 1st scene', 'escenas centrales': 'middle scenes', 'última escena': 'last scene'
  };
  var nivel = function (v) { return EN ? (NIVELES_EN[v] || v) : v; };

  /* Hora de la última actualización (hora de Madrid) y si se ha retrasado: si la Action falla, se ve de cuándo son los datos */
  var ACT = (D.meta || {}).actualizado;
  var horasDesde = ACT ? (Date.now() - new Date(ACT).getTime()) / 3600000 : Infinity;
  var RETRASO = horasDesde > 2;
  var horaAct = function (iso) {
    if (!iso) return '—';
    try {
      return new Date(iso).toLocaleString(EN ? 'en-GB' : 'es-ES', { timeZone: 'Europe/Madrid', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    } catch (e) { return iso.slice(0, 16).replace('T', ' '); }
  };

  /* ---------------------------------------------------------- Resumen --- */
  var resumen = {
    id: 'resumen', nombre: L('Resumen', 'Overview'),
    titulo: L('Todas las redes', 'All networks'),
    desc: L('Vistas de todos los vídeos publicados, por red. Cada hora se vuelve a medir cada publicación: las de menos de 72 horas, cada hora (es cuando se decide si un vídeo despega); las de hasta dos semanas, cada 6 horas; las más antiguas, una vez al día.',
      'Views of every published video, by network. Every post is measured again on a schedule: hourly during its first 72 hours (when a video takes off or not), every 6 hours up to two weeks old, and once a day after that.'),
    render: function () {
      var total = ORDEN.reduce(function (s, r) { return s + (R[r].kpi.vistas || 0); }, 0);
      var dias = ORDEN.length ? R[ORDEN[0]].evolucion.x.map(dia) : [];
      return {
        hero: {
          valor: total, label: L('Vistas en todas las redes', 'Views across all networks'), formato: F.num,
          extra: ORDEN.map(function (r) { return { label: NOMBRES[r], valor: R[r].kpi.vistas, formato: F.num }; })
        },
        kpis: [{
          label: L('Última actualización', 'Last update') + (RETRASO ? L(' · ¡con retraso!', ' · delayed!') : ''),
          valor: ACT, formato: horaAct, unidad: ACT ? ' · ' + Obs.desde(ACT) : ''
        }].concat(ORDEN.map(function (r) { return { label: NOMBRES[r] + L(' · seguidores', ' · followers'), valor: R[r].kpi.seguidores }; })),
        cards: [
          {
            titulo: L('Vistas acumuladas por red', 'Cumulative views by network'), sub: L('Suma de las vistas de todos los vídeos, día a día', 'Sum of the views of every video, day by day'),
            chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full',
            spec: { type: 'line', xType: 'cat', xLabel: L('Día', 'Day'), x: dias, yFormat: 'num',
              series: ORDEN.map(function (r) { return { name: NOMBRES[r], data: R[r].evolucion.v }; }) }
          },
          {
            titulo: L('Vistas por red', 'Views by network'), sub: L('Total acumulado', 'Running total'),
            chips: [CHIP_VIVO], fuente: FUENTE_UP,
            spec: { type: 'barh', xLabel: L('Red', 'Network'), x: ORDEN.map(function (r) { return NOMBRES[r]; }), yFormat: 'num',
              series: [{ name: L('Vistas', 'Views'), data: ORDEN.map(function (r) { return R[r].kpi.vistas; }) }] }
          },
          {
            titulo: L('Interacción media por red', 'Average engagement by network'),
            sub: L('Me gusta, comentarios, compartidos y guardados por cada 1.000 vistas', 'Likes, comments, shares and saves per 1,000 views'),
            chips: [CHIP_VIVO], fuente: FUENTE_UP,
            spec: { type: 'barh', xLabel: L('Red', 'Network'), x: ORDEN.map(function (r) { return NOMBRES[r]; }), yFormat: ent,
              series: [{ name: L('Por cada 1.000 vistas', 'Per 1,000 views'), data: porMil(ORDEN.map(function (r) { return R[r].kpi.interaccion; })) }] }
          }
        ]
      };
    }
  };

  /* ------------------------------------------------------ Una por red --- */
  function seccionRed(r) {
    var N = NOMBRES[r] || r;
    return {
      id: r, nombre: N, titulo: N,
      desc: L('Cada vídeo frente a la mediana de la propia cuenta en ' + N + ' (índice 100 = lo normal; 300 o más, viral). El crecimiento compara los vídeos a la misma edad: así se ve cuál arranca mejor aunque se publicara antes.',
        'Each video against the account\'s own median on ' + N + ' (index 100 = normal; 300 or more, viral). Growth compares videos at the same age, so you can see which one starts stronger even if it was posted earlier.'),
      render: function () {
        var k = R[r].kpi, cards = [], V = L('Vídeo', 'Video');
        cards.push({
          titulo: L('Vistas por vídeo', 'Views per video'), sub: L('Del más reciente al más antiguo', 'Newest first'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full',
          spec: { type: 'barh', xLabel: V, x: titulos(r), yFormat: 'num', series: [{ name: L('Vistas', 'Views'), data: col(r, 'vistas') }] }
        });
        cards.push({
          titulo: L('Cómo crece cada vídeo', 'How each video grows'), sub: L('Vistas a la misma edad desde que se publicó', 'Views at the same age since posting'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full',
          nota: L('Los últimos 8 vídeos. Un hueco significa que el vídeo aún no ha llegado a esa edad o que no hubo medición entonces.',
            'The last 8 videos. A gap means the video has not reached that age yet or was not measured at that point.'),
          spec: { type: 'line', xType: 'cat', xLabel: L('Edad', 'Age'), x: R[r].crecimiento.x.map(edad), yFormat: 'num', desdeCero: true, series: R[r].crecimiento.series.slice(0, 8) }
        });
        cards.push({
          titulo: L('Frente a la cuenta', 'Against the account'), sub: L('Índice de vistas: 100 = la mediana de la cuenta', 'Views index: 100 = the account median'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'barh', xLabel: V, x: titulos(r), yFormat: ent, series: [{ name: L('Índice', 'Index'), data: base100(col(r, 'indice')) }] }
        });
        cards.push({
          titulo: L('Interacción por vídeo', 'Engagement per video'),
          sub: L('Me gusta, comentarios, compartidos y guardados por cada 1.000 vistas', 'Likes, comments, shares and saves per 1,000 views'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'barh', xLabel: V, x: titulos(r), yFormat: ent, series: [{ name: L('Por cada 1.000 vistas', 'Per 1,000 views'), data: porMil(col(r, 'interaccion')) }] }
        });
        if (R[r].retencion) cards.push({
          titulo: L('Retención segundo a segundo', 'Second-by-second retention'), sub: L('Porcentaje de espectadores que siguen viendo', 'Share of viewers still watching'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP, ancho: 'full', alto: 'tall',
          nota: L('Los primeros segundos deciden: una caída fuerte al principio es un gancho que no engancha.', 'The first seconds decide: a sharp early drop means the hook is not working.'),
          spec: { type: 'line', xType: 'cat', xLabel: L('Segundo', 'Second'), x: R[r].retencion.x, yFormat: 'pct', desdeCero: true, zoom: false, series: R[r].retencion.series.slice(0, 8) }
        });
        if (R[r].fuentes) cards.push({
          titulo: L('De dónde llegan las visitas', 'Where views come from'), sub: L('Media de todos los vídeos', 'Average across all videos'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'donut', x: R[r].fuentes.x.map(function (x) { return FUENTES[x] || x; }), yFormat: 'pct', series: [{ name: L('Visitas', 'Views'), data: R[r].fuentes.v }] }
        });
        var kpis = [
          { label: L('Vistas', 'Views'), valor: k.vistas },
          { label: L('Vídeos', 'Videos'), valor: k.videos },
          { label: L('Interacción media', 'Average engagement'), valor: k.interaccion, unidad: '%', dec: 1 },
          { label: L('Compartidos sobre vistas', 'Shares over views'), valor: k.compartir, unidad: '%', dec: 2 },
          { label: L('Guardados sobre vistas', 'Saves over views'), valor: k.guardar, unidad: '%', dec: 2 }
        ];
        if (k.visionado != null) kpis.push({ label: L('Visionado medio', 'Average watch'), valor: k.visionado, unidad: '%', dec: 0 });
        if (k.completado != null) kpis.push({ label: L('Lo ven entero', 'Watched to the end'), valor: k.completado, unidad: '%', dec: 1 });
        if (k.paraTi != null) kpis.push({ label: L('Visitas desde «Para ti»', 'Views from For You'), valor: k.paraTi, unidad: '%', dec: 0 });
        return { kpis: kpis, cards: cards };
      }
    };
  }

  /* ----------------------------------------------------- Aprendizajes --- */
  var NOMBRE_FACTOR = {
    hora: L('Hora de publicación', 'Posting time'), 'día': L('Día de la semana', 'Day of the week'), franja: L('Franja del día', 'Time of day'),
    sonido: L('Familia de sonido', 'Sound family'), estilo: L('Estilo de dibujo', 'Drawing style'), serie: L('Serie', 'Series'),
    'duración': L('Duración', 'Length'), gancho: L('Tipo de gancho', 'Hook type'), 'gancho largo': L('Largo del gancho', 'Hook length'),
    'escenas de datos': L('Escenas de datos', 'Data scenes'), voz: L('Voz', 'Voice'), red: L('Red', 'Network'),
    ritmo: L('Ritmo de la voz', 'Speech pace'), cortes: L('Cambios de escena', 'Scene changes'), 'cifra en 5 primeras palabras': L('Cifra en las 5 primeras palabras', 'Number in the first 5 words'),
    tema: L('Tema', 'Topic'), emocion: L('Emoción', 'Emotion'), 'tipo de gancho': L('Gancho (según Claude)', 'Hook (per Claude)'), cercania: L('Cercanía', 'Proximity'),
    promesa: L('Promete algo al empezar', 'Opens with a promise'), giro: L('Giro', 'Twist'), cierre: L('Final', 'Ending'),
    'primer fotograma claro': L('Primer fotograma claro sin leer', 'First frame clear without reading'), 'movimiento 1s': L('Movimiento en el 1.er segundo', 'Motion in the first second'),
    'texto 0s': L('Texto en pantalla al empezar', 'On-screen text at start'), personaje: L('Personaje protagonista', 'Main character')
  };
  var esc = Obs.esc;
  function conclusion(c) {
    var d = c.detalle, f = NOMBRE_FACTOR[c.factor] || c.factor;
    if (!d) return esc(c.texto);
    var resto = (d.resto || []).map(function (x) { return esc(nivel(x.v)) + ' ' + Math.round(x.vistas * 100) + ' (n=' + x.n + ')'; }).join(', ');
    return '<b>' + (c.tipo === 'regla' ? L('Regla', 'Rule') : L('Hipótesis', 'Hypothesis')) + '</b> · ' + esc(f) + ': ' +
      L('«' + esc(nivel(d.mejor.v)) + '» consigue un alcance de ' + Math.round(d.mejor.vistas * 100) + ' e interacción de ' + Math.round(d.mejor.interaccion * 100) + ' (n=' + d.mejor.n + '), frente a ',
        '"' + esc(nivel(d.mejor.v)) + '" reaches ' + Math.round(d.mejor.vistas * 100) + ' with engagement ' + Math.round(d.mejor.interaccion * 100) + ' (n=' + d.mejor.n + '), against ') + resto + '.';
  }
  var aprendizajes = {
    id: 'aprendizajes', nombre: L('Aprendizajes', 'Learnings'),
    titulo: L('Qué funciona y qué no', 'What works and what does not'),
    desc: L('Para cada rasgo de los vídeos, el alcance y la interacción que consiguen frente a lo normal en su red (100 = lo normal). Con pocos datos, el cálculo tira hacia 100 para no sacar conclusiones exageradas. Las conclusiones se vuelcan a la skill, que las aplica en los vídeos siguientes.',
      'For each feature of the videos, the reach and engagement they get compared with what is normal on their network (100 = normal). With little data the calculation is pulled towards 100 to avoid exaggerated conclusions. The findings feed back into the skill, which applies them to the next videos.'),
    render: function () {
      var c = A.conclusiones || [];
      var lista = c.length ? '<ul style="margin:.4em 0 0 1.1em">' + c.map(function (x) { return '<li>' + conclusion(x) + '</li>'; }).join('') + '</ul>'
        : ' ' + L('Aún no hay datos suficientes para sacar conclusiones: hacen falta varios vídeos de más de 12 horas en cada red.', 'There is not enough data yet to draw conclusions: several videos older than 12 hours are needed on each network.');
      var horas = (A.horas || []).length ? ' ' + L('Mejores horas para publicar hasta ahora', 'Best posting times so far') + ': <b>' + A.horas.join(L(' y ', ' and ')) + '</b>.' : '';
      var cards = Object.keys(A.factores || {}).filter(function (f) { return f !== 'red'; }).map(function (f) {
        var x = A.factores[f], etiqueta = NOMBRE_FACTOR[f] || f;
        return {
          titulo: etiqueta, sub: L('Índice: 100 = lo normal en su red (n = vídeos)', 'Index: 100 = normal on its network (n = videos)'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'bar', xType: 'cat', xLabel: etiqueta, yFormat: ent, ref: 100, refLabel: L('Lo normal', 'Normal'),
            x: (x.niveles || []).map(function (v, i) { return nivel(v) + ' (n=' + x.n[i] + ')'; }),
            series: [{ name: L('Alcance', 'Reach'), data: base100(x.vistas) }, { name: L('Interacción', 'Engagement'), data: base100(x.interaccion) }] }
        };
      });
      return {
        nota: '<b>' + F.num(A.videos || 0) + L(' vídeos · ', ' videos · ') + F.num(A.publicaciones || 0) + L(' publicaciones con más de 12 horas.', ' posts older than 12 hours.') + '</b>' + horas + lista,
        cards: cards
      };
    }
  };

  /* ¿Por qué se hace viral?: huella de cada vídeo (Claude), experimentos de una sola variable y dónde se va la gente */
  var V = D.viralidad || {};
  var EXP_EN = { gancho_tipo: 'Which first line holds viewers best: a shocking number, a question or myth-busting?', texto_0s: 'Does a big on-screen headline from the first frame help or hurt?',
    duracion: 'Does a short video or a longer one with more story perform better?', cierre: 'Which ending gets more rewatches and comments?' };
  var pregunta = function (x) { return EN && EXP_EN[x.variable] ? EXP_EN[x.variable] : x.pregunta; };
  var viralidad = {
    id: 'viralidad', nombre: L('¿Por qué es viral?', 'Why viral?'),
    titulo: L('¿Por qué unos vídeos se hacen virales y otros no?', 'Why do some videos go viral and others do not?'),
    desc: L('Claude mira cada vídeo (fotogramas y guion) y lo describe con los mismos rasgos: tipo de gancho, emoción, si promete algo, si hay giro, cómo acaba y cómo es el primer segundo. Eso se cruza con su alcance. Como con pocos vídeos las coincidencias engañan, además se hacen experimentos: se cambia una sola cosa y se reparte entre los vídeos sin elegir. Solo lo que gana un experimento pasa a ser regla de la skill.',
      'Claude watches every video (frames and script) and describes it with the same features: hook type, emotion, whether it makes a promise, whether there is a twist, how it ends and what the first second looks like. That is crossed with its reach. Since coincidences mislead with few videos, experiments are also run: a single thing is changed and spread across videos without choosing. Only what wins an experiment becomes a rule for the skill.'),
    render: function () {
      var a = V.activo, cards = [], partes = [];
      if (a) {
        partes.push('<b>' + L('Experimento en curso', 'Running experiment') + '</b> (' + L('desde ', 'since ') + dia(a.inicio || '') + '): ' + esc(pregunta(a)) + ' ' +
          a.variantes.map(function (v, i) { var x = a.indices[i] || {}; return '«' + esc(nivel(v)) + '» ' + (a.asignados[v] || 0) + L(' vídeos', ' videos') + (x.indice != null ? ' · ' + L('índice ', 'index ') + Math.round(x.indice * 100) : ''); }).join(' · ') + '.');
        cards.push({ titulo: L('Experimento: ', 'Experiment: ') + pregunta(a), sub: L('Índice medio de cada variante (100 = lo normal). Se cierra con 8 vídeos por variante.', 'Average index of each variant (100 = normal). Closes at 8 videos per variant.'),
          chips: [CHIP_VIVO], fuente: FUENTE_UP,
          spec: { type: 'bar', xType: 'cat', yFormat: ent, ref: 100, refLabel: L('Lo normal', 'Normal'),
            x: a.variantes.map(function (v, i) { return nivel(v) + ' (n=' + ((a.indices[i] || {}).n || 0) + ')'; }),
            series: [{ name: L('Alcance', 'Reach'), data: a.indices.map(function (x) { return x.indice == null ? null : Math.round(x.indice * 100); }) }] } });
      } else partes.push(L('El primer experimento arranca con el próximo vídeo.', 'The first experiment starts with the next video.'));
      (V.cerrados || []).forEach(function (c) { partes.push('<b>' + (c.ganadora ? L('Regla', 'Rule') : L('Sin diferencia', 'No difference')) + '</b> · ' + esc(pregunta(c)) + ' ' + esc(c.conclusion)); });
      if ((V.cola || []).length) partes.push(L('Próximos experimentos: ', 'Next experiments: ') + V.cola.map(function (x) { return esc(pregunta(x)); }).join(' · '));
      var vs = (V.videos || []).slice(0, 15);
      if (vs.length) cards.push({ titulo: L('Índice de cada vídeo', 'Index of each video'), sub: L('Vistas frente a las publicaciones anteriores de la cuenta en la misma red y a la misma edad, media de todas las redes (100 = lo normal)', 'Views against the account\'s previous posts on the same network at the same age, averaged over networks (100 = normal)'),
        chips: [CHIP_VIVO], fuente: FUENTE_UP,
        spec: { type: 'barh', x: vs.map(function (v) { return v.titulo; }), xFormat: ent, series: [{ name: L('Índice', 'Index'), data: vs.map(function (v) { return Math.round(v.indice * 100); }) }] } });
      var ret = A.retencion || {}, tr = Object.keys(ret);
      if (tr.length) cards.push({ titulo: L('Dónde se va la gente (TikTok)', 'Where people drop off (TikTok)'), sub: L('Puntos de retención perdidos por segundo en cada tramo del vídeo: cuanto más alto, peor', 'Retention points lost per second in each part of the video: higher is worse'),
        chips: [CHIP_VIVO], fuente: FUENTE_UP,
        spec: { type: 'bar', xType: 'cat', yFormat: function (v) { return F.num(v, 1); }, x: tr.map(function (k) { return nivel(k) + ' (n=' + ret[k].n + ')'; }), series: [{ name: L('Pierde por segundo', 'Lost per second'), data: tr.map(function (k) { return ret[k].pierde_s; }) }] } });
      var fichas = (V.videos || []).filter(function (v) { return v.huella; }).map(function (v) {
        var h = v.huella, ras = ['gancho_tipo', 'emocion', 'promesa', 'giro', 'cierre', 'primer_fotograma_claro'].filter(function (k) { return h[k]; })
          .map(function (k) { return (NOMBRE_FACTOR[k === 'gancho_tipo' ? 'tipo de gancho' : k.replace(/_/g, ' ')] || k) + ': ' + esc(nivel(h[k])); }).join(' · ');
        return '<li><b>' + Math.round(v.indice * 100) + '</b> · ' + esc(v.titulo) + (v.experimento ? ' 🧪 ' + esc(nivel(v.experimento.variante)) : '') + '<br><small>' + ras + (h.por_que && !EN ? '<br>' + esc(h.por_que) : '') + '</small></li>';
      });
      if (fichas.length) partes.push('<b>' + L('Lo que ve Claude en cada vídeo', 'What Claude sees in each video') + '</b><ul style="margin:.4em 0 0 1.1em">' + fichas.join('') + '</ul>');
      else partes.push(L('Aún no hay vídeos con más de 12 horas y huella: aparecerán aquí.', 'No videos older than 12 hours with a fingerprint yet: they will appear here.'));
      return { nota: partes.map(function (x) { return '<p style="margin:.4em 0">' + x + '</p>'; }).join(''), cards: cards };
    }
  };

  Obs.init({
    titulo: L('Observatorio de redes · Contratitular', 'Social media observatory · Contratitular'),
    subtitulo: L('Cifras de cada vídeo en cada red, actualizadas cada hora, y lo que se aprende de ellas', 'Figures for every video on every network, updated hourly, and what we learn from them'),
    otroIdioma: EN ? '../' : 'en/',
    secciones: [resumen].concat(ORDEN.map(seccionRed)).concat([viralidad, aprendizajes]),
    actualizado: (D.meta || {}).actualizado,
    fuentes: [FUENTE_UP],
    metodologia: L('Una Action de GitHub consulta cada hora la API de estadísticas de Upload-Post: lista las publicaciones de cada red, las empareja con su vídeo y guarda una medición de cada una con la hora, de modo que se puede ver cómo crece cada vídeo. El índice de cada vídeo es su número de vistas dividido entre la mediana de las 10 publicaciones anteriores de la cuenta en esa red, medidas a la misma edad (72 o 24 horas), para que el crecimiento de la cuenta no se confunda con el mérito del vídeo. Claude describe cada vídeo con una taxonomía cerrada y los experimentos cambian una sola variable, repartida de forma equilibrada; se cierran con una prueba de permutación (p < 0,1 y ventaja de al menos el 25 %). Los aprendizajes promedian, para cada rasgo, el logaritmo de ese índice, con un encogimiento hacia 100 que evita conclusiones con pocos datos.',
      'A GitHub Action queries the Upload-Post analytics API every hour: it lists the posts on each network, matches them with their video and stores a timestamped measurement of each one, so you can see how every video grows. Each video\'s index is its views divided by the median of the account\'s previous 10 posts on that network, measured at the same age (72 or 24 hours), so account growth is not mistaken for the video\'s merit. Claude describes each video with a closed taxonomy and experiments change a single variable, assigned in a balanced way; they are closed with a permutation test (p < 0.1 and an advantage of at least 25%). The learnings average, for each feature, the logarithm of that index, with shrinkage towards 100 to avoid conclusions from too little data.'),
    pie: L('Las cifras son las que devuelve cada red en el momento de la medición y pueden revisarse después (las redes depuran visitas no válidas).',
      'Figures are those returned by each network at the time of measurement and may be revised later (networks filter out invalid views).')
  });

  Obs.estado(ACT ? Obs.t('actualizados') + Obs.desde(ACT) + ' (' + horaAct(ACT) + ')' : '', RETRASO ? '' : 'live');
})();
