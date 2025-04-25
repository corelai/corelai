import React from "react";
import {AppSettings} from "../utils/appSettings.ts";
import SettingsContext from "../context/SettingsContext.tsx";

const SettingsProvider: React.FC<{ settings: AppSettings, children: React.ReactNode }> = ({ settings, children }) => (
    <SettingsContext value={settings}>
        {children}
    </SettingsContext>
)

export default SettingsProvider