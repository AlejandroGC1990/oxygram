import "./styles/App.css";
import { Outlet } from "react-router-dom";


function App() {

  return (
    <div>
      <Outlet className={index.css} />
    </div>
  );
}

export default App;
