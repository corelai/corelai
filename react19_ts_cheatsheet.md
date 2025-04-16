# React + TypeScript Cheatsheet (React 19 Ready)

## 🧠 Cheatsheet Table

| 🧱 Topic                       | Type / API                           | Syntax / Example                                                                 |
|------------------------------|--------------------------------------|----------------------------------------------------------------------------------|
| Basic FC                     | Functional Component                 | `const Comp: React.FC = () => <div />`                                          |
| Props (typed)                | Props definition                     | `type Props = { title: string }` → `({ title }) => <h1>{title}</h1>`            |
| Children                     | `React.ReactNode`                    | `type Props = { children: React.ReactNode }`                                    |
| useState                     | Typed state                          | `useState<string>('')`, `useState<Type | null>()`                               |
| useEffect                    | Lifecycle                            | `useEffect(() => {...}, [dep])`                                                 |
| useRef                       | DOM or variable refs                 | `useRef<HTMLInputElement>(null)`, `.current?.focus()`                           |
| useContext                   | Global state                         | `const Ctx = useContext(MyContext)`                                             |
| Lists / Keys                 | Rendering arrays                     | `list.map(item => <Comp key={item.id} {...item} />)`                            |
| Events                       | Mouse/Input/Form                     | `onClick`, `onChange`, `onSubmit`                                               |
| Custom Hooks                 | Reusable logic                       | `function useSomething() { ... }`                                               |
| useActionState 🆕            | Async state transition               | `const [state, formAction] = useActionState(fn, initialState)`                 |
| useOptimistic 🆕             | Optimistic UI updates                | `const [optimistic, update] = useOptimistic(actual, updateFn)`                 |
| useFormStatus 🆕             | Form submission state                | `const status = useFormStatus()`                                                |
| use 🆕                       | Await resources in render            | `const data = use(fetchPromise)`                                                |
| Context as JSX 🆕            | `<Context>` instead of `.Provider`   | `<Theme value="dark">...</Theme>`                                               |
| Ref as Prop 🆕               | Direct ref passing                   | `<Comp ref={myRef} />` (no need for `forwardRef`)                               |
| Metadata API 🆕              | `<title>`, `<meta>`, `<link>`        | Included in components, React hoists them to `<head>`                           |

## 🔍 Real-World Use Cases (React 19 Compatible)

| Component / Feature          | Real Use Case Example                                                      |
|-----------------------------|-----------------------------------------------------------------------------|
| Basic layout                | `Header`, `Footer`, `Sidebar`                                              |
| Typed props                 | `UserCard` with `name: string`, `avatarUrl?: string`                       |
| useState                    | `useState<number>(0)` for counter, toggle modals, etc.                     |
| useEffect                   | Fetch data on mount, react to ID change                                    |
| useRef                      | Autofocus input, scroll to section                                         |
| useContext                  | Auth state, theme switching, locale                                        |
| useActionState 🆕           | Async form submission with transitions                                     |
| useOptimistic 🆕            | UI shows item as added before server confirms                              |
| useFormStatus 🆕            | Disable submit button while posting                                        |
| use                         | Directly use `fetch('/api')` in render context                             |
| JSX Context 🆕              | Replace `<Context.Provider>` with `<Context>`                             |
| Keyed Lists                 | `todos.map(todo => <TodoItem key={todo.id} />)`                            |
| Events                      | `onClick`, `onChange`, `onSubmit` handlers with proper typing              |
| Custom Hooks                | `useToggle()`, `useLocalStorage()`, `useTheme()`                          |
| Metadata hoisting 🆕        | Define `<title>Page</title>` in component and React will manage `<head>`  |
| Ref as prop 🆕              | Pass `ref` to child without `forwardRef`                                   |
