import {useState} from "react";

const TimeBox = ({value, data, handleChange}: {value: string, data: string[], handleChange: (data: string) => void}) => {
    const [openData, setOpenData] = useState(false);

    const handleClick = (i: number) => {
        handleChange(data[i])
        setOpenData(false)
    }

    return (
        <>
            <div style={{maxWidth: '100%', height: '30px', border: '1px solid blue', textAlign: 'left', padding: '10px'}} onClick={() => setOpenData(true)}>
                <span>Time</span> <span>{value}</span>
            </div>
            {openData && (
                <div style={{border: '1px solid red', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px'}}>
                    {data.map((el, i) => (
                        <div key={i} style={{width: '20px', height: '20px', border: '1px solid blue', padding: '5px'}} onClick={() => handleClick(i)}>
                            {el}
                        </div>
                    ))}
                </div>
            )}
        </>

    )
}

export default TimeBox;