 
import styles from './App.module.css'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/profile';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'; 

function App() {

  return (
    <>
      <div className={styles.App}>

        <Navbar />
        <About />
        <Profile />
        <Skills />
        <Projects />
        <Contact />

      </div>
    </>
  )
};

export default App
