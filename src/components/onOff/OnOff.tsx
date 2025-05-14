import { off } from "process"
import { useState } from "react"

type PropsType = {
    on: boolean
    onChange:(on: boolean)=>void
}





export function OnOff ({on, onChange}: PropsType){

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
    return (
        <div>
            <div style={onStyle} onClick={()=>onChange(true)} >On</div>
            <div style={offStyle} onClick={()=>onChange(false)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}