
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import MainTable from './Component/MainTable/MainTable';
import UpdateFrom from './Component/UpdateFrom/UpdateFrom';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/'element={<MainTable></MainTable>}></Route>
       {/* <Route path='/updateForm'element={<UpdateFrom></UpdateFrom>}></Route> */}
       <Route path='*'element={<MainTable></MainTable>}></Route>

      </Routes>
    </div>
  );
}

export default App;
