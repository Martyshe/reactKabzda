import { useState } from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
}

export function Accordion( { titleValue, collapsed, onChange }: AccordionProps) {
    return (
    <div>
        <AccordionTitle title={titleValue} onChange={onChange} />
        
        {!collapsed && <AccordionBody />}
    </div>
  )
}

type AccordionTitleProps = {
    title: string
    onChange: ()=>void
    
}

function AccordionTitle({title, onChange}: AccordionTitleProps){
    return(
        <h3 onClick={onChange}>-- {title} --</h3>
    )
}



function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}