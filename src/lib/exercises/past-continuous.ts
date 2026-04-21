import type { Exercise } from "@/lib/tutor-data";

// ============================================================
// Past Continuous — 100 exercises (36 MC, 31 fill, 33 translate)
// 1–50: original set  |  51–100: extended set (missing topics)
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

  // ===== NEW: Exercises 51–100 (18 MC, 16 fill, 16 translate) =====

  // ===== Multiple Choice (51–68) =====
  // Wh-вопросы (What / Where / Who / Why / How)
  { id: 51, tense: "past-continuous", type: "multiple_choice", question: "What ___ at this time yesterday?", options: ["were you doing", "did you do", "was you doing", "you were doing"], correctAnswer: "were you doing", explanation: "What + you → were. Wh-вопрос в Past Continuous: What were you doing?" },
  { id: 52, tense: "past-continuous", type: "multiple_choice", question: "Where ___ when you saw her?", options: ["was she going", "did she go", "she was going", "was she go"], correctAnswer: "was she going", explanation: "Where + she → was. Wh-вопрос: Where was she going?" },
  { id: 53, tense: "past-continuous", type: "multiple_choice", question: "Who ___ to the teacher when you entered the classroom?", options: ["was talking", "did talk", "were talking", "talked"], correctAnswer: "was talking", explanation: "Who как подлежащее = was talking (Past Continuous). НЕ Who did talk!" },
  { id: 54, tense: "past-continuous", type: "multiple_choice", question: "Why ___ so fast? Were they late?", options: ["were they running", "did they run", "was they running", "they were running"], correctAnswer: "were they running", explanation: "Why + they → were. Wh-вопрос: Why were they running?" },
  { id: 55, tense: "past-continuous", type: "multiple_choice", question: "How ___ when you visited him in hospital?", options: ["was he feeling", "did he feel", "were he feeling", "he was feeling"], correctAnswer: "was he feeling", explanation: "How + he → was. Wh-вопрос: How was he feeling?" },
  // think: изменение значения (was thinking = размышлять)
  { id: 56, tense: "past-continuous", type: "multiple_choice", question: "I ___ about my future when she called.", options: ["was thinking", "thought", "was think", "thinked"], correctAnswer: "was thinking", explanation: "Think в значении «размышлять» можно в Continuous: was thinking about my future." },
  // see: изменение значения (was seeing = встречаться / быть на приёме)
  { id: 57, tense: "past-continuous", type: "multiple_choice", question: "She ___ the doctor when I phoned her.", options: ["was seeing", "saw", "was see", "see"], correctAnswer: "was seeing", explanation: "See в значении «быть на приёме» можно в Continuous: was seeing the doctor." },
  // Ошибка: while + Past Simple
  { id: 58, tense: "past-continuous", type: "multiple_choice", question: "While I ___ a book, the phone rang.", options: ["was reading", "read", "was read", "reading"], correctAnswer: "was reading", explanation: "После while нужен Past Continuous (was reading). «While I read» — ошибка, while требует длительного действия." },
  // Ошибка: «was went»
  { id: 59, tense: "past-continuous", type: "multiple_choice", question: "Which sentence contains a GRAMMATICAL ERROR?", options: ["I was going home when it started raining.", "I was went home yesterday.", "I went home at 5 pm.", "She was walking to school."], correctAnswer: "I was went home yesterday.", explanation: "«was went» — грамматическая ошибка! Нельзя ставить was перед Past Simple. Правильно: I went или I was going." },
  // Ошибка: привычка ≠ Past Continuous
  { id: 60, tense: "past-continuous", type: "multiple_choice", question: "When I was a child, I ___ football every day.", options: ["played", "was playing", "were playing", "am playing"], correctAnswer: "played", explanation: "Every day = регулярная привычка в прошлом → Past Simple (played), НЕ Past Continuous!" },
  // Ошибка: «didn't was»
  { id: 61, tense: "past-continuous", type: "multiple_choice", question: "She ___ sleeping when I called.", options: ["wasn't", "didn't was", "not was", "didn't"], correctAnswer: "wasn't", explanation: "Отрицание Past Continuous: wasn't sleeping. «didn't was» — грамматическая ошибка." },
  // was hoping — вежливая форма
  { id: 62, tense: "past-continuous", type: "multiple_choice", question: "I ___ you could come to the party.", options: ["was hoping", "hoped", "were hoping", "did hope"], correctAnswer: "was hoping", explanation: "Was hoping = вежливая форма в прошлом, смягчает просьбу." },
  // was constantly — раздражение (синоним always)
  { id: 63, tense: "past-continuous", type: "multiple_choice", question: "She ___ complaining about the noise!", options: ["was constantly", "constantly was", "did constantly", "was"], correctAnswer: "was constantly", explanation: "Was constantly + V-ing = раздражение по поводу постоянного действия (синоним was always)." },
  // Прерванные действия с разными подлежащими
  { id: 64, tense: "past-continuous", type: "multiple_choice", question: "While I ___ dinner, my friend ___ at the door.", options: ["was cooking / knocked", "cooked / knocked", "was cooking / was knocking", "cooked / was knocking"], correctAnswer: "was cooking / knocked", explanation: "While + фон (was cooking). Прерывание другим подлежащим = knocked (Past Simple)." },
  // Сложная комбинация when/while
  { id: 65, tense: "past-continuous", type: "multiple_choice", question: "While we ___ the film, the electricity ___ and we ___ in the dark.", options: ["were watching / went out / were sitting", "watched / went out / sat", "were watching / was going out / were sitting", "watched / was going out / sat"], correctAnswer: "were watching / went out / were sitting", explanation: "While + фон = were watching. Прерывание = went out. После — продолжали сидеть = were sitting." },
  // Несколько одновременных фоновых действий
  { id: 66, tense: "past-continuous", type: "multiple_choice", question: "When we arrived at the beach, the sun ___, the waves ___, and people ___ volleyball.", options: ["was shining / were crashing / were playing", "shone / crashed / played", "was shining / crashed / were playing", "shone / were crashing / played"], correctAnswer: "was shining / were crashing / were playing", explanation: "Описание обстановки — все фоновые действия → Past Continuous (was shining / were crashing / were playing)." },
  // «this time yesterday»
  { id: 67, tense: "past-continuous", type: "multiple_choice", question: "At this time yesterday, I ___ on a plane to London.", options: ["was sitting", "sat", "were sitting", "sit"], correctAnswer: "was sitting", explanation: "This time yesterday = точный момент в прошлом → Past Continuous (was sitting)." },
  // Wh- + прерывание
  { id: 68, tense: "past-continuous", type: "multiple_choice", question: "Who ___ when the fire alarm ___?", options: ["was sleeping / went off", "slept / went off", "was sleeping / was going off", "slept / was going off"], correctAnswer: "was sleeping / went off", explanation: "Фон (спал) = was sleeping. Прерывание = went off (Past Simple). Who как подлежащее = was." },

  // ===== Fill in the Blank (69–84) =====
  // Wh-вопросы
  { id: 69, tense: "past-continuous", type: "fill_blank", question: "What ___ (you / do) this time yesterday?", correctAnswer: "were you doing", explanation: "What + you → were. Wh-вопрос: What were you doing?" },
  { id: 70, tense: "past-continuous", type: "fill_blank", question: "Where ___ (she / go) when you met her?", correctAnswer: "was she going", explanation: "Where + she → was. Wh-вопрос: Where was she going?" },
  { id: 71, tense: "past-continuous", type: "fill_blank", question: "Who ___ (talk) to the teacher when you entered?", correctAnswer: "was talking", explanation: "Who как подлежащее = was talking. НЕ did talk!" },
  { id: 72, tense: "past-continuous", type: "fill_blank", question: "Why ___ (they / run) in the corridor?", correctAnswer: "were they running", explanation: "Why + they → were. Wh-вопрос: Why were they running?" },
  // think — размышлять (Continuous)
  { id: 73, tense: "past-continuous", type: "fill_blank", question: "I ___ (think) about my future when she called.", correctAnswer: "was thinking", explanation: "Think = «размышлять» → можно в Continuous: was thinking." },
  // see — быть на приёме (Continuous)
  { id: 74, tense: "past-continuous", type: "fill_blank", question: "She ___ (see) the doctor all morning yesterday.", correctAnswer: "was seeing", explanation: "See = «быть на приёме» → можно в Continuous: was seeing." },
  // Несколько фоновых действий
  { id: 75, tense: "past-continuous", type: "fill_blank", question: "The sun ___ (shine) and the wind ___ (blow) when we reached the top.", correctAnswer: "was shining / was blowing", explanation: "Описание обстановки → оба Past Continuous." },
  // «this time last Sunday»
  { id: 76, tense: "past-continuous", type: "fill_blank", question: "At this time last Sunday, we ___ (have) breakfast.", correctAnswer: "were having", explanation: "We → were. This time last Sunday → were having breakfast." },
  // was constantly — раздражение
  { id: 77, tense: "past-continuous", type: "fill_blank", question: "He ___ (constantly / interrupt) me during the presentation!", correctAnswer: "was constantly interrupting", explanation: "Was constantly + V-ing = раздражение (синоним was always)." },
  // was hoping — вежливая форма
  { id: 78, tense: "past-continuous", type: "fill_blank", question: "I ___ (hope) you could lend me some money.", correctAnswer: "was hoping", explanation: "Was hoping = вежливая форма просьбы в прошлом." },
  // Три параллельных фона
  { id: 79, tense: "past-continuous", type: "fill_blank", question: "The wind ___ (blow), the rain ___ (fall), and we ___ (wait) for a taxi.", correctAnswer: "was blowing / was falling / were waiting", explanation: "Несколько параллельных действий → все Past Continuous." },
  // Отрицание + was doing
  { id: 80, tense: "past-continuous", type: "fill_blank", question: "She ___ (not / feel) well yesterday, so she ___ (stay) in bed all day.", correctAnswer: "wasn't feeling / was staying", explanation: "Не чувствовала (процесс) = wasn't feeling. Оставалась = was staying." },
  // Привычка = Past Simple
  { id: 81, tense: "past-continuous", type: "fill_blank", question: "When I was young, I ___ (ride) my bike every weekend.", correctAnswer: "rode", explanation: "Every weekend = регулярная привычка → Past Simple (rode), НЕ was riding!" },
  // Прерванное действие с разными подлежащими
  { id: 82, tense: "past-continuous", type: "fill_blank", question: "While he ___ (sleep), his brother ___ (eat) all the cookies.", correctAnswer: "was sleeping / ate", explanation: "While + фон = was sleeping. Прерывание другим лицом = ate (Past Simple)." },
  // How + was feeling
  { id: 83, tense: "past-continuous", type: "fill_blank", question: "How ___ (he / feel) when you visited him in hospital?", correctAnswer: "was he feeling", explanation: "How + he → was. Wh-вопрос: How was he feeling?" },
  // Stative verb (know) + Continuous
  { id: 84, tense: "past-continuous", type: "fill_blank", question: "I ___ (not / know) she was there. I ___ (look) for her everywhere!", correctAnswer: "didn't know / was looking", explanation: "Know = stative → didn't know (Past Simple). Искать = активный процесс → was looking." },

  // ===== Translate RU → EN (85–100) =====
  // Wh-вопросы
  { id: 85, tense: "past-continuous", type: "translate_ru_en", question: "Куда ты шёл вчера вечером?", correctAnswer: "Where were you going yesterday evening", explanation: "Куда = Where. Wh-вопрос: Where were you going?" },
  { id: 86, tense: "past-continuous", type: "translate_ru_en", question: "Кто разговаривал с тобой на вечеринке?", correctAnswer: "Who was talking to you at the party", explanation: "Кто как подлежащее = Who was talking. НЕ Who did talk!" },
  { id: 87, tense: "past-continuous", type: "translate_ru_en", question: "Почему они бежали по коридору?", correctAnswer: "Why were they running in the corridor", explanation: "Почему = Why. Wh-вопрос: Why were they running?" },
  { id: 88, tense: "past-continuous", type: "translate_ru_en", question: "Как он себя чувствовал после болезни?", correctAnswer: "How was he feeling after the illness", explanation: "Как = How. Wh-вопрос: How was he feeling?" },
  // think — размышлять
  { id: 89, tense: "past-continuous", type: "translate_ru_en", question: "Я размышлял о своём будущем, когда она позвонила.", correctAnswer: "I was thinking about my future when she called", explanation: "Размышлял = was thinking (Continuous). Позвонила = called (прерывание)." },
  // see — быть на приёме
  { id: 90, tense: "past-continuous", type: "translate_ru_en", question: "Она была на приёме у врача весь день.", correctAnswer: "She was seeing the doctor all day", explanation: "Быть на приёме = was seeing the doctor (Continuous). Весь день = all day." },
  // Прерванное действие (while)
  { id: 91, tense: "past-continuous", type: "translate_ru_en", question: "Пока я читал книгу, зазвонил телефон.", correctAnswer: "While I was reading a book, the phone rang", explanation: "While + фон = was reading. Краткое прерывание = rang (Past Simple)." },
  // this time yesterday
  { id: 92, tense: "past-continuous", type: "translate_ru_en", question: "Что ты делал в это время вчера?", correctAnswer: "What were you doing this time yesterday", explanation: "В это время вчера = this time yesterday → Past Continuous: What were you doing?" },
  // this time last week
  { id: 93, tense: "past-continuous", type: "translate_ru_en", question: "В это время на прошлой неделе мы отдыхали на пляже.", correctAnswer: "At this time last week we were relaxing on the beach", explanation: "At this time last week = точный момент → were relaxing (Past Continuous)." },
  // was constantly — раздражение
  { id: 94, tense: "past-continuous", type: "translate_ru_en", question: "Он постоянно перебивал меня на собрании!", correctAnswer: "He was constantly interrupting me in the meeting", explanation: "Постоянно = was constantly + V-ing = раздражение." },
  // was hoping — вежливая форма
  { id: 95, tense: "past-continuous", type: "translate_ru_en", question: "Я надеялся, что вы сможете прийти на вечеринку.", correctAnswer: "I was hoping you could come to the party", explanation: "Надеялся = was hoping = вежливая форма в прошлом." },
  // I was thinking — вежливое предложение
  { id: 96, tense: "past-continuous", type: "translate_ru_en", question: "Я думал, мы могли бы встретиться завтра.", correctAnswer: "I was thinking we could meet tomorrow", explanation: "I was thinking = вежливое предложение (не «считал», а «размышлял»)." },
  // Три параллельных фона
  { id: 97, tense: "past-continuous", type: "translate_ru_en", question: "Ветер дул, дождь шёл, а мы ждали такси.", correctAnswer: "The wind was blowing, the rain was falling, and we were waiting for a taxi", explanation: "Три параллельных действия → все Past Continuous." },
  // Привычка = Past Simple (НЕ Continuous)
  { id: 98, tense: "past-continuous", type: "translate_ru_en", question: "Когда я был маленьким, я играл во дворе каждый день.", correctAnswer: "When I was little, I played in the yard every day", explanation: "Каждый день = привычка → Past Simple (played), НЕ was playing!" },
  // Отрицание в Past Continuous
  { id: 99, tense: "past-continuous", type: "translate_ru_en", question: "Она не спала в 3 часа ночи.", correctAnswer: "She wasn't sleeping at 3 am", explanation: "Она → wasn't sleeping. В 3 часа ночи = at 3 am → Past Continuous." },
  // Who + прерывание
  { id: 100, tense: "past-continuous", type: "translate_ru_en", question: "Кто плакал, когда учитель вошёл в класс?", correctAnswer: "Who was crying when the teacher came into the classroom", explanation: "Кто как подлежащее = was crying. Вошёл = came (прерывание, Past Simple)." },
];
