import "./App.scss";
import Card from "./components/Card";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";
import Card3 from "./components/Card3";
import Card4 from "./components/Card4";

function App() {
  return (
    <div className="container">
      <div className="item">
        <Card></Card>
      </div>
      <div className="item">
        <Card1></Card1>
      </div>
      <div className="item">
        <Card2></Card2>
      </div>
      <div className="item">
        <Card3></Card3>
      </div>
      <div className="item">
        <Card4></Card4>
      </div>
    </div>
  );
}

export default App;
