import styles from '../styles/TestimonialSection.module.css'

export default function TestimonialSection() {
    return (
        <div className={styles.testimonialSection}>
            <div className='container'>
                <div className={styles.testimonialContainer}>
                    <h2 className={styles.sectionTilte}>Don’t take our <span>words</span>, Take <span>theirs</span></h2>
                    <div className={styles.testimonialSlider}>
                        <div className={styles.sliderItem}>
                            <div className={styles.userIdentityAndRatingContainer}>
                                <div className={styles.testifier}>
                                    <h4>Divine Olajide</h4>
                                    <p className={styles.testifierRole}>RHP Customer</p>
                                </div>
                                <img src="images/ratingbar-icon.svg" alt="five star" />
                            </div>
                            <p>Thank you to Rhino homes and properties Ltd for helping me get a nice property, i never knew to get an amazing property like this would be this easy.</p>
                        </div>
                        <div className={styles.sliderItem}>
                            <div className={styles.userIdentityAndRatingContainer}>
                                <div className={styles.testifier}>
                                    <h4>Williams Roma</h4>
                                    <p className={styles.testifierRole}>RHP Agent</p>
                                </div>
                                <img src="images/ratingbar-icon.svg" alt="five star" />
                            </div>
                            <p>Rhino homes & Properties is the best, my commission was paid instanty to my wallet, exactly the estimated commsion. Thank you </p>
                        </div>
                        <div className={styles.sliderItem}>
                            <div className={styles.userIdentityAndRatingContainer}>
                                <div className={styles.testifier}>
                                    <h4>Kola Philip</h4>
                                    <p className={styles.testifierRole}>RHP Investor</p>
                                </div>
                                <img src="images/ratingbar-icon.svg" alt="five star" />
                            </div>
                            <p>Rhino homes & Properties investment plan has been the best decision i took this year. They have a swift investment plan and their properties are developing rapidly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
