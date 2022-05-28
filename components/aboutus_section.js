import styles from '../styles/AboutUsSection.module.css';

export default function AboutUsSection() {

    return (
        <div id='whoarewe' className={styles.aboutSection}>
            <div className="container">
                <h2 className={styles.pageTitle}>Who <span className={styles.pageTitleSpan}>are we</span></h2>
                <img className={styles.lineSeparator} src="images/separator-icon.svg" />
                <div className={styles.aboutTextContainer}>
                    <p>Rhino homes and properties Ltd (Rhp) is a Nigerian based real-estate firm that acquires, develops and sells properties to individuals and organizations around the globe.</p>
                    <p>Rhp’s strategy is to leverage employee operations capacity and technical innovation to deliver affordable homes to customers. Rhp sells her properties through marketers, real-estate agents and recommendations from previous customers. Aside from marketing, the major means through which Rhino homes sell their products is real-estate agency.</p>
                </div>

            </div>

        </div>
    );
}
