import styles from '../styles/AboutUsSection.module.css';

export default function AboutUsSection() {

    return (
        <div id='whoarewe' className={styles.aboutSection}>
            <div className="container">
                <h2 className={styles.pageTitle}>Who <span className={styles.pageTitleSpan}>are we</span></h2>
                <img className={styles.lineSeparator} src="images/separator-icon.svg" />
                <div className={styles.aboutTextContainer}>
                    <p>Rhino homes and properties Ltd (Rhp) is a Nigerian based real-estate firm that acquires, develops and sells properties to individuals and organizations around the globe. At Rhino Homes and Properties Limited, you are number one. Whether you are one of our certified agent, investor , subscriber, partner or buyer, we value your business and will provide you with the individual attention and service you deserve. We believe in integrity, commitment to excellence, a professional attitude, and personalized care.</p>
                </div>
                <div className={styles.rhpEntitiesContainer}>
                    <div className={styles.rhpEntity}>
                        <img src="/images/agent_icon.svg" />
                        <h4>Who is a <span>Rhino Agent</span></h4>
                        <p>Rhino homes and properties Ltd. agents are verified persons that has the right to manage, promote and sale developed Rhino homes properties to gain commissions.</p>
                        <a href="#getstarted">Become an Agent</a>
                    </div>
                    <div className={styles.rhpEntity}>
                        <img src="/images/investor_icon.svg" />
                        <h4>Who is a <span>Rhino Investor</span></h4>
                        <p>Rhino homes and properties Ltd. investors are verified persons who have choosen to be part of our ongoing works and property developemt project and have invested to make profits</p>
                        <a href="#getstarted">Become an Investor</a>
                    </div>
                    <div className={styles.rhpEntity}>
                        <img src="/images/subscriber_icon.svg" />
                        <h4>Who is a <span>Rhino Buyer</span></h4>
                        <p>Rhino homes and properties Ltd. buyer are random individuals and organizations who are interested in buying verified Rhino homes properties.</p>
                        <a href="#getstarted">Become a Buyer</a>
                    </div>
                </div>

            </div>

        </div>
    );
}
