import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./components/MyHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";

function App() {
  return (
    <>
      <MyHeader />
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
