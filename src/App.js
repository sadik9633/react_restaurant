import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Restuarant from './components/Restuarant';
import RestView from './components/RestView';



function App() {
  return (
    <div className="App">
          <Header></Header>

          <Routes>
            <Route path='/' element={<Restuarant></Restuarant>}/>
            <Route path='/view-restuarant/:id' element={<RestView></RestView>}/>
         </Routes>
                   
          <Footer></Footer>
    </div>
  );
}

export default App;
