import styles from '../styles/ContactDetailsBar.module.css'

export default function ContactDetailsBar() {
    return (
        <div className={styles.contactBar}>
            <div className="container">
                <ul className={styles.contactList}>
                    <li className={styles.contactListItem}><img className={styles.contactListItemIcon} src='images/call-icon.svg' />+234-8064759596</li>
                    <li className={styles.contactListItem}><img className={styles.contactListItemIcon} src='images/email-icon.svg' />info@rhp.ng</li>
                    <li className={styles.contactListItem}><img className={styles.contactListItemIcon} src='images/schedule-icon.svg' />Mon - Sat 9:00 - 17:00 Sunday CLOSED</li>
                </ul>
            </div>
        </div>
    )
}
