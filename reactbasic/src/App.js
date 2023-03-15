import "./App.css";
// import Index from "./javabasic/Index.jsx";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main"
import Cards from "./component/Main/Cards";
import Footer from "./component/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Cards></Cards>
      <Footer></Footer>
    </div>
  );
}

export default App;

//받아오기
