import React from "react"
import Layout from "../components/Layout/Layout.tsx";
import {ThemeProvider} from "../providers/ThemeProvider.tsx";

const App: React.FC = () => {

    return (
        <>
            <ThemeProvider/>
            <Layout/>
        </>
    )
}


export default App;