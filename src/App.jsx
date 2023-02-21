import "./App.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
function App() {
  const cards = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="container">
      <Hero />
      {cards}
    </div>
  );
}

export default App;
