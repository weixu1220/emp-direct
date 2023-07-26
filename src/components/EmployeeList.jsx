import Employee from "./Employee";
import { useEmployeeContext } from '../EmployeeContext';
function EmployeeList() {
  const { employees} = useEmployeeContext();
    return (
        <div className="emp-list">
        {employees.map((employee) => (
          <Employee
            key={employee.id}
            employeeInfo={employee}
          />
        ))}
      </div>
    )
}

export default EmployeeList;