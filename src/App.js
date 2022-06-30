
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import MainTable from './Component/MainTable/MainTable';


function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/'element={<MainTable></MainTable>}></Route>
      </Routes>
    </div>
  );
}

export default App;
