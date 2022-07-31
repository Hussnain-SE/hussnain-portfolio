
import './App.css';
import { NavBar } from './Components/NavigationBar/NavBar';
import { Banner } from './Components/Banner/MainContainer';
import { Skills } from './Components/Skills/skill';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './Components/Projects/Project';
import { Contact } from './Components/Contact/contact';
import { Footer } from './Components/Footer/footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
