import React, { createContext, useContext } from 'react'
import {AppSettings} from "../utils/appSettings.ts";


const SettingsContext = createContext<AppSettings | null>(null)

export const useAppSettings = () => {
    const ctx = useContext(SettingsContext)
    if (!ctx) throw new Error('useAppSettings must be used within SettingsProvider')
    return ctx
}

export const SettingsProvider: React.FC<{ settings: AppSettings, children: React.ReactNode }> = ({ settings, children }) => (
    <SettingsContext.Provider value={settings}>
        {children}
    </SettingsContext.Provider>
)