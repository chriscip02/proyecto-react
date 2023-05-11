import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Cartwidget from "../Cartwidget/Cartwidget";
import styles from "./Navbar.module.scss";

const Navbar = (carrito) => {
  return (
    <div className={styles.containerNavbar}>
      <div className={styles.containerLogo}>
        <Link className="nav-link" to="/home">
          <img src="" alt="Logo" />
        </Link>
      </div>

      <nav className={styles.containerCategories}>
        <Link className={styles.navLink} to="/category/tablets">
          <Button texto="Tablets" />
        </Link>

        <Link className={styles.navLink} to="/category/celulares">
          <Button texto="Celulares" />
        </Link>

        <Link className={styles.navLink} to="/category/notebooks">
          <Button texto="Notebooks" />
        </Link>
      </nav>

      <div className={styles.containerCartWidget}>
        <Cartwidget carrito={carrito} />
      </div>
    </div>
  );
};

export default Navbar;
