import s from './AccordionTitle.module.css';

type PropsType = {
    title: string
    isCollapsed: boolean
    setIsCollapsed: (isCollapsed: boolean) => void
}

export default function AccordionTitle(props: PropsType) {

    const {title, isCollapsed, setIsCollapsed} = props;

    const onClickHandler = () => {
        setIsCollapsed(!isCollapsed)
    }

    return (
        <div>
            <h3 className={s.title}>{title}</h3>
            <button className={s.toggle}
                    onClick={onClickHandler}
            >
                {isCollapsed ? '▼' : '▲'}
            </button>
        </div>
    );
}