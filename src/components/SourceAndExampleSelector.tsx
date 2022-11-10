import { Example, Source } from "../sourcesIndex";

interface SourceSourceAndExampleSelectorProps {
    setSource: (source: Source) => void;
    setExample: (example: Example) => void;
    source: Source;
    allSources: Source[];
}
export function SourceAndExampleSelector(props: SourceSourceAndExampleSelectorProps) {

    const { source, allSources } = props;

    const sortedSources = [...allSources].sort((a, b) => a.title.localeCompare(b.title));
    return (
        <>

            <nav>
                <ul id="nav-ul">
                    {
                        sortedSources.map((s) =>
                            <li key={s.title} onClick={() => props.setSource(s)}>{s.title}</li>
                        )
                    }
                </ul>
            </nav>

            <header>
                <h1 id="apiTitle">{source.title}</h1>
                <div>{source.description}</div>
                {source.home && <a href={source.home}>{source.home}</a>}
                {
                    source.examples.length > 1 &&
                    (<>
                        <h2>Choose an example: </h2>
                        {source.examples.map((example, i) => <li>
                            <button
                                onClick={() => props.setExample(example)}>
                                {example.description}
                            </button> External link: {" "}
                            {example.url && <a href={example.url}>{example.url}</a>}
                        </li>)
                        }
                    </>)
                }
            </header>
        </>);
}
