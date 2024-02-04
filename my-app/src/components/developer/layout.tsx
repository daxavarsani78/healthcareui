import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export function Layout() {
  return (
    <>
      <Header bgColor="bg-white" />
      <Outlet />
      <Footer />
    </>
  );
}
