import styles from '../styles/FooterSection.module.css'

export default function FooterSection() {
    return (
        <footer className={styles.footerSection}>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.strategyContainer}>
                        <img src="images/rhplogo.svg" alt="Rhino Logo" />
                        <p>Rhp’s strategy is to leverage employee operations capacity and technical innovation to deliver affordable homes to customers. Rhp sells her properties through marketers, real-estate agents and recommendations from previous customers. Aside from marketing, the major means through which Rhino homes sell their products is real-estate agency.</p>
                        <img className={styles.ratingBar} src="images/ratingbar-icon.svg" alt="Rhino Logo" />
                        <p className={styles.trustedSection}>Trusted and verified by thousands</p>
                    </div>
                    <div className={styles.contactContainer}>
                        <h2>Contact Us</h2>
                        <h4>Rhino Homes & Properties</h4>
                        <p>No. 20 Macgregor Napier Garden, Lekki Lagos.</p>
                        <h4>Customer Care Line</h4>
                        <p>+234-9020159536</p>
                        <p>+234-9039483406</p>
                        <h4>Email</h4>
                        <p>Support@rhp.ng</p>
                    </div>
                    <div className={styles.quickContainer}>
                        <h2>Quick Link</h2>
                        <a href="#getstarted">Home</a>
                        <a href="#whoarewe">About Us</a>
                        <a href="#howitworks">How it works</a>
                        <a href="#contactus">Contact Us</a>
                        <a href="#howitworks">Benefits of Rhino Homes & Properties</a>
                        <a href="#getstarted">Become a partner</a>
                        <a href="#login">Log in</a>
                    </div>
                </div>
            </div>
            <p className={styles.copyRightSection}>© Rhino Homes & Properties 2022, All Rights Reserved</p>
        </footer>
    )
}
