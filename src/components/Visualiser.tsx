import { Fragment, ReactElement } from "react";

interface VisualiserProps {
    data: any;
}

export const testDataForVisualiser = [
    1,
    2,
    {
        name: "ivan",
        hp: 100,
        address: { postcode: "SW1 3ee", apt: "11", street: "Leafy Lane" },
        achievements: ["streak100", "polyglot"]
    },
    "hello",
    "world",
    true,
    null,
    undefined,
    false,
    "#00FFFF",
    "#FFFF00",
    ["string 1", "amazing string 2", (x: any) => x * 2, ["s3", "s4"]],
];

function isURL(string: string) { return string.startsWith("http"); }

function isColourHexCode(string: string) {
    const regex = RegExp("^#{0,1}([0-9A-F]{6})$");
    return regex.test(string);
};


function convertToTree(element: any): ReactElement {
    const typ = typeof element;
    switch (typ) {
        case "object":
            if (Array.isArray(element)) {
                return (
                    <ul className="array">
                        {
                            element.map((e, ix) => <li key={ix}>{convertToTree(e)}</li>)
                        }
                    </ul>
                )
            } else if (element === null) {
                return <span className="null">null</span>
            } else {
                //is object
                return <dl className="object">
                    {
                        Object.entries(element).map(([key, value]) =>
                            <Fragment key={key}>
                                <dt className={calcClassNameForKey(key) || ""}>
                                    {key}
                                </dt>
                                <dd>{convertToTree(value)}</dd>
                            </Fragment>
                        )}
                </dl>
            }
        case "function":
            return <span className="function">
                <em>Function</em>: {element.toString()}
            </span>
        case "number":
            return <span className="number">
                {element}
            </span >
        case "string":
            if (isURL(element)) {
                return <a className="string url" href={element}>{element}</a>
            } if (isColourHexCode(element)) {
                return <ColourIcon colourHexString={element} />
            } else {
                return <span className="string">"{element}"</span>
            }
        case "boolean":
            return <span className="boolean">
                {element ? "true" : "false"}
            </span>
        case "undefined":
            return <div>
                {element} (undefined)
            </div >
        case "symbol":
            return <span className="symbol">
                {element} (symbol)
            </span >
        default:
            return <span className="unknown">
                UNKNOWN TYPE: {typ}
            </span>


    }

}

export function Visualiser(props: VisualiserProps) {

    const tree = convertToTree(props.data);

    return (
        <div id="visualiser">
            {tree}
        </div>
    );
}


function ColourIcon(props: { colourHexString: string }): JSX.Element {
    const str = props.colourHexString;
    const colourHex = str.startsWith("#") ? str : "#" + str;

    return (
        <span className="colourHexCode">
            <span
                className="colourSquare"
                style={{ background: colourHex }}
            >...</span>
            <span className="string">{str}</span>
        </span>
    )
}

function calcClassNameForKey(key: string): string | null {
    return "title text name description".split(" ").includes(key)
        ? "title"
        : null;
}