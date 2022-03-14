import "./App.css";
import "./PictureList";
import PictureList from "./PictureList";
import 'bulma/css/bulma.min.css';
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (

    <><Header></Header>
    <div className="container">
      <PictureList
        id=""
        author=""
        width=""
        height=""
        url=""
        download_url=""
      ></PictureList>
    </div>
    <Footer></Footer></>
  );
}

export default App;
