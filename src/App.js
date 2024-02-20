import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SidecheckBoxBar from "./Components/SideCheckBox/SidecheckBoxBar";
import Homepage from "./Pages/Homepage";
import Aboutus from "./Pages/about/Aboutus";
import ServicePage from "./Pages/services/ServicePage";

function App() {
  return (
    <>
      <Aboutus />
      <ServicePage />
    </>
  );
}

export default App;
