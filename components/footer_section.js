import styles from '../styles/FooterSection.module.css'

export default function FooterSection() {
    return (
        <footer className={styles.footerSection}>
            <div className="container">
                <div className={styles.footerContainer}>
                    <div className={styles.strategyContainer}>
                        <img src="images/rhplogo.svg" alt="Rhino Logo" />
                        <p>At Rhino Homes and Properties Limited, you are number one. Whether you are one of our certified agent, investor , subscriber, partner or buyer, we value your business and will provide you with the individual attention and service you deserve. We believe in integrity, commitment to excellence, a professional attitude, and personalized care.</p>
                        <img className={styles.ratingBar} src="images/ratingbar-icon.svg" alt="Rhino Logo" />
                        <p className={styles.trustedSection}>Trusted and verified by thousands</p>
                    </div>
                    <div className={styles.contactContainer}>
                        <h2>Contact Us</h2>
                        <h4>Rhino Homes & Properties</h4>
                        <p>No. 20 Macgregor Napier Garden, Lekki Lagos.</p>
                        <h4>Customer Care Line</h4>
                        <p>+234-8064759596</p>
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
