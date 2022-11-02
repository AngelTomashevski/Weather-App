import "./App.css";
import BlogList from "./components/BlogList";
import Forecast from "./components/Forecast";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="App">
      <Header />
      <h2 className="title">Latest News</h2>
      <BlogList />
      <br />
      <h2 className="title">Forecast For The Upcoming Week:</h2>
      <Forecast />
      <br />
      <h2 className="title">Related News</h2>
      <BlogList />
    </div>
  );
};

export default App;
