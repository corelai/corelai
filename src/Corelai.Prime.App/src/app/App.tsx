import {ThemeToggleButton} from "../components/ThemeToggleButton/ThemeToggleButton.tsx";

function App() {

    return (
        <>
            <ThemeToggleButton/>
            <div className="text-primary text-center">
                Primary text
            </div>
            <div className="text-secondary text-center">
                Secondary text
            </div>
        </>
    )
}

export default App
