import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <nav>
        <Link smooth={true} duration={1500} className={styles.link} to="main">
          Home
        </Link>
        <Link smooth={true} duration={1500} className={styles.link} to="games">
          Games
        </Link>
      </nav>
    </div>
  );
};
export default Navbar;
