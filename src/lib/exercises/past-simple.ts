import type { Exercise } from "@/lib/tutor-data";

// ============================================================
// Past Simple — 130 exercises
// ============================================================

export const pastSimpleExercises: Exercise[] = [
  // ===== Multiple Choice (1–35) =====
  // Правильные глаголы
  { id: 1, tense: "past-simple", type: "multiple_choice", question: "She ___ to the cinema yesterday.", options: ["goes", "went", "go", "has gone"], correctAnswer: "went", explanation: "Yesterday → Past Simple. Go — неправильный: went." },
  { id: 2, tense: "past-simple", type: "multiple_choice", question: "They ___ a great time at the party last night.", options: ["have", "had", "has", "having"], correctAnswer: "had", explanation: "Last night → Past Simple. Have (неправильный): had." },
  { id: 3, tense: "past-simple", type: "multiple_choice", question: "He ___ his homework before dinner.", options: ["finishes", "finished", "finish", "has finished"], correctAnswer: "finished", explanation: "Before dinner (прошедшее) → Past Simple. Finish + ed = finished." },
  { id: 4, tense: "past-simple", type: "multiple_choice", question: "I ___ a letter to my friend last week.", options: ["wrote", "write", "writed", "has written"], correctAnswer: "wrote", explanation: "Last week → Past Simple. Write — неправильный: wrote (НЕ writed!)." },
  { id: 5, tense: "past-simple", type: "multiple_choice", question: "We ___ pizza for lunch yesterday.", options: ["eat", "ate", "eating", "eaten"], correctAnswer: "ate", explanation: "Yesterday → Past Simple. Eat — неправильный: ate." },
  // Отрицание и вопрос
  { id: 6, tense: "past-simple", type: "multiple_choice", question: "She ___ not ___ to school yesterday.", options: ["did / go", "does / go", "did / went", "was / go"], correctAnswer: "did / go", explanation: "Past Simple отрицание: didn't + V1 (не went!)." },
  { id: 7, tense: "past-simple", type: "multiple_choice", question: "___ you ___ the film last night?", options: ["Did / see", "Do / see", "Did / saw", "Were / see"], correctAnswer: "Did / see", explanation: "Вопрос в Past Simple: Did + подлежащее + V1 (не saw!)." },
  { id: 8, tense: "past-simple", type: "multiple_choice", question: "He ___ not ___ my email.", options: ["didn't / receive", "doesn't / receive", "didn't / received", "wasn't / receive"], correctAnswer: "didn't / receive", explanation: "Past Simple отрицание: didn't + V1 (не received!)." },
  { id: 9, tense: "past-simple", type: "multiple_choice", question: "___ they ___ the match?", options: ["Did / win", "Did / won", "Were / win", "Do / won"], correctAnswer: "Did / win", explanation: "Вопрос в Past Simple: Did + V1 (не won!)." },
  { id: 10, tense: "past-simple", type: "multiple_choice", question: "I ___ not ___ anything at the restaurant.", options: ["didn't / eat", "don't / eat", "didn't / ate", "wasn't / eat"], correctAnswer: "didn't / eat", explanation: "Past Simple отрицание: didn't + V1." },
  // Глагол to be
  { id: 11, tense: "past-simple", type: "multiple_choice", question: "I ___ at home last night.", options: ["was", "were", "am", "did"], correctAnswer: "was", explanation: "Глагол to be: I was (не were, не am)." },
  { id: 12, tense: "past-simple", type: "multiple_choice", question: "They ___ not at the meeting yesterday.", options: ["weren't", "wasn't", "didn't", "aren't"], correctAnswer: "weren't", explanation: "They → were. Отрицание: weren't (не wasn't!)." },
  { id: 13, tense: "past-simple", type: "multiple_choice", question: "___ she tired after the exam?", options: ["Was", "Were", "Did", "Does"], correctAnswer: "Was", explanation: "Вопрос с to be: Was + she? (She = it/3 лицо → was)." },
  { id: 14, tense: "past-simple", type: "multiple_choice", question: "The children ___ very happy at the party.", options: ["was", "were", "did", "are"], correctAnswer: "were", explanation: "Children = they → were (не was!)." },
  { id: 15, tense: "past-simple", type: "multiple_choice", question: "It ___ very cold last winter.", options: ["was", "were", "is", "did"], correctAnswer: "was", explanation: "It → was." },
  // Неправильные глаголы
  { id: 16, tense: "past-simple", type: "multiple_choice", question: "She ___ a beautiful dress at the wedding.", options: ["wore", "worn", "weared", "wearing"], correctAnswer: "wore", explanation: "Wear — неправильный: wore (не weared, не worn — это V3)." },
  { id: 17, tense: "past-simple", type: "multiple_choice", question: "He ___ his keys and couldn't get in.", options: ["lost", "losed", "loosed", "lose"], correctAnswer: "lost", explanation: "Lose — неправильный: lost (НЕ losed!)." },
  { id: 18, tense: "past-simple", type: "multiple_choice", question: "They ___ the match 3-1.", options: ["won", "win", "winned", "winning"], correctAnswer: "won", explanation: "Win — неправильный: won (НЕ winned!)." },
  { id: 19, tense: "past-simple", type: "multiple_choice", question: "She ___ me a beautiful gift for my birthday.", options: ["gave", "gived", "given", "gives"], correctAnswer: "gave", explanation: "Give — неправильный: gave (не gived!)." },
  { id: 20, tense: "past-simple", type: "multiple_choice", question: "I ___ the bus this morning.", options: ["caught", "catched", "catch", "cought"], correctAnswer: "caught", explanation: "Catch — неправильный: caught (НЕ catched!)." },
  // Правильные глаголы с особенностями -ed
  { id: 21, tense: "past-simple", type: "multiple_choice", question: "She ___ maths at university.", options: ["studied", "studyed", "studiied", "studies"], correctAnswer: "studied", explanation: "Study: согласная + y → y→ied: studied (НЕ studyed!)." },
  { id: 22, tense: "past-simple", type: "multiple_choice", question: "He ___ to work by bus last year.", options: ["travelled", "traveled", "travelling", "travels"], correctAnswer: "travelled", explanation: "Британский: travel + ed = travelled (двойная l!). Американский: traveled." },
  { id: 23, tense: "past-simple", type: "multiple_choice", question: "They ___ the meeting because of the snow.", options: ["cancelled", "canceled", "canceling", "cancel"], correctAnswer: "cancelled", explanation: "Британский: cancel + ed = cancelled (двойная l!)." },
  { id: 24, tense: "past-simple", type: "multiple_choice", question: "It suddenly ___ raining.", options: ["stoped", "stopped", "stopt", "stops"], correctAnswer: "stopped", explanation: "Stop: краткий гласный + 1 согласная → удвоить: stopped (НЕ stoped!)." },
  { id: 25, tense: "past-simple", type: "multiple_choice", question: "She ___ her suitcase for the trip.", options: ["pack", "packed", "packked", "packing"], correctAnswer: "packed", explanation: "Pack: ck = 2 согласных → НЕ удваиваем: packed." },
  // Специальные случаи
  { id: 26, tense: "past-simple", type: "multiple_choice", question: "When I ___ young, I ___ outside every day.", options: ["was / played", "am / played", "was / play", "were / played"], correctAnswer: "was / played", explanation: "When I was young (привычка в прошлом) → was + played." },
  { id: 27, tense: "past-simple", type: "multiple_choice", question: "She said she ___ the book.", options: ["liked", "likes", "liking", "has liked"], correctAnswer: "liked", explanation: "Reported speech (косвенная речь): Present Simple → Past Simple: liked." },
  { id: 28, tense: "past-simple", type: "multiple_choice", question: "He ___ me he ___ busy.", options: ["told / was", "said / was", "told / is", "telled / was"], correctAnswer: "told / was", explanation: "Tell + кому = told me. Was = Past Simple. Said + что (без to)." },
  { id: 29, tense: "past-simple", type: "multiple_choice", question: "I ___ him at the shop yesterday.", options: ["didn't / see", "didn't / saw", "don't / see", "wasn't / see"], correctAnswer: "didn't / see", explanation: "Past Simple отрицание: didn't + V1 (не saw!)." },
  { id: 30, tense: "past-simple", type: "multiple_choice", question: "How long ___ you ___ there?", options: ["did / stay", "do / stay", "did / stayed", "were / stay"], correctAnswer: "did / stay", explanation: "Вопрос в Past Simple: did + V1 (не stayed!)." },
  // Could / was able to
  { id: 31, tense: "past-simple", type: "multiple_choice", question: "I ___ swim when I ___ five.", options: ["could / was", "can / was", "could / am", "canned / was"], correctAnswer: "could / was", explanation: "Could = Past Simple от can. Was = 5 лет назад." },
  { id: 32, tense: "past-simple", type: "multiple_choice", question: "She ___ not come because she ___ ill.", options: ["did / was", "could / was", "was / did", "didn't / were"], correctAnswer: "did / was", explanation: "Отрицание с обычным глаголом: didn't come. Be: was ill." },
  // Used to
  { id: 33, tense: "past-simple", type: "multiple_choice", question: "He ___ play football, but now he doesn't.", options: ["used to", "use to", "was used to", "is use to"], correctAnswer: "used to", explanation: "Used to + V1 = бывшая привычка в прошлом: used to play." },
  { id: 34, tense: "past-simple", type: "multiple_choice", question: "She ___ live in London, but she moved to Manchester.", options: ["used to", "use to", "uses to", "was use to"], correctAnswer: "used to", explanation: "Used to + V1 = раньше жила (теперь нет)." },
  // Mixed
  { id: 35, tense: "past-simple", type: "multiple_choice", question: "The film ___ at 7 and ___ at 9.", options: ["started / finished", "starts / finishes", "started / finish", "start / finished"], correctAnswer: "started / finished", explanation: "Конкретное время (из контекста прошедшего) → Past Simple для обоих." },

  // ===== Fill in the Blank (36–65) =====
  // Правильные глаголы
  { id: 36, tense: "past-simple", type: "fill_blank", question: "She ___ (walk) to school yesterday.", correctAnswer: "walked", explanation: "Yesterday → Past Simple. Walk + ed = walked." },
  { id: 37, tense: "past-simple", type: "fill_blank", question: "He ___ (not / watch) TV last night.", correctAnswer: "didn't watch", explanation: "Past Simple отрицание: didn't + V1." },
  { id: 38, tense: "past-simple", type: "fill_blank", question: "___ (you / enjoy) the party?", correctAnswer: "Did you enjoy", explanation: "Вопрос в Past Simple: Did you + V1?" },
  { id: 39, tense: "past-simple", type: "fill_blank", question: "They ___ (study) hard for the exam.", correctAnswer: "studied", explanation: "Study: согласная + y → ied: studied." },
  { id: 40, tense: "past-simple", type: "fill_blank", question: "I ___ (stop) at the traffic lights.", correctAnswer: "stopped", explanation: "Stop: краткий гласный + 1 согласная → удвоить: stopped." },
  { id: 41, tense: "past-simple", type: "fill_blank", question: "She ___ (arrive) at the airport two hours ago.", correctAnswer: "arrived", explanation: "Ago → Past Simple. Arrive + d = arrived." },
  { id: 42, tense: "past-simple", type: "fill_blank", question: "We ___ (plan) a trip to Scotland last month.", correctAnswer: "planned", explanation: "Plan: краткий гласный + 1 согласная → удвоить: planned." },
  { id: 43, tense: "past-simple", type: "fill_blank", question: "He ___ (not / like) the film.", correctAnswer: "didn't like", explanation: "Past Simple отрицание: didn't + V1." },
  // Неправильные глаголы
  { id: 44, tense: "past-simple", type: "fill_blank", question: "She ___ (buy) a new dress last week.", correctAnswer: "bought", explanation: "Buy — неправильный: bought." },
  { id: 45, tense: "past-simple", type: "fill_blank", question: "I ___ (see) him at the shop yesterday.", correctAnswer: "saw", explanation: "See — неправильный: saw." },
  { id: 46, tense: "past-simple", type: "fill_blank", question: "He ___ (go) to work by bus.", correctAnswer: "went", explanation: "Go — неправильный: went." },
  { id: 47, tense: "past-simple", type: "fill_blank", question: "They ___ (come) to visit us last Sunday.", correctAnswer: "came", explanation: "Come — неправильный: came." },
  { id: 48, tense: "past-simple", type: "fill_blank", question: "She ___ (teach) English at a primary school.", correctAnswer: "taught", explanation: "Teach — неправильный: taught." },
  { id: 49, tense: "past-simple", type: "fill_blank", question: "We ___ (meet) at a conference in 2019.", correctAnswer: "met", explanation: "Meet — неправильный: met." },
  { id: 50, tense: "past-simple", type: "fill_blank", question: "He ___ (think) it was a good idea.", correctAnswer: "thought", explanation: "Think — неправильный: thought." },
  { id: 51, tense: "past-simple", type: "fill_blank", question: "She ___ (make) a delicious cake for the party.", correctAnswer: "made", explanation: "Make — неправильный: made." },
  { id: 52, tense: "past-simple", type: "fill_blank", question: "I ___ (take) a taxi to the airport.", correctAnswer: "took", explanation: "Take — неправильный: took." },
  { id: 53, tense: "past-simple", type: "fill_blank", question: "He ___ (leave) the office at 6 pm.", correctAnswer: "left", explanation: "Leave — неправильный: left." },
  { id: 54, tense: "past-simple", type: "fill_blank", question: "They ___ (bring) some flowers.", correctAnswer: "brought", explanation: "Bring — неправильный: brought." },
  { id: 55, tense: "past-simple", type: "fill_blank", question: "I ___ (feel) really tired after work.", correctAnswer: "felt", explanation: "Feel — неправильный: felt." },
  { id: 56, tense: "past-simple", type: "fill_blank", question: "She ___ (sleep) for 10 hours last night.", correctAnswer: "slept", explanation: "Sleep — неправильный: slept." },
  // Глагол to be
  { id: 57, tense: "past-simple", type: "fill_blank", question: "I ___ (be) very busy last week.", correctAnswer: "was", explanation: "I → was." },
  { id: 58, tense: "past-simple", type: "fill_blank", question: "They ___ (not / be) at home when I called.", correctAnswer: "weren't", explanation: "They → weren't (не wasn't!)." },
  { id: 59, tense: "past-simple", type: "fill_blank", question: "___ (it / be) cold yesterday?", correctAnswer: "Was it", explanation: "It → Was (не Were!)." },
  { id: 60, tense: "past-simple", type: "fill_blank", question: "___ (you / be) at the meeting?", correctAnswer: "Were you", explanation: "You → Were (не Was!)." },
  // Специальные случаи
  { id: 61, tense: "past-simple", type: "fill_blank", question: "When I ___ (be) a child, I ___ (play) outside every day.", correctAnswer: "was / played", explanation: "Когда + Past Simple, привычка → was + played." },
  { id: 62, tense: "past-simple", type: "fill_blank", question: "He ___ (travel) around Europe last summer.", correctAnswer: "travelled", explanation: "Британский: travel → travelled (двойная l)." },
  { id: 63, tense: "past-simple", type: "fill_blank", question: "She ___ (tell) me she ___ (be) tired.", correctAnswer: "told / was", explanation: "Tell (неправильный): told. Reported speech: was." },
  { id: 64, tense: "past-simple", type: "fill_blank", question: "I ___ (can / not) go because I ___ (not / have) my car.", correctAnswer: "couldn't / didn't have", explanation: "Can't в прошлом → couldn't. Отрицание have → didn't have." },
  { id: 65, tense: "past-simple", type: "fill_blank", question: "How long ___ (you / wait)?", correctAnswer: "did you wait", explanation: "Вопрос в Past Simple: did + V1?" },

  // ===== Translate RU → EN (66–100) =====
  { id: 66, tense: "past-simple", type: "translate_ru_en", question: "Я ходил в кино вчера.", correctAnswer: "I went to the cinema yesterday", explanation: "Yesterday → Past Simple. Go → went." },
  { id: 67, tense: "past-simple", type: "translate_ru_en", question: "Она не пришла на вечеринку.", correctAnswer: "She didn't come to the party", explanation: "Отрицание в Past Simple: didn't + V1." },
  { id: 68, tense: "past-simple", type: "translate_ru_en", question: "Ты видел этот фильм?", correctAnswer: "Did you see this film", explanation: "Вопрос: Did + V1 (не saw!)." },
  { id: 69, tense: "past-simple", type: "translate_ru_en", question: "Мы жили в Лондоне 5 лет назад.", correctAnswer: "We lived in London 5 years ago", explanation: "Ago → Past Simple. Live + d = lived." },
  { id: 70, tense: "past-simple", type: "translate_ru_en", question: "Он купил новую машину в прошлом месяце.", correctAnswer: "He bought a new car last month", explanation: "Last month → Past Simple. Buy → bought." },
  { id: 71, tense: "past-simple", type: "translate_ru_en", question: "Я был дома вчера вечером.", correctAnswer: "I was at home yesterday evening", explanation: "I → was. Yesterday → Past Simple." },
  { id: 72, tense: "past-simple", type: "translate_ru_en", question: "Они не были в школе.", correctAnswer: "They weren't at school", explanation: "They → weren't (не wasn't!)." },
  { id: 73, tense: "past-simple", type: "translate_ru_en", question: "Она написала письмо подруге.", correctAnswer: "She wrote a letter to her friend", explanation: "Write — неправильный: wrote." },
  { id: 74, tense: "past-simple", type: "translate_ru_en", question: "Мы пообедали в ресторане.", correctAnswer: "We had lunch at a restaurant", explanation: "Have → had (неправильный)." },
  { id: 75, tense: "past-simple", type: "translate_ru_en", question: "Он прочитал эту книгу в прошлом году.", correctAnswer: "He read this book last year", explanation: "Last year → Past Simple. Read → read (произносится /rɛd/)." },
  { id: 76, tense: "past-simple", type: "translate_ru_en", question: "Она потеряла свой телефон.", correctAnswer: "She lost her phone", explanation: "Lose — неправильный: lost (НЕ losed!)." },
  { id: 77, tense: "past-simple", type: "translate_ru_en", question: "Когда я был ребёнком, я любил играть на улице.", correctAnswer: "When I was a child, I loved playing outside", explanation: "When + was + loved (привычка в прошлом)." },
  { id: 78, tense: "past-simple", type: "translate_ru_en", question: "Он сказал мне, что устал.", correctAnswer: "He told me he was tired", explanation: "Tell → told. Reported speech: was (не is!)." },
  { id: 79, tense: "past-simple", type: "translate_ru_en", question: "Она приготовила вкусный ужин.", correctAnswer: "She cooked a delicious dinner", explanation: "Cook + ed = cooked." },
  { id: 80, tense: "past-simple", type: "translate_ru_en", question: "Мы встретились на конференции в 2019 году.", correctAnswer: "We met at a conference in 2019", explanation: "In 2019 → Past Simple. Meet → met." },
  { id: 81, tense: "past-simple", type: "translate_ru_en", question: "Он поймал мяч и забил гол.", correctAnswer: "He caught the ball and scored a goal", explanation: "Catch → caught. Score + d = scored." },
  { id: 82, tense: "past-simple", type: "translate_ru_en", question: "Она думала, что это хорошая идея.", correctAnswer: "She thought it was a good idea", explanation: "Think → thought. Was (отсылка к прошлому)." },
  { id: 83, tense: "past-simple", type: "translate_ru_en", question: "Мы путешествовали по Европе прошлым летом.", correctAnswer: "We travelled around Europe last summer", explanation: "Британский: travelled (двойная l). Last summer → Past Simple." },
  { id: 84, tense: "past-simple", type: "translate_ru_en", question: "Он дал мне хороший совет.", correctAnswer: "He gave me good advice", explanation: "Give → gave. Advice — неисчисляемое (НЕ advices)." },
  { id: 85, tense: "past-simple", type: "translate_ru_en", question: "Я забыл свой пароль.", correctAnswer: "I forgot my password", explanation: "Forget → forgot." },
  { id: 86, tense: "past-simple", type: "translate_ru_en", question: "Она принесла торт на день рождения.", correctAnswer: "She brought a cake for the birthday", explanation: "Bring → brought." },
  { id: 87, tense: "past-simple", type: "translate_ru_en", question: "Мы не понимали вопрос.", correctAnswer: "We didn't understand the question", explanation: "Past Simple отрицание: didn't + V1." },
  { id: 88, tense: "past-simple", type: "translate_ru_en", question: "Он раньше курил, а теперь бросил.", correctAnswer: "He used to smoke, but now he has stopped", explanation: "Used to + V1 = бывшая привычка." },
  { id: 89, tense: "past-simple", type: "translate_ru_en", question: "Она носила очки в детстве.", correctAnswer: "She wore glasses when she was a child", explanation: "Wear → wore. When + was." },
  { id: 90, tense: "past-simple", type: "translate_ru_en", question: "Я проснулся, позавтракал и пошёл на работу.", correctAnswer: "I woke up, had breakfast and went to work", explanation: "Последовательность: woke up, had, went. Все Past Simple." },
  { id: 91, tense: "past-simple", type: "translate_ru_en", question: "Она научилась водить машину в 20 лет.", correctAnswer: "She learnt to drive when she was 20", explanation: "Британский: learnt (или learned). When + was." },
  { id: 92, tense: "past-simple", type: "translate_ru_en", question: "Они построили дом в прошлом году.", correctAnswer: "They built a house last year", explanation: "Build → built (неправильный)." },
  { id: 93, tense: "past-simple", type: "translate_ru_en", question: "Она отправила мне сообщение.", correctAnswer: "She sent me a message", explanation: "Send → sent." },
  { id: 94, tense: "past-simple", type: "translate_ru_en", question: "Он получил новую работу.", correctAnswer: "He got a new job", explanation: "Get → got. Британский: got (НЕ gotten!)." },
  { id: 95, tense: "past-simple", type: "translate_ru_en", question: "Мы играли в футбол всё утро.", correctAnswer: "We played football all morning", explanation: "All morning (завершённый период) → Past Simple: played." },
  { id: 96, tense: "past-simple", type: "translate_ru_en", question: "Она разбила вазу.", correctAnswer: "She broke the vase", explanation: "Break → broke." },
  { id: 97, tense: "past-simple", type: "translate_ru_en", question: "Он сказал, что придёт завтра.", correctAnswer: "He said he would come tomorrow", explanation: "Said + will → would (косвенная речь, согласование времён)." },
  { id: 98, tense: "past-simple", type: "translate_ru_en", question: "Я выбрал синюю рубашку.", correctAnswer: "I chose the blue shirt", explanation: "Choose → chose." },
  { id: 99, tense: "past-simple", type: "translate_ru_en", question: "Она дала мне правильный ответ.", correctAnswer: "She gave me the correct answer", explanation: "Give → gave." },
  { id: 100, tense: "past-simple", type: "translate_ru_en", question: "Мы провели отпуск у моря.", correctAnswer: "We spent our holiday at the seaside", explanation: "Spend → spent. Британский: at the seaside (не on)." },

  // ===== NEW: Missing Topics (101–130) =====
  // Wh-вопросы, just now, the other day, Second Conditional,
  // must → had to / didn't have to, was able to vs could,
  // would vs used to, at the weekend

  // ===== Multiple Choice (101–110) =====
  // Wh-вопросы
  { id: 101, tense: "past-simple", type: "multiple_choice", question: "___ did you ___ yesterday evening?", options: ["What / do", "What / did", "What / did do", "Where / did"], correctAnswer: "What / do", explanation: "Wh-вопрос в Past Simple: Wh-слово + did + подлежащее + V1 (do, не did!)." },
  { id: 102, tense: "past-simple", type: "multiple_choice", question: "Where ___ she ___ last summer?", options: ["did / go", "did / went", "does / go", "was / go"], correctAnswer: "did / go", explanation: "Where + did + she + V1 (go, не went!). После did глагол в начальной форме." },
  { id: 103, tense: "past-simple", type: "multiple_choice", question: "___ did he leave so early?", options: ["Why", "What", "When", "Where"], correctAnswer: "Why", explanation: "Why = «почему». Why + did + he + V1 (leave)." },
  { id: 104, tense: "past-simple", type: "multiple_choice", question: "___ did you see at the party?", options: ["Who", "Whom", "What", "Where"], correctAnswer: "Who", explanation: "Who = «кого» (разговорный). Who + did + you + V1 (see)." },
  // just now / the other day
  { id: 105, tense: "past-simple", type: "multiple_choice", question: "She left ___.", options: ["just now", "just", "already now", "since now"], correctAnswer: "just now", explanation: "Just now = «только что» в значении завершённого действия → Past Simple. Не путать с just + Present Perfect." },
  { id: 106, tense: "past-simple", type: "multiple_choice", question: "I saw him ___.", options: ["the other day", "other day", "another day", "the another day"], correctAnswer: "the other day", explanation: "The other day = «на днях» → Past Simple. Устойчивое выражение с артиклем the." },
  // Second Conditional
  { id: 107, tense: "past-simple", type: "multiple_choice", question: "If I ___ a million pounds, I would buy a house.", options: ["had", "have", "has", "would have"], correctAnswer: "had", explanation: "Second Conditional: If + Past Simple (had), would + V1. Нереальное условие в настоящем/будущем." },
  // must → had to / didn't have to
  { id: 108, tense: "past-simple", type: "multiple_choice", question: "I ___ get up early yesterday because I had an exam.", options: ["had to", "must", "musted", "must to"], correctAnswer: "had to", explanation: "Must не имеет формы прошедшего времени! Прошедшая форма must → had to." },
  { id: 109, tense: "past-simple", type: "multiple_choice", question: "It was a holiday, so I ___ work.", options: ["didn't have to", "mustn't", "hadn't to", "mustn't have to"], correctAnswer: "didn't have to", explanation: "Didn't have to = «не нужно было» (отсутствие обязанности). Mustn't = «запрещено» — другое значение!" },
  // was able to vs could
  { id: 110, tense: "past-simple", type: "multiple_choice", question: "After hours of trying, I finally ___ solve the problem.", options: ["was able to", "could", "can", "was could"], correctAnswer: "was able to", explanation: "Однократный успех в прошлом → was/were able to (или managed to). Could = общая способность." },

  // ===== Fill in the Blank (111–120) =====
  // Wh-вопросы
  { id: 111, tense: "past-simple", type: "fill_blank", question: "When ___ (they / arrive)?", correctAnswer: "did they arrive", explanation: "Wh-вопрос в Past Simple: When + did + подлежащее + V1." },
  { id: 112, tense: "past-simple", type: "fill_blank", question: "How ___ (you / get) to the airport?", correctAnswer: "did you get", explanation: "How + did + you + V1 (get). Get — неправильный, но после did стоит V1 = get." },
  // just now / the other day
  { id: 113, tense: "past-simple", type: "fill_blank", question: "The taxi ___ (arrive) just now.", correctAnswer: "arrived", explanation: "Just now = «только что» → Past Simple. Arrive + d = arrived." },
  { id: 114, tense: "past-simple", type: "fill_blank", question: "I ___ (bump into) her the other day.", correctAnswer: "bumped into", explanation: "The other day → Past Simple. Bump: краткий гласный + 1 согласная → bumped. Bump into = случайно встретить." },
  // Second Conditional
  { id: 115, tense: "past-simple", type: "fill_blank", question: "I wish I ___ (know) French.", correctAnswer: "knew", explanation: "I wish + Past Simple = сожаление о настоящем. Know — неправильный: knew." },
  { id: 116, tense: "past-simple", type: "fill_blank", question: "If she ___ (have) more time, she would travel more.", correctAnswer: "had", explanation: "Second Conditional: If + Past Simple (had), would + V1. Нереальное условие." },
  // must → had to / didn't have to
  { id: 117, tense: "past-simple", type: "fill_blank", question: "She ___ (have to) wait for two hours at the station.", correctAnswer: "had to", explanation: "Have to в прошедшем → had to. Must не имеет формы прошедшего!" },
  { id: 118, tense: "past-simple", type: "fill_blank", question: "We ___ (not / have to) go to school yesterday — it was a holiday.", correctAnswer: "didn't have to", explanation: "Didn't have to = «не нужно было» (отсутствие необходимости)." },
  // was able to vs could
  { id: 119, tense: "past-simple", type: "fill_blank", question: "He ___ (be able to) pass the exam on his second attempt.", correctAnswer: "was able to", explanation: "Однократный успех в прошлом → was/were able to (не could!). Could = общая способность." },
  // used to vs would + at the weekend
  { id: 120, tense: "past-simple", type: "fill_blank", question: "She ___ (use to / be) very shy when she was young.", correctAnswer: "used to be", explanation: "Состояние (be shy) → только used to. Would нельзя использовать с состояниями!" },

  // ===== Translate RU → EN (121–130) =====
  // Wh-вопросы
  { id: 121, tense: "past-simple", type: "translate_ru_en", question: "Что ты делал вчера вечером?", correctAnswer: "What did you do yesterday evening", explanation: "Wh-вопрос: What + did + you + V1 (do)." },
  { id: 122, tense: "past-simple", type: "translate_ru_en", question: "Куда она поехала в прошлом году?", correctAnswer: "Where did she go last year", explanation: "Where + did + she + V1 (go). Last year → Past Simple." },
  { id: 123, tense: "past-simple", type: "translate_ru_en", question: "Почему он ушёл так рано?", correctAnswer: "Why did he leave so early", explanation: "Why + did + he + V1 (leave, не left!)." },
  // just now / the other day
  { id: 124, tense: "past-simple", type: "translate_ru_en", question: "Он ушёл только что.", correctAnswer: "He left just now", explanation: "Just now = «только что» в прошедшем → Past Simple: left." },
  { id: 125, tense: "past-simple", type: "translate_ru_en", question: "Я встретил его на днях.", correctAnswer: "I met him the other day", explanation: "The other day = «на днях» → Past Simple. Meet → met." },
  // Second Conditional
  { id: 126, tense: "past-simple", type: "translate_ru_en", question: "Если бы у меня было время, я бы помог тебе.", correctAnswer: "If I had time, I would help you", explanation: "Second Conditional: If + Past Simple (had), would + V1." },
  // must → had to / didn't have to
  { id: 127, tense: "past-simple", type: "translate_ru_en", question: "Мне пришлось рано встать вчера.", correctAnswer: "I had to get up early yesterday", explanation: "Must в прошедшем → had to. Get up → got up в Past Simple, но have to → had to." },
  { id: 128, tense: "past-simple", type: "translate_ru_en", question: "Мне не нужно было работать в субботу.", correctAnswer: "I didn't have to work on Saturday", explanation: "Didn't have to = «не нужно было» (отсутствие обязанности)." },
  // was able to / used to vs would / at the weekend
  { id: 129, tense: "past-simple", type: "translate_ru_en", question: "Ей удалось сдать экзамен со второго раза.", correctAnswer: "She was able to pass the exam on her second attempt", explanation: "Однократный успех в прошлом → was/were able to (не could!)." },
  { id: 130, tense: "past-simple", type: "translate_ru_en", question: "Мы ходили в парк на выходных.", correctAnswer: "We went to the park at the weekend", explanation: "Британский: at the weekend (не on the weekend!). Go → went." },
];
