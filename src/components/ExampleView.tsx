import axios from "axios";
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { Visualiser } from "./Visualiser";

interface ExampleViewProps {
    example: any;
    source: any;
}

export function ExampleView(props: ExampleViewProps): JSX.Element {
    const source = props.source;
    const example = props.example;

    const [showVisualiser, setShowVisualiser] = useState<boolean>(false);
    const [fetchedExample, setFetchedExample] = useState<any | null>(null);
    const exampleAsString = JSON.stringify(fetchedExample, null, 2);

    useEffect(() => {
        async function fetchAndStore() {
            const fileName = example.file;
            const localURL = "/data/" + fileName;
            const resp = await axios.get(localURL);
            setFetchedExample(resp.data);
        }

        fetchAndStore();

    }, [example]);

    function handleCopyToClipboard(text: string) {
        navigator.clipboard.writeText(text);
        toast.success("copied to clipboard");
    }

    return (
        <>


            <h2>Example: <span id="exampleTitle">{example.description}</span></h2>
            {example.url && <a id="apiLink" href={example.url}>Link to this API or data source - {example.url}</a>}

            {!source.fromAPI && <div id="noAPIWarning">This data did not come from an API</div>}
            <br />

            <div className="codeContainer">
                <button
                    className="copyToClipboard"
                    onClick={() => handleCopyToClipboard(exampleAsString)}
                >copy to clipboard</button>

                <pre id="rawJSON">
                    {exampleAsString}
                </pre>
            </div>

            <button onClick={() => setShowVisualiser(p => !p)}>{showVisualiser ? "hide vis" : "Show Visualiser"}</button>
            {showVisualiser && <Visualiser data={fetchedExample} />}


        </>
    );
}

