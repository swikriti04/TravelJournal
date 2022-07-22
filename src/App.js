import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Body from "./components/Body"
import data from "./components/data"

function App() {

  const cards = data.map(item => {
    return (
      <Body
        item = {item}
      />
    )
  })

  return (
    <div>
      <Navbar/>
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
