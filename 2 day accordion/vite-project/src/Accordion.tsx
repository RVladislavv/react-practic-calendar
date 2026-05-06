import {useState} from "react";

const mock = [
    {title: "Title 1", content: "Content 1"},
    {title: "Title 2", content: "Content 2"},
    {title: "Title 3", content: "Content 3"},
]

interface IAccordionLine {
    title: string;
    content: string;
    isOpen: boolean;
    toggle: () => void;
}

const AccordionLine = ({title, content, isOpen, toggle}: IAccordionLine) => {

    return (
        <div>
            {title}
            <button onClick={toggle}>{isOpen ? '-' : '+'}</button>
            {isOpen && (
                <div>{content}</div>
            )}
        </div>
    );
};

const Accordion = () => {
    const [open, setOpen] = useState<null | number>(null);
    const handleToggle = (index: number) => {
        if (index === open) {
            setOpen(null)
        } else {
            setOpen(index)
        }
    }


    return (
        <div>
            <ul>
                {mock.map((item, i) => (
                    <li key={i}>
                        <AccordionLine
                            title={item.title}
                            content={item.content}
                            isOpen={i === open}
                            toggle={() => handleToggle(i)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Accordion;