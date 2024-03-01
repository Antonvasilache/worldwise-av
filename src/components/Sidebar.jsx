import { Outlet } from "react-router-dom";

import AppNav from "./AppNav";
import Footer from "./Footer";
import Logo from "../pages/Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Sidebar;
