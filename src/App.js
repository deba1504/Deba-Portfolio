import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import {Banner} from './components/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills'
import { Projects } from './components/Projects';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Achievements } from "./components/Achievements";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
