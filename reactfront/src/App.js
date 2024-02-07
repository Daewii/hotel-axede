// import logo from './logo.svg';
import './App.css';

//importamos los componentes
import CompShowHoteles from './hotel/ShowHoteles';
// import CompCreateBlog from './blog/CreateBlog';
// import CompEditBlog from './blog/EditBlog';

//importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />         */}
        <p>Hotel AXEDE</p>
      </header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <CompShowHoteles />} />
            {/* <Route path='/create' element={ <CompCreateBlog />} />
            <Route path='/edit/:id' element={ <CompEditBlog />} /> */}
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;