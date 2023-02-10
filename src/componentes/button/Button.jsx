export default function Button(props) {
    console.log(props);

    return <button style={{ backgroundColor: props.color }} className="btn">{props.text}</button>;
}

export function ButtonChild(props) {
    function handleClick() {
        props.onTouch();

    }

    return (
        <button
            onClick={handleClick}
            style={{ backgroundColor: props.color }}
            className={"stylebtn"}>
            {props.children}
        </button>
    );
}