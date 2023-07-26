import { useNavigate } from 'react-router-dom';
import { useEmployeeContext } from '../EmployeeContext';

function Employee({ employeeInfo }) {
  const { dispatch, setChosenEmployee } = useEmployeeContext();
  const navigate = useNavigate();
  function getData(e) {
    if (e.target.className !== "delete") {
      navigate(`/employee/${employeeInfo.name}`)
      setChosenEmployee(employeeInfo)
    }

  }
  return (
    <div
      onClick={(e) => getData(e)}
      className="emp"
      style={{ border: `1px solid ${employeeInfo.borderColor}` }}
    >
      <img src={employeeInfo.headshot} alt="employeeInfo" />
      <h4>{employeeInfo.name}</h4>
      <p>{employeeInfo.title}</p>
      <button className="delete" onClick={() => dispatch({ type: "Delete", payload: employeeInfo.id })}>X</button>
    </div>
  );
}

export default Employee;
