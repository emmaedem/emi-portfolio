 
import styles from './App.module.css'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/profile';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact'; 
import Experience from './components/Experience/Experience';

function App() {

  return (
    <>
      <div className={styles.App}>

        <Navbar />
        <About />
        <Profile />
        <Experience />
        <Projects />
        <Contact />

      </div>
    </>
  )
};

export default App
