import './App.css'
import {Popover, PopoverButton, PopoverPanel} from '@headlessui/react'
import Panel from "./components/Panel.tsx";

// TODO: сделать виджет брони столика в ресторане

function App() {
    return (
        <>
            <section id="top">
                <div>
                    <h1>Reserve a place</h1>
                    <div>
                        <Popover>
                            <PopoverButton>Book a table</PopoverButton>
                            <PopoverPanel style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <Panel />
                            </PopoverPanel>
                        </Popover>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
