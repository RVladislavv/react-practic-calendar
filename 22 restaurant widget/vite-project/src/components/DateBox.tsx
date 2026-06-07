import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {dateFormat} from "../utils/dateFormat.ts";

const DateBox = ({value, handleChange}: {value: Date, handleChange: (data: Date) => void}) => {
    const [openData, setOpenData] = useState(false);

    const handleClick = (date: Date | null) => {
        if (date && date <= new Date()) return
        if (!date) return;
        setOpenData(false)
        handleChange(date)
    }



    return (
        <>
            <div style={{maxWidth: '100%', height: '30px', border: '1px solid blue', textAlign: 'left', padding: '10px'}} onClick={() => setOpenData(true)}>
                <span>Date</span> <span>{dateFormat(value)}</span>
            </div>
            {openData && (
                <div >
                    <DatePicker
                        selected={value}
                        onChange={handleClick}
                    />
                </div>
            )}
        </>


    )
}

export default DateBox;