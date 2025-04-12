import {ThemeToggleButton} from "../components/ThemeToggleButton/ThemeToggleButton.tsx";
import Header from "../components/Header/Header.tsx";

function App() {

    return (
        <>
            <div className="bg-secondary-surface flex justify-end pt-2 pe-2">
                <ThemeToggleButton/>
            </div>
            <Header/>
            <div className="text-center">
                <h1
                    className="
                    text-primary
                     bg-primary-surface
                     font-header">
                    Primary text
                </h1>
                <p className="text-normal
                 font-text">
                    Normal text

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim minima perspiciatis
                    quasi sequi velit. Aliquid aperiam enim esse eveniet hic id in, ipsam laudantium molestiae officiis
                    provident sint sit ullam unde, veniam! A iste molestias qui repellat veniam.
                </p>

                <p className="
                text-secondary
                bg-secondary-surface
                font-text-400">
                    Secondary text
                </p>

                <p className="
                text-secondary
                bg-secondary-surface
                font-text-200">
                    Secondary small text
                </p>

                <p className="
                text-secondary
                bg-secondary-surface
                font-text-600">
                    Secondary bold text
                </p>

                <p>
                    P without nothing applied
                </p>
            </div>
        </>
    )
}

export default App
