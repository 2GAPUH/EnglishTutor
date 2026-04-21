# 🎓 British English Tutor — 12 Tenses

Интерактивный репетитор по британскому английскому языку. Изучите все 12 времён английского языка шаг за шагом — с теорией, упражнениями и отслеживанием прогресса.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-SQLite-2D3748?logo=prisma)

## 📋 Возможности

- **12 времён английского языка** — organised in 3 blocks (Present, Past, Future)
- **Подробная теория** на русском языке с формулами, словами-маркерами, особенностями британского английского
- **700+ упражнений** — множественный выбор, заполнение пропусков, перевод с русского на английский
- **Адаптивный дизайн** — работает на десктопе и мобильных устройствах
- **Отслеживание прогресса** — сохранение прогресса в базе данных
- **Система разблокировки** — последовательное изучение от простого к сложному
- **Замороженные упражнения** — пропущенные упражнения не повторяются до ручного сброса

## 🗂 Структура курса

### Блок 1 — Present Tenses (5 тем)
| Тема | Теория | Упражнения |
|---|---|---|
| Present Simple | ✅ | 100 |
| Present Continuous | ✅ | 100 |
| Present Perfect | ✅ | 100 |
| Present Perfect Continuous | ✅ | 100 |
| Итоговый тест | ✅ | 100 |

### Блок 2 — Past Tenses (4 темы)
| Тема | Теория | Упражнения |
|---|---|---|
| Past Simple | ✅ | 100 |
| Past Continuous | ✅ | 50 |
| Past Perfect | 🚧 | — |
| Past Perfect Continuous | 🚧 | — |

### Блок 3 — Future Tenses (4 темы)
| Тема | Теория | Упражнения |
|---|---|---|
| Future Simple | 🚧 | — |
| Future Continuous | 🚧 | — |
| Future Perfect | 🚧 | — |
| Future Perfect Continuous | 🚧 | — |

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
│   │   │   ├── exercise-panel.tsx
│   │   │   ├── progress-sidebar.tsx
│   │   │   ├── results-panel.tsx
│   │   │   ├── test-setup-panel.tsx
│   │   │   └── theory-panel.tsx
│   │   └── ui/                # shadcn/ui компоненты
│   ├── hooks/
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── exercises/         # Данные упражнений по темам
│   │   ├── theory-*.ts        # Данные теории по темам
│   │   ├── tutor-data.ts      # Основной дата-слой
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
