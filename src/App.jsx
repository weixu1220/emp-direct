import "./index.css";
import HomePage from "./pages/HomePage";
import {Routes, Route} from 'react-router-dom'
import EmployeePage from './pages/EmployeePage'

export default function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path= '/' element = {<HomePage  />} />
        <Route path = '/employee/:name' element ={<EmployeePage />} />
      </Routes>
    </div>
  );
}
