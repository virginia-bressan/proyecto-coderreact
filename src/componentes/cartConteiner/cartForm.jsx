import { useState } from "react";
import "./cartForm.css";



function InputForm(props) {
    return(
        <div style={{display: "flex"}}>
            <label style={{width: "100px", marginRight: 4}}>{props.label}</label>
            <input
            value={props.value}
            name={props.name} 
            type="text"
            onChange={props.onInputChange}/>
        </div>
    );
}
export default function CartForm(props){
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
    });
    console.log("State:", userData);

    function onInputChange(evt){
        const field = evt.target.name;
        const value = evt.target.value;
    

    const newState = { ...userData };

    newState[field] = value;
    setUserData(newState);
}

    function clearData() {
        setUserData({
            name: "",
            email: "",
            phone: "",
        });
    }

    function onSubmit(evt){
        evt.preventDefault();
        props.onSubmit(userData);
    }

    let arrayUserData = Object.keys(userData);
    console.log(arrayUserData);

    return(
        <form onSubmit={onSubmit}>
            {arrayUserData.map((field) =>(
                <InputForm
                name={field}
                value={userData[field]}
                onInputChange={onInputChange}
                label={field}
                />
            ))}
            <button className="btn"
            disabled={
                !(
                    userData.name !== "" &&
                    userData.phone !== "" &&
                    userData.email !== "" 
                )
            }
            type="submit"
            > Crear orden
            </button>
            <button className="btn" onClick={clearData}>Limpiar Datos</button>
        </form>  
    );

}
