import Header from "./Header.jsx";
import EmployeeList from "./EmployeeList.jsx";
import SearchBar from "./SearchBar.jsx";
import DisplayForm from "./DisplayForm.jsx";

export default function Homepage() {
  return (
    <div className="hpage">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList />
      <DisplayForm />
    </div>
  );
};