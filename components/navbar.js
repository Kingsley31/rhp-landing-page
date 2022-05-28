import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    const closeDrawer = () => {
        const navDrawer = document.getElementById("drawer");
        navDrawer.style.transform = "translateX(100%)";
    };

    const openDrawer = () => {
        const navDrawer = document.getElementById("drawer");
        navDrawer.style.transform = "translateX(0%)";

        document.addEventListener("mousedown", () => {
            closeDrawer();
        });

    };

    return (
        <div className={styles.navbarContainer}>
            <div className="container">
                <div className={styles.navbar}>
                    <a className={styles.navbarLogoLink} href="#">
                        <img className={styles.navbarLogo} src="images/rhplogo.svg" alt="Logo" />
                    </a>

                    <nav id="drawer" className={styles.navDrawer}>
                        <img onClick={closeDrawer} className={styles.navbarMenuCloseButton} src="images/close-icon.svg" alt="Logo" />
                        <ul className={styles.navbarMenu}>
                            <li className={styles.navbarMenuItem}><a href='#whoarewe'>Who are we</a></li>
                            <li className={styles.navbarMenuItem}><a href='#howitworks'>How it works</a></li>
                            <li className={styles.navbarMenuItem}><a href='#properties'>Properties</a></li>
                            <li className={styles.navbarMenuItem}><a href='#contactus'>Contact Us</a></li>
                            <li className={styles.navbarMenuItem}><a className={styles.navbarMenuLoginBtn} href='#login'>Login</a></li>
                            <li className={styles.navbarMenuItem}><a className={styles.navbarMenuStartBtn} href='#getstarted'>Get Started</a></li>
                        </ul>
                    </nav>
                    <img onClick={openDrawer} className={styles.navbarMenuIcon} src="images/menu-icon.svg" />
                </div>
            </div>
        </div>
    )
}
