import { useState } from 'react';
import './App.css';
import { Rating, RatingValueType } from './components/rating/Rating';
import { Accordion } from './components/Accordion/Accordion';
import { UncontrolledRaiting } from './components/uncontrolledRaiting/UncontrolledRaiting';
import { OnOff } from './components/onOff/OnOff';
import { UncontroledOnOff } from './components/uncontroledOnOff/UncontroledOnOff';



function App() {
    const [ratingValue, setRatingValue] =useState<RatingValueType>(0);
    const [accordionCollapsed, setAcoordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)
    return (
        <div className="App">
           
            {/* <Accordion titleValue={'Menu'} collapsed={accordionCollapsed} onChange={()=>setAcoordionCollapsed(!accordionCollapsed)} /> */}
            <Rating value={ratingValue} onClick={(setRatingValue)} />
            {/* <UncontrolledRaiting /> */}
            {/* <AccordinAccordionSelfControlled /> */}
            {/* <OnOff on={on} onChange={setOn} /> */}
            <UncontroledOnOff onChange={setOn} /> 
            {on.toString()}
        </div>
    );
}

type PageTitleProps = {
    title: string
}

function PageTitle ( {title}: PageTitleProps ) {
    return(
        <h1>{title}</h1>
    )
}

export default App;
