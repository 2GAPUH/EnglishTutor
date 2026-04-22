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
// Past Simple Hints
// ============================================================
const pastSimpleHints: Hint[] = [
  {
    id: "pts-formula-v2",
    tense: "past-simple",
    category: "formula",
    title: "V2 / V + ed (прошедшее время)",
    text: "Все лица одинаковы: I went, she went, they went. Правильный: worked. Неправильный: went.",
  },
  {
    id: "pts-negative",
    tense: "past-simple",
    category: "negation",
    title: "didn't + V1 (не V2!)",
    text: "Отрицание: didn't + V1. She didn't go (НЕ she didn't went!). После didn't глагол в начальной форме!",
  },
  {
    id: "pts-question",
    tense: "past-simple",
    category: "question",
    title: "Did + подлежащее + V1?",
    text: "Вопрос: Did + you + V1? Did you see (НЕ Did you saw!). После did глагол в V1.",
  },
  {
    id: "pts-wh-question",
    tense: "past-simple",
    category: "question",
    title: "Wh- + did + подлежащее + V1?",
    text: "What did you do? Where did she go? Why did he leave? How did they get there?",
  },
  {
    id: "pts-to-be",
    tense: "past-simple",
    category: "special",
    title: "was / were (глагол to be)",
    text: "I/he/she/it → was. You/we/they → were. Отрицание: wasn't / weren't. Вопрос: Was/Were...?",
  },
  {
    id: "pts-signal-time",
    tense: "past-simple",
    category: "signal-words",
    title: "yesterday, last..., ago, in + год",
    text: "yesterday, last night/week/month/year, 2 hours ago, in 2019 → Past Simple. Конкретное время в прошлом.",
  },
  {
    id: "pts-signal-just-now",
    tense: "past-simple",
    category: "signal-words",
    title: "just now, the other day",
    text: "just now = «только что» (завершено) → Past Simple. the other day = «на днях» → Past Simple. Не путать с just + Present Perfect!",
  },
  {
    id: "pts-spelling-ed",
    tense: "past-simple",
    category: "spelling",
    title: "Обычно: +ed",
    text: "work → worked, play → played, watch → watched, arrive → arrived.",
  },
  {
    id: "pts-spelling-ed-double",
    tense: "past-simple",
    category: "spelling",
    title: "Краткий гласный + 1 согласная → удваиваем +ed",
    text: "stop → stopped, plan → planned. Но: pack → packed (ck = 2 согласных), cook → cooked (2 гласных).",
  },
  {
    id: "pts-spelling-ed-y",
    tense: "past-simple",
    category: "spelling",
    title: "согласная + y → -ied",
    text: "study → studied, carry → carried, try → tried. Но: play → played (гласная + y).",
  },
  {
    id: "pts-spelling-ed-double-l",
    tense: "past-simple",
    category: "spelling",
    title: "Британский: l удваивается после краткого гласного",
    text: "travel → travelled, cancel → cancelled (брит.). Американский: traveled, canceled.",
  },
  {
    id: "pts-irregular",
    tense: "past-simple",
    category: "spelling",
    title: "Неправильные глаголы (V2)",
    text: "go→went, see→saw, eat→ate, write→wrote, buy→bought, make→made, take→took, give→gave.",
  },
  {
    id: "pts-irregular-common",
    tense: "past-simple",
    category: "spelling",
    title: "Частые неправильные глаголы",
    text: "come→came, get→got, have→had, leave→left, meet→met, teach→taught, bring→brought, think→thought, know→knew, feel→felt.",
  },
  {
    id: "pts-irregular-no-ed",
    tense: "past-simple",
    category: "spelling",
    title: "НЕ добавляй -ed к неправильным глаголам!",
    text: "go→went (НЕ goed), see→saw (НЕ seed), buy→bought (НЕ buyed), catch→caught (НЕ catched).",
  },
  {
    id: "pts-used-to",
    tense: "past-simple",
    category: "special",
    title: "used to + V1 = бывшая привычка",
    text: "He used to play football = раньше играл (теперь нет). Used to + V1. Не use to!",
  },
  {
    id: "pts-could",
    tense: "past-simple",
    category: "special",
    title: "could = Past Simple от can",
    text: "I could swim when I was five. Could = общая способность. Однократный успех → was able to / managed to.",
  },
  {
    id: "pts-had-to",
    tense: "past-simple",
    category: "special",
    title: "must → had to (прошедшая обязанность)",
    text: "Must не имеет прошедшей формы! Must → had to (был обязан). Didn't have to = не нужно было (отсутствие обязанности).",
  },
  {
    id: "pts-was-able-to",
    tense: "past-simple",
    category: "special",
    title: "was/were able to = удалось (однократно)",
    text: "Could = общая способность (мог). Was able to = удалось в конкретном случае. I was able to solve it.",
  },
  {
    id: "pts-reported-speech",
    tense: "past-simple",
    category: "special",
    title: "Косвенная речь: Present Simple → Past Simple",
    text: "She said she liked it (не likes). He told me he was tired (не is). Reported speech: сдвиг времени назад.",
  },
  {
    id: "pts-conditional",
    tense: "past-simple",
    category: "special",
    title: "Second Conditional: If + Past Simple, would + V1",
    text: "If I had money, I would buy it. Нереальное условие в настоящем/будущем. If + Past Simple, не потому что прошлое!",
  },
  {
    id: "pts-wish",
    tense: "past-simple",
    category: "special",
    title: "I wish + Past Simple = сожаление",
    text: "I wish I knew French = жаль, что не знаю. I wish I had more time. Wish + Past Simple для сожаления о настоящем.",
  },
];

// ============================================================
// Past Continuous Hints
// ============================================================
const pastContinuousHints: Hint[] = [
  {
    id: "ptc-formula",
    tense: "past-continuous",
    category: "formula",
    title: "was / were + V-ing",
    text: "I was reading. She was cooking. They were playing. I/he/she/it → was. You/we/they → were.",
  },
  {
    id: "ptc-negative",
    tense: "past-continuous",
    category: "negation",
    title: "wasn't / weren't + V-ing (не didn't!)",
    text: "I wasn't sleeping. They weren't listening. НЕ: I didn't sleeping или I didn't was sleeping!",
  },
  {
    id: "ptc-question",
    tense: "past-continuous",
    category: "question",
    title: "Was / Were + подлежащее + V-ing?",
    text: "Were you sleeping? Was she working? НЕ: Did you sleeping или Were you sleep?",
  },
  {
    id: "ptc-wh-question",
    tense: "past-continuous",
    category: "question",
    title: "Wh- + was/were + подлежащее + V-ing?",
    text: "What were you doing? Where was she going? Why were they running? Who was talking?",
  },
  {
    id: "ptc-signal-time",
    tense: "past-continuous",
    category: "signal-words",
    title: "at + время, this time yesterday, from...to",
    text: "at 8 pm, at 10 o'clock, this time yesterday, from 6 to 8 pm → точный момент в прошлом → Past Continuous.",
  },
  {
    id: "ptc-signal-whole",
    tense: "past-continuous",
    category: "signal-words",
    title: "all day/morning/week (завершённый период)",
    text: "It was raining all day yesterday. She was working all morning. Весь период → Past Continuous.",
  },
  {
    id: "ptc-usage-when",
    tense: "past-continuous",
    category: "usage",
    title: "when = прерывание (фон + Past Simple)",
    text: "I was reading when the phone rang. Фон = was reading (длился). Прерывание = rang (краткое, Past Simple).",
  },
  {
    id: "ptc-usage-while",
    tense: "past-continuous",
    category: "usage",
    title: "while = два параллельных действия",
    text: "While I was reading, she was listening. While требует Past Continuous в обоих частях.",
  },
  {
    id: "ptc-usage-background",
    tense: "past-continuous",
    category: "usage",
    title: "Описание обстановки (фон рассказа)",
    text: "The sun was shining and birds were singing. Фоновое описание → Past Continuous для всех действий.",
  },
  {
    id: "ptc-usage-arrived",
    tense: "past-continuous",
    category: "usage",
    title: "When I arrived, everyone was... (фон)",
    text: "When I arrived (краткое), everyone was dancing (фон, уже происходило). Краткое событие → PS, фон → PC.",
  },
  {
    id: "ptc-irritate",
    tense: "past-continuous",
    category: "usage",
    title: "was always + V-ing = раздражение в прошлом",
    text: "She was always complaining! He was always losing his keys! = раздражающая привычка в прошлом.",
  },
  {
    id: "ptc-constantly",
    tense: "past-continuous",
    category: "usage",
    title: "was constantly + V-ing (синоним always)",
    text: "was constantly interrupting = раздражение. Синоним was always interrupting.",
  },
  {
    id: "ptc-polite",
    tense: "past-continuous",
    category: "usage",
    title: "I was wondering / I was hoping = вежливость",
    text: "I was wondering if you could help. I was hoping you could come. = вежливая форма просьбы в прошлом.",
  },
  {
    id: "ptc-no-routine",
    tense: "past-continuous",
    category: "usage",
    title: "Привычки ≠ Past Continuous!",
    text: "When I was young, I played every day → Past Simple (НЕ was playing). Every day = привычка → PS, не PC.",
  },
  {
    id: "ptc-no-was-went",
    tense: "past-continuous",
    category: "special",
    title: "Ошибка: «was went» не существует!",
    text: "Нельзя: I was went. Правильно: I went (Past Simple) или I was going (Past Continuous).",
  },
  {
    id: "ptc-stative",
    tense: "past-continuous",
    category: "stative",
    title: "Стативные глаголы → Past Simple (не PC!)",
    text: "She knew (НЕ was knowing). I wanted (НЕ was wanting). Know, want, like, believe → Past Simple.",
  },
  {
    id: "ptc-dual-think",
    tense: "past-continuous",
    category: "stative",
    title: "think: мнение → Simple, размышление → Continuous",
    text: "I thought it was good = мнение → PS. I was thinking about my future = размышлял → PC.",
  },
  {
    id: "ptc-dual-see",
    tense: "past-continuous",
    category: "stative",
    title: "see: видеть → Simple, быть на приёме → Continuous",
    text: "I saw him = видел → PS. She was seeing the doctor = была на приёме → PC.",
  },
  {
    id: "ptc-dual-have",
    tense: "past-continuous",
    category: "stative",
    title: "have: владеть → Simple, действие → Continuous",
    text: "I had a car = владел → PS. I was having dinner = обедал → PC.",
  },
  {
    id: "ptc-dual-feel",
    tense: "past-continuous",
    category: "stative",
    title: "feel: состояние → Simple, процесс → Continuous",
    text: "I felt happy = чувствовал себя → PS. I was feeling well = процесс (можно и PC).",
  },
];

// ============================================================
// Past Perfect Hints
// ============================================================
const pastPerfectHints: Hint[] = [
  {
    id: "ptp-formula",
    tense: "past-perfect",
    category: "formula",
    title: "had + V3 (для всех лиц)",
    text: "Все лица одинаковы: I/You/He/She/It/We/They had + V3. V3 = 3-я форма глагола (past participle): worked, gone, seen, written.",
  },
  {
    id: "ptp-negative",
    tense: "past-perfect",
    category: "negation",
    title: "hadn't + V3",
    text: "Отрицание: had not (hadn't) + V3. I hadn't finished. She hadn't arrived. НЕ: didn't have + V3.",
  },
  {
    id: "ptp-question",
    tense: "past-perfect",
    category: "question",
    title: "Had + подлежащее + V3?",
    text: "Вопрос: Had you finished? Had she arrived? Had they left? Краткий ответ: Yes, I had. / No, I hadn't.",
  },
  {
    id: "ptp-wh-question",
    tense: "past-perfect",
    category: "question",
    title: "Wh- + had + подлежащее + V3?",
    text: "What had you done? Where had she gone? Why had he left? How long had they waited?",
  },
  {
    id: "ptp-signal-by-the-time",
    tense: "past-perfect",
    category: "signal-words",
    title: "by the time — к тому времени как",
    text: "By the time I arrived, she had left. Почти ВСЕГДА требует Past Perfect для более раннего действия.",
  },
  {
    id: "ptp-signal-before",
    tense: "past-perfect",
    category: "signal-words",
    title: "before — до того как",
    text: "Before I got there, the film had started. Before задаёт порядок, поэтому PS тоже допустим, но PP — точнее.",
  },
  {
    id: "ptp-signal-after",
    tense: "past-perfect",
    category: "signal-words",
    title: "after — после того как",
    text: "After she had finished, she went home. After задаёт порядок, поэтому PS тоже допустим.",
  },
  {
    id: "ptp-signal-already",
    tense: "past-perfect",
    category: "signal-words",
    title: "already — уже (в Past Perfect)",
    text: "I had already eaten when they invited me. Already ставится между had и V3: had already finished.",
  },
  {
    id: "ptp-signal-just",
    tense: "past-perfect",
    category: "signal-words",
    title: "just — только что (в Past Perfect)",
    text: "He had just left when I called. Just ставится между had и V3: had just finished.",
  },
  {
    id: "ptp-signal-never",
    tense: "past-perfect",
    category: "signal-words",
    title: "never — никогда (до момента в прошлом)",
    text: "She had never travelled abroad before that trip. I had never tried sushi until that day.",
  },
  {
    id: "ptp-signal-until",
    tense: "past-perfect",
    category: "signal-words",
    title: "until — до (момента в прошлом)",
    text: "I hadn't finished until midnight. He hadn't left until she called.",
  },
  {
    id: "ptp-signal-by",
    tense: "past-perfect",
    category: "signal-words",
    title: "by + момент — к определённому моменту",
    text: "By 6 pm, I had completed the task. By Friday, she had finished the report.",
  },
  {
    id: "ptp-usage-precedence",
    tense: "past-perfect",
    category: "usage",
    title: "Действие произошло РАНЬШЕ другого",
    text: "When I arrived, she had left. (left = раньше, arrived = позже). PP показывает, какое из двух действий было первым.",
  },
  {
    id: "ptp-usage-duration",
    tense: "past-perfect",
    category: "usage",
    title: "for / since + Past Perfect",
    text: "She had worked there for 5 years before she resigned. He had known her since 2010. Длительность до момента в прошлом.",
  },
  {
    id: "ptp-stative",
    tense: "past-perfect",
    category: "stative",
    title: "Стативные глаголы в Past Perfect",
    text: "I had known her for years (НЕ had been knowing). I had wanted to visit (НЕ had been wanting).",
  },
  {
    id: "ptp-vs-past-simple",
    tense: "past-perfect",
    category: "usage",
    title: "PP vs PS: когда PP НЕ нужен?",
    text: "Когда порядок ясен: I woke up, had breakfast, went to work (все PS). С yesterday/ago/last week — только PS.",
  },
  {
    id: "ptp-vs-past-continuous",
    tense: "past-perfect",
    category: "usage",
    title: "PP vs PC: результат vs процесс",
    text: "She had cleaned the room (результат к моменту). She was cleaning the room (процесс в определённый момент).",
  },
  {
    id: "ptp-no-specific-time",
    tense: "past-perfect",
    category: "special",
    title: "yesterday/ago/last → Past Simple!",
    text: "I went there yesterday (НЕ had gone). She called last night (НЕ had called). Конкретное время → PS, не PP.",
  },
  {
    id: "ptp-special-first-time",
    tense: "past-perfect",
    category: "special",
    title: "the first/last time + Past Perfect",
    text: "It was the first time she had visited London. That was the last time I had seen him.",
  },
  {
    id: "ptp-special-hardly-when",
    tense: "past-perfect",
    category: "special",
    title: "hardly / scarcely / no sooner + when",
    text: "She had hardly entered the room when the phone rang. He had no sooner finished than the boss called.",
  },
];

// ============================================================
// Past Perfect Continuous Hints
// ============================================================
const pastPerfectContinuousHints: Hint[] = [
  {
    id: "ptpc-formula",
    tense: "past-perfect-continuous",
    category: "formula",
    title: "had been + V-ing (все лица)",
    text: "Все лица одинаковы: I/You/He/She/It/We/They had been + V-ing. I had been working. She had been reading. They had been waiting.",
  },
  {
    id: "ptpc-formula-short",
    tense: "past-perfect-continuous",
    category: "formula",
    title: "Сокращённая форма: I'd been, she'd been",
    text: "I'd been working = I had been working. She'd been waiting = She had been waiting. They'd been studying = They had been studying.",
  },
  {
    id: "ptpc-negative",
    tense: "past-perfect-continuous",
    category: "negation",
    title: "hadn't been + V-ing",
    text: "Отрицание: had not (hadn't) been + V-ing. I hadn't been sleeping well. She hadn't been working. They hadn't been exercising.",
  },
  {
    id: "ptpc-negative-no-did",
    tense: "past-perfect-continuous",
    category: "negation",
    title: "НЕ: didn't been / wasn't been!",
    text: "Частая ошибка: I didn't been working ❌ или I wasn't been working ❌. Правильно: I hadn't been working ✓. Только hadn't!",
  },
  {
    id: "ptpc-question",
    tense: "past-perfect-continuous",
    category: "question",
    title: "Had + подлежащее + been + V-ing?",
    text: "Had you been waiting long? Had she been studying? Had they been working hard? Had ставится перед подлежащим.",
  },
  {
    id: "ptpc-wh-question",
    tense: "past-perfect-continuous",
    category: "question",
    title: "Wh- + had + подлежащее + been + V-ing?",
    text: "What had you been doing? Where had she been working? How long had they been waiting? Why had he been running?",
  },
  {
    id: "ptpc-short-answers",
    tense: "past-perfect-continuous",
    category: "question",
    title: "Краткие ответы: Yes, I had. / No, I hadn't.",
    text: "Had you been waiting? — Yes, I had. / No, I hadn't. Краткий ответ: had / hadn't, БЕЗ been и БЕЗ V-ing.",
  },
  {
    id: "ptpc-signal-for",
    tense: "past-perfect-continuous",
    category: "signal-words",
    title: "for + период до момента в прошлом",
    text: "She had been working there for 5 years before she quit. I'd been waiting for two hours when he finally came.",
  },
  {
    id: "ptpc-signal-since",
    tense: "past-perfect-continuous",
    category: "signal-words",
    title: "since + точка во времени до момента в прошлом",
    text: "He had been living there since 2010 before he moved. She'd been studying since morning when the exam started.",
  },
  {
    id: "ptpc-signal-by-the-time",
    tense: "past-perfect-continuous",
    category: "signal-words",
    title: "by the time + Past Simple → PPC",
    text: "By the time I arrived, they had been waiting for an hour. К тому времени как — подчёркивает длительность до момента.",
  },
  {
    id: "ptpc-signal-before",
    tense: "past-perfect-continuous",
    category: "signal-words",
    title: "before + Past Simple",
    text: "Before she left, she had been working there for years. Before = до того как, подчёркивает длительность предшествующего действия.",
  },
  {
    id: "ptpc-signal-all",
    tense: "past-perfect-continuous",
    category: "signal-words",
    title: "all day / morning / week",
    text: "It had been raining all day before it finally stopped. He'd been running all morning before the race was cancelled.",
  },
  {
    id: "ptpc-signal-how-long",
    tense: "past-perfect-continuous",
    category: "signal-words",
    title: "How long had ... been + V-ing?",
    text: "How long had you been living there before you moved? How long had she been studying before the exam?",
  },
  {
    id: "ptpc-usage-duration",
    tense: "past-perfect-continuous",
    category: "usage",
    title: "Действие длилось до другого действия в прошлом",
    text: "I had been reading for two hours when she called. Подчёркивается ПРОЦЕСС, который длился до определённого момента в прошлом.",
  },
  {
    id: "ptpc-usage-visible-result",
    tense: "past-perfect-continuous",
    category: "usage",
    title: "Видимое доказательство в прошлом",
    text: "She was wet because it had been raining. He was exhausted — he had been running for hours. Результат виден, но процесс уже завершился.",
  },
  {
    id: "ptpc-usage-repeated",
    tense: "past-perfect-continuous",
    category: "usage",
    title: "Повторяющиеся действия до момента в прошлом",
    text: "I had been trying to call her all day before she finally answered. He'd been complaining about it for weeks before they fixed it.",
  },
  {
    id: "ptpc-vs-past-perfect",
    tense: "past-perfect-continuous",
    category: "usage",
    title: "PPC vs PP: процесс/длительность vs результат/количество",
    text: "PPC: I had been reading (процесс, длилось). PP: I had read the book (результат, прочитал). PPC = акцент на процессе, PP = акцент на результате.",
  },
  {
    id: "ptpc-vs-past-continuous",
    tense: "past-perfect-continuous",
    category: "usage",
    title: "PPC vs PC: период до момента vs точный момент",
    text: "PPC: I had been waiting for an hour (период до другого события). PC: I was waiting at 5 pm (в конкретный момент в прошлом). PPC = до, PC = в момент.",
  },
  {
    id: "ptpc-stative",
    tense: "past-perfect-continuous",
    category: "stative",
    title: "Стативные глаголы → Past Perfect (НЕ PPC!)",
    text: "I had known her for years (НЕ had been knowing). She had wanted to visit (НЕ had been wanting). Стативные глаголы НЕ используются в Continuous формах.",
  },
  {
    id: "ptpc-stative-list",
    tense: "past-perfect-continuous",
    category: "stative",
    title: "Список стативных глаголов",
    text: "know, believe, want, like, love, hate, need, belong, cost, mean, understand, remember, forget, seem, appear — все → Past Perfect, НЕ PPC.",
  },
  {
    id: "ptpc-spelling-ing",
    tense: "past-perfect-continuous",
    category: "spelling",
    title: "Правила -ing те же, что и в других Continuous",
    text: "drop -e: make → making. -ie → -y: lie → lying. Правила орфографии -ing одинаковы для всех Continuous: PC, PPC, PTC, PTPC.",
  },
  {
    id: "ptpc-spelling-double",
    tense: "past-perfect-continuous",
    category: "spelling",
    title: "Удвоение согласной для -ing",
    text: "Краткий гласный + 1 согласная → удваиваем: run → running, sit → sitting, stop → stopping, plan → planning, get → getting.",
  },
  {
    id: "ptpc-no-specific-time",
    tense: "past-perfect-continuous",
    category: "special",
    title: "yesterday / ago / last → Past Simple, НЕ PPC!",
    text: "I went there yesterday (НЕ had been going). She called last night (НЕ had been calling). Конкретное время → Past Simple.",
  },
  {
    id: "ptpc-special-not-needed",
    tense: "past-perfect-continuous",
    category: "special",
    title: "PPC не нужен, если before/after уже показывают порядок",
    text: "After she had worked there for years, she quit. After уже показывает порядок — Past Simple тоже допустим: After she worked there for years, she quit.",
  },
  {
    id: "ptpc-special-had-been-being",
    tense: "past-perfect-continuous",
    category: "special",
    title: "had been being — технически возможно, но крайне редко",
    text: "The house had been being painted for weeks. (Пассивный PPC). Форма exists, но почти не используется. Обычно заменяют Past Perfect Passive: The house had been painted.",
  },
];

// ============================================================
// Future Simple Hints
// ============================================================
const futureSimpleHints: Hint[] = [
  // --- Formula (4) ---
  {
    id: "fts-formula",
    tense: "future-simple",
    category: "formula",
    title: "will + V1 (утверждение)",
    text: "Все лица одинаковы: I will go, she will go, they will go. Will + глагол в начальной форме (V1). I'll go = сокращённая форма.",
  },
  {
    id: "fts-negative",
    tense: "future-simple",
    category: "negation",
    title: "won't + V1 (отрицание)",
    text: "Отрицание: will not (won't) + V1. I won't go. She won't come. They won't agree. Won't = will not. После won't глагол в V1!",
  },
  {
    id: "fts-question",
    tense: "future-simple",
    category: "question",
    title: "Will + подлежащее + V1?",
    text: "Вопрос: Will + подлежащее + V1? Will you come? Will she agree? Will they help? Краткий ответ: Yes, I will. / No, I won't.",
  },
  {
    id: "fts-wh-question",
    tense: "future-simple",
    category: "question",
    title: "Wh- + will + подлежащее + V1?",
    text: "Специальный вопрос: What will you do? Where will she go? When will they arrive? How will he get there? Why will you leave?",
  },

  // --- Signal words (4) ---
  {
    id: "fts-signal-tomorrow",
    tense: "future-simple",
    category: "signal-words",
    title: "tomorrow, next week/month, soon",
    text: "tomorrow, next week, next month, next year, soon, the day after tomorrow — маркеры будущего времени. Но: при заранее запланированном действии → be going to или Present Continuous.",
  },
  {
    id: "fts-signal-in",
    tense: "future-simple",
    category: "signal-words",
    title: "in + период (in 5 minutes, in 2 years)",
    text: "in 5 minutes, in two hours, in a week, in 3 years — через определённый период. I'll be back in 10 minutes. She'll finish in an hour.",
  },
  {
    id: "fts-signal-prediction",
    tense: "future-simple",
    category: "signal-words",
    title: "I think, I believe, probably, definitely",
    text: "I think it will rain. I believe she will come. He'll probably win. They'll definitely agree. Эти слова часто сопровождают предсказания → Future Simple.",
  },
  {
    id: "fts-signal-time-clauses",
    tense: "future-simple",
    category: "signal-words",
    title: "when, before, after, until, as soon as + Present Simple",
    text: "В придаточных времени: when I arrive (НЕ will arrive), before she comes, after they leave, until he returns, as soon as I finish. Главное предложение — will, придаточное — Present Simple!",
  },

  // --- Usage (6) ---
  {
    id: "fts-usage-onetime",
    tense: "future-simple",
    category: "usage",
    title: "Одноразовое действие в будущем",
    text: "Действие произойдёт один раз: I'll call you tomorrow. She will visit her grandmother next week. Они не являются ни планом, ни предсказанием — просто факт будущего.",
  },
  {
    id: "fts-usage-spontaneous",
    tense: "future-simple",
    category: "usage",
    title: "Спонтанное решение",
    text: "Решение, принятое в момент речи: «The phone is ringing — I'll answer it!» «It's cold — I'll close the window.» Не было плана заранее → will, не be going to!",
  },
  {
    id: "fts-usage-prediction",
    tense: "future-simple",
    category: "usage",
    title: "Предсказание (без очевидных доказательств)",
    text: "Мнение или догадка о будущем: I think she'll like it. He'll probably pass the exam. Без очевидных доказательств сейчас → will. С доказательствами → be going to.",
  },
  {
    id: "fts-usage-promise",
    tense: "future-simple",
    category: "usage",
    title: "Обещание",
    text: "I'll call you tomorrow, I promise. I won't forget. She'll be there on time. Обещание = will / won't, даже если это намерение на будущее.",
  },
  {
    id: "fts-usage-threat",
    tense: "future-simple",
    category: "usage",
    title: "Угроза / предупреждение",
    text: "I'll tell the teacher! You'll regret this! If you don't stop, I'll call the police. Угроза и предупреждение = will + V1.",
  },
  {
    id: "fts-usage-offer",
    tense: "future-simple",
    category: "usage",
    title: "Предложение / просьба (Shall I...? / Will you...?)",
    text: "Предложение помощи: Shall I open the window? Shall we go? Просьба: Will you help me? Will you close the door, please? Shall = предложение для I/we (британский английский).",
  },

  // --- Special (6) ---
  {
    id: "fts-vs-going-to",
    tense: "future-simple",
    category: "special",
    title: "Future Simple vs be going to",
    text: "will = спонтанное решение, предсказание без доказательств, обещание. be going to = заранее запланированное, предсказание с доказательствами (Look at those clouds — it's going to rain!). План → going to, импульс → will.",
  },
  {
    id: "fts-vs-present-simple",
    tense: "future-simple",
    category: "special",
    title: "Future Simple vs Present Simple (расписание)",
    text: "Расписание (поезда, самолёты, кино): The train leaves at 6 pm → Present Simple. Личное намерение: I'll take the 6 pm train → Future Simple. Расписание = факт, не личный план.",
  },
  {
    id: "fts-vs-present-continuous",
    tense: "future-simple",
    category: "special",
    title: "Future Simple vs Present Continuous (планы)",
    text: "Present Continuous = договорённость с кем-то: I'm meeting John tomorrow (договорились). Future Simple = спонтанное: I'll meet John tomorrow (только что решил). Договорённость → PC, импульс → will.",
  },
  {
    id: "fts-shall",
    tense: "future-simple",
    category: "special",
    title: "shall для I/we в британском английском",
    text: "Британский: I shall go. We shall see. В разговорной речи чаще will. Shall используется в предложениях: Shall we dance? Shall I help you? Американский английский — почти всегда will.",
  },
  {
    id: "fts-first-conditional",
    tense: "future-simple",
    category: "special",
    title: "First Conditional (if + PS, will + V1)",
    text: "Реальное условие в будущем: If it rains, I will stay home. If you study hard, you will pass. Придаточное (if) = Present Simple, главное = will + V1. НЕ: If it will rain!",
  },
  {
    id: "fts-time-clauses",
    tense: "future-simple",
    category: "special",
    title: "Временные придаточные (when/if + Present Simple, NOT will)",
    text: "When I arrive, I'll call you (НЕ when I will arrive). Before she comes, we'll prepare. After they leave, we'll clean. Until you return, I'll wait. В придаточных времени и условия — Present Simple, не will!",
  },

  // --- Stative (2) ---
  {
    id: "fts-stative",
    tense: "future-simple",
    category: "stative",
    title: "Стативные глаголы + Future Simple",
    text: "Стативные глаголы НЕ используются в Future Continuous: I will know (НЕ will be knowing). She will understand (НЕ will be understanding). Стативные → Future Simple.",
  },
  {
    id: "fts-stative-list",
    tense: "future-simple",
    category: "stative",
    title: "Список стативных глаголов",
    text: "know, believe, want, like, love, hate, need, belong, cost, mean, understand, remember, forget, seem, appear, prefer, realise, suppose — все → Future Simple (will + V1), НЕ Future Continuous.",
  },

  // --- Other (2) ---
  {
    id: "fts-wont-refusal",
    tense: "future-simple",
    category: "special",
    title: "won't = отказ (the car won't start)",
    text: "Won't может выражать отказ вещи или человека что-то делать: The car won't start = машина не заводится (отказывается). She won't listen = она не слушает (отказывается). Это не будущее, а свойство/упрямство.",
  },
  {
    id: "fts-no-double-future",
    tense: "future-simple",
    category: "special",
    title: "Нет двойного будущего (NOT «when I will arrive»)",
    text: "НЕ ставь will дважды: When I arrive, I'll call you ✓ (НЕ when I will arrive, I will call you). If she comes, we'll go ✓ (НЕ if she will come). Одно will на предложение — в главном!",
  },
];

// ============================================================
// All Hints Registry
// ============================================================

export const ALL_HINTS: Hint[] = [
  ...presentSimpleHints,
  ...presentContinuousHints,
  ...presentPerfectHints,
  ...presentPerfectContinuousHints,
  ...pastSimpleHints,
  ...pastContinuousHints,
  ...pastPerfectHints,
  ...pastPerfectContinuousHints,
  ...futureSimpleHints,
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
