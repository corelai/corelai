import React from "react"
import Layout from "../components/Layout/Layout.tsx";
import {ThemeProvider} from "../providers/ThemeProvider.tsx";
import {ModalProvider} from "../context/ModalContext.tsx";
import EnvironmentDisplay from "../components/UI/EnvironmentDisplay.tsx";

const App: React.FC = () => {

    return (
        <>
            <EnvironmentDisplay/>
            <ThemeProvider/>
            <ModalProvider>
                <Layout/>
            </ModalProvider>
        </>
    )
}


export default App;