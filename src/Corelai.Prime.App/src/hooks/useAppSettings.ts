import {useContext} from "react";
import SettingsContext from "../context/SettingsContext.tsx"
const useAppSettings = () => {
    const ctx = useContext(SettingsContext)
    if (!ctx) throw new Error('useAppSettings must be used within SettingsProvider')
    return ctx
}

export default useAppSettings;