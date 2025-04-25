import { createContext } from 'react'
import {AppSettings} from "../utils/appSettings.ts";


const SettingsContext = createContext<AppSettings | null>(null)

export default SettingsContext