type AccordionType = {
    title: string,
    isCollapsed: boolean,
}

type AccordionTitleType = {
    title: string,
}

export default function Accordion({title, isCollapsed}: AccordionType) {
    return (
        <>
            <AccordionTitle title={title} />
            {!isCollapsed ? (<AccordionBody />) : ''}
        </>
    );
}

function AccordionTitle({title}: AccordionTitleType) {
    return <h3>{title}</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

