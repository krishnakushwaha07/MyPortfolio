import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex flex-col items-center w-screen h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
