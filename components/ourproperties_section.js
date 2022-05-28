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
                    <p>Find out more about Rhino home properties estate development projects and their costs</p>
                    <div className={styles.propertyCategoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <h2>Big Ben Estate - Low budget properties</h2>
                            <p>₦25,000,000</p>
                        </div>
                        <div className={styles.sliderContainer}>
                            <img onClick={scrollLeft} className={styles.controlBtn + ' ' + styles.preBtn} src="images/prev-icon.svg" alt="Previous button" />
                            <div className={styles.slider}>
                                <img className={styles.slideItem} src="images/image1.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image2.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image3.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image4.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image5.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image6.svg" alt="Slide Item" />
                            </div>
                            <img onClick={scrollRight} className={styles.controlBtn + ' ' + styles.nextBtn} src='images/next-icon.svg' alt='Next button' />
                        </div>
                    </div>
                    <hr className={styles.categoryLineSeparator} />
                    <div className={styles.propertyCategoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <h2>KingsDale Court - Mid Budget properties</h2>
                            <p>₦25m - ₦85m</p>
                        </div>
                        <div className={styles.sliderContainer}>
                            <img onClick={scrollLeft} className={styles.controlBtn + ' ' + styles.preBtn} src="images/prev-icon.svg" alt="Previous button" />
                            <div className={styles.slider}>
                                <img className={styles.slideItem} src="images/image1.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image5.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image6.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image4.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image2.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image3.svg" alt="Slide Item" />
                            </div>
                            <img onClick={scrollRight} className={styles.controlBtn + ' ' + styles.nextBtn} src='images/next-icon.svg' alt='Next button' />
                        </div>
                    </div>
                    <hr className={styles.categoryLineSeparator} />
                    <div className={styles.propertyCategoryContainer}>
                        <div className={styles.categoryTitleContainer}>
                            <h2>KingsDale Villas - Luxury Budget Properties</h2>
                            <p>₦85m - Above</p>
                        </div>
                        <div className={styles.sliderContainer}>
                            <img onClick={scrollLeft} className={styles.controlBtn + ' ' + styles.preBtn} src="images/prev-icon.svg" alt="Previous button" />
                            <div className={styles.slider}>
                                <img className={styles.slideItem} src="images/image1.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image7.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image6.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image4.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image3.svg" alt="Slide Item" />
                                <img className={styles.slideItem} src="images/image2.svg" alt="Slide Item" />
                            </div>
                            <img onClick={scrollRight} className={styles.controlBtn + ' ' + styles.nextBtn} src='images/next-icon.svg' alt='Next button' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
