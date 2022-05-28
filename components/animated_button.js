import styles from '../styles/AnimatedButton.module.css'

export default function AnimatedButton({ isLoading, title, buttonStyle }) {
    return (
        <button className={isLoading ? styles.loadingButton : styles.formButton} style={buttonStyle} type="submit" disabled={isLoading}>{isLoading ? null : title}</button>
    )
}
