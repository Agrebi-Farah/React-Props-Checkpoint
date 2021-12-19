import React from 'react' ;
import './App.css';
import Navbar from './Components/Navbar/navbar' ;
import Description from './Components/Description/description';
import Projects from './Components/Project/project' ;
import Contact from './Components/Contact/contact' ;
import Footer from './Components/Footer/footer' ;
function App() {
  return (
  <div>
    <Navbar title ='FARAH AGREBI'/>
    <hr/> 
    <br/>
    <Description name="FARAH AGREBI"/>
    <br/>
    <br/>
    <Projects
     link1='https://github.com/Agrebi-Farah'
     link2 ='https://github.com/Agrebi-Farah'
     link3 ='https://github.com/Agrebi-Farah'
     link4 = 'https://github.com/Agrebi-Farah'/>
    <br/>
    <br/>
    <Contact 
    email='Write your email'
    message='Feedback'/>
    <br/>
    <br/>
    <Footer copyright ='AGREBI FARAH © , All Rights Reserved'/>
  </div>
  );
}

export default App;
