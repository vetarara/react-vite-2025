import Header from './components/Header'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from "react";
import { ways, differences } from './data'

export default function App() {
  const [ contentType, setContentType ] = useState(null);

  function handleClick(type) {
    setContentType(type);
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>Как Result помогает достигать целей</h3>
          <ul>
            <WayToTeach {...ways[0]} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
  
          </ul>
        </section>
        <section>
          <h3>Почему выбирают Result University</h3>

          {/* формируем замыкание и можем вызывать эту функцию с фиксированным параметром */}
          <Button 
            isActive={contentType === 'way'} 
            onClick={() => handleClick('way')}
            >
            Подход
          </Button>
          <Button 
            isActive={contentType === 'easy'} 
            onClick={() => handleClick('easy')}
          >
            Доступность
          </Button>
          <Button 
            isActive={contentType === 'program'} 
            onClick={() => handleClick('program')}
          >
            Концентрация
          </Button>

          { !contentType && <p>Нажми</p> }
          { contentType && <p>{differences[contentType]}</p> }
          
        </section>
      </main>
    </div>
  )
}
