import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './main.css'
import App from './App.tsx'
import {ThemeProvider} from "./ThemeProvider.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider/>
        <App/>
    </StrictMode>,
)
