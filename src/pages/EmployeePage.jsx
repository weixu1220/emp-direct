import Header from "../components/Header.jsx";
import Info from "../components/Info.jsx";
import {Link} from 'react-router-dom';

export default function EmployeePage (){
  return (
    <div className="home">
      <Link className="headerbox" to='/'>
        <h1>{"<"}</h1>
        <Header header="Employee" />
      </Link>
      <Info />
    </div>
  );
};

