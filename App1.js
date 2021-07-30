

import React from 'react'
import { Link, BrowserRouter as Router ,Route} from 'react-router-dom'
import ProductCreate from './Ecom/ProductCreate'
import ProductList from './Ecom/ProductList'
import Dashboard from './Ecom/Dashboard'
import { AppBar, Button } from '@material-ui/core'

function App(){

return(

    <div>
    <Router>
    
    <menu>
    <Link to="/"><Button color="secondary" variant="contained">Dashboard</Button></Link>
    <Link to="/create"><Button color="secondary" variant="contained">Create Product</Button></Link>
    <Link to="/list"><Button color="secondary" variant="contained">Product List</Button></Link>
    
    </menu>
    
    <Route path="/create"><ProductCreate/></Route>
    <Route path="/list"><ProductList/></Route>
    <Route exact path="/"><Dashboard/></Route>
     
    
    </Router>   
    
    </div>


)


}
export default App;