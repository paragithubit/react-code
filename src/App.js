

import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TestForm from './components/TestForm';
import Alert from './components/Alert';
import About from './components/About';
import {BrowserRouter as Main ,Route,Routes,Link} from 'react-router-dom';
  




function App() {

      /* Enable dark mode in TestForm */
    const [mode,setMode]=useState ('light');
       const toogleMode =()=>{
           if(mode=== 'dark'){
              setMode('light')
              document.body.style.backgroundColor='white';
                showAlert('Enable Light mode ','success');
           }
             else{
                setMode('dark')
                document.body.style.backgroundColor='#4670af';
                showAlert('Enable Dark mode ','success');
             }
       }
         /* Alert code */
           const [alert,setAlert]=useState('')
              const showAlert =(message,type)=>{
                  setAlert({
                       msg:message,
                       type:type
                  })
              } 

              setTimeout(() => {
                    setAlert('');
              }, 1500);

       
  return (
 <>
     <Main>
       <Routes>
          <Route exact path='/' element ={ <Navbar title = 'Home' about= 'About' mode={mode} toogleMode={toogleMode} />}/>
           <Route exact path='Alert' element ={<Alert alert = {alert}/>}/>
           <div className="cintainer mx-3"></div> 
             <Route exact path='TestForm' element= { <TestForm  mode ={mode}  showAlert={ showAlert} heading='Enter the Text'/>}/>
                <Route exact path='About' element = {<About/>}/>

                        
              </Routes>
            
  
              </Main> 
     </>
    
     );
}

export default App;
