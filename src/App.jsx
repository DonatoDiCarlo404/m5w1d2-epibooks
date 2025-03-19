import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponents from './assets/components/NavbarComponents';
import FooterComponent from './assets/components/FooterComponent';
import WelcomeComponent from './assets/components/WelcomeComponent';
import AllTheBooksComponents from './assets/components/AllTheBooksComponents';



function App() {
  

  return (
    <>
      <NavbarComponents />
      <WelcomeComponent />
      <AllTheBooksComponents />
      <FooterComponent />
      
    </>
  )
}

export default App
