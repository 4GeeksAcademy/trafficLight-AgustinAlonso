import React from "react";

const Luz = (props) => {
    console.log(props.currentColor)
    return (
        <button className={`${props.color}${props.color === props.currentColor ? " iluminado" : ""}`} onClick={props.onClick}></button>
    )
}

export default Luz;