import { useParams } from "react-router-dom";
import { useEmployeeContext } from "../EmployeeContext";
export default function Info() {
  const person = useParams()
  const { employees } = useEmployeeContext();
  const employee = employees.find((emp) => (emp.name === person.name))
  return (
    <div className="resultbox grey">
      <div key={employee.id}>
        <div className="elist grey">
          <img src={employee.headshot} alt="pic" />
          <div>
            <h3>{employee.name}</h3>
            <p>{employee.title}</p>
          </div>
        </div>
        <div className="grey">
          <h4>Call Office</h4>
          <p>{employee.phone}</p>
        </div>
        <div className="grey">
          <h4>Call Mobile</h4>
          <p>{employee.phone}</p>
        </div>
        <div className="grey">
          <h4>SMS</h4>
          <p>{employee.phone}</p>
        </div>
        <div className="grey">
          <h4>Email</h4>
          <p>{employee.email}</p>
        </div>
      </div>
    </div>
  );
};