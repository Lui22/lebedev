# lebedev

Тестовое задание для Студии Лебедева по созданию аватарок из частей

Веб-приложение генерирует случайный аватар для пользователя, который он может скачать в формате ПНГ размером в 440 пикселей, в ширину и высоту

## Фичи

- Загружаются только нужные части авотарок с помощью `new URL(url, import.meta.url)` — [vitejs.dev](https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url)
- Готовый аватар скачивается через `dom-to-image` 

[Компоненты](https://www.figma.com/file/fTk3ntuzUiks9IZ3edJDcb/)

## Запуск

### Установить зависимости

```sh
npm install
```

### Запустить live-preview

```sh
npm run dev
```

### Скомпилировать для прода

```sh
npm run build
```

