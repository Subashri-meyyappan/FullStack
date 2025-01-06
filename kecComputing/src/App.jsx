import "./App.css";
import About from "./Components/FunctionalComponents/About";
import Contact from "./Components/FunctionalComponents/Contact";
import Gallery from "./Components/FunctionalComponents/Gallery";
import Home from "./Components/FunctionalComponents/Home";
import NavBar from "./Components/FunctionalComponents/NavBar";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffect from "./Components/FunctionalComponents/UseState";
import UseRef from"./Components/FunctionalComponents/UseRef";
import UseMemo from"./Components/FunctionalComponents/UseMemo";
import SignUp from "./Components/FunctionalComponents/SignUp";
import LoginPage from "./Components/FunctionalComponents/LoginPage";

'/'
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element= {<About college = "Kongu Engineering" clg1 = "Kongu Arts" clg2 = "Naturopathy"/>} />
          <Route path="/gallery" element = {<Gallery />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/useState" element = {<UseEffect />} />
          <Route path="/useRef" element = {<UseRef />} />
          <Route path="/useMemo" element = {<UseMemo />} />
          <Route path="/SignUp" element = {<SignUp/>} />
          <Route path="/LoginPage" element = {<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
