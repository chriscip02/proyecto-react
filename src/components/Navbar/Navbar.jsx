import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Cartwidget from "../Cartwidget/Cartwidget";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerLogo}>
        <Link className="nav-link" to="/home">
          <h1>E-Commerce</h1>
        </Link>
      </div>

      <nav className={styles.containerNav}>
        <Link className={styles.navLink} to="/tablets">
          <Button texto="Tablets" />
        </Link>

        <Link className={styles.navLink} to="/celulares">
          <Button texto="Celulares" />
        </Link>

        <Link className={styles.navLink} to="/notebooks">
          <Button texto="Notebooks" />
        </Link>
      </nav>

      <div className={styles.containerCartWidget}>
        <Cartwidget />
      </div>
    </div>
  );
};

export default Navbar;
