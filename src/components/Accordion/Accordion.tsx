import { link } from "fs"

type ItemType = {
    title: string
    value: any
}

type AccordionProps = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: ItemType[]
    onClick: (value: any) => void

}

export function Accordion( { titleValue, collapsed, onChange, items, onClick }: AccordionProps) {
    return (
    <div>
        <AccordionTitle title={titleValue} onChange={onChange} />
        
        {!collapsed && <AccordionBody items={items} onClick={onClick} />}
    </div>
  )
}

type AccordionTitleProps = {
    title: string
    onChange: ()=>void
    
}

function AccordionTitle({title, onChange}: AccordionTitleProps){
    return(
        <h3 onClick={(event: React.MouseEvent<HTMLHeadingElement>)=>onChange()}>-- {title} --</h3>
    )
}

type AccordionBodyPropsTyps = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody( {items, onClick}: AccordionBodyPropsTyps){
    return(
        <ul>
            {items.map( el => <li key={el.value} onClick={()=>onClick(el.value)} >{el.title}</li>)}
        </ul>
    )
}