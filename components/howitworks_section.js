import styles from "../styles/HowItWorks.module.css";

export default function HowItWorksSection() {
    return (
        <div id="howitworks" className={styles.howItWorksSection}>
            <div className="container">
                <div className={styles.howItWorksContainer}>
                    <div className={styles.howItWorksSectionImage}>
                        <img src="/images/howitworks-bg.svg" />
                    </div>
                    <div className={styles.howItWorksMainContainer}>
                        <h2>How it <span>works</span></h2>
                        <img className={styles.lineSeparator} src="images/separator-icon.svg" />
                        <div className={styles.howItWorksStepsContainer}>
                            <div className={styles.howItWorksStep}>
                                <img src="images/create_account_icon.svg" />
                                <p>Choose and create an account as an agent, investor or as a buyer.</p>
                            </div>
                            <div className={styles.howItWorksStep}>
                                <img src="images/source-property-icon.svg" />
                                <p>Activate your RHP digital wallet for seamless payments & withdrawal.</p>
                            </div>
                            <div className={styles.howItWorksStep}>
                                <img src="images/quality-delivery-icon.svg" />
                                <p>Close RHP sales as an agent and earn commissions or invest/subscribe to get percentages and interests.</p>
                            </div>
                            <div className={styles.howItWorksStep}>
                                <img src="images/card-icon.svg" />
                                <p>Earn and withdraw percentage earnings from your RHP digital wallets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
