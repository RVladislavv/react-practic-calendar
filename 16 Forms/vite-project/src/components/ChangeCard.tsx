import {type ChangeEvent} from 'react'
import type {CardProps} from "./interface.ts";

const ChangeCard = ({ card, handleSave, handleDelete, cancel}: CardProps & {cancel: () => void}) => {
     const handeSubmit = (e: ChangeEvent<HTMLFormElement>) => {
         e.preventDefault()
        handleSave(e, card.id)
        cancel()
     }

    return (
        <div style={{width: "300px", height: "100px", display: "flex", border: '1px solid #fff',}}>
            <form onSubmit={(e) => handeSubmit(e)} style={{ display: "flex", justifyContent: "space-between", alignItems: 'center', flexDirection: 'column', padding: '5px' }}>
                <input name='name' type="text" defaultValue={card.name} placeholder='Input Name'/>
                <input name='city' type="text" defaultValue={card.city}  placeholder='Input city'/>
                <button>Save</button>
            </form>
            <button onClick={() => handleDelete(card.id)}>Delete</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    );
};

export default ChangeCard;