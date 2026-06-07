import {useState} from "react";

const PeopleBox = ({value, handleChange}: {value: number, handleChange: (number: number) => void}) => {
    const [openData, setOpenData] = useState(false);

    const handleClick = (i: number) => {
        handleChange(i)
        setOpenData(false)
    }

    return (
        <>
            <div style={{maxWidth: '100%', height: '30px', border: '1px solid blue', textAlign: 'left', padding: '10px'}} onClick={() => setOpenData(true)}>
                <span>People</span> <span>{value}</span>
            </div>
            {openData && (
                <div style={{border: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                    {Array.from({length: 10}).map((_, i) => (
                        <div key={i+1} style={{width: '20px', height: '20px', border: '1px solid blue', padding: '5px'}} onClick={() => handleClick(i+1)}>
                            {i+1}
                        </div>
                    ))}
                </div>
            )}
        </>


    )
}

export default PeopleBox;