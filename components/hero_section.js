import styles from '../styles/HeroSection.module.css'
import AudienceForm from './audience_form'

export default function HeroSection() {
    return (
        <section id="getstarted" className={styles.heroSection}>
            <div className='container' style={{ height: "100%" }}>
                <AudienceForm />
            </div>
        </section>
    )
}
