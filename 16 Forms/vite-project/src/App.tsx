import './App.css'
import {useState, type ChangeEvent} from "react";
import type {Card} from "./components/interface.ts";
import InfoCard from "./components/InfoCard.tsx";

// TODO: сделать форму контактов
/*
1) Name City Add contact - форма для ввода данных контакта
2) отображать в виде карточки контакты с кнопкой Edit
3) при нажатии на Edit открывается форма редактирования внутри этой карточки
4) в форме редактирование - менять Имя и Город, а так же кнопки - Cancel Save и Delete - удалять

*/

const DEFAULT: Card[] = [
    { "id": "1", "name": "Alice Johnson", "city": "New York" },
    { "id": "2", "name": "Bob Smith", "city": "Los Angeles" },
    { "id": "3", "name": "Charlie Brown", "city": "Chicago" },
    { "id": "4", "name": "David Williams", "city": "Houston" },
    { "id": "5", "name": "Emma Davis", "city": "Phoenix" },
    { "id": "6", "name": "Frank Miller", "city": "Philadelphia" },
    { "id": "7", "name": "Grace Wilson", "city": "San Antonio" },
    { "id": "8", "name": "Henry Moore", "city": "San Diego" },
    { "id": "9", "name": "Isabella Garcia", "city": "Dallas" },
    { "id": "10", "name": "Jack Martinez", "city": "San Jose" }
]

function App() {
    const [contacts, setContact] = useState(DEFAULT)

    const handleAdd = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form)
        const id = Date.now().toString();

        setContact(prev => ([...prev, { id, name: formData.get('name') as string, city: formData.get('city') as string }]))
        form.reset();
    }

    const handleSave = (e: ChangeEvent<HTMLFormElement>, id: string) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const changedData = {id, name: formData.get('name') as string, city: formData.get('city') as string }
        
        setContact(prev => prev.map(c => c.id !== id ? c : changedData))
    }

    const handleDelete = (id: string) => {
        setContact(prev => prev.filter((c) => c.id !== id))
    }

  return (
    <>
      <section id="top">
        <div>
          <h1>Contact Form</h1>
          <h1>
              <form onSubmit={handleAdd}>
                  <input required name='name' type="text" placeholder="Enter Name" />
                  <input required name='city' type="text" placeholder="Enter City" />
                  <button>Add contact</button>
              </form>
              <div style={{display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginTop: "20px"}} >
                  {contacts.map(card => (
                      <InfoCard key={card.id} card={card} handleSave={handleSave} handleDelete={handleDelete}/>
                  ))}
              </div>
          </h1>
        </div>
      </section>
    </>
  )
}

export default App
