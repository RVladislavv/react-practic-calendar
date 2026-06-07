import PeopleBox from "./PeopleBox.tsx";
import DateBox from "./DateBox.tsx";
import TimeBox from "./TimeBox.tsx";
import {useClose} from "@headlessui/react";
import {useState, type ChangeEvent} from "react";
import {dateFormat} from "../utils/dateFormat.ts";

const timeVariation = ['13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'];

const Panel = () => {
    const close = useClose();
    const [people, setPeople] = useState<number>(0);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [time, setTime] = useState(timeVariation[0]);
    const [isConfirm, setIsConfirm] = useState(false);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");


    const handleConfirm = () => {
        console.log(people, selectedDate, time, name, phone);
        close();
    }

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^\d+\-\s()]/g, '');
        setPhone(value)
    }

    return (
        isConfirm ? (
                <div style={{width: '500px', height: '500px', marginTop: '50px', border: '1px solid blue'}}>
                    <h2>Contact details</h2>
                    <h3>You are making a reservation for {people} people, on {dateFormat(selectedDate)} at {time}</h3>
                    <div style={{display: 'flex', gap: '10px', flexDirection: 'column', padding: '10px'}}>
                        Name: <input value={name} onChange={(e) => setName(e.target.value)}/>
                        Phone: <input type={'tel'} value={phone} onChange={handlePhoneChange}/>
                    </div>
                    <button onClick={handleConfirm}>Confirm reservation</button>
                </div>
            ) :
            (
                <div style={{width: '500px', height: '500px', marginTop: '50px', border: '1px solid blue'}}>
                    <h2>Book a table</h2>
                    <h3>This is where you'll add the details of your booking</h3>
                    <div style={{display: 'flex', gap: '10px', flexDirection: 'column', padding: '10px'}}>
                        <PeopleBox value={people} handleChange={(number) => setPeople(number)}/>
                        <DateBox value={selectedDate} handleChange={(data: Date) => setSelectedDate(data)}/>
                        <TimeBox value={time} data={timeVariation} handleChange={(data: string) => setTime(data)}/>
                    </div>
                    <button onClick={() => setIsConfirm(true)}>Book now</button>
                </div>
            )
    );
};

export default Panel;