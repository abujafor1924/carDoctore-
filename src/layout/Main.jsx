import { Outlet } from "react-router-dom";
import Footer from "../Components/Shears/Footer";
import Navbar from "../Components/Shears/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
