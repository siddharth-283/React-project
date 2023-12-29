import "./App.css";
import Card from "./component/card";

function App() {

  // let myObj = {
  //   username: "Delba",
  //   age: 22,
  // }
  let arr = [
    { username: "Delba", btn: "Hello" },
    { username: "Debi", btn: "world" },
    { username: "Sebi", btn: "How are You" }
  ]

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind</h1>
      <Card username={arr}/>
      <Card username= "siddharth" btn="visit later"/>
      <Card/>
    </>
  );
}

export default App;
