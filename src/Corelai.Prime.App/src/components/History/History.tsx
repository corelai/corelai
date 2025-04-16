import React, {useEffect, useState} from 'react';

const History: React.FC = () => {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        const loadJson = async () => {
            try {
                const response = await fetch('/history/prime-history.json');
                if (!response.ok) throw new Error('Fetch Error');
                const jsonData = await response.json();
                setData(jsonData);
                console.dir(jsonData);
            } catch (error) {
                console.error('JSON fetch error:', error);
            }
        };

        loadJson();
    }, []);

    return (
        <div>

            {data.map((entry: any) => (
                <>
                    <h1 className="flex
                    flex-col
                    sm:flex-row
                    sm:justify-evenly
                    ">
                        <p>[{entry.date}]</p>
                        <p>{entry.title}</p>
                    </h1>
                    <img src={entry.imagePath} alt={entry.summary}/>
                    <div key={entry.id}>{entry.id}</div>
                </>
            ))}

        </div>
    );
};

export default History;