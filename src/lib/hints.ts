import type { TenseId } from "./tutor-data";

// ============================================================
// Hint System — Reusable Grammar Hints
// ============================================================

export type HintCategory =
  | "formula"        // tense formula / structure
  | "signal-words"   // signal words & markers
  | "spelling"       // spelling rules (-s, -ing, etc.)
  | "usage"          // when to use the tense
  | "stative"        // stative verb rules
  | "special"        // special cases & exceptions
  | "negation"       // how to make negative
  | "question";      // how to form questions

export const HINT_CATEGORY_LABELS: Record<HintCategory, string> = {
  formula: "Формула",
  "signal-words": "Слова-маркеры",
  spelling: "Орфография",
  usage: "Употребление",
  stative: "Стативные глаголы",
  special: "Особые случаи",
  negation: "Отрицание",
  question: "Вопрос",
};

export const HINT_CATEGORY_COLORS: Record<HintCategory, string> = {
  formula: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "signal-words": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  spelling: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  usage: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  stative: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  special: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-400",
  negation: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  question: "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
};

export interface Hint {
  id: string;
  tense: TenseId;
  category: HintCategory;
  title: string;
  text: string;
}

// ============================================================
// Present Simple Hints
// ============================================================
const presentSimpleHints: Hint[] = [
  {
    id: "ps-formula-v1",
    tense: "present-simple",
    category: "formula",
    title: "I / You / We / They + V1",
    text: "После I, you, we, they глагол стоит в начальной форме без изменений: I work, they play, we go.",
  },
  {
    id: "ps-formula-vs",
    tense: "present-simple",
    category: "formula",
    title: "He / She / It + V-s (es)",
    text: "После he, she, it к глаголу добавляется -s или -es: she works, he goes, it rains.",
  },
  {
    id: "ps-negative",
    tense: "present-simple",
    category: "negation",
    title: "don't / doesn't + V1",
    text: "Отрицание: I/you/we/they + don't + V1; he/she/it + doesn't + V1. После doesn't глагол возвращается к V1: she doesn't go.",
  },
  {
    id: "ps-question",
    tense: "present-simple",
    category: "question",
    title: "Do / Does + подлежащее + V1?",
    text: "Вопрос: Do/Does + подлежащее + V1? — Do you like coffee? Does she work here? После does глагол в V1!",
  },
  {
    id: "ps-signal-routine",
    tense: "present-simple",
    category: "signal-words",
    title: "Маркеры рутинных действий",
    text: "every day/week/month/year, always, usually, often, sometimes, rarely, never — эти слова часто указывают на Present Simple.",
  },
  {
    id: "ps-signal-frequency",
    tense: "present-simple",
    category: "signal-words",
    title: "Частотные выражения",
    text: "twice a week, three times a day, once a month — указывают на регулярность → Present Simple.",
  },
  {
    id: "ps-spelling-s",
    tense: "present-simple",
    category: "spelling",
    title: "Обычно: +s",
    text: "Большинство глаголов: просто добавь -s — play → plays, work → works, read → reads.",
  },
  {
    id: "ps-spelling-es",
    tense: "present-simple",
    category: "spelling",
    title: "-sh, -ch, -x, -s, -o → +es",
    text: "Глаголы на -sh, -ch, -x, -s, -o: watch → watches, go → goes, fix → fixes, miss → misses.",
  },
  {
    id: "ps-spelling-ies",
    tense: "present-simple",
    category: "spelling",
    title: "согласная + y → -ies",
    text: "Если глагол оканчивается на согласную + y: study → studies, carry → carries, try → tries, cry → cries.",
  },
  {
    id: "ps-to-be",
    tense: "present-simple",
    category: "special",
    title: "Глагол to be: am / is / are",
    text: "I am, he/she/it is, you/we/they are. Отрицание: I'm not, he isn't, they aren't. Вопрос: Am I? Is he? Are they?",
  },
  {
    id: "ps-have-got",
    tense: "present-simple",
    category: "special",
    title: "I've got = у меня есть",
    text: "Британский английский: I've got a dog = I have a dog. He's got = He has got.",
  },
  {
    id: "ps-schedule",
    tense: "present-simple",
    category: "usage",
    title: "Расписания → Present Simple",
    text: "Поезда, самолёты, кино, уроки: The train leaves at 6 pm. The film starts at 8.",
  },
  {
    id: "ps-fact",
    tense: "present-simple",
    category: "usage",
    title: "Факты и законы природы",
    text: "The sun rises in the east. Water boils at 100°C. The Earth goes around the Sun.",
  },
  {
    id: "ps-stative",
    tense: "present-simple",
    category: "stative",
    title: "Стативные глаголы → Present Simple",
    text: "like, want, need, know, believe, understand, remember, belong, cost, mean — НЕ используются в Continuous.",
  },
  {
    id: "ps-think-opinion",
    tense: "present-simple",
    category: "stative",
    title: "think (мнение) → Simple",
    text: "I think you're right = моё мнение → Present Simple. Но: I'm thinking about it = размышляю → Continuous.",
  },
  {
    id: "ps-when-if",
    tense: "present-simple",
    category: "special",
    title: "when/if + Present Simple (не will!)",
    text: "В придаточных времени и условия: When I arrive, I'll call you. If it rains, we'll stay home. НЕ will!",
  },
];

// ============================================================
// Present Continuous Hints
// ============================================================
const presentContinuousHints: Hint[] = [
  {
    id: "pc-formula",
    tense: "present-continuous",
    category: "formula",
    title: "am / is / are + V-ing",
    text: "I am working. She is reading. They are playing. Вспомогательный глагол be + глагол с окончанием -ing.",
  },
  {
    id: "pc-negative",
    tense: "present-continuous",
    category: "negation",
    title: "am not / isn't / aren't + V-ing",
    text: "I am not working. She isn't reading. They aren't playing. NOT: I don't working.",
  },
  {
    id: "pc-question",
    tense: "present-continuous",
    category: "question",
    title: "Am / Is / Are + подлежащее + V-ing?",
    text: "Are you listening? Is she working? Am I doing this right?",
  },
  {
    id: "pc-signal-now",
    tense: "present-continuous",
    category: "signal-words",
    title: "now, right now, at the moment, currently",
    text: "Эти маркеры указывают на действие, происходящее прямо сейчас → Present Continuous.",
  },
  {
    id: "pc-signal-excl",
    tense: "present-continuous",
    category: "signal-words",
    title: "Look! / Listen! / Be quiet!",
    text: "Восклицания, привлекающие внимание к происходящему действию: Look! It's snowing! Listen! Someone's knocking.",
  },
  {
    id: "pc-signal-temp",
    tense: "present-continuous",
    category: "signal-words",
    title: "today, this week/month (временные)",
    text: "Указывают на временную ситуацию, отличающуюся от обычной: I'm staying at a hotel this week.",
  },
  {
    id: "pc-usage-now",
    tense: "present-continuous",
    category: "usage",
    title: "Действие происходит прямо сейчас",
    text: "Действие в момент речи: She is reading a book right now. They are playing football.",
  },
  {
    id: "pc-usage-temporary",
    tense: "present-continuous",
    category: "usage",
    title: "Временная ситуация",
    text: "Не постоянная, а временная: I'm staying with friends this week (обычно живу дома).",
  },
  {
    id: "pc-usage-planned",
    tense: "present-continuous",
    category: "usage",
    title: "Запланированное будущее",
    text: "Личные договорённости: We are flying to Paris next week. I'm seeing the doctor tomorrow.",
  },
  {
    id: "pc-usage-irritate",
    tense: "present-continuous",
    category: "usage",
    title: "always + V-ing = раздражение",
    text: "She is always losing her keys! He is always complaining! — раздражающая привычка.",
  },
  {
    id: "pc-usage-change",
    tense: "present-continuous",
    category: "usage",
    title: "Изменяющаяся ситуация",
    text: "Процесс изменения: My English is getting better. The climate is getting warmer.",
  },
  {
    id: "pc-spelling-drop-e",
    tense: "present-continuous",
    category: "spelling",
    title: "Убираем -e, добавляем -ing",
    text: "make → making, take → taking, write → writing, bake → baking, arrive → arriving.",
  },
  {
    id: "pc-spelling-double",
    tense: "present-continuous",
    category: "spelling",
    title: "Краткий гласный + 1 согласная → удваиваем",
    text: "run → running, sit → sitting, stop → stopping, plan → planning, get → getting.",
  },
  {
    id: "pc-spelling-ie",
    tense: "present-continuous",
    category: "spelling",
    title: "-ie → -y + -ing",
    text: "lie → lying, die → dying, tie → tying. Сначала -ie превращается в -y, потом + -ing.",
  },
  {
    id: "pc-spelling-no-double",
    tense: "present-continuous",
    category: "spelling",
    title: "НЕ удваиваем в некоторых случаях",
    text: "Два гласных: cook → cooking (НЕ cookking). Две согласных: pack → packing. Долгий гласный: read → reading.",
  },
  {
    id: "pc-no-stative",
    tense: "present-continuous",
    category: "stative",
    title: "Стативные глаголы НЕ в Continuous",
    text: "like, want, know, understand, believe, remember — НЕ: I'm knowing. Правильно: I know.",
  },
  {
    id: "pc-dual-think",
    tense: "present-continuous",
    category: "stative",
    title: "think: мнение vs размышление",
    text: "I think = мнение → Simple (I think you're right). I'm thinking about = размышляю → Continuous.",
  },
  {
    id: "pc-dual-see",
    tense: "present-continuous",
    category: "stative",
    title: "see: понимать vs встречаться",
    text: "see = понимать → Simple (I see what you mean). see = встречаться → Continuous (I'm seeing the doctor).",
  },
  {
    id: "pc-dual-have",
    tense: "present-continuous",
    category: "stative",
    title: "have: владеть vs действие",
    text: "have a car = владеть → Simple (I have a car). have dinner / a shower = действие → Continuous (I'm having dinner).",
  },
  {
    id: "pc-dual-taste",
    tense: "present-continuous",
    category: "stative",
    title: "taste / smell / feel: двойное значение",
    text: "Состояние (Simple): The soup tastes good. Действие (Continuous): She is tasting the soup.",
  },
];

// ============================================================
// Present Perfect Hints
// ============================================================
const presentPerfectHints: Hint[] = [
  {
    id: "pp-formula",
    tense: "present-perfect",
    category: "formula",
    title: "have / has + V3 (past participle)",
    text: "I have finished. She has gone. They have arrived. V3 = 3-я форма глагола или V + ed.",
  },
  {
    id: "pp-negative",
    tense: "present-perfect",
    category: "negation",
    title: "haven't / hasn't + V3",
    text: "I haven't finished. She hasn't arrived. They haven't called.",
  },
  {
    id: "pp-question",
    tense: "present-perfect",
    category: "question",
    title: "Have / Has + подлежащее + V3?",
    text: "Have you finished? Has she arrived? Have they called?",
  },
  {
    id: "pp-signal-result",
    tense: "present-perfect",
    category: "signal-words",
    title: "Результат виден СЕЙЧАС",
    text: "I've lost my keys (= сейчас без ключей). She's broken her leg (= сейчас в гипсе).",
  },
  {
    id: "pp-signal-already",
    tense: "present-perfect",
    category: "signal-words",
    title: "already = уже (утверждение)",
    text: "She has already eaten lunch. I've already finished. — Ставится ПЕРЕД V3.",
  },
  {
    id: "pp-signal-just",
    tense: "present-perfect",
    category: "signal-words",
    title: "just = только что",
    text: "She has just arrived. I've just woken up. — Ставится ПЕРЕД V3.",
  },
  {
    id: "pp-signal-yet",
    tense: "present-perfect",
    category: "signal-words",
    title: "yet = ещё не (вопрос/отрицание)",
    text: "I haven't finished yet. Have you seen the film yet? — Ставится В КОНЦЕ предложения.",
  },
  {
    id: "pp-signal-ever-never",
    tense: "present-perfect",
    category: "signal-words",
    title: "ever (вопрос) / never (отрицание)",
    text: "Have you ever been to Japan? I've never tried sushi. — Опыт жизни.",
  },
  {
    id: "pp-signal-since",
    tense: "present-perfect",
    category: "signal-words",
    title: "since = точка во времени",
    text: "since 2015, since yesterday, since I was a child — с какого-то момента до сих пор.",
  },
  {
    id: "pp-signal-for",
    tense: "present-perfect",
    category: "signal-words",
    title: "for = период времени",
    text: "for 5 years, for two hours, for a long time — в течение какого-то времени.",
  },
  {
    id: "pp-signal-recently",
    tense: "present-perfect",
    category: "signal-words",
    title: "recently, lately = в последнее время",
    text: "I haven't seen him recently. She has been travelling a lot lately.",
  },
  {
    id: "pp-signal-so-far",
    tense: "present-perfect",
    category: "signal-words",
    title: "so far, up to now = до сих пор",
    text: "We've had three meetings so far. Everything has been fine up to now.",
  },
  {
    id: "pp-signal-news",
    tense: "present-perfect",
    category: "signal-words",
    title: "Свежие новости (без конкретного времени)",
    text: "The Prime Minister has resigned! — новость, время не указано → Present Perfect.",
  },
  {
    id: "pp-signal-superlative",
    tense: "present-perfect",
    category: "signal-words",
    title: "the best/worst ... ever",
    text: "This is the best film I have ever seen. The worst thing that has happened.",
  },
  {
    id: "pp-signal-first-time",
    tense: "present-perfect",
    category: "signal-words",
    title: "the first/second time",
    text: "It's the first time I've been here. This is the second time she's called.",
  },
  {
    id: "pp-signal-today",
    tense: "present-perfect",
    category: "signal-words",
    title: "today, this morning/week (период не окончен)",
    text: "I've written three emails this morning (ещё утро!). Но: I wrote three emails yesterday (утро прошло).",
  },
  {
    id: "pp-been-gone",
    tense: "present-perfect",
    category: "special",
    title: "has been to vs has gone to",
    text: "has been to = ездил и вернулся (I've been to Paris). has gone to = ушёл и ещё не вернулся (She's gone to the shop).",
  },
  {
    id: "pp-no-yesterday",
    tense: "present-perfect",
    category: "special",
    title: "yesterday, ago → Past Simple!",
    text: "I went there yesterday. She called two hours ago. — Конкретное время в прошлом → Past Simple, НЕ Present Perfect.",
  },
  {
    id: "pp-stative",
    tense: "present-perfect",
    category: "stative",
    title: "Стативные глаголы: Present Perfect",
    text: "I've known him for years (НЕ have been knowing). I've always wanted... (НЕ have been wanting).",
  },
  {
    id: "pp-irregular",
    tense: "present-perfect",
    category: "spelling",
    title: "Неправильные глаголы (V3)",
    text: "go→gone, see→seen, eat→eaten, write→written, break→broken, know→known, read→read, leave→left.",
  },
];

// ============================================================
// Present Perfect Continuous Hints
// ============================================================
const presentPerfectContinuousHints: Hint[] = [
  {
    id: "ppc-formula",
    tense: "present-perfect-continuous",
    category: "formula",
    title: "have / has been + V-ing",
    text: "I have been working. She has been reading. They have been waiting.",
  },
  {
    id: "ppc-negative",
    tense: "present-perfect-continuous",
    category: "negation",
    title: "haven't / hasn't been + V-ing",
    text: "I haven't been sleeping well. She hasn't been working. They haven't been exercising.",
  },
  {
    id: "ppc-question",
    tense: "present-perfect-continuous",
    category: "question",
    title: "Have / Has + подлежащее + been + V-ing?",
    text: "Have you been waiting long? Has she been studying? What have you been doing?",
  },
  {
    id: "ppc-signal-for",
    tense: "present-perfect-continuous",
    category: "signal-words",
    title: "for = период (процесс)",
    text: "I've been waiting for two hours. She's been learning English for three years.",
  },
  {
    id: "ppc-signal-since",
    tense: "present-perfect-continuous",
    category: "signal-words",
    title: "since = точка во времени (процесс)",
    text: "She's been working since 8 o'clock. They've been living here since 2015.",
  },
  {
    id: "ppc-signal-all",
    tense: "present-perfect-continuous",
    category: "signal-words",
    title: "all day / morning / week / month",
    text: "It has been raining all day. He's been running all morning. They've been arguing all week.",
  },
  {
    id: "ppc-signal-how-long",
    tense: "present-perfect-continuous",
    category: "signal-words",
    title: "How long ... ?",
    text: "How long have you been learning English? How long has she been waiting?",
  },
  {
    id: "ppc-signal-recently",
    tense: "present-perfect-continuous",
    category: "signal-words",
    title: "recently, lately",
    text: "She has been travelling a lot recently. He's been working hard lately.",
  },
  {
    id: "ppc-usage-process",
    tense: "present-perfect-continuous",
    category: "usage",
    title: "Акцент на ПРОЦЕСС",
    text: "Подчёркивает, что действие длилось и может продолжаться: I've been reading this book for a week (ещё читаю).",
  },
  {
    id: "ppc-usage-evidence",
    tense: "present-perfect-continuous",
    category: "usage",
    title: "Видимое доказательство",
    text: "You look tired. Have you been running? The ground is wet. It has been raining.",
  },
  {
    id: "ppc-usage-repeated",
    tense: "present-perfect-continuous",
    category: "usage",
    title: "Повторяющиеся действия",
    text: "I've been trying to call you all day! He's been calling you for ages!",
  },
  {
    id: "ppc-no-stative",
    tense: "present-perfect-continuous",
    category: "stative",
    title: "Стативные → Present Perfect (НЕ Continuous!)",
    text: "I have had this car for 5 years (НЕ have been having). We have known each other for years (НЕ have been knowing).",
  },
  {
    id: "ppc-vs-perfect",
    tense: "present-perfect-continuous",
    category: "usage",
    title: "PPC vs PP: процесс vs результат",
    text: "PPC: I've been reading (= процесс, ещё читаю). PP: I've read the book (= результат, прочитал).",
  },
  {
    id: "ppc-spelling-ing",
    tense: "present-perfect-continuous",
    category: "spelling",
    title: "Правила -ing те же, что и в Continuous",
    text: "make → making, run → running, lie → lying. Правила орфографии -ing одинаковы для всех Continuous.",
  },
];

// ============================================================
// Present Final Test Hints (references to individual tense hints)
// ============================================================

// ============================================================
// All Hints Registry
// ============================================================

export const ALL_HINTS: Hint[] = [
  ...presentSimpleHints,
  ...presentContinuousHints,
  ...presentPerfectHints,
  ...presentPerfectContinuousHints,
];

// Build index for fast lookup
const hintById = new Map<string, Hint>();
for (const hint of ALL_HINTS) {
  hintById.set(hint.id, hint);
}

/** Get a single hint by ID */
export function getHintById(id: string): Hint | undefined {
  return hintById.get(id);
}

/** Get multiple hints by IDs, preserving order, filtering out missing */
export function getHintsByIds(ids: string[]): Hint[] {
  return ids.map((id) => hintById.get(id)).filter((h): h is Hint => h !== undefined);
}

/** Get all hints for a specific tense */
export function getHintsForTense(tense: TenseId): Hint[] {
  return ALL_HINTS.filter((h) => h.tense === tense);
}
