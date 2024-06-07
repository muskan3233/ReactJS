import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Footer from './Components/footer';
import Todos from './Components/todos';

function App() {
  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "you need to go to the market"
    },
    {
      sno: 2,
      title: "Learn react",
      desc: "you need to learn react"
    },
    {
      sno: 1,
      title: "Learn more",
      desc: "you need to learn more"
    }
  ]
  return (
    <>
    <Header/>
    <Todos todos = {todos}/>
    <Footer/>
    </>
  );
}

export default App;
