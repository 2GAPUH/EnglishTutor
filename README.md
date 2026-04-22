# 🎓 British English Tutor — 12 Tenses

Интерактивный репетитор по британскому английскому языку. Изучите все 12 времён английского языка шаг за шагом — с теорией, упражнениями, подсказками и отслеживанием прогресса.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-SQLite-2D3748?logo=prisma)

## 📋 Возможности

- **12 времён английского языка** — организованы в 3 блока (Present, Past, Future)
- **Подробная теория** на русском языке с формулами, словами-маркерами, особенностями британского английского
- **730+ упражнений** — множественный выбор, заполнение пропусков, перевод с русского на английский
- **💡 Система подсказок (115+ грамматических подсказок)** — контекстные грамматические подсказки к каждому упражнению, разбитые по 8 категориям
- **Адаптивный дизайн** — работает на десктопе и мобильных устройствах
- **Отслеживание прогресса** — сохранение прогресса в базе данных
- **Система разблокировки** — последовательное изучение от простого к сложному
- **Замороженные упражнения** — пропущенные упражнения не повторяются до ручного сброса

## 💡 Система подсказок

Каждое упражнение снабжено контекстными грамматическими подсказками, которые помогают ученику разобраться в правиле, не подглядывая в ответ. Подсказки прикрепляются к упражнениям по ID и комбинируются — одно упражнение может иметь несколько подсказок из разных категорий.

### Категории подсказок

| Категория | Описание | Пример |
|---|---|---|
| 📐 Формула | Структура времени | «I / You / We / They + V1» |
| 🔶 Слова-маркеры | Маркеры времени | «yesterday, last..., ago → Past Simple» |
| 🔤 Орфография | Правила написания | «согласная + y → -ies» |
| 📖 Употребление | Когда использовать | «Факты и законы природы» |
| 🚫 Стативные глаголы | Стативные глаголы в контексте | «know, want, like → НЕ в Continuous» |
| ⚡ Особые случаи | Исключения и особые случаи | «used to + V1 = бывшая привычка» |
| ➖ Отрицание | Построение отрицания | «didn't + V1 (не V2!)» |
| ❓ Вопрос | Построение вопросов | «Did + подлежащее + V1?» |

### Покрытие по временам

| Время | Подсказок | Упражнений | Покрытие |
|---|---|---|---|
| Present Simple | 16 | 100 | 100% |
| Present Continuous | 20 | 100 | 100% |
| Present Perfect | 21 | 100 | 100% |
| Present Perfect Continuous | 14 | 100 | 100% |
| Итоговый тест (Present) | — | 100 | 100% |
| Past Simple | 22 | 130 | 100% |
| Past Continuous | 22 | 100 | 100% |
| **Итого** | **115+** | **730** | **100%** |

## 🗂 Структура курса

### Блок 1 — Present Tenses (5 тем)
| Тема | Теория | Упражнения | Подсказки |
|---|---|---|---|
| Present Simple | ✅ | 100 | ✅ |
| Present Continuous | ✅ | 100 | ✅ |
| Present Perfect | ✅ | 100 | ✅ |
| Present Perfect Continuous | ✅ | 100 | ✅ |
| Итоговый тест | ✅ | 100 | ✅ |

### Блок 2 — Past Tenses (4 темы)
| Тема | Теория | Упражнения | Подсказки |
|---|---|---|---|
| Past Simple | ✅ | 130 | ✅ |
| Past Continuous | ✅ | 100 | ✅ |
| Past Perfect | 🚧 | — | — |
| Past Perfect Continuous | 🚧 | — | — |

### Блок 3 — Future Tenses (4 темы)
| Тема | Теория | Упражнения | Подсказки |
|---|---|---|---|
| Future Simple | 🚧 | — | — |
| Future Continuous | 🚧 | — | — |
| Future Perfect | 🚧 | — | — |
| Future Perfect Continuous | 🚧 | — | — |

> 🚧 — в разработке

## 🚀 Установка и запуск

### Требования
- [Node.js](https://nodejs.org/) 18+ или [Bun](https://bun.sh/) 1.0+
- [SQLite](https://www.sqlite.org/) (встроена в Prisma)

### Шаги

```bash
# Клонировать репозиторий
git clone https://github.com/2GAPUH/EnglishTutor.git
cd EnglishTutor

# Установить зависимости
npm install

# Создать файл окружения
cp .env.example .env

# Создать базу данных и сгенерировать Prisma клиент
npx prisma db push
npx prisma generate

# Запустить сервер разработки
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

## 🛠 Технологический стек

| Технология | Назначение |
|---|---|
| [Next.js 16](https://nextjs.org/) | React-фреймворк (App Router) |
| [TypeScript 5](https://www.typescriptlang.org/) | Типизация |
| [Tailwind CSS 4](https://tailwindcss.com/) | Стилизация |
| [shadcn/ui](https://ui.shadcn.com/) | UI-компоненты |
| [Prisma](https://www.prisma.io/) | ORM (SQLite) |
| [Zustand](https://zustand.docs.pmnd.rs/) | Управление состоянием |
| [Lucide Icons](https://lucide.dev/) | Иконки |
| [Sonner](https://sonner.emilkowal.dev/) | Toast-уведомления |

## 📁 Структура проекта

```
EnglishTutor/
├── prisma/
│   └── schema.prisma          # Схема базы данных
├── public/
│   ├── logo.svg
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── api/tutor/         # API-эндпоинты (progress, theory, reset)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx           # Главная страница
│   ├── components/
│   │   ├── tutor/             # Компоненты репетитора
│   │   │   ├── blocked-panel.tsx
│   │   │   ├── exercise-panel.tsx    # ← UI подсказок (💡 кнопка + панель)
│   │   │   ├── progress-sidebar.tsx
│   │   │   ├── results-panel.tsx
│   │   │   ├── test-setup-panel.tsx
│   │   │   └── theory-panel.tsx
│   │   └── ui/                # shadcn/ui компоненты
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── exercises/         # Данные упражнений по темам
│   │   │   ├── present-simple.ts          # 100 упражнений + hintIds
│   │   │   ├── present-continuous.ts      # 100 упражнений + hintIds
│   │   │   ├── present-perfect.ts         # 100 упражнений + hintIds
│   │   │   ├── present-perfect-continuous.ts  # 100 упражнений + hintIds
│   │   │   ├── present-final-test.ts      # 100 упражнений + hintIds
│   │   │   ├── past-simple.ts             # 130 упражнений + hintIds
│   │   │   └── past-continuous.ts         # 100 упражнений + hintIds
│   │   ├── hints.ts            # 💡 Реестр подсказок (115+, 8 категорий)
│   │   ├── theory-*.ts        # Данные теории по темам
│   │   ├── tutor-data.ts      # Основной дата-слой (Exercise + hintIds)
│   │   ├── db.ts              # Prisma клиент
│   │   └── utils.ts
│   └── store/
│       └── tutor-store.ts     # Zustand store
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 📝 Скрипты

| Команда | Описание |
|---|---|
| `npm run dev` | Запустить сервер разработки |
| `npm run build` | Собрать проект для продакшена |
| `npm run start` | Запустить продакшен-сервер |
| `npm run lint` | Проверить код линтером |
| `npm run db:push` | Применить схему БД |
| `npm run db:generate` | Сгенерировать Prisma клиент |
| `npm run db:reset` | Сбросить базу данных |

## 📄 Лицензия

MIT
