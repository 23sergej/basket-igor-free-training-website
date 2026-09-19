// Пошаговая баскетбольная тренировка

const workout = [
  // ---------- РАЗМИНКА ----------
  {
    section: 'Разминка',
    icon: '🔥',
    title: 'Суставная разминка',
    duration: 180,
    goal: 'Подготовить суставы к нагрузке — 3 минуты',
    points: [
      'Вращения: голова, плечи, руки, таз, колени, стопы — по 10 в каждую сторону.',
      'Наклоны и повороты корпуса — 10 раз.',
      'Махи ногами вперёд-назад и в стороны — по 10 каждой ногой.',
    ],
    tip: 'Не спеши. Задача разминки — разогреться, а не устать.',
  },
  {
    section: 'Разминка',
    icon: '🏃',
    title: 'Бег и приставные шаги',
    duration: 180,
    goal: 'Разогнать пульс — 3 минуты',
    points: [
      '30 секунд — лёгкий бег по площадке.',
      '30 секунд — приставные шаги в защитной стойке вправо и влево.',
      '30 секунд — бег спиной вперёд.',
      'Повтори круг ещё раз.',
    ],
    tip: 'Держи низкую стойку: колени согнуты, спина прямая, голова поднята.',
  },
  {
    section: 'Разминка',
    icon: '🤸',
    title: 'Динамическая растяжка',
    duration: 120,
    goal: 'Мышцы готовы к взрывным движениям — 2 минуты',
    points: [
      'Выпады с поворотом корпуса — по 6 на каждую ногу.',
      '«Офицерская прогулка» — подъём колена и мах голени, 8 шагов.',
      'Прыжки на месте с разведением рук — 10 раз.',
    ],
    tip: 'Двигайся плавно, без рывков и боли.',
  },

  // ---------- ДРИБЛИНГ ----------
  {
    section: 'Дриблинг',
    icon: '🏀',
    title: 'Низкий дриблинг на месте',
    duration: 180,
    goal: 'Контроль мяча без взгляда вниз — 3 минуты',
    points: [
      '1 минута — правая рука, мяч не выше колена.',
      '1 минута — левая рука.',
      '1 минута — чередуй руки каждые 10 ударов.',
    ],
    tip: 'Смотри вперёд, а не на мяч. Толкай мяч подушечками пальцев, не ладонью.',
  },
  {
    section: 'Дриблинг',
    icon: '⇄',
    title: 'Кроссовер на месте',
    duration: 180,
    goal: 'Быстрая смена рук — 3 минуты',
    points: [
      '1 минута — кроссовер на уровне колен, максимально низко.',
      '1 минута — широкие и высокие перелёты на скорость.',
      '1 минута — комбинируй: 5 низких, 5 высоких.',
    ],
    tip: 'При кроссовере мяч летит по дуге низко к полу — так его труднее выбить.',
  },
  {
    section: 'Дриблинг',
    icon: '🔁',
    title: 'Дриблинг между ног и за спиной',
    duration: 180,
    goal: 'Продвинутый контроль — 3 минуты',
    points: [
      '1 минута — между ног (правая вперёд, левая назад) и наоборот.',
      '1 минута — перевод за спиной на месте.',
      '1 минута — серия: между ног → за спиной → кроссовер.',
    ],
    tip: 'Ошибка — мяч потерян? Ничего страшного, собери и продолжай серию.',
  },
  {
    section: 'Дриблинг',
    icon: '⚡',
    title: 'Дриблинг в движении',
    duration: 180,
    goal: 'Мяч и ноги работают вместе — 3 минуты',
    points: [
      'Веди мяч правой рукой до лицевой линии и обратно.',
      'То же левой рукой.',
      'Зигзаг между условными «конусами» с переводами мяча.',
    ],
    tip: 'Веди мяч сбоку-впереди, а не рядом с ногой — и голову держи поднято.',
  },

  // ---------- ИЗМЕНЕНИЕ НАПРАВЛЕНИЯ ----------
  {
    section: 'Изменение направления',
    icon: '🐍',
    title: 'Зигзаг с ускорением',
    duration: 240,
    goal: 'Резкие смены направления — 4 минуты',
    points: [
      'Представь (или поставь) 5 точек по диагонали площадки.',
      'Дойди до точки, резко смени направление — слева направо и обратно.',
      'После каждой смены — 2–3 быстрых шага-ускорения.',
      '4 подхода до конца площадки, отдых 30 секунд между подходами.',
    ],
    tip: 'Смена направления делается на внешней стороне стопы: стоп, толчок, рывок.',
  },
  {
    section: 'Изменение направления',
    icon: '🛑',
    title: 'Стопы и повороты (pivot)',
    duration: 180,
    goal: 'Работа ног без пробежки — 3 минуты',
    points: [
      'Поймай мяч в движении — стоп на два шага (jump stop).',
      'Повороты на опорной ноге вперёд и назад — по 8 в каждую сторону.',
      'Комбинация: 3 шага с мячом → стоп → поворот → передача в стену.',
    ],
    tip: 'Опорная нога «приклеена» к полу — это залог против пробежки.',
  },
  {
    section: 'Изменение направления',
    icon: '🏎️',
    title: 'Смена темпа с мячом',
    duration: 180,
    goal: 'Обманные ускорения — 3 минуты',
    points: [
      'Веди мяч в среднем темпе, затем резко ускоряйся на 3 шага.',
      'Замедлись — снова ускорение. 6–8 повторов за подход.',
      'Добавь кроссовер перед каждым ускорением.',
    ],
    tip: 'Именно смена темпа, а не скорость, позволяет уйти от защитника.',
  },

  // ---------- БРОСКИ ----------
  {
    section: 'Броски',
    icon: '🎯',
    title: 'Броски с 5 точек',
    duration: 300,
    goal: 'Стабильная техника — 5 минут',
    points: [
      '5 точек вокруг кольца: 2 слева, 2 справа, 1 по центру.',
      'Забей с каждой точки — начинай с расстояния 2–3 метров.',
      'Попал во все 5 — отступи на шаг дальше и повтори.',
    ],
    tip: 'Следи за базой: ноги на ширине плеч, локоть под мячом, рука «в кольцо».',
  },
  {
    section: 'Броски',
    icon: '🎯',
    title: 'Бросок после дриблинга',
    duration: 240,
    goal: 'Бросок в движении — 4 минуты',
    points: [
      '1–2 удара мячом в сторону → бросок (pull-up). 10 повторов вправо.',
      'То же влево — 10 повторов.',
      'Финт на проход → шаг назад → бросок (step-back). 10 повторов.',
    ],
    tip: 'Прыжок вертикальный: сила броска идёт от ног, а не от рук.',
  },
  {
    section: 'Броски',
    icon: '🎯',
    title: 'Штрафные броски',
    duration: 180,
    goal: 'Хладнокровие под давлением — 3 минуты',
    points: [
      'Серия из 5 штрафных — фиксируй результат.',
      'Сделай 3 серии, отдых между ними — 30 секунд.',
      'Последний бросок серии представляй как решающий в игре.',
    ],
    tip: 'Один и тот же ритуал перед броском: вдох, два удара мячом, бросок.',
  },

  // ---------- ФИНИШ У КОЛЬЦА ----------
  {
    section: 'Финиш у кольца',
    icon: '🏀',
    title: 'Микан-дрилл',
    duration: 180,
    goal: 'Мягкие руки у щита — 3 минуты',
    points: [
      'Стоя под кольцом: лэй-ап правой → поймай мяч, не приземляясь.',
      'Сразу лэй-ап левой. И так без остановки.',
      '30 секунд подряд × 5 подходов, отдых 20 секунд.',
    ],
    tip: 'Мяч должен касаться щита или пройти «чисто» — тренируй мягкий бросок.',
  },
  {
    section: 'Финиш у кольца',
    icon: '🏃',
    title: 'Лэй-апы с двух сторон',
    duration: 240,
    goal: 'Финиш на скорости — 4 минуты',
    points: [
      '10 лэй-апов правой рукой с ведением от центра.',
      '10 лэй-апов левой рукой.',
      'По 5 «обратных» лэй-апов (reverse) с каждой стороны.',
    ],
    tip: 'Отталкивайся дальней от щита ногой — колено высоко, мяч выше кольца.',
  },
  {
    section: 'Финиш у кольца',
    icon: '💥',
    title: 'Финиш после смены направления',
    duration: 180,
    goal: 'Связка «уход → проход → лэй-ап» — 3 минуты',
    points: [
      'Веди мяч к трёхочковой линии → кроссовер → проход → лэй-ап.',
      '10 повторов вправо, 10 влево.',
      'Усложни: перед проходом — обманный шаг в противоположную сторону.',
    ],
    tip: 'Финальные шаги — короткие и собранные, чтобы не «пролететь» кольцо.',
  },

  // ---------- ЧЕЛЛЕНДЖ ----------
  {
    section: 'Челлендж',
    icon: '🏆',
    title: 'Финальный челлендж',
    duration: 300,
    goal: 'Побей свой рекорд — 5 минут',
    points: [
      '«Вокруг мира»: забей с 5 точек подряд — счёт: сколько серий за 3 минуты.',
      'Штрафные на давке: 5 бросков, за каждый промах — 10 отжиманий или приседаний.',
      'Запиши свой результат, чтобы побить его на следующей тренировке.',
    ],
    tip: 'Челлендж — самое весёлое. Работай в полную силу, но следи за техникой!',
  },
];

// ---------- Сложность ----------

const LEVELS = {
  easy: { label: 'Легкий', icon: '🌱', factor: 0.75 },
  medium: { label: 'Средний', icon: '⚡', factor: 1 },
  hard: { label: 'Сложный', icon: '🔥', factor: 1.25 },
};

// Дополнительный пункт «усложнение/упрощение» для каждого упражнения
const LEVEL_NOTES = {
  'Суставная разминка': {
    easy: 'Сделай по 6 повторений в каждую сторону и не гони темп.',
    hard: 'Увеличь до 15 повторений и добавь вращения стопами на носках.',
  },
  'Бег и приставные шаги': {
    easy: 'Беги в лёгком темпе, бег спиной замени на обычный бег.',
    hard: 'Каждый круг заканчивай 10-секундным ускорением.',
  },
  'Динамическая растяжка': {
    easy: 'Сократи количество повторений вдвое.',
    hard: 'После каждого упражнения — 5 взрывных прыжков вверх.',
  },
  'Низкий дриблинг на месте': {
    easy: 'Мяч может идти на уровне пояса — главное не смотреть вниз.',
    hard: 'По 15 секунд каждой минуты веди мяч с закрытыми глазами.',
  },
  'Кроссовер на месте': {
    easy: 'Кроссовер на уровне пояса, темп комфортный.',
    hard: 'Всю минуту — в низкой стойке, добавь двойной кроссовер.',
  },
  'Дриблинг между ног и за спиной': {
    easy: 'Начни с медленного темпа и высоких мячей.',
    hard: 'Заканчивай каждую минуту 10-секундным спуртом на максимуме.',
  },
  'Дриблинг в движении': {
    easy: 'Сначала пройди маршрут шагом, отрабатывая траекторию.',
    hard: 'Меняй скорость каждые 5 метров — от медленной до максимальной.',
  },
  'Зигзаг с ускорением': {
    easy: '3 подхода и отдых между ними до минуты.',
    hard: '5 подходов, отдых 15 секунд, ведение на максимальной скорости.',
  },
  'Стопы и повороты (pivot)': {
    easy: 'По 5 поворотов в каждую сторону и спокойный темп.',
    hard: 'После каждого поворота — передача в стену в прыжке.',
  },
  'Смена темпа с мячом': {
    easy: '4–5 повторов за подход, между подходами отдых 30 секунд.',
    hard: 'Каждое ускорение начинай с кроссовера или перевода за спину.',
  },
  'Броски с 5 точек': {
    easy: 'Начни с 1,5–2 метров, с каждой точки достаточно одного попадания.',
    hard: 'Отступи на 4–5 метров и забивай с каждой точки по 3 раза подряд.',
  },
  'Бросок после дриблинга': {
    easy: 'По 6 повторов в каждую сторону и ближе к кольцу.',
    hard: 'Все броски — с дальней дистанции, добавь 10 бросков после двух изменений направления.',
  },
  'Штрафные броски': {
    easy: '2 серии из 5, отдыхай до минуты.',
    hard: 'Каждый промах — спринт до лицевой линии и обратно.',
  },
  'Микан-дрилл': {
    easy: 'Подходы по 20 секунд, отдых до 40 секунд.',
    hard: 'Подходы по 45 секунд, работай только слабой рукой.',
  },
  'Лэй-апы с двух сторон': {
    easy: 'По 6 повторов с каждой стороны, темп спокойный.',
    hard: 'Каждый лэй-ап — с одним ударом мяча об пол перед финишем.',
  },
  'Финиш после смены направления': {
    easy: 'По 5 повторов в каждую сторону без обманных шагов.',
    hard: 'Добавь европейский шаг и бросок-«лоб» (floater) по 5 раз.',
  },
  'Финальный челлендж': {
    easy: 'Промах на штрафных — 5 приседаний.',
    hard: '«Вокруг мира»: промах — серия начинается заново.',
  },
};

// ---------- Элементы ----------

const els = {
  counter: document.getElementById('step-counter'),
  badge: document.getElementById('section-badge'),
  bar: document.getElementById('progress-bar'),
  card: document.getElementById('card'),
  app: document.getElementById('app'),
  icon: document.getElementById('step-icon'),
  title: document.getElementById('step-title'),
  goal: document.getElementById('step-goal'),
  points: document.getElementById('step-points'),
  tip: document.getElementById('step-tip'),
  timerBox: document.getElementById('timer-box'),
  timerTime: document.getElementById('timer-time'),
  timerStart: document.getElementById('timer-start'),
  timerReset: document.getElementById('timer-reset'),
  soundBtn: document.getElementById('timer-sound'),
  alarm: document.getElementById('alarm-overlay'),
  finish: document.getElementById('finish-screen'),
  finishSteps: document.getElementById('finish-steps'),
  prevBtn: document.getElementById('prev-btn'),
  nextBtn: document.getElementById('next-btn'),
  restartBtn: document.getElementById('restart-btn'),
  levelScreen: document.getElementById('level-screen'),
  levelBtns: document.querySelectorAll('.btn-level'),
  levelBtn: document.getElementById('level-btn'),
  levelHint: document.getElementById('level-hint'),
  finishMinutes: document.getElementById('finish-minutes'),
};

const STORE_KEY = 'basketball-workout-step';
const LEVEL_KEY = 'basketball-workout-level';
const total = workout.length;
let current = 0;
let savedMax = 0;

let level = localStorage.getItem(LEVEL_KEY);
if (!LEVELS[level]) level = 'medium';

// Время упражнения с поправкой на сложность (кратно 30 сек, минимум 60)
function scaledDuration(step) {
  const raw = Math.round((step.duration * LEVELS[level].factor) / 30) * 30;
  return Math.max(60, raw);
}

// Пункты упражнения: базовые + заметка текущей сложности
function stepPoints(step) {
  const pts = step.points.slice();
  const notes = LEVEL_NOTES[step.title];
  const note = notes && notes[level];
  if (note) pts.push(`${LEVELS[level].icon} ${note}`);
  return pts;
}

// ---------- Звук (Web Audio API, без файлов) ----------

let audioCtx = null;
let soundOn = true;

function ensureAudio() {
  // создаётся по жесту пользователя — иначе браузеры блокируют звук
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (Ctx) audioCtx = new Ctx();
  }
  if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
}

function beep(time, freq, dur = 0.18) {
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(0.5, time + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(time);
  osc.stop(time + dur + 0.05);
}

function playFinishSound() {
  if (!soundOn) return;
  ensureAudio();
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  // весёлый трёхнотный сигнал
  beep(t, 880);
  beep(t + 0.25, 1100);
  beep(t + 0.5, 1320, 0.4);
}

// ---------- Цикличный будильник до касания экрана ----------

const alarm = {
  interval: null,
  vibrateInterval: null,
};

function startAlarm() {
  stopAlarm();
  els.alarm.hidden = false;
  playFinishSound();
  alarm.interval = setInterval(playFinishSound, 1400);
  // вибрация тоже повторяется
  if (navigator.vibrate) {
    navigator.vibrate([300, 150, 300]);
    alarm.vibrateInterval = setInterval(() => navigator.vibrate([300, 150, 300]), 1400);
  }
}

function stopAlarm() {
  clearInterval(alarm.interval);
  clearInterval(alarm.vibrateInterval);
  alarm.interval = null;
  alarm.vibrateInterval = null;
  els.alarm.hidden = true;
}

// касание по оверлею (или в любом месте) останавливает звонок
els.alarm.addEventListener('pointerdown', stopAlarm);

// ---------- Таймер ----------

const timer = {
  total: 0,
  left: 0,
  interval: null,
  running: false,
  done: false,
};

function fmt(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function renderTimer() {
  els.timerTime.textContent = fmt(timer.total);
  els.timerTime.classList.toggle('running', timer.running);
  els.timerTime.classList.toggle('done', timer.done);
  els.timerStart.textContent = timer.running ? '⏸ Пауза' : '▶ Старт';
}

function setTimer(seconds) {
  stopTimer();
  timer.total = seconds;
  timer.done = false;
  renderTimer();
}

function stopTimer() {
  clearInterval(timer.interval);
  timer.interval = null;
  timer.running = false;
}

function tick() {
  timer.total -= 1;
  els.timerTime.textContent = fmt(Math.max(timer.total, 0));
  if (timer.total <= 0) {
    stopTimer();
    timer.done = true;
    startAlarm();
    renderTimer();
    els.timerStart.textContent = '✔ Готово!';
  }
}

els.timerStart.addEventListener('click', () => {
  if (timer.done) return;
  ensureAudio(); // разблокировка аудио по первому касанию
  if (timer.running) {
    stopTimer();
    renderTimer();
  } else {
    timer.running = true;
    renderTimer();
    timer.interval = setInterval(tick, 1000);
  }
});

els.timerReset.addEventListener('click', () => {
  setTimer(scaledDuration(workout[current]));
});

els.soundBtn.addEventListener('click', () => {
  soundOn = !soundOn;
  els.soundBtn.textContent = soundOn ? '🔊' : '🔇';
  els.soundBtn.setAttribute('aria-label', soundOn ? 'Выключить звук' : 'Включить звук');
  if (soundOn) ensureAudio();
});

// ---------- Рендер шага ----------

function renderStep() {
  const step = workout[current];

  els.counter.textContent = `Шаг ${current + 1} из ${total}`;
  els.badge.textContent = `${step.icon} ${step.section}`;
  els.bar.style.width = `${(current / (total - 1)) * 100}%`;

  els.icon.textContent = step.icon;
  els.title.textContent = step.title;
  els.goal.textContent = step.goal;

  const points = stepPoints(step);
  els.points.innerHTML = '';
  for (const p of points) {
    const li = document.createElement('li');
    li.textContent = p;
    els.points.appendChild(li);
  }

  if (step.tip) {
    els.tip.textContent = `💡 ${step.tip}`;
    els.tip.hidden = false;
  } else {
    els.tip.hidden = true;
  }

  setTimer(scaledDuration(step));

  els.prevBtn.hidden = false;
  els.prevBtn.disabled = current === 0;
  els.nextBtn.hidden = false;
  els.nextBtn.textContent = current === total - 1 ? 'Завершить ✓' : 'Вперёд →';

  localStorage.setItem(STORE_KEY, String(current));
  if (current > savedMax) savedMax = current;

  window.scrollTo({ top: 0 });
}

function go(delta) {
  if (!els.levelScreen.hidden) return; // экран выбора сложности — навигация выключена
  const next = current + delta;
  if (next < 0 || next >= total) return;
  stopAlarm(); // уход на другой шаг гасит звонок
  current = next;
  renderStep();
}

function finishWorkout() {
  stopAlarm();
  stopTimer();
  localStorage.removeItem(STORE_KEY);
  els.app.hidden = true;
  els.finish.hidden = false;
  els.finishSteps.textContent = String(savedMax + 1 >= total ? total : savedMax + 1);
  const minutes = Math.round(workout.reduce((sum, s) => sum + scaledDuration(s), 0) / 60);
  els.finishMinutes.textContent = `~${minutes}`;
  els.badge.textContent = '🏁 Завершено';
  els.bar.style.width = '100%';
  els.prevBtn.hidden = true;
  els.nextBtn.hidden = true;
  if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 400]);
  window.scrollTo({ top: 0 });
}

function restart() {
  current = 0;
  savedMax = 0;
  els.app.hidden = false;
  els.finish.hidden = true;
  els.nextBtn.hidden = false;
  renderStep();
}

// ---------- События ----------

els.prevBtn.addEventListener('click', () => go(-1));
els.nextBtn.addEventListener('click', () => {
  if (current === total - 1) finishWorkout();
  else go(1);
});
els.restartBtn.addEventListener('click', restart);

// Свайпы влево/вправо для навигации
let touchX = null;
document.addEventListener('touchstart', (e) => {
  touchX = e.changedTouches[0].clientX;
}, { passive: true });

document.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  touchX = null;
  if (Math.abs(dx) < 70) return; // слишком короткий свайп
  const onButtons = e.target.closest('.btn');
  if (onButtons) return;
  if (dx < 0) go(1);
  else go(-1);
}, { passive: true });

// Клавиатура (удобно и на десктопе)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') go(1);
  if (e.key === 'ArrowLeft') go(-1);
});

// ---------- Старт ----------

function updateLevelButton() {
  els.levelBtn.textContent = `${LEVELS[level].icon} ${LEVELS[level].label}`;
}

function updateLevelScreen() {
  for (const btn of els.levelBtns) {
    btn.dataset.active = String(btn.dataset.level === level);
  }
  els.levelHint.hidden = current === 0 && savedMax === 0 && !localStorage.getItem(STORE_KEY);
}

function showLevelScreen() {
  stopAlarm();
  stopTimer();
  updateLevelScreen();
  els.levelScreen.hidden = false;
  els.app.hidden = true;
  els.finish.hidden = true;
  els.prevBtn.hidden = true;
  els.nextBtn.hidden = true;
  els.badge.textContent = '🏀 Тренировка';
  window.scrollTo({ top: 0 });
}

function pickLevel(newLevel) {
  level = newLevel;
  localStorage.setItem(LEVEL_KEY, level);
  localStorage.removeItem(STORE_KEY); // смена сложности — прогресс заново
  current = 0;
  savedMax = 0;
  els.levelScreen.hidden = true;
  els.app.hidden = false;
  els.nextBtn.hidden = false;
  updateLevelButton();
  renderStep();
}

for (const btn of els.levelBtns) {
  btn.addEventListener('click', () => pickLevel(btn.dataset.level));
}
els.levelBtn.addEventListener('click', showLevelScreen);

const stored = parseInt(localStorage.getItem(STORE_KEY), 10);
if (!Number.isNaN(stored) && stored > 0 && stored < total) {
  current = stored;
  savedMax = stored;
}
updateLevelButton();
if (localStorage.getItem(LEVEL_KEY)) {
  renderStep();
} else {
  showLevelScreen(); // первый запуск — сначала выбираем сложность
}
