import EmployeeList from "../components/EmployeeList";
import Form from "../components/Form";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <div className="home">
      <Header header="Employee Directory" />
      <SearchBar />
      <EmployeeList />
      <Form />
    </div>
  );
}
