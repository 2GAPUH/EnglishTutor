AI_GUIDE.md — инструкция для нейросетей по проекту British English Tutor

Обязанность: при любом изменении архитектуры, файлов, типов, стека — обновлять этот файл. Он должен всегда отражать актуальное состояние проекта. Не удалять это предупреждение.


====================================================================
СУТЬ ПРОЕКТА
====================================================================

Интерактивный репетитор британского английского для русскоговорящих.
Next.js 16 SPA, покрывает 12 времён: теория на русском, тесты с упражнениями, копирование ответов для ручной проверки нейросетью.
Все пользовательские тексты на русском языке.
БД SQLite (Prisma), стейт Zustand.


====================================================================
СТЕК ТЕХНОЛОГИЙ
====================================================================

Фреймворк:   Next.js 16, App Router, output standalone, reactStrictMode true
Язык:        TypeScript 5, noImplicitAny false
Стилизация:  Tailwind CSS 4 (@import tailwindcss, oklch палитра)
UI:          shadcn/ui New York, 17 компонентов в src/components/ui/
Состояние:   Zustand 5, файл src/store/tutor-store.ts, хук useTutorStore
БД:          SQLite через Prisma ORM, активна только модель TenseProgress
API:         REST, 4 эндпоинта в /api/tutor/
Иконки:      lucide-react
Markdown:    react-markdown + remark-gfm (рендеринг теории)
Тосты:       sonner
Шрифты:      Geist Sans + Geist Mono (next/font/google)
Рантайм:     bun


====================================================================
КАРТА ФАЙЛОВ
====================================================================

prisma/schema.prisma — схема БД, 3 модели (User, Post, TenseProgress), активна только TenseProgress

src/app/page.tsx — главный файл, TutorPage, оркестратор всего UI
src/app/layout.tsx — root layout, шрифты, html lang=ru, Toaster
src/app/globals.css — Tailwind 4 конфиг, shadcn тема, oklch цвета

src/app/api/route.ts — GET / health check
src/app/api/tutor/progress/route.ts — GET загрузка прогресса из БД
src/app/api/tutor/theory/route.ts — POST отметить теорию прочитанной
src/app/api/tutor/complete/route.ts — POST отметить тест завершённым
src/app/api/tutor/reset/route.ts — POST полный сброс прогресса

src/store/tutor-store.ts — Zustand store, все состояние приложения

src/lib/tutor-data.ts — ключевой файл: типы TenseId Exercise TenseData, константы ALL_TENSES BLOCKS TENSE_ORDER TENSE_NAMES
src/lib/hints.ts — реестр грамматических подсказок, массив ALL_HINTS, функции getHintById getHintsByIds getHintsForTense
src/lib/db.ts — Prisma singleton
src/lib/utils.ts — cn() helper

src/lib/theory-present-simple.ts — теория Present Simple
src/lib/theory-present-continuous.ts — теория Present Continuous
src/lib/theory-present-perfect.ts — теория Present Perfect
src/lib/theory-present-perfect-continuous.ts — теория Present Perfect Continuous
src/lib/theory-present-final-test.ts — теория итогового теста
src/lib/theory-past-simple.ts — теория Past Simple
src/lib/theory-past-continuous.ts — теория Past Continuous
src/lib/theory-past-perfect.ts — теория Past Perfect
src/lib/irregular-verbs.ts — таблица неправильных глаголов (87 шт., B1), тип IrregularVerb, константа IRREGULAR_VERBS

src/lib/exercises/present-simple.ts — 100 упражнений, все с hintIds
src/lib/exercises/present-continuous.ts — 100 упражнений, все с hintIds
src/lib/exercises/present-perfect.ts — 100 упражнений, все с hintIds
src/lib/exercises/present-perfect-continuous.ts — 100 упражнений, все с hintIds
src/lib/exercises/present-final-test.ts — 100 упражнений, все с hintIds (смешанные)
src/lib/exercises/past-simple.ts — 130 упражнений, все с hintIds
src/lib/exercises/past-continuous.ts — 100 упражнений, все с hintIds
src/lib/exercises/past-perfect.ts — 100 упражнений, все с hintIds

src/components/tutor/irregular-verbs-table.tsx — интерактивная таблица глаголов (поиск, скролл)
src/components/tutor/irregular-verbs-test.tsx — тестирование знания форм неправильных глаголов (настройка, вопросы, результаты)
src/components/tutor/irregular-verbs-panel.tsx — панель раздела «Неправильные глаголы» (табы: таблица/тест, кнопка назад)
src/components/tutor/exercise-panel.tsx — ExerciseCard (система подсказок) + CompletePanel
src/components/tutor/theory-panel.tsx — рендеринг Markdown теории, встроенная таблица глаголов (embedVerbs), кнопка перехода к неправильным глаголам
src/components/tutor/test-setup-panel.tsx — настройка теста (количество, типы, старт)
src/components/tutor/progress-sidebar.tsx — навигация по курсу (блоки, темы + раздел «Дополнительная информация»)
src/components/tutor/blocked-panel.tsx — экран "тема пока недоступна"
src/components/tutor/results-panel.tsx — НЕ ПОДКЛЮЧЁН, импортирует несуществующие свойства из store, планировался для автооценки

src/components/ui/ — 17 shadcn/ui компонентов, не редактировать вручную, обновлять через CLI

src/hooks/use-toast.ts — вероятно не используется, sonner импортируется напрямую


====================================================================
КЛЮЧЕВЫЕ ТИПЫ
====================================================================

TenseId — юнион из 13 строк:
  "present-simple" "present-continuous" "present-perfect" "present-perfect-continuous" "present-final-test"
  "past-simple" "past-continuous" "past-perfect" "past-perfect-continuous"
  "future-simple" "future-continuous" "future-perfect" "future-perfect-continuous"

BlockId — "present" | "past" | "future"

ExerciseType — "multiple_choice" | "translate_ru_en" | "fill_blank"

Exercise:
  id: number           — локальный в рамках файла (1-130), НЕ глобальный
  tense: TenseId
  type: ExerciseType
  question: string
  options?: string[]   — только для multiple_choice
  correctAnswer: string
  explanation: string
  hint?: string        — legacy, одна подсказка прямо в упражнении
  hintIds?: string[]   — основной механизм, ссылки на hints.ts

TheorySection:
  title: string
  content: string      — Markdown с GFM (таблицы, code, blockquote)
  embedVerbs?: boolean — если true, под контентом рендерится интерактивная таблица неправильных глаголов (IrregularVerbsTable)

IrregularVerb:
  v1: string — базовая форма (Infinitive)
  v2: string — Past Simple
  v3: string — Past Participle
  ru: string — перевод на русский

embedVerbs используется в: past-simple (секция «Правильные и неправильные глаголы»), present-perfect (секция «Формулы»), past-perfect (секция «Формулы»)
Кнопка «Неправильные глаголы» отображается в TheoryPanel для времён: past-simple, present-perfect, present-perfect-continuous, past-perfect, past-perfect-continuous

TenseData:
  id: TenseId
  nameEn: string
  nameRu: string
  block: BlockId
  order: number
  theory: TheorySection[]
  exercises: Exercise[]

HintCategory — "formula" | "signal-words" | "spelling" | "usage" | "stative" | "special" | "negation" | "question"

Hint:
  id: string           — пример: "ps-formula-vs", "pts-irregular", "ptc-usage-when"
  tense: TenseId
  category: HintCategory
  title: string
  text: string


====================================================================
ПОЛЬЗОВАТЕЛЬСКИЙ ПОТОК
====================================================================

1. Загрузка — GET /api/tutor/progress — определяет currentTense и currentView
2. THEORY — пользователь читает Markdown теорию — POST /api/tutor/theory — переходит к setup
   В теориях с V2/V3 формами (Past Simple, Present Perfect, Past Perfect) отображается кнопка «Неправильные глаголы»
3. SETUP — выбирает количество упражнений (5-30) — случайно выбирает из пула, замороженные исключаются
4. EXERCISE — отвечает на вопросы — может открыть подсказки
5. COMPLETE — копирует форматированные ответы — отправляет нейросети для проверки
6. Автопереход к следующему времени

Дополнительный раздел — Неправильные глаголы (currentView: "irregular-verbs")
  Доступен из боковой панели (раздел «Дополнительная информация»)
  Доступен из кнопки в теориях времён с V2/V3 формами
  Содержит два таба: Таблица (поиск по формам/переводу) и Тест (настройка: V2/V3/смешанный, 10-50 вопросов)
  Тест: пошаговый ввод ответов, мгновенная проверка, результат с ошибками


====================================================================
ZUSTAND STORE (useTutorStore)
====================================================================

Свойства:
  currentTense: TenseId — текущее время
  currentView: "theory" | "setup" | "exercise" | "complete" | "blocked" | "irregular-verbs"
  progressMap — данные прогресса из БД
  exerciseCount: number — сколько упражнений в тесте (дефолт 10)
  selectedExercises: Exercise[] — выбранные для текущего теста
  answers: Record<number, string> — ответы пользователя по exercise.id
  frozenIds: Record<TenseId, number[]> — показанные упражнения
  sidebarOpen: boolean — мобильный сайдбар
  sidebarCollapsed: boolean — десктоп сайдбер свёрнут
  sidebarWidth: number — ширина десктоп сайдбара (200-500)

Ключевые действия:
  setView(view) — переключение между панелями
  setCurrentTense(tense) — навигация к времени
  setExerciseCount(n) — установка количества упражнений
  setSelectedExercises(ex) — установка упражнений для теста
  setAnswer(idx, val) — запись ответа
  resetAnswers() — очистка ответов
  loadFrozen() — загрузка замороженных из localStorage
  freezeExercises(tenseId, ids) — заморозка упражнений
  unfreezeTense(tenseId) — сброс заморозок
  goToNextTense() — переход к следующему времени
  goToTheory() — возврат к теории
  goToIrregularVerbs() — переход к разделу неправильных глаголов
  markTenseStudied(tenseId) — оптимистичная отметка завершения


====================================================================
СИСТЕМА ЗАМОРОЗКИ УПРАЖНЕНИЙ
====================================================================

После показа exercise id добавляется в frozenIds и персистится в localStorage.
При следующем тесте замороженные упражнения исключаются из пула.
Пользователь может сбросить пул для конкретного времени.
Ключ localStorage: "tutor_frozen_exercises"
Формат: JSON объект { [tenseId]: number[] }


====================================================================
СИСТЕМА ПОДСКАЗОК
====================================================================

Подсказки в src/lib/hints.ts, массив ALL_HINTS, 8 категорий.
Упражнения ссылаются через hintIds: ["ps-formula-vs", "ps-signal-routine"].
UI: кнопка с иконкой lamp, бейдж количества, раскрывающаяся панель.
Каждая категория подсвечена своим цветом через HINT_CATEGORY_COLORS.
Поддерживает legacy поле hint на Exercise.

Категории подсказок:
  formula — формула/структура времени
  signal-words — слова-маркеры
  spelling — правила орфографии
  usage — когда использовать время
  stative — стативные глаголы
  special — особые случаи и исключения
  negation — построение отрицания
  question — построение вопросов


====================================================================
ПРАВИЛА ИМЕНОВАНИЯ
====================================================================

ID подсказок: префикс_времени-категория-уникализатор
  ps  — present-simple       пример: ps-formula-vs, ps-negative, ps-signal-routine
  pc  — present-continuous   пример: pc-formula, pc-usage-now, pc-spelling-drop-e
  pp  — present-perfect      пример: pp-formula, pp-signal-already, pp-been-gone
  ppc — present-perfect-continuous  пример: ppc-formula, ppc-vs-perfect
  pts — past-simple          пример: pts-formula-v2, pts-irregular, pts-used-to
  ptc — past-continuous      пример: ptc-formula, ptc-usage-when, ptc-stative
  ptp — past-perfect         пример: ptp-formula, ptp-signal-by-the-time, ptp-usage-precedence

Файлы теории: theory-{tense-id}.ts, экспорт {tenseId}Theory: TheorySection[]
Файлы упражнений: exercises/{tense-id}.ts, экспорт {tenseId}Exercises: Exercise[]


====================================================================
API ЭНДПОИНТЫ
====================================================================

GET  /api/tutor/progress    — возвращает { currentTense, currentView, progressMap }
POST /api/tutor/theory      — тело { tense: string }, ответ { success: true }
POST /api/tutor/complete    — тело { tense: string }, ответ { success: true }
POST /api/tutor/reset       — тело отсутствует, ответ { success: true }

Все работают с Prisma моделью TenseProgress (tense string unique, theoryDone boolean, completed boolean).


====================================================================
СТРУКТУРА КУРСА
====================================================================

Блок 1 — Present Tenses
  present-simple              — теория: есть, упражнений: 100, подсказок: 16, статус: готово
  present-continuous          — теория: есть, упражнений: 100, подсказок: 20, статус: готово
  present-perfect             — теория: есть, упражнений: 100, подсказок: 21, статус: готово
  present-perfect-continuous  — теория: есть, упражнений: 100, подсказок: 14, статус: готово
  present-final-test          — теория: есть, упражнений: 100, подсказок: из всех тем, статус: готово

Блок 2 — Past Tenses
  past-simple                 — теория: есть, упражнений: 130, подсказок: 22, статус: готово
  past-continuous             — теория: есть, упражнений: 100, подсказок: 22, статус: готово
  past-perfect                — теория: есть (7 секций, только активный залог), упражнений: 100, подсказок: 20, статус: готово
  past-perfect-continuous     — теория: placeholder, упражнений: 0, подсказок: 0, статус: заблокировано

Блок 3 — Future Tenses
  future-simple               — теория: placeholder, упражнений: 0, подсказок: 0, статус: заблокировано
  future-continuous           — теория: placeholder, упражнений: 0, подсказок: 0, статус: заблокировано
  future-perfect              — теория: placeholder, упражнений: 0, подсказок: 0, статус: заблокировано
  future-perfect-continuous   — теория: placeholder, упражнений: 0, подсказок: 0, статус: заблокировано

Всего: 830 упражнений, 135+ подсказок, 100% покрытие подсказками для готовых тем.

Дополнительная информация:
  Неправильные глаголы — 87 глаголов уровня B1, интерактивная таблица с поиском, тестирование знания V2/V3 форм

Tutor покрывает только активный залог. Косвенная речь (Reported Speech) и условные предложения (Conditionals) не входят в курс.


====================================================================
КАК ДОБАВИТЬ НОВОЕ ВРЕМЯ
====================================================================

Шаг 1 — Создать src/lib/theory-{tense-id}.ts, экспортировать {tenseId}Theory: TheorySection[]
Шаг 2 — Создать src/lib/exercises/{tense-id}.ts, экспортировать {tenseId}Exercises: Exercise[]
         Рекомендуемый баланс: 35 multiple_choice, 30 fill_blank, 35 translate_ru_en
         К каждому упражнению добавить hintIds
Шаг 3 — Добавить массив подсказок в src/lib/hints.ts, выбрать префикс ID, добавить в ALL_HINTS
Шаг 4 — В src/lib/tutor-data.ts: импортировать файлы, обновить ALL_TENSES, заменить placeholder
Шаг 5 — БД: не нужно, TenseProgress.tense это String


====================================================================
КАК ДОБАВИТЬ ПОДСКАЗКУ К УПРАЖНЕНИЮ
====================================================================

Найти или создать подсказку в hints.ts по id.
Добавить hintIds в упражнение: hintIds: ["pts-formula-v2", "pts-signal-time"]


====================================================================
ИЗВЕСТНЫЕ ПРОБЛЕМЫ
====================================================================

1. ResultsPanel не подключён — компонент существует (results-panel.tsx), импортирует несуществующие свойства из store (ExerciseResult, results, lastScore, lastTotal). В page.tsx для view complete используется CompletePanel. Автоматической оценки нет, пользователь копирует ответы вручную.

2. Неиспользуемые зависимости в package.json: next-intl, next-auth, @mdxeditor/editor, @dnd-kit/*, react-hook-form, @hookform/resolvers, @tanstack/react-query, @tanstack/react-table, recharts, react-syntax-highlighter, input-otp, z-ai-web-dev-sdk.

3. Prisma модели User и Post определены но не используются. Активна только TenseProgress.

4. Аутентификация не реализована. next-auth в зависимостях но не настроен. Приложение публичное.

5. noImplicitAny false — типизация в некоторых местах расслаблена.


====================================================================
СТИЛИ И UI
====================================================================

Тема: oklch палитра в globals.css, монохромная серая, без акцентного primary цвета.
Dark mode: через CSS класс .dark на html.
Компоненты: только shadcn/ui, папку src/components/ui/ не трогать.
Responsive: мобильная навигация через Sheet, десктоп resizable sidebar (200-500px).
Максимальная ширина контента: max-w-3xl.
Footer отсутствует, приложение полноэкранный SPA.


====================================================================LOCALSTORAGE
====================================================================

tutor_frozen_exercises — JSON { [tenseId]: number[] }, замороженные exercise IDs
tutor_sidebar_width — number, ширина сайдбара
tutor_sidebar_collapsed — boolean, свёрнут ли сайдбар


====================================================================
БАЗА ДАННЫХ (Prisma)
====================================================================

Активная модель TenseProgress:
  id: String, @id, @default(cuid())
  tense: String, @unique — например "present-simple"
  theoryDone: Boolean, @default(false)
  completed: Boolean, @default(false)
  createdAt: DateTime
  updatedAt: DateTime

Модели User и Post — boilerplate, не используются.


====================================================================
КОМАНДЫ
====================================================================

bun run dev      — dev сервер на порту 3000, лог пишется в dev.log
bun run lint     — ESLint проверка
bun run db:push  — применить схему Prisma к SQLite


====================================================================
ЧЕКЛИСТ ОБНОВЛЕНИЯ ЭТОГО ФАЙЛА
====================================================================

Изменил типы в tutor-data.ts — обновить секцию КЛЮЧЕВЫЕ ТИПЫ
Добавил или удалил упражнение — обновить секцию СТРУКТУРА КУРСА (счётчики)
Добавил подсказку — обновить секцию СТРУКТУРА КУРСА, проверить префикс
Создал новый файл — обновить секцию КАРТА ФАЙЛОВ
Изменил store — обновить секцию ZUSTAND STORE
Добавил API эндпоинт — обновить секцию API ЭНДПОИНТЫ
Изменил стек или зависимости — обновить секцию СТЕК ТЕХНОЛОГИЙ
Обнаружил баг — добавить в секцию ИЗВЕСТНЫЕ ПРОБЛЕМЫ


Конец файла. ВНИМАНИЕ: этот файл является живым документом. При каждом значительном изменении проекта его необходимо обновлять. Актуальность этого файла критически важна для продуктивной работы нейросетей с данным проектом.
