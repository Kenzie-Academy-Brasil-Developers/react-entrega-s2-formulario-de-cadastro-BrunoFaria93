import './App.css';
import Sucess from './pages/Sucess';
import Form from './pages/Form';
import { Switch, Route } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { Toaster } from 'react-hot-toast'
function App() {

  return (

    <div className="container">
      <AnimatePresence>
        <Switch>
            <Route exact path='/'> 
              <Form />
              
            </Route>

            <Route exact path='/sucess/:name'> 
              <Sucess />
              <Toaster position="top-center" reverseOrder={false}/>
            </Route>
            
        </Switch>
      </AnimatePresence>
        
    </div>
  )
}

export default App;
