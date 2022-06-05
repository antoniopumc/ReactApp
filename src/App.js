import Navbar from './pages/components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage'
import Imagen from './pages/components/imagen'
import ArtPage from './pages/ArtPage';
function App() {
  return (

<BrowserRouter>
   <Routes>
   <Route path='/' element = { <HomePage
  ></HomePage>}/>
  <Route path='/Art' element = { <ArtPage
  ></ArtPage>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;

