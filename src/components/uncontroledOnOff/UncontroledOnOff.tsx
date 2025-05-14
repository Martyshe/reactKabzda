import { off } from "process"
import { useState } from "react"

type PropsType = {
    // on: boolean
    onChange: (on: boolean)=>void;
}





export function UncontroledOnOff ( {onChange}: PropsType){
const [ on, setOn] =useState(false)

    // const on = false;
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red',

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '50%',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',

    }

    const onClicked = () => {
        setOn(true); 
        onChange(true)
    }
    const offClicked = () => {
        setOn(false); 
        onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked} >On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}