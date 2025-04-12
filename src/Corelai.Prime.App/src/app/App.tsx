import {ThemeToggleButton} from "../components/ThemeToggleButton/ThemeToggleButton.tsx";
import Header from "../components/Header/Header.tsx";

function App() {

    return (
        <>
            <div className="bg-secondary-surface flex justify-end pt-2 pe-2">
                <ThemeToggleButton/>
            </div>
            <Header/>
            <div className="text-center border-t-4 sm:border-t-6 md:border-t-8 golden-border">
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
                font-text font-[400]">
                    Secondary text 400
                </p>

                <p className="
                text-secondary
                bg-secondary-surface
                font-text font-[200]">
                    Secondary text 200
                </p>

                <p className="
                text-secondary
                bg-secondary-surface
                font-text font-[600]">
                    Secondary text 600
                </p>

                <p>
                    P without nothing applied
                </p>
            </div>
        </>
    )
}

export default App
