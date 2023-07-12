import About from "../About/About";
import Header from "../Header/Header";
import NothingFound from "../NothingFound/NothingFound";
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="page__wrapper">
        <Header />
        <NothingFound />
        <About />
      </div>
    </div>
  );
}

export default App;
