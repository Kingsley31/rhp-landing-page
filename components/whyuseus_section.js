import styles from '../styles/WhyUseUsSection.module.css'

export default function WhyUseUsSection() {
    return (
        <div className={styles.whyUseUsSection}>
            <div className="container">
                <div className={styles.whyUseUsContainer}>
                    <h2>Why use <span>Rhino</span>Homes & Properties</h2>
                    <p>Hassle Free way to get the best property around you</p>
                    <div className={styles.whyUseUsPointContainer}>
                        <div className={styles.whyUseUsPoint}>
                            <img src="images/easypurchase-icon.svg" />
                            <h4>Easy Purchase</h4>
                            <p>Best Prices Guaranteed</p>
                        </div>
                        <div className={styles.whyUseUsPoint}>
                            <img src="images/qualityproperties-icon.svg" />
                            <h4>Quality Properties</h4>
                            <p>Get the best choices</p>
                        </div>
                        <div className={styles.whyUseUsPoint}>
                            <img src="images/seamlesstech-icon.svg" />
                            <h4>Seamless Technology</h4>
                            <p>Connect with vetted agents with ease</p>
                        </div>
                        <div className={styles.whyUseUsPoint}>
                            <img src="images/buyinbulk-icon.svg" />
                            <h4>Buy in bulk</h4>
                            <p>Secured gateway & transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
