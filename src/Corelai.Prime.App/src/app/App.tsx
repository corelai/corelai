import {ThemeToggleButton} from "../components/ThemeToggleButton/ThemeToggleButton.tsx";

function App() {

    return (
        <>
            <ThemeToggleButton/>
            <div className="text-center">
                <p className="text-primary bg-primary-surface">
                Primary text
                </p>
                <p className="text-normal ">
                    Normal text
                </p>

                <p className="text-secondary bg-secondary-surface">
                    Secondary text
                </p>
            </div>
        </>
    )
}

export default App
