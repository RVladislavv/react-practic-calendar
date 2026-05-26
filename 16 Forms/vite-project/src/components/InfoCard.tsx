import {useState} from 'react';
import type {CardProps} from "./interface.ts";
import ChangeCard from "./ChangeCard.tsx";

const InfoCard = ({ card, handleSave, handleDelete}: CardProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false);

    return (
        isEditing ? <ChangeCard card={card} handleSave={handleSave} handleDelete={handleDelete} cancel={() => setIsEditing(false)}/> : (
                <div style={{ width: "300px", height: "100px", display: "flex", justifyContent: "space-between", alignItems: 'center', border: '1px solid #fff', padding: '5px' }}>
                    <div style={{fontSize: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column'}}>
                        <div><span>{card.name}</span></div>
                        <div><span>{card.city}</span></div>
                    </div>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>)

    );
};

export default InfoCard;