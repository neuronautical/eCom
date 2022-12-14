import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
  
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>

        {/* BootStrap Header */}
        <Navbar bg='dark' variant='dark'>
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand> amazona </Navbar.Brand>            
            </LinkContainer>
          </Container>
        </Navbar>
        
        {/* Simple React Header */}
        {/* <Link to="/">amazona</Link> */}
      </header>

      <main>
        <Container>
          <Routes>
            <Route path ="/" element={<HomeScreen/>}/> 
            <Route path ="/product/:slug" element={<ProductScreen />}/> 
          </Routes>
        </Container>
      </main>

      <footer>
        <div>
          All Rights Reserved
        </div>
      </footer>

    </div>    
    </BrowserRouter>
)}

export default App;
