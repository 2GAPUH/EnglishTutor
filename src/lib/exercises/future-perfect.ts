import type { Exercise } from "@/lib/tutor-data";

// ============================================================
// Future Perfect — 100 exercises
// Future Perfect: will have + V3 (past participle)
// ONLY active voice, British English
// ============================================================

export const futurePerfectExercises: Exercise[] = [
  // ===== Multiple Choice (1–35) =====

  // 1–5: Basic will have + V3 (regular verbs)
  { id: 1, tense: "future-perfect", type: "multiple_choice", question: "By 6 pm, she ___ the report.", options: ["will have finished", "will finish", "will be finishing", "finishes"], correctAnswer: "will have finished", explanation: "By 6 pm — сигнал Future Perfect. Действие будет завершено к этому моменту: will have finished.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 2, tense: "future-perfect", type: "multiple_choice", question: "By the end of this year, he ___ here for ten years.", options: ["will have worked", "will work", "will be working", "works"], correctAnswer: "will have worked", explanation: "By the end of this year — к определённому моменту. Действие завершится: will have worked.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 3, tense: "future-perfect", type: "multiple_choice", question: "By tomorrow morning, they ___ the project.", options: ["will have completed", "will complete", "will be completing", "complete"], correctAnswer: "will have completed", explanation: "By tomorrow morning — действие будет завершено: will have completed.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 4, tense: "future-perfect", type: "multiple_choice", question: "By the time you get back, we ___ dinner.", options: ["will have started", "will start", "will be starting", "start"], correctAnswer: "will have started", explanation: "By the time — сильнейший сигнал Future Perfect. Ужин будет начат: will have started.", hintIds: ["fpr-formula", "fpr-signal-by-the-time"] },
  { id: 5, tense: "future-perfect", type: "multiple_choice", question: "By Friday, I ___ the whole house.", options: ["will have cleaned", "will clean", "will be cleaning", "clean"], correctAnswer: "will have cleaned", explanation: "By Friday — к пятнице уборка будет завершена: will have cleaned.", hintIds: ["fpr-formula", "fpr-signal-by"] },

  // 6–10: will have + V3 (irregular verbs)
  { id: 6, tense: "future-perfect", type: "multiple_choice", question: "By the time we arrive, she ___.", options: ["will have gone", "will go", "will be going", "goes"], correctAnswer: "will have gone", explanation: "By the time — к тому времени как мы придём, она уже уйдёт: will have gone (gone — V3 от go).", hintIds: ["fpr-formula", "fpr-signal-by-the-time"] },
  { id: 7, tense: "future-perfect", type: "multiple_choice", question: "By next week, he ___ the new James Bond film.", options: ["will have seen", "will see", "will be seeing", "sees"], correctAnswer: "will have seen", explanation: "By next week — к следующей неделе он уже увидит фильм: will have seen (seen — V3 от see).", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 8, tense: "future-perfect", type: "multiple_choice", question: "By the deadline, they ___ the article.", options: ["will have written", "will write", "will be writing", "write"], correctAnswer: "will have written", explanation: "By the deadline — к дедлайну статья будет написана: will have written (written — V3 от write).", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 9, tense: "future-perfect", type: "multiple_choice", question: "By 8 o'clock, we ___ breakfast.", options: ["will have eaten", "will eat", "will be eating", "eat"], correctAnswer: "will have eaten", explanation: "By 8 o'clock — к 8 часам завтрак будет съеден: will have eaten (eaten — V3 от eat).", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 10, tense: "future-perfect", type: "multiple_choice", question: "By the time the train arrives, everyone ___.", options: ["will have left", "will leave", "will be leaving", "leaves"], correctAnswer: "will have left", explanation: "By the time — все уже уйдут к моменту прибытия поезда: will have left (left — V3 от leave).", hintIds: ["fpr-formula", "fpr-signal-by-the-time"] },

  // 11–14: Negation (won't have + V3)
  { id: 11, tense: "future-perfect", type: "multiple_choice", question: "By 5 pm, I ___ the homework yet.", options: ["won't have finished", "will have finished", "won't finish", "don't finish"], correctAnswer: "won't have finished", explanation: "Отрицание: won't have + V3. К 5 вечера я ЕЩЁ НЕ закончу домашнее задание.", hintIds: ["fpr-negative", "fpr-signal-by"] },
  { id: 12, tense: "future-perfect", type: "multiple_choice", question: "By the end of the month, she ___ the book.", options: ["won't have read", "will have read", "won't read", "doesn't read"], correctAnswer: "won't have read", explanation: "Won't have read — к концу месяца она НЕ успеет прочитать книгу.", hintIds: ["fpr-negative", "fpr-signal-by"] },
  { id: 13, tense: "future-perfect", type: "multiple_choice", question: "By tomorrow, they ___ the parcel.", options: ["won't have received", "will have received", "won't receive", "don't receive"], correctAnswer: "won't have received", explanation: "Won't have received — к завтрашнему дню они НЕ получат посылку.", hintIds: ["fpr-negative", "fpr-signal-by"] },
  { id: 14, tense: "future-perfect", type: "multiple_choice", question: "By Friday, he ___ all the emails.", options: ["won't have answered", "will have answered", "won't answer", "doesn't answer"], correctAnswer: "won't have answered", explanation: "Won't have answered — к пятнице он НЕ успеет ответить на все письма.", hintIds: ["fpr-negative", "fpr-signal-by"] },

  // 15–18: Questions (Will + subject + have + V3?)
  { id: 15, tense: "future-perfect", type: "multiple_choice", question: "___ you ___ the letter by Monday?", options: ["Will / have sent", "Will / send", "Will / be sending", "Do / send"], correctAnswer: "Will / have sent", explanation: "Вопрос в Future Perfect: Will + you + have + V3? К понедельнику ты отправишь письмо?", hintIds: ["fpr-question", "fpr-signal-by"] },
  { id: 16, tense: "future-perfect", type: "multiple_choice", question: "___ she ___ the exam by the end of the week?", options: ["Will / have passed", "Will / pass", "Will / be passing", "Does / pass"], correctAnswer: "Will / have passed", explanation: "Will she have passed? — сдаст ли она экзамен к концу недели? V3: passed.", hintIds: ["fpr-question", "fpr-signal-by"] },
  { id: 17, tense: "future-perfect", type: "multiple_choice", question: "___ they ___ the house by Christmas?", options: ["Will / have sold", "Will / sell", "Will / be selling", "Do / sell"], correctAnswer: "Will / have sold", explanation: "Will they have sold? — продадут ли они дом к Рождеству? V3: sold.", hintIds: ["fpr-question", "fpr-signal-by"] },
  { id: 18, tense: "future-perfect", type: "multiple_choice", question: "___ he ___ all the food by the time the guests arrive?", options: ["Will / have cooked", "Will / cook", "Will / be cooking", "Does / cook"], correctAnswer: "Will / have cooked", explanation: "Will he have cooked? — приготовит ли он всю еду к приходу гостей? V3: cooked.", hintIds: ["fpr-question", "fpr-signal-by-the-time"] },

  // 19–22: Wh-questions
  { id: 19, tense: "future-perfect", type: "multiple_choice", question: "What ___ you ___ by the time I get home?", options: ["will / have done", "will / do", "will / be doing", "do / do"], correctAnswer: "will / have done", explanation: "Wh-вопрос в FP: What + will + you + have + V3? Что ты сделаешь к моему приходу?", hintIds: ["fpr-wh-question", "fpr-signal-by-the-time"] },
  { id: 20, tense: "future-perfect", type: "multiple_choice", question: "Where ___ she ___ by next summer?", options: ["will / have travelled", "will / travel", "will / be travelling", "does / travel"], correctAnswer: "will / have travelled", explanation: "Where will she have travelled? — где она успеет побывать к следующему лету?", hintIds: ["fpr-wh-question", "fpr-signal-by"] },
  { id: 21, tense: "future-perfect", type: "multiple_choice", question: "When ___ they ___ the project?", options: ["will / have completed", "will / complete", "will / be completing", "do / complete"], correctAnswer: "will / have completed", explanation: "When will they have completed? — когда они закончат проект (к какому моменту)?", hintIds: ["fpr-wh-question", "fpr-usage-completion"] },
  { id: 22, tense: "future-perfect", type: "multiple_choice", question: "How long ___ you ___ English by next June?", options: ["will / have studied", "will / study", "will / be studying", "do / study"], correctAnswer: "will / have studied", explanation: "How long will you have studied? — сколько времени ты будешь изучать к будущему моменту?", hintIds: ["fpr-wh-question", "fpr-usage-duration"] },

  // 23–25: by the time
  { id: 23, tense: "future-perfect", type: "multiple_choice", question: "By the time the film starts, I ___ my popcorn.", options: ["will have bought", "will buy", "will be buying", "buy"], correctAnswer: "will have bought", explanation: "By the time — сильнейший сигнал FP. Я уже куплю попкорн к началу фильма: will have bought.", hintIds: ["fpr-signal-by-the-time", "fpr-usage-completion"] },
  { id: 24, tense: "future-perfect", type: "multiple_choice", question: "By the time you wake up, the sun ___.", options: ["will have risen", "will rise", "will be rising", "rises"], correctAnswer: "will have risen", explanation: "By the time — солнце уже взойдёт к моменту, когда ты проснёшься: will have risen (risen — V3 от rise).", hintIds: ["fpr-signal-by-the-time", "fpr-usage-completion"] },
  { id: 25, tense: "future-perfect", type: "multiple_choice", question: "By the time the doctor arrives, the patient ___.", options: ["will have waited", "will wait", "will be waiting", "waits"], correctAnswer: "will have waited", explanation: "By the time — пациент уже будет ждать какое-то время (результат ожидания): will have waited.", hintIds: ["fpr-signal-by-the-time", "fpr-usage-duration"] },

  // 26–28: by + time/date
  { id: 26, tense: "future-perfect", type: "multiple_choice", question: "By 2030, scientists ___ a cure for this disease.", options: ["will have found", "will find", "will be finding", "find"], correctAnswer: "will have found", explanation: "By 2030 — к 2030 году учёные найдут лекарство: will have found (found — V3 от find).", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },
  { id: 27, tense: "future-perfect", type: "multiple_choice", question: "By the end of the day, we ___ all the documents.", options: ["will have signed", "will sign", "will be signing", "sign"], correctAnswer: "will have signed", explanation: "By the end of the day — к концу дня все документы будут подписаны: will have signed.", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },
  { id: 28, tense: "future-perfect", type: "multiple_choice", question: "By next month, they ___ the new bridge.", options: ["will have built", "will build", "will be building", "build"], correctAnswer: "will have built", explanation: "By next month — к следующему месяцу мост будет построен: will have built (built — V3 от build).", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },

  // 29–30: already / just / never
  { id: 29, tense: "future-perfect", type: "multiple_choice", question: "By the time you call, I ___ already ___ lunch.", options: ["will / have had", "will / have", "will / be having", "will / had"], correctAnswer: "will / have had", explanation: "Already — уже (в Future Perfect). К моменту звонка я УЖЕ пообедаю: will have already had.", hintIds: ["fpr-signal-already", "fpr-formula"] },
  { id: 30, tense: "future-perfect", type: "multiple_choice", question: "She will have just ___ when we arrive.", options: ["arrived", "arrive", "arriving", "arrives"], correctAnswer: "arrived", explanation: "Just — только что (к моменту). She will have just arrived — она только-только приедет.", hintIds: ["fpr-signal-just", "fpr-formula"] },

  // 31–32: before
  { id: 31, tense: "future-perfect", type: "multiple_choice", question: "I ___ the shopping before you come home.", options: ["will have done", "will do", "will be doing", "do"], correctAnswer: "will have done", explanation: "Before — до того как. Я закончу покупки ДО твоего прихода: will have done.", hintIds: ["fpr-signal-before", "fpr-usage-completion"] },
  { id: 32, tense: "future-perfect", type: "multiple_choice", question: "Before the meeting starts, she ___ the presentation.", options: ["will have prepared", "will prepare", "will be preparing", "prepares"], correctAnswer: "will have prepared", explanation: "Before the meeting starts — до начала встречи она подготовит презентацию: will have prepared.", hintIds: ["fpr-signal-before", "fpr-usage-completion"] },

  // 33: FP vs FS
  { id: 33, tense: "future-perfect", type: "multiple_choice", question: "I think it ___ by the time we get there. (completed before a point)", options: ["will have stopped", "will stop", "will be stopping", "stops"], correctAnswer: "will have stopped", explanation: "By the time — действие будет завершено ДО момента → Future Perfect: will have stopped. НЕ Future Simple.", hintIds: ["fpr-vs-future-simple", "fpr-signal-by-the-time"] },

  // 34: FP vs FC
  { id: 34, tense: "future-perfect", type: "multiple_choice", question: "At 5 pm, she ___ all her tasks. (completed result)", options: ["will have finished", "will be finishing", "will finish", "finishes"], correctAnswer: "will have finished", explanation: "Результат завершения → Future Perfect: will have finished. Future Continuous (will be finishing) = в процессе.", hintIds: ["fpr-vs-future-continuous", "fpr-usage-completion"] },

  // 35: Time clause error
  { id: 35, tense: "future-perfect", type: "multiple_choice", question: "By the time I ___ (arrive), they will have eaten dinner. Choose the correct form for the time clause.", options: ["arrive", "will arrive", "am arriving", "arrived"], correctAnswer: "arrive", explanation: "В придаточных времени (by the time, before, when) НЕТ will! Present Simple: arrive. НЕ will arrive.", hintIds: ["fpr-time-clauses", "fpr-signal-by-the-time"] },

  // ===== Fill in the Blank (36–65) =====

  // 36–40: Affirmative (regular verbs)
  { id: 36, tense: "future-perfect", type: "fill_blank", question: "By midnight, she ___ (finish) the essay.", correctAnswer: "will have finished", explanation: "By midnight — к полуночи эссе будет закончено: will have finished.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 37, tense: "future-perfect", type: "fill_blank", question: "By next month, he ___ (work) at this company for five years.", correctAnswer: "will have worked", explanation: "By next month — к следующему месяцу: будет работать 5 лет (результат): will have worked.", hintIds: ["fpr-formula", "fpr-usage-duration"] },
  { id: 38, tense: "future-perfect", type: "fill_blank", question: "By the end of the week, we ___ (complete) the training.", correctAnswer: "will have completed", explanation: "By the end of the week — к концу недели: will have completed.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 39, tense: "future-perfect", type: "fill_blank", question: "By Friday, they ___ (start) the new course.", correctAnswer: "will have started", explanation: "By Friday — к пятнице курс будет начат: will have started.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 40, tense: "future-perfect", type: "fill_blank", question: "By the time you return, I ___ (clean) the kitchen.", correctAnswer: "will have cleaned", explanation: "By the time — к твоему возвращению: will have cleaned.", hintIds: ["fpr-formula", "fpr-signal-by-the-time"] },

  // 41–44: Affirmative (irregular verbs)
  { id: 41, tense: "future-perfect", type: "fill_blank", question: "By tomorrow, she ___ (go) to the shops.", correctAnswer: "will have gone", explanation: "Will have gone — неправильный глагол: go → went → gone.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 42, tense: "future-perfect", type: "fill_blank", question: "By next week, he ___ (see) the new exhibition.", correctAnswer: "will have seen", explanation: "Will have seen — неправильный глагол: see → saw → seen.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 43, tense: "future-perfect", type: "fill_blank", question: "By the deadline, they ___ (write) the report.", correctAnswer: "will have written", explanation: "Will have written — неправильный глагол: write → wrote → written.", hintIds: ["fpr-formula", "fpr-signal-by"] },
  { id: 44, tense: "future-perfect", type: "fill_blank", question: "By 7 pm, we ___ (eat) dinner.", correctAnswer: "will have eaten", explanation: "Will have eaten — неправильный глагол: eat → ate → eaten.", hintIds: ["fpr-formula", "fpr-signal-by"] },

  // 45–47: Negation (won't have + V3)
  { id: 45, tense: "future-perfect", type: "fill_blank", question: "By 5 o'clock, I ___ (not / leave) the office yet.", correctAnswer: "won't have left", explanation: "Won't have left — к 5 часам я ещё не уйду из офиса. Отрицание: won't have + V3.", hintIds: ["fpr-negative", "fpr-signal-by"] },
  { id: 46, tense: "future-perfect", type: "fill_blank", question: "By the weekend, she ___ (not / finish) the painting.", correctAnswer: "won't have finished", explanation: "Won't have finished — к выходным она не закончит картину.", hintIds: ["fpr-negative", "fpr-signal-by"] },
  { id: 47, tense: "future-perfect", type: "fill_blank", question: "By Thursday, they ___ (not / receive) the results.", correctAnswer: "won't have received", explanation: "Won't have received — к четвергу они не получат результаты.", hintIds: ["fpr-negative", "fpr-signal-by"] },

  // 48–50: Questions (Will + subject + have + V3?)
  { id: 48, tense: "future-perfect", type: "fill_blank", question: "___ (you / book) the tickets by Friday?", correctAnswer: "Will you have booked", explanation: "Will you have booked? — забронируешь ли ты билеты к пятнице? V3: booked.", hintIds: ["fpr-question", "fpr-signal-by"] },
  { id: 49, tense: "future-perfect", type: "fill_blank", question: "___ (she / pass) the driving test by next month?", correctAnswer: "Will she have passed", explanation: "Will she have passed? — сдаст ли она тест на вождение к следующему месяцу?", hintIds: ["fpr-question", "fpr-signal-by"] },
  { id: 50, tense: "future-perfect", type: "fill_blank", question: "___ (they / decide) by tomorrow?", correctAnswer: "Will they have decided", explanation: "Will they have decided? — решат ли они к завтрашнему дню?", hintIds: ["fpr-question", "fpr-signal-by"] },

  // 51–53: Wh-questions
  { id: 51, tense: "future-perfect", type: "fill_blank", question: "How many chapters ___ (you / read) by the end of the week?", correctAnswer: "will you have read", explanation: "How many + will + you + have + V3? Сколько глав ты прочитаешь к концу недели?", hintIds: ["fpr-wh-question", "fpr-signal-by"] },
  { id: 52, tense: "future-perfect", type: "fill_blank", question: "Where ___ (he / go) by the time we arrive?", correctAnswer: "will he have gone", explanation: "Where will he have gone? — куда он успеет уйти к нашему приходу?", hintIds: ["fpr-wh-question", "fpr-signal-by-the-time"] },
  { id: 53, tense: "future-perfect", type: "fill_blank", question: "How much money ___ (they / save) by Christmas?", correctAnswer: "will they have saved", explanation: "How much money will they have saved? — сколько денег они накопят к Рождеству?", hintIds: ["fpr-wh-question", "fpr-signal-by"] },

  // 54–56: by the time + double blanks (PS in time clause, FP in main)
  { id: 54, tense: "future-perfect", type: "fill_blank", question: "By the time I ___ (arrive), they ___ (eat) all the cake.", correctAnswer: "arrive / will have eaten", explanation: "Придаточное времени: arrive (Present Simple). Главное: will have eaten (FP).", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 55, tense: "future-perfect", type: "fill_blank", question: "By the time she ___ (call), I ___ (finish) my work.", correctAnswer: "calls / will have finished", explanation: "Придаточное: calls (Present Simple, 3-е лицо). Главное: will have finished.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 56, tense: "future-perfect", type: "fill_blank", question: "By the time the class ___ (start), the teacher ___ (prepare) all the materials.", correctAnswer: "starts / will have prepared", explanation: "Придаточное: starts (PS). Главное: will have prepared — материалы будут готовы.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },

  // 57–58: before + double blanks
  { id: 57, tense: "future-perfect", type: "fill_blank", question: "Before you ___ (get) home, I ___ (cook) dinner.", correctAnswer: "get / will have cooked", explanation: "Before + Present Simple (get). Главное: will have cooked — ужин будет готов.", hintIds: ["fpr-signal-before", "fpr-time-clauses"] },
  { id: 58, tense: "future-perfect", type: "fill_blank", question: "Before the guests ___ (arrive), we ___ (set) the table.", correctAnswer: "arrive / will have set", explanation: "Before + Present Simple (arrive). Главное: will have set — стол будет накрыт.", hintIds: ["fpr-signal-before", "fpr-time-clauses"] },

  // 59–60: already / just
  { id: 59, tense: "future-perfect", type: "fill_blank", question: "By the time you wake up, I ___ already ___ (make) breakfast.", correctAnswer: "will have made", explanation: "Already с Future Perfect: will have already made — я УЖЕ приготовлю завтрак.", hintIds: ["fpr-signal-already", "fpr-formula"] },
  { id: 60, tense: "future-perfect", type: "fill_blank", question: "She ___ just ___ (leave) when you get to the station.", correctAnswer: "will have left", explanation: "Just — только что к моменту: will have just left — она только-только уедет.", hintIds: ["fpr-signal-just", "fpr-formula"] },

  // 61: never
  { id: 61, tense: "future-perfect", type: "fill_blank", question: "By the age of 30, he ___ never ___ (travel) abroad.", correctAnswer: "will have travelled", explanation: "Never с Future Perfect: will never have travelled — к 30 годам он НИКОГДА не путешествовал за границу.", hintIds: ["fpr-signal-never", "fpr-formula"] },

  // 62–63: by + time/date
  { id: 62, tense: "future-perfect", type: "fill_blank", question: "By 2025, the company ___ (open) ten new branches.", correctAnswer: "will have opened", explanation: "By 2025 — к 2025 году компания откроет 10 филиалов: will have opened.", hintIds: ["fpr-signal-by", "fpr-usage-experience"] },
  { id: 63, tense: "future-perfect", type: "fill_blank", question: "By the end of next year, she ___ (learn) to speak French fluently.", correctAnswer: "will have learnt", explanation: "By the end of next year + learn (британский: learnt). Она будет говорить по-французски свободно.", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },

  // 64: for (duration)
  { id: 64, tense: "future-perfect", type: "fill_blank", question: "By next June, I ___ (live) in London for three years.", correctAnswer: "will have lived", explanation: "For three years — длительность к будущему моменту. By next June: will have lived.", hintIds: ["fpr-usage-duration", "fpr-signal-by"] },

  // 65: won't have
  { id: 65, tense: "future-perfect", type: "fill_blank", question: "I'm afraid we ___ (not / finish) by the deadline. We need more time.", correctAnswer: "won't have finished", explanation: "Won't have finished — не успеем закончить к дедлайну. Отрицание в FP: won't have + V3.", hintIds: ["fpr-wont-have", "fpr-signal-by"] },

  // ===== Translate RU → EN (66–100) =====

  // 66–70: "к моменту X будет сделано" (by + time)
  { id: 66, tense: "future-perfect", type: "translate_ru_en", question: "К шести вечера она закончит проект.", correctAnswer: "She will have finished the project by 6 pm", explanation: "К 6 вечера (by 6 pm) + завершённый результат → will have finished.", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },
  { id: 67, tense: "future-perfect", type: "translate_ru_en", question: "К концу года он купит новую машину.", correctAnswer: "He will have bought a new car by the end of the year", explanation: "К концу года (by the end of the year) → will have bought.", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },
  { id: 68, tense: "future-perfect", type: "translate_ru_en", question: "К завтрашнему дню мы отправим все посылки.", correctAnswer: "We will have sent all the parcels by tomorrow", explanation: "К завтрашнему дню (by tomorrow) → will have sent.", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },
  { id: 69, tense: "future-perfect", type: "translate_ru_en", question: "К пятнице они устроят все проблемы.", correctAnswer: "They will have sorted out all the problems by Friday", explanation: "К пятнице (by Friday) → will have sorted out. Sort out — британская идиома.", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },
  { id: 70, tense: "future-perfect", type: "translate_ru_en", question: "К обеду я прочитаю всю главу.", correctAnswer: "I will have read the whole chapter by lunchtime", explanation: "К обеду (by lunchtime) → will have read. V3: read (читается как \"ред\").", hintIds: ["fpr-signal-by", "fpr-usage-completion"] },

  // 71–75: by the time (к тому времени как)
  { id: 71, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как ты придёшь, я уже приготовлю ужин.", correctAnswer: "By the time you arrive, I will have already cooked dinner", explanation: "By the time + Present Simple (arrive). Главное: will have already cooked dinner.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 72, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как фильм начнётся, мы купим билеты.", correctAnswer: "By the time the film starts, we will have bought the tickets", explanation: "By the time + Present Simple (starts). Главное: will have bought.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 73, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как поезд прибудет, она уже уйдёт.", correctAnswer: "By the time the train arrives, she will have already left", explanation: "By the time + arrives (PS). Главное: will have already left.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 74, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как вы проснётесь, я уже приготовлю завтрак.", correctAnswer: "I will have cooked breakfast by the time you wake up", explanation: "By the time + Present Simple (wake up). Главное: will have cooked — активный залог.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 75, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как мы доберёмся до театра, спектакль начнётся.", correctAnswer: "By the time we get to the theatre, the play will have started", explanation: "By the time + get (PS). Главное: will have started.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },

  // 76–80: before (до того как)
  { id: 76, tense: "future-perfect", type: "translate_ru_en", question: "Я сделаю домашнее задание до того как ты вернёшься.", correctAnswer: "I will have done my homework before you come back", explanation: "Before + Present Simple (come back). Главное: will have done.", hintIds: ["fpr-signal-before", "fpr-time-clauses"] },
  { id: 77, tense: "future-perfect", type: "translate_ru_en", question: "Она подготовит презентацию до начала собрания.", correctAnswer: "She will have prepared the presentation before the meeting starts", explanation: "Before + Present Simple (starts). Главное: will have prepared.", hintIds: ["fpr-signal-before", "fpr-time-clauses"] },
  { id: 78, tense: "future-perfect", type: "translate_ru_en", question: "Мы закончим ремонт до Рождества.", correctAnswer: "We will have finished the renovation before Christmas", explanation: "Before Christmas — до Рождества: will have finished.", hintIds: ["fpr-signal-before", "fpr-usage-completion"] },
  { id: 79, tense: "future-perfect", type: "translate_ru_en", question: "Он напишет письмо до того как отправится в путешествие.", correctAnswer: "He will have written the letter before he leaves for the trip", explanation: "Before + Present Simple (leaves). Главное: will have written.", hintIds: ["fpr-signal-before", "fpr-time-clauses"] },
  { id: 80, tense: "future-perfect", type: "translate_ru_en", question: "Они построят новый дом до зимы.", correctAnswer: "They will have built the new house before winter", explanation: "Before winter — до зимы: will have built.", hintIds: ["fpr-signal-before", "fpr-usage-completion"] },

  // 81–83: already (уже)
  { id: 81, tense: "future-perfect", type: "translate_ru_en", question: "К твоему приходу я уже закончу работу.", correctAnswer: "I will have already finished work by the time you arrive", explanation: "Already в Future Perfect: will have already finished — УЖЕ закончу.", hintIds: ["fpr-signal-already", "fpr-usage-completion"] },
  { id: 82, tense: "future-perfect", type: "translate_ru_en", question: "К моменту экзамена она уже выучит все слова.", correctAnswer: "She will have already learnt all the words by the time of the exam", explanation: "Will have already learnt — уже выучит. Британский вариант: learnt.", hintIds: ["fpr-signal-already", "fpr-usage-completion"] },
  { id: 83, tense: "future-perfect", type: "translate_ru_en", question: "К выходным он уже получит результаты теста.", correctAnswer: "He will have already got the test results by the weekend", explanation: "Will have already got — уже получит. Британский английский: got (не gotten).", hintIds: ["fpr-signal-already", "fpr-usage-completion"] },

  // 84–85: just (только что)
  { id: 84, tense: "future-perfect", type: "translate_ru_en", question: "Она только-только приедет, когда ты дойдёшь до станции.", correctAnswer: "She will have just arrived when you get to the station", explanation: "Will have just arrived — только-только приедет к моменту. Just стоит после have.", hintIds: ["fpr-signal-just", "fpr-usage-completion"] },
  { id: 85, tense: "future-perfect", type: "translate_ru_en", question: "Они только-только закончили ужинать, когда мы позвоним.", correctAnswer: "They will have just finished dinner when we call", explanation: "Will have just finished dinner — только-только закончат ужинать к нашему звонку.", hintIds: ["fpr-signal-just", "fpr-usage-completion"] },

  // 86–87: never (никогда)
  { id: 86, tense: "future-perfect", type: "translate_ru_en", question: "К 25 годам он никогда не был за границей.", correctAnswer: "By the age of 25, he will never have been abroad", explanation: "Will never have been — никогда не был к определённому моменту. V3: been.", hintIds: ["fpr-signal-never", "fpr-usage-experience"] },
  { id: 87, tense: "future-perfect", type: "translate_ru_en", question: "К концу года она никогда не пробовала суши.", correctAnswer: "By the end of the year, she will never have tried sushi", explanation: "Will never have tried — никогда не пробовала к этому моменту.", hintIds: ["fpr-signal-never", "fpr-usage-experience"] },

  // 88–89: won't have (не успеет)
  { id: 88, tense: "future-perfect", type: "translate_ru_en", question: "К твоему приходу я не успею закончить.", correctAnswer: "I won't have finished by the time you arrive", explanation: "Won't have finished — НЕ успею закончить к моменту. Отрицание в FP.", hintIds: ["fpr-wont-have", "fpr-signal-by-the-time"] },
  { id: 89, tense: "future-perfect", type: "translate_ru_en", question: "К пятнице они не успеют подготовить отчёт.", correctAnswer: "They won't have prepared the report by Friday", explanation: "Won't have prepared — не успеют подготовить к пятнице.", hintIds: ["fpr-wont-have", "fpr-signal-by"] },

  // 90–91: for/since (duration to future point)
  { id: 90, tense: "future-perfect", type: "translate_ru_en", question: "К следующему июню он будет работать здесь десять лет.", correctAnswer: "By next June, he will have worked here for ten years", explanation: "For ten years + к будущему моменту → Future Perfect: will have worked.", hintIds: ["fpr-usage-duration", "fpr-signal-by"] },
  { id: 91, tense: "future-perfect", type: "translate_ru_en", question: "К маю мы будем жить в этом доме три года.", correctAnswer: "By May, we will have lived in this house for three years", explanation: "For three years + к будущему моменту → will have lived.", hintIds: ["fpr-usage-duration", "fpr-signal-by"] },

  // 92–93: FP vs FS context
  { id: 92, tense: "future-perfect", type: "translate_ru_en", question: "Я позвоню ей, когда заканчиваю работу. (факт, будущее действие)", correctAnswer: "I will call her when I finish work", explanation: "Future Simple: will call — факт / намерение. НЕ Future Perfect, потому что это не завершённость к моменту.", hintIds: ["fpr-vs-future-simple", "fpr-time-clauses"] },
  { id: 93, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как она ответит, я уже всё пойму. (результат к моменту)", correctAnswer: "By the time she replies, I will have understood everything", explanation: "К определённому моменту (by the time) будет достигнут результат → FP: will have understood.", hintIds: ["fpr-vs-future-simple", "fpr-signal-by-the-time"] },

  // 94–95: FP vs FC context
  { id: 94, tense: "future-perfect", type: "translate_ru_en", question: "В 6 вечера она будет готовить ужин. (в процессе)", correctAnswer: "She will be cooking dinner at 6 pm", explanation: "В процессе (at 6 pm) → Future Continuous: will be cooking. НЕ Future Perfect.", hintIds: ["fpr-vs-future-continuous", "fpr-usage-completion"] },
  { id: 95, tense: "future-perfect", type: "translate_ru_en", question: "К 6 вечера она приготовит ужин. (завершённый результат)", correctAnswer: "She will have cooked dinner by 6 pm", explanation: "Результат завершён к 6 вечера → Future Perfect: will have cooked.", hintIds: ["fpr-vs-future-continuous", "fpr-usage-completion"] },

  // 96–97: Stative verbs (know, believe, understand)
  { id: 96, tense: "future-perfect", type: "translate_ru_en", question: "К завтрашнему дню она будет знать правду.", correctAnswer: "She will have known the truth by tomorrow", explanation: "Know — стативный глагол, но в Future Perfect допускается: будет знать (результат к моменту).", hintIds: ["fpr-stative", "fpr-signal-by"] },
  { id: 97, tense: "future-perfect", type: "translate_ru_en", question: "К концу курса вы будете понимать грамматику намного лучше.", correctAnswer: "By the end of the course, you will have understood the grammar much better", explanation: "Understand — стативный глагол в FP: будете понимать (как результат обучения).", hintIds: ["fpr-stative", "fpr-usage-completion"] },

  // 98: Time clause (by the time I arrive — NO will)
  { id: 98, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как я приду, они уже поужинают. (без will в придаточном)", correctAnswer: "By the time I arrive, they will have already had dinner", explanation: "Придаточное: I arrive (Present Simple, БЕЗ will). Главное: will have had dinner.", hintIds: ["fpr-time-clauses", "fpr-signal-by-the-time"] },

  // 99–100: Mixed/challenging
  { id: 99, tense: "future-perfect", type: "translate_ru_en", question: "К тому времени как ты прочитаешь эту книгу, я напишу три эссе.", correctAnswer: "By the time you read this book, I will have written three essays", explanation: "By the time + Present Simple (read). Главное: will have written — три эссе будут написаны.", hintIds: ["fpr-signal-by-the-time", "fpr-time-clauses"] },
  { id: 100, tense: "future-perfect", type: "translate_ru_en", question: "К тридцати годам она побывает в двадцати странах и выучит четыре языка.", correctAnswer: "By the age of thirty, she will have visited twenty countries and learnt four languages", explanation: "Два результата к одному будущему моменту → оба в Future Perfect: will have visited and learnt.", hintIds: ["fpr-signal-by", "fpr-usage-experience"] },
];
