import { Outlet } from "react-router";
import "./App.css";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <NavBar></NavBar>
        <section>
          <Outlet></Outlet>
        </section>
        <ToastContainer></ToastContainer>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
