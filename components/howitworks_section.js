import styles from "../styles/HowItWorks.module.css";

export default function HowItWorksSection() {
    return (
        <div id="howitworks" className={styles.howItWorksSection}>
            <div className="container">
                <div className={styles.howItWorksContainer}>
                    <div className={styles.howItWorksSectionImage}></div>
                    <div className={styles.howItWorksMainContainer}>
                        <h2>How it <span>works</span></h2>
                        <img className={styles.lineSeparator} src="images/separator-icon.svg" />
                        <p className={styles.mainText}>Rhp’s strategy is to leverage employee operations capacity and technical innovation to deliver affordable homes to customers. Rhp sells her properties through marketers, real-estate agents and recommendations from previous customers</p>
                        <div className={styles.howItWorksStepsContainer}>
                            <div className={styles.howItWorksStep}>
                                <img src="images/connect-with-live-agent-icon.svg" />
                                <p>Connect with live agents and negotiate properties</p>
                            </div>
                            <div className={styles.howItWorksStep}>
                                <img src="images/source-property-icon.svg" />
                                <p>Source for further properties from Rhino properties agents</p>
                            </div>
                            <div className={styles.howItWorksStep}>
                                <img src="images/quality-delivery-icon.svg" />
                                <p>Quality delivery and accessment of property</p>
                            </div>
                            <div className={styles.howItWorksStep}>
                                <img src="images/card-icon.svg" />
                                <p>Easy payment and digital commission sharing among agents</p>
                            </div>
                        </div>
                        <a className={styles.becomeAnAgentLink} href="#getstarted">Become an agent</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
