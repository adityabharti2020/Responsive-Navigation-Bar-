import Navbar from "./Components/Navbar/Navbar";
const linksArray = ["Products","Services","Overview","Contact Us"]
function App() {
  return (
    <div>
       <Navbar links={linksArray}/>
    </div>
  );
}

export default App;
