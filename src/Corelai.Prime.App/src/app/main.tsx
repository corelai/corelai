import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '../styles/main.css'
import App from './App.tsx'
import {loadSettings} from "../utils/appSettings.ts";
import {SettingsProvider} from "../context/SettingsContext.tsx";

loadSettings().then((settings) => {

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <SettingsProvider settings={settings}>
                <App/>
            </SettingsProvider>
        </StrictMode>,
    )
})