import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header>
      <div>Logo</div>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link>Lista de Músicas</Link>
          </li>
          <li>
            <Link>Sugestões</Link>
          </li>
          <li>
            <Link>Sair</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
