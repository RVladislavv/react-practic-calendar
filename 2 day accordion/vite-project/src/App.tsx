import './App.css'
import Accordion from "./Accordion.tsx";

// TODO: сделать компонент аккардеон
/*

1) сделать строку с иконкой
2) состояние на открытие/закрытие
3) вариант открытия сделать
4) анимацию добавить
! Каждый раздел можно открывать и закрывать по отдельности.
! Пользователи могут открывать несколько разделов одновременно.
opt + cmd + L

<Accordion
    items={[
       { title: "Title 1", content: "Content 1" },
       { title: "Title 2", content: "Content 2" },
    ]}
  />
*/



function App() {

  return (
    <>
      <section id="top">
        <div>
          <h1>Тут будет апп</h1>
          <Accordion/>
        </div>
      </section>
    </>
  )
}

export default App
