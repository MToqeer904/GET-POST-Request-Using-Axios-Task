import "./App.css";
import Emplist from "./component/emp_List/Emplist";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import Postingemp from "./component/adding_emp/Adding_emp";

function App() {
  return (
    <div className="App ">
      <h1 className="bg-primary rounded">IGS Assessment Task</h1>
      <Emplist />
      <Postingemp />
    </div>
  );
}

export default App;
