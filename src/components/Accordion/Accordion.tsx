import AccordionTitle from "./AccordionTitle/AccordionTitle";
import AccordionBody from "./AccordionBody/AccordionBody";
import {useState} from "react";

type PropsType = {
    title: string
}

export default function Accordion({title}: PropsType) {

    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <>
            <AccordionTitle title={title}
                            isCollapsed={isCollapsed}
                            setIsCollapsed={setIsCollapsed}
            />
            {!isCollapsed && <AccordionBody/>}
        </>
    );
}
