import {useState} from 'react'
import type {IMemoryGame} from "./utils/interface.ts";


/*
1) вывод карточек сделать
2) функцию шафл добавить
3) состояния открыт/закрыт
4) функционал выбора карты и логику - первая, вторая - проверка, совпадают ли и далее - успех/неуспех

 */

const MemoryGame = ({images}: IMemoryGame) => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
    const [foundImages, setFoundImages] = useState<Record<number, boolean>>({});


    const handleChange = (index: number) => {
        if(flippedIndex && images[flippedIndex] === images[index]) {
            setFoundImages({...foundImages, [index]: true, [flippedIndex]: true});
        }
        setFlippedIndex(index)
    }

    const isImageVisible = (index: number) => {
        return foundImages[index] === true || index === flippedIndex;
    }

    return (
        <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingLeft: '40px',
            paddingRight: '40px'
        }}>
            {images.map((image, i) =>
                (
                    isImageVisible(i) ? (
                        <img
                            style={{width: '200px', height: '200px'}}
                            src={image}
                            key={i}
                            alt={image}
                        />
                    ) : (
                        <div onClick={() => handleChange(i)} style={{width: '200px', height: '200px', background: 'grey'}}></div>
                    )

                ))}

        </div>
    )
}

export default MemoryGame;