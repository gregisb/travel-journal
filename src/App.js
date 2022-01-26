import './App.css';

import Header from './components/Header'
import Cards from './components/Cards'

import data from './data'
console.log(data)

function App() {
  const cards = data.map((item) => {
    return (

      <Cards 
            key={item.id}
            item={item}
      />
    )
  })

  return (
    <>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
    </>
  );
}

export default App;
