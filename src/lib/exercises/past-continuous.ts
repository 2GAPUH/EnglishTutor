import type { Exercise } from "@/lib/tutor-data";

// ============================================================
// Past Continuous — 50 exercises (18 MC, 15 fill, 17 translate)
// ============================================================

export const pastContinuousExercises: Exercise[] = [
  // ===== Multiple Choice (1–18) =====
  // Формы was/were + V-ing
  { id: 1, tense: "past-continuous", type: "multiple_choice", question: "I ___ TV at 8 pm yesterday.", options: ["was watching", "watched", "were watching", "watch"], correctAnswer: "was watching", explanation: "I → was + watching. At 8 pm = точный момент → Past Continuous." },
  { id: 2, tense: "past-continuous", type: "multiple_choice", question: "They ___ football when it started raining.", options: ["played", "were playing", "was playing", "play"], correctAnswer: "were playing", explanation: "They → were + playing. When + Past Simple = фон → Past Continuous." },
  { id: 3, tense: "past-continuous", type: "multiple_choice", question: "She ___ a book while he ___ dinner.", options: ["was reading / was cooking", "read / cooked", "was reading / cooked", "read / was cooking"], correctAnswer: "was reading / was cooking", explanation: "While = два параллельных длительных действия → оба Past Continuous." },
  { id: 4, tense: "past-continuous", type: "multiple_choice", question: "We ___ not ___ to music at that time.", options: ["were / listening", "was / listening", "did / listen", "were / listen"], correctAnswer: "were / listening", explanation: "We → were. Отрицание: were not listening (не didn't!)." },
  { id: 5, tense: "past-continuous", type: "multiple_choice", question: "___ you sleeping when I called?", options: ["Were", "Was", "Did", "Are"], correctAnswer: "Were", explanation: "You → Were. Вопрос с Past Continuous: Were + you + V-ing?" },
  { id: 6, tense: "past-continuous", type: "multiple_choice", question: "He ___ the whole evening yesterday.", options: ["was studying", "studied", "were studying", "is studying"], correctAnswer: "was studying", explanation: "He → was. The whole evening = длительный период → was studying." },
  // Past Continuous vs Past Simple (when/while)
  { id: 7, tense: "past-continuous", type: "multiple_choice", question: "I ___ a shower when the phone ___ .", options: ["was having / rang", "had / rang", "was having / was ringing", "had / was ringing"], correctAnswer: "was having / rang", explanation: "Фон (длился) = was having. Прерывание (краткое) = rang (Past Simple)." },
  { id: 8, tense: "past-continuous", type: "multiple_choice", question: "While she ___ the room, she ___ an old photograph.", options: ["was cleaning / found", "cleaned / was finding", "cleaned / found", "was cleaning / was finding"], correctAnswer: "was cleaning / found", explanation: "While + фон = was cleaning. Краткое прерывание = found (Past Simple)." },
  { id: 9, tense: "past-continuous", type: "multiple_choice", question: "The children ___ in the garden when it ___ to rain.", options: ["were playing / started", "played / started", "were playing / was starting", "played / was starting"], correctAnswer: "were playing / started", explanation: "Дети играли (фон) → were playing. Начался дождь (прерывание) → started." },
  { id: 10, tense: "past-continuous", type: "multiple_choice", question: "When I arrived, everyone ___ .", options: ["was dancing", "danced", "were dancing", "dance"], correctAnswer: "was dancing", explanation: "When I arrived (краткое) — фон, что было уже: everyone was dancing." },
  // Stative verbs — НЕ в Continuous
  { id: 11, tense: "past-continuous", type: "multiple_choice", question: "She ___ the answer when the teacher asked.", options: ["knew", "was knowing", "knowed", "knows"], correctAnswer: "knew", explanation: "Know = stative verb, НЕ используется в Continuous → knew (Past Simple)." },
  { id: 12, tense: "past-continuous", type: "multiple_choice", question: "I ___ to call you, but I was busy.", options: ["wanted", "was wanting", "want", "wants"], correctAnswer: "wanted", explanation: "Want = stative verb → wanted (Past Simple), НЕ was wanting." },
  { id: 13, tense: "past-continuous", type: "multiple_choice", question: "He ___ a good film when I saw him.", options: ["was having", "had", "were having", "have"], correctAnswer: "was having", explanation: "Have lunch = есть (НЕ владеть) → можно в Continuous: was having." },
  // Описание обстановки
  { id: 14, tense: "past-continuous", type: "multiple_choice", question: "The sun ___ and birds ___ when we arrived at the park.", options: ["was shining / were singing", "shone / sang", "was shining / sang", "shone / were singing"], correctAnswer: "was shining / were singing", explanation: "Описание обстановки (фон рассказа) → оба Past Continuous." },
  // always + Past Continuous (раздражение)
  { id: 15, tense: "past-continuous", type: "multiple_choice", question: "She ___ always ___ about the weather!", options: ["was / complaining", "complained / about", "were / complaining", "is / complaining"], correctAnswer: "was / complaining", explanation: "Always + Past Continuous = раздражение по поводу прошлой привычки." },
  // Вежливые вопросы
  { id: 16, tense: "past-continuous", type: "multiple_choice", question: "I ___ wondering if you could help me.", options: ["was", "were", "did", "had"], correctAnswer: "was", explanation: "I was wondering = вежливая форма в прошлом." },
  // Typica errors
  { id: 17, tense: "past-continuous", type: "multiple_choice", question: "What ___ at the party last night?", options: ["were you doing", "did you do", "was you doing", "you were doing"], correctAnswer: "were you doing", explanation: "What + you → were. Вопрос в Past Continuous: Were you doing?" },
  { id: 18, tense: "past-continuous", type: "multiple_choice", question: "I ___ to sleep when I heard a noise.", options: ["was trying", "tried", "were trying", "try"], correctAnswer: "was trying", explanation: "I → was + trying. Процесс (пытался уснуть) = Past Continuous." },

  // ===== Fill in the Blank (19–33) =====
  { id: 19, tense: "past-continuous", type: "fill_blank", question: "I ___ (read) a book at 9 pm last night.", correctAnswer: "was reading", explanation: "I → was. At 9 pm = момент в прошлом → was reading." },
  { id: 20, tense: "past-continuous", type: "fill_blank", question: "She ___ (not / sleep) when I called her.", correctAnswer: "wasn't sleeping", explanation: "She → was. Отрицание: wasn't sleeping (не didn't sleep!)." },
  { id: 21, tense: "past-continuous", type: "fill_blank", question: "___ (they / work) when you arrived?", correctAnswer: "Were they working", explanation: "They → Were. Вопрос: Were + they + V-ing?" },
  { id: 22, tense: "past-continuous", type: "fill_blank", question: "We ___ (have) dinner when the lights went out.", correctAnswer: "were having", explanation: "We → were. Have dinner = есть → можно в Continuous: were having." },
  { id: 23, tense: "past-continuous", type: "fill_blank", question: "He ___ (walk) home when he met Sarah.", correctAnswer: "was walking", explanation: "He → was. When + краткое → фон = was walking." },
  { id: 24, tense: "past-continuous", type: "fill_blank", question: "While I ___ (cook), the children ___ (play) in the garden.", correctAnswer: "was cooking / were playing", explanation: "While = два параллельных действия → was cooking + were playing." },
  { id: 25, tense: "past-continuous", type: "fill_blank", question: "It ___ (rain) all day yesterday.", correctAnswer: "was raining", explanation: "It → was. All day = длился весь период → was raining." },
  { id: 26, tense: "past-continuous", type: "fill_blank", question: "They ___ (not / listen) to the teacher.", correctAnswer: "weren't listening", explanation: "They → weren't. Отрицание: weren't listening." },
  { id: 27, tense: "past-continuous", type: "fill_blank", question: "___ (it / snow) when you left the house?", correctAnswer: "Was it snowing", explanation: "It → Was. Вопрос: Was it snowing?" },
  { id: 28, tense: "past-continuous", type: "fill_blank", question: "I ___ (study) English from 6 to 8 pm.", correctAnswer: "was studying", explanation: "I → was. From...to = длительный период → was studying." },
  { id: 29, tense: "past-continuous", type: "fill_blank", question: "She ___ (always / lose) her keys last year!", correctAnswer: "was always losing", explanation: "Always + Past Continuous = раздражение: was always losing." },
  { id: 30, tense: "past-continuous", type: "fill_blank", question: "The dog ___ (run) after the cat when I saw them.", correctAnswer: "was running", explanation: "The dog → was. When + краткое (saw) → фон = was running." },
  { id: 31, tense: "past-continuous", type: "fill_blank", question: "What ___ (you / do) at 10 o'clock last night?", correctAnswer: "were you doing", explanation: "What + you → were. Вопрос: were you doing?" },
  { id: 32, tense: "past-continuous", type: "fill_blank", question: "While he ___ (drive), he ___ (see) an accident.", correctAnswer: "was driving / saw", explanation: "While + фон = was driving. Краткое = saw (Past Simple)." },
  { id: 33, tense: "past-continuous", type: "fill_blank", question: "I ___ (not / work) yesterday. I ___ (stay) at home.", correctAnswer: "wasn't working / was staying", explanation: "Отрицание: wasn't working. Параллельное: was staying." },

  // ===== Translate RU → EN (34–50) =====
  { id: 34, tense: "past-continuous", type: "translate_ru_en", question: "Я смотрел телевизор в 8 вечера.", correctAnswer: "I was watching TV at 8 pm", explanation: "I → was + watching. В 8 вечера = точный момент." },
  { id: 35, tense: "past-continuous", type: "translate_ru_en", question: "Они играли в футбол, когда начался дождь.", correctAnswer: "They were playing football when it started raining", explanation: "Фон: were playing. Прерывание: started (Past Simple)." },
  { id: 36, tense: "past-continuous", type: "translate_ru_en", question: "Она готовила ужин, когда я позвонил.", correctAnswer: "She was cooking dinner when I called", explanation: "Фон: was cooking. Прерывание: called (Past Simple)." },
  { id: 37, tense: "past-continuous", type: "translate_ru_en", question: "Пока он читал, она слушала музыку.", correctAnswer: "While he was reading, she was listening to music", explanation: "While = два параллельных: was reading + was listening." },
  { id: 38, tense: "past-continuous", type: "translate_ru_en", question: "Мы не слушали учителя.", correctAnswer: "We weren't listening to the teacher", explanation: "We → weren't listening (НЕ didn't listen)." },
  { id: 39, tense: "past-continuous", type: "translate_ru_en", question: "Ты делал домашнее задание вчера вечером?", correctAnswer: "Were you doing your homework yesterday evening", explanation: "You → Were. Вопрос: Were you doing?" },
  { id: 40, tense: "past-continuous", type: "translate_ru_en", question: "Шёл дождь весь день вчера.", correctAnswer: "It was raining all day yesterday", explanation: "It → was. All day = длился → was raining." },
  { id: 41, tense: "past-continuous", type: "translate_ru_en", question: "Солнце светило, а птицы пели.", correctAnswer: "The sun was shining and the birds were singing", explanation: "Описание обстановки → оба Past Continuous." },
  { id: 42, tense: "past-continuous", type: "translate_ru_en", question: "Он вечно терял ключи в прошлом году!", correctAnswer: "He was always losing his keys last year", explanation: "Always + Past Continuous = раздражение." },
  { id: 43, tense: "past-continuous", type: "translate_ru_en", question: "Что ты делал в 10 часов вечера?", correctAnswer: "What were you doing at 10 pm", explanation: "What + you → were. Вопрос: were you doing?" },
  { id: 44, tense: "past-continuous", type: "translate_ru_en", question: "Я хотел спросить, не могли бы вы помочь.", correctAnswer: "I was wondering if you could help me", explanation: "I was wondering = вежливая форма вопроса." },
  { id: 45, tense: "past-continuous", type: "translate_ru_en", question: "Дети спали, когда мы вернулись.", correctAnswer: "The children were sleeping when we got back", explanation: "Фон: were sleeping. Прерывание: got back (Past Simple)." },
  { id: 46, tense: "past-continuous", type: "translate_ru_en", question: "Она работала в саду весь день.", correctAnswer: "She was working in the garden all day", explanation: "She → was. All day → was working." },
  { id: 47, tense: "past-continuous", type: "translate_ru_en", question: "Когда я вошёл, все танцевали.", correctAnswer: "When I came in, everyone was dancing", explanation: "Краткое (came) + фон (was dancing)." },
  { id: 48, tense: "past-continuous", type: "translate_ru_en", question: "Он пытался уснуть, но не мог.", correctAnswer: "He was trying to sleep, but he couldn't", explanation: "Процесс: was trying to sleep. Couldn't = Past Simple от can." },
  { id: 49, tense: "past-continuous", type: "translate_ru_en", question: "Пока мы гуляли, мы видели старого друга.", correctAnswer: "While we were walking, we saw an old friend", explanation: "While + фон = were walking. Краткое = saw (Past Simple)." },
  { id: 50, tense: "past-continuous", type: "translate_ru_en", question: "Я обедал, когда она пришла.", correctAnswer: "I was having lunch when she arrived", explanation: "Have lunch = есть → was having lunch. Пришла = arrived (Past Simple)." },
];
