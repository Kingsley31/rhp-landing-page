import styles from '../styles/OurPropertiesSection.module.css'

export default function OurPropertiesSection() {

    const scrollLeft = (e) => {
        const content = e.target.nextSibling;
        const content_scroll_width = content.scrollWidth;
        let content_scoll_left = content.scrollLeft;
        content_scoll_left -= 100;
        if (content_scoll_left <= 0) {
            content_scoll_left = 0;
        }
        content.scrollLeft = content_scoll_left;
    };

    const scrollRight = (e) => {
        const content = e.target.previousSibling;
        const content_scroll_width = content.scrollWidth;
        let content_scoll_left = content.scrollLeft;
        content_scoll_left += 100;
        if (content_scoll_left >= content_scroll_width) { content_scoll_left = content_scroll_width; }
        content.scrollLeft = content_scoll_left;
    };
    return (
        <div id="properties" className={styles.ourPropertiesSection}>
            <div className="container">
                <div className={styles.propertiesContainer}>
                    <h2 className={styles.sectionTitle}>Our <span>Properties</span></h2>
                    <img className={styles.lineSeparator} src="images/separator-icon.svg" />
                    <p className={styles.sectionDescription}>Find out more about Rhino home properties estate development projects and their costs</p>
                    <div className={styles.propertyCategoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <h2>Low budget properties</h2>
                            <p>Less than ₦25,000,000</p>
                        </div>
                        <div className={styles.sliderContainer}>
                            <img onClick={scrollLeft} className={styles.controlBtn + ' ' + styles.preBtn} src="images/prev-icon.svg" alt="Previous button" />
                            <div className={styles.slider}>
                                <div className={styles.slideItem}>
                                    <img src="images/lowbigben1.jpg" alt="Slide Item" />
                                    <p>Big Ben Estate </p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/lowbigben2.jpg" alt="Slide Item" />
                                    <p>Big Ben Estate </p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/lowoakview1.jpg" alt="Slide Item" />
                                    <p>Oak View Estate </p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/lowoakview2.jpg" alt="Slide Item" />
                                    <p>Oak View Estate</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/lowbigben2.jpg" alt="Slide Item" />
                                    <p>Big Ben Estate</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/lowoakview2.jpg" alt="Slide Item" />
                                    <p>Oak View Estate</p>
                                </div>
                            </div>
                            <img onClick={scrollRight} className={styles.controlBtn + ' ' + styles.nextBtn} src='images/next-icon.svg' alt='Next button' />
                        </div>
                    </div>
                    <hr className={styles.categoryLineSeparator} />
                    <div className={styles.propertyCategoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <h2>Mid Budget properties</h2>
                            <p>₦25m - ₦85m</p>
                        </div>
                        <div className={styles.sliderContainer}>
                            <img onClick={scrollLeft} className={styles.controlBtn + ' ' + styles.preBtn} src="images/prev-icon.svg" alt="Previous button" />
                            <div className={styles.slider}>
                                <div className={styles.slideItem}>
                                    <img src="images/midkingsdalecourt1.jpg" alt="Slide Item" />
                                    <p>KingsDale Court </p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/midkingsdalecourt2.jpg" alt="Slide Item" />
                                    <p>KingsDale Court</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/midkingsdalecourt3.png" alt="Slide Item" />
                                    <p>KingsDale Court</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/midkingsdalecourt4.png" alt="Slide Item" />
                                    <p>KingsDale Court</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/midkingsdalecourt1.jpg" alt="Slide Item" />
                                    <p>KingsDale Court</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/midkingsdalecourt2.jpg" alt="Slide Item" />
                                    <p>KingsDale Court</p>
                                </div>
                            </div>
                            <img onClick={scrollRight} className={styles.controlBtn + ' ' + styles.nextBtn} src='images/next-icon.svg' alt='Next button' />
                        </div>
                    </div>
                    <hr className={styles.categoryLineSeparator} />
                    <div className={styles.propertyCategoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <h2>Luxury Budget Properties</h2>
                            <p>₦85m - Above</p>
                        </div>
                        <div className={styles.sliderContainer}>
                            <img onClick={scrollLeft} className={styles.controlBtn + ' ' + styles.preBtn} src="images/prev-icon.svg" alt="Previous button" />
                            <div className={styles.slider}>
                                <div className={styles.slideItem}>
                                    <img src="images/luxurykingsdalevilla1.jpg" alt="Slide Item" />
                                    <p>KingsDale Villa</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/luxurykingsdalevilla2.jpg" alt="Slide Item" />
                                    <p>KingsDale Villa</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/luxurykingsdalevilla3.jpg" alt="Slide Item" />
                                    <p>KingsDale Villa</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/luxurykingsdalevilla4.jpg" alt="Slide Item" />
                                    <p>KingsDale Villa</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/luxurykingsdalevilla5.jpg" alt="Slide Item" />
                                    <p>KingsDale Villa</p>
                                </div>
                                <div className={styles.slideItem}>
                                    <img className={styles.slideItem} src="images/luxurykingsdalevilla1.jpg" alt="Slide Item" />
                                    <p>KingsDale Villa</p>
                                </div>

                            </div>
                            <img onClick={scrollRight} className={styles.controlBtn + ' ' + styles.nextBtn} src='images/next-icon.svg' alt='Next button' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
