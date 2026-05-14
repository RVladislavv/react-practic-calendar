import './App.css'
import {fetchTop10NewsDetails} from "./api.ts";
import {useQuery} from "@tanstack/react-query";

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
          <h1>Top hacker news</h1>
            {isPending && (
                <span>Loading...</span>
            )}
            {error && (
                <span>Error loading data: {error.message}</span>
            ) }
            <ul>
                {news && news.map((item) => (
                    <li key={item.id}>
                        <a href={`https://news.ycombinator.com/item?id=${item.id}`}
                           target="_blank"
                           rel="noopener noreferrer">
                            {item.title}
                        </a>
                        <br/>
                        <span>
                            by {item.by} - {item.score} points
                        </span>
                    </li>
                ))}
            </ul>
        </div>
      </section>
    </>
  )
}

export default App
