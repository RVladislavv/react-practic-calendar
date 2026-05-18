import './App.css'
import {fetchTop10NewsDetails} from "./api.ts";
import {useQuery} from "@tanstack/react-query";
import ToDoList from "./ToDoList.tsx";

// TODO: сделать вывод 10 статей из hacker news
/*
    1) сервис слой
    2) в реакт квери всё обернуть и в консоль вывести
    3) сверстать вывод
*/


function App() {
    const {data: news, isPending, error} = useQuery({
        queryKey: ['news'],
        queryFn: fetchTop10NewsDetails
    })

    console.log('news', news)
  return (
    <>
      <section id="top">
        <div>
          <h1>ToDo List</h1>
            <ToDoList />
        </div>
      </section>
    </>
  )
}

export default App
