import styles from '../styles/ContactUsSection.module.css'
import React, { useState, useEffect } from 'react';
import AnimatedButton from './animated_button';
import Dialog from './dialog';
import axios from 'axios';
import appConfig from '../appconfig/config';

export default function ContactUsSection() {
    let [dialogIsOpen, setDialogState] = useState(false);
    let [formIsSubmitting, setFormIsSubmitting] = useState(false);
    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [messageError, setMessageError] = useState("");
    let [formError, setFormError] = useState("");

    const onDialogButtonClcked = () => {
        setDialogState(false);
    };
    const validateForm = (form) => {
        if (form.name.value.trim() == "") {
            setNameError("Invalid name supplied");
            return false
        }
        if (form.email.value.trim() == "") {
            setEmailError("Invalid email supplied");
            return false
        }
        if (form.message.value.trim() == "") {
            setMessageError("Please enter your message");
            return false
        }
        setNameError("");
        setEmailError("");
        setMessageError("");
        return true;
    };

    const submitForm = (e) => {
        e.preventDefault();
        if (!validateForm(e.target)) return;
        setFormIsSubmitting(true);
        setFormError("");
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        axios.post(appConfig.API_BASE_URL + "/contactmessages", {
            name,
            email,
            message
        },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                setFormIsSubmitting(false);
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.message.value = "";
                setDialogState(true);
            }).catch(error => {
                setFormIsSubmitting(false);
                setFormError("Something went wrong");
            }).finally(() => {
                console.log(dialogIsOpen);
            });

    };
    return (
        <div id="contactus" className={styles.contactUsSection}>
            <Dialog onDoneButtonClick={onDialogButtonClcked} isOpen={dialogIsOpen} title="Form submitted successfully" message="Thank you for reaching out, our consultant would contact you shortly." />
            <div className="container">
                <div className={styles.contactUsContainer}>
                    <div className={styles.contactDetailContainer}>
                        <h4>Our Agent</h4>
                        <img src="images/agent-image.svg" alt="RHP Agent Image" />
                        <p>Contact Information</p>
                        <p>Phone: <span>+234 806 475 9596</span></p>
                        <p>Email: <span>info@rhp.ng</span></p>
                    </div>
                    <div className={styles.contactFormSection}>
                        <h2>Contact us</h2>
                        <img className={styles.lineSeparator} src="images/separator-icon.svg" />
                        <form onSubmit={submitForm} className={styles.contactForm}>
                            {formError ? <p className={styles.errorMessage}>{formError}</p> : null}
                            <div className={styles.flex}>
                                <div className={styles.formInput}>
                                    <label htmlFor="name">Your Name</label>
                                    <input className={styles.input} id="name" type="text" name="name" placeholder="Your name" required />
                                    {nameError ? <p className={styles.errorMessage}>{nameError}</p> : null}
                                </div>
                                <div className={styles.formInput}>
                                    <label htmlFor="email">Your Email</label>
                                    <input className={styles.input} type="email" name="email" placeholder="Your email" required />
                                    {emailError ? <p className={styles.errorMessage}>{emailError}</p> : null}
                                </div>
                            </div>
                            <label htmlFor="message">Your Message</label>
                            <textarea className={styles.formMessageBox + " " + styles.input} name="message" placeholder="Your message" required></textarea>
                            {messageError ? <p className={styles.errorMessage}>{messageError}</p> : null}
                            <AnimatedButton title='Send a Message' isLoading={formIsSubmitting} buttonStyle={{ marginTop: "1.5em", padding: "0.6em", fontSize: ".8em", fontWeight: "normal" }} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
