import "./App.css";
import "./PictureList";
import PictureList from "./PictureList";

function App() {
  return (
    <div className="App">
      <PictureList
        id=""
        author=""
        width=""
        height=""
        url=""
        download_url=""
        urlArray={[]}
      ></PictureList>
    </div>
  );
}

export default App;
