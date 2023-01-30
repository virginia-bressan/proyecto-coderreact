export default function Button(props) {
    console.log(props);

    return <button style={{backgroundColor: props.color}} className="btn">{props.text}</button>;
}

export function ButtonChild(props) {
    console.log(props);

    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.color }} className={"stylebtn"}> 
{props.children}
        </button>
    )
}