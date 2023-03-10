import Cartwidget from "../Cartwidget/Cartwidget";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>E-Commerce</h1>
      <a href="">Tablets</a>
      <a href="">Smartphones</a>
      <a href="">Notebooks</a>
      <a href="">
        <Cartwidget />
      </a>
    </div>
  );
};

export default Navbar;
