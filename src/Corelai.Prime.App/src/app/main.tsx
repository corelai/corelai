import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import '../styles/main.css'
import App from './App.tsx'
import {AppSettings, loadSettings} from "../utils/appSettings.ts";
import SettingsProvider from "../providers/SettingsProvider.tsx";

loadSettings().then((settings:AppSettings) => {

    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <SettingsProvider settings={settings}>
                <App/>
            </SettingsProvider>
        </StrictMode>,
    )
})