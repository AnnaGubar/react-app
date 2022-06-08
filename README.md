# ХУКИ

`npm install react-router-dom@5` - для работы со Switch

- [Документация](https://ru.reactjs.org/docs/hooks-intro.html)
- _useState_ - не отталкиваясь от предыдущего (просто перезаписать значение)
  - SignupForm
    - Одно значение = один useState
  - ColorPicker
- _useEffect_ - массив зависимостей
  - Counter - отталкиваясь от предыдущего prevState
    - Каждый рендер
    - Каждый рендер при изменении какого-то стейта или пропса
  - SignUpForm
    - localStorage
    - _lazy state initialization_ - вызывается при первом рендере и больше
      никогда
    - Кастомный хук _useLocalStorage_
- useRef
  - Clock
    - Первый рендер
    - Последний рендер
- useContext
  - UserMenu
- Покемоны

## Библиотеки

- [React Hook Form](https://react-hook-form.com/)
- [Хуки для HTTP-запросов](https://github.com/tannerlinsley/react-query)
- [Кастомные хуки](https://github.com/streamich/react-use)
