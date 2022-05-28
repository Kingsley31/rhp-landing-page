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
                                    <h4>Lionel Messi</h4>
                                    <p className={styles.testifierRole}>Reliance HMO</p>
                                </div>
                                <img src="images/ratingbar-icon.svg" alt="five star" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at molestie erat, at fermentum felis. Donec facilisis.</p>
                        </div>
                        <div className={styles.sliderItem}>
                            <div className={styles.userIdentityAndRatingContainer}>
                                <div className={styles.testifier}>
                                    <h4>Lionel Messi</h4>
                                    <p className={styles.testifierRole}>Reliance HMO</p>
                                </div>
                                <img src="images/ratingbar-icon.svg" alt="five star" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at molestie erat, at fermentum felis. Donec facilisis.</p>
                        </div>
                        <div className={styles.sliderItem}>
                            <div className={styles.userIdentityAndRatingContainer}>
                                <div className={styles.testifier}>
                                    <h4>Lionel Messi</h4>
                                    <p className={styles.testifierRole}>Reliance HMO</p>
                                </div>
                                <img src="images/ratingbar-icon.svg" alt="five star" />
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at molestie erat, at fermentum felis. Donec facilisis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
