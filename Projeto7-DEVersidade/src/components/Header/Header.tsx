import logo from "../../assets/logoProjeto6.png"
import styles from "./Header.module.css"
function Header()
{
    return (
        <header className={styles.header}>
            <img src={logo} alt="logo do grupo 17 DEVersidade" />
        </header>
    )
}

export default Header;