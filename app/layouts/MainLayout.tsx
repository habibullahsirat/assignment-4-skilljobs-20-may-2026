import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}
