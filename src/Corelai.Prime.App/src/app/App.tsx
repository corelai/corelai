import {ThemeToggleButton} from "../components/ThemeToggleButton/ThemeToggleButton.tsx";

function App() {

    return (
        <>
            <ThemeToggleButton/>
            <h1 className="
            text-center
            font-corelai
            uppercase
            text-4xl

            ">
                Corelai</h1>
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

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dolore enim minima perspiciatis quasi sequi velit. Aliquid aperiam enim esse eveniet hic id in, ipsam laudantium molestiae officiis provident sint sit ullam unde, veniam! A iste molestias qui repellat veniam.
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
            </div>
        </>
    )
}

export default App
