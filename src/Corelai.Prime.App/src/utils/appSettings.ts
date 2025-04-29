import {Option, none, some} from 'fp-ts/Option'

export interface AppSettings {
    envName: string,
    mediaBaseUrl: string,
    bff: {
        apiBaseUrl: string
    }
}

let appSettings: Option<AppSettings> = none

export async function loadSettings(): Promise<AppSettings> {
    const response = await fetch('/app.settings.json')
    const json = await response.json()
    appSettings = some(json)
    return json
}

export function getSettingsOption(): Option<AppSettings> {
    return appSettings
}