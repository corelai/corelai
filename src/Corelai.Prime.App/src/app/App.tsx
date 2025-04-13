import React from "react"
import Layout from "../components/Layout/Layout.tsx";
import {ThemeProvider} from "../providers/ThemeProvider.tsx";

export const App: React.FC = () => {

    return (
        <>
            <ThemeProvider/>
            <Layout/>
        </>
    )
}
