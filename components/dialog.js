import styles from '../styles/Dialog.module.css'
import React, { useState, useEffect } from 'react';

export default function Dialog({ isOpen, title, message, onDoneButtonClick }) {

    if (!isOpen) {
        return <></>
    }

    return (
        <div className={styles.dialogBG}>
            <div className={styles.dialogBody}>
                <img className={styles.dialogIcon} src='images/dialog-good-icon.svg' />
                <h2>{title}</h2>
                <p>{message}</p>
                <button onClick={onDoneButtonClick}>Done</button>
            </div>
        </div>
    );
}
