import React from "react"
import Layout from "../components/Layout/Layout.tsx";
import {ThemeProvider} from "../providers/ThemeProvider.tsx";
import {ModalProvider} from "../context/ModalContext.tsx";

const App: React.FC = () => {

    return (
        <>
            <ThemeProvider/>
            <ModalProvider>
                <Layout/>
            </ModalProvider>
        </>
    )
}


export default App;