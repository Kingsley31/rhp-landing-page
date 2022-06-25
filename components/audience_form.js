import styles from '../styles/AudienceForm.module.css';
import React, { useState, useEffect } from 'react';
import Dialog from './dialog';
import AnimatedButton from './animated_button';
import axios from 'axios';
import appConfig from '../appconfig/config';

export default function AudienceForm() {

    let [dialogIsOpen, setDialogState] = useState(false);
    let [formIsSubmitting, setFormIsSubmitting] = useState(false);
    let [categoryError, setCategoryError] = useState("");
    let [nameError, setNameError] = useState("");
    let [emailError, setEmailError] = useState("");
    let [phoneError, setPhoneError] = useState("");
    let [formError, setFormError] = useState("");
    let [selectedRole, setRole] = useState("");
    const onDialogButtonClcked = () => {
        setDialogState(false);
    };
    const validateForm = (form) => {
        console.log("Validating....");
        if (form.category.value.trim() === "" || form.category.value.trim() === "none") {
            setCategoryError("Please choose a category");
            console.log("Error");
            return false
        }
        if (form.fullname.value.trim() == "") {
            setNameError("Invalid name supplied");
            return false
        }
        if (form.email.value.trim() == "") {
            setEmailError("Invalid email supplied");
            return false
        }
        if (form.phone_number.value.trim() == "") {
            setPhoneError("Invalid phone number supplied");
            return false
        }
        setCategoryError("");
        setNameError("");
        setEmailError("");
        setPhoneError("");
        return true;
    };
    useEffect(() => {
        setupCustomSelect();
    }, []);

    const submitForm = (e) => {
        e.preventDefault();
        if (!validateForm(e.target)) return;
        setFormIsSubmitting(true);
        setFormError("");
        const user_role = e.target.category.value;
        setRole(user_role);
        const username = e.target.fullname.value;
        const email = e.target.email.value;
        const phone = e.target.phone_number.value;
        const password = "123pasword";
        axios.post(appConfig.API_BASE_URL + "/auth/local/register", {
            username,
            email,
            user_role,
            phone,
            password
        },
            {
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then(response => {
                setFormIsSubmitting(false);
                e.target.fullname.value = "";
                e.target.email.value = "";
                e.target.phone_number.value = "";
                setDialogState(true);
            }).catch(error => {
                setFormIsSubmitting(false);
                setFormError("Something went wrong");
            });
        //console.log(user_role);
    };

    function setupCustomSelect() {

        var customSelect, j, ll, selElmnt, customSelectSelectedElement, b, c;
        /* Look for any elements with the class "custom-select": */
        customSelect = document.getElementById("customSelect");
        if (customSelect.children[1] == null) {
            selElmnt = customSelect.getElementsByTagName("select")[0];
            ll = selElmnt.length;
            /* For each element, create a new DIV that will act as the selected item: */
            customSelectSelectedElement = document.createElement("DIV");
            customSelectSelectedElement.setAttribute("class", "select-selected");
            customSelectSelectedElement.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            customSelect.appendChild(customSelectSelectedElement);

            b = document.createElement("DIV");
            b.setAttribute("class", "select-items select-hide");

            for (j = 1; j < ll; j++) {
                /* For each option in the original select element,
                create a new DIV that will act as an option item: */
                c = document.createElement("DIV");
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.setAttribute("class", "select-item");
                c.addEventListener("click", function (e) {
                    /* When an item is clicked, update the original select box,
                    and the selected item: */
                    var y, i, k, s, h, sl, yl;
                    s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                    sl = s.length;

                    h = this.parentNode.parentNode.getElementsByClassName("select-selected")[0];

                    for (i = 0; i < sl; i++) {
                        if (s.options[i].innerHTML == this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
                            y = this.parentNode.getElementsByClassName("same-as-selected");
                            yl = y.length;
                            for (k = 0; k < yl; k++) {
                                y[k].setAttribute("class", "select-item");
                            }
                            this.setAttribute("class", "same-as-selected");
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            //x.appendChild(b);
            let categoryFormInput = document.getElementById("categoryInput");
            categoryFormInput.appendChild(b);
            customSelect.addEventListener("click", function (e) {
                e.stopPropagation();
                closeAllSelect(this);
                //this.nextSibling.classList.toggle("select-hide");
                categoryFormInput.lastChild.classList.toggle("select-hide");
                this.classList.toggle("select-arrow-active");
            });
            document.addEventListener("click", closeAllSelect);
        }

    }


    function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, xl, yl, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        xl = x.length;
        yl = y.length;
        for (i = 0; i < yl; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < xl; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }



    return (
        <>
            <Dialog onDoneButtonClick={onDialogButtonClcked} isOpen={dialogIsOpen} title="Form submitted successfully" message={"Thank you for taking time to show interest to become one of our " + selectedRole + ", our consultant would contact you shortly"} />
            <div id='formSection' className={styles.formSection}>
                <h2 className={styles.formTitle}>Rhino Homes & Properties LTD</h2>
                <img className={styles.formTitleSeperator} src='images/separator-icon.svg' />
                <p className={styles.formDescription}>Join our unboarding waiting list to become one of our verified agent, buyer or investor</p>
                <form onSubmit={submitForm} className={styles.form}>
                    {formError ? <p className={styles.errorMessage}>{formError}</p> : null}
                    <label className={styles.inputLabel} htmlFor="category">Choose category</label>
                    <div id='categoryInput' className={styles.formInput}>
                        <i className={styles.inputIcon}>
                            <img src='images/category-icon.svg' />
                        </i>
                        <div className={styles.formSelect}>
                            <div id='customSelect' className={styles.customSelect}>
                                <select name='category' required placeholder='e.g agent or subscriber'>
                                    <option value="none">e.g agent or buyer</option>
                                    <option value="agent">Agent</option>
                                    <option value="investor">Investor</option>
                                    <option value="buyer">Buyer</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {categoryError ? <p className={styles.errorMessage}>{categoryError}</p> : null}
                    <label className={styles.inputLabel} htmlFor="fullname">Fullname</label>
                    <div className={styles.formInput}>
                        <i className={styles.inputIcon}>
                            <img src='images/name-icon.svg' />
                        </i>
                        <input type="text" name="fullname" placeholder="e.g  firstname & lastname" required />
                    </div>
                    {nameError ? <p className={styles.errorMessage}>{nameError}</p> : null}
                    <label className={styles.inputLabel} htmlFor="email">Email Address</label>
                    <div className={styles.formInput}>
                        <i className={styles.inputIcon}>
                            <img src='images/input-email-icon.svg' />
                        </i>
                        <input type="email" name="email" placeholder="e.g abc@xyz.com" required />
                    </div>
                    {emailError ? <p className={styles.errorMessage}>{emailError}</p> : null}
                    <label className={styles.inputLabel} htmlFor="phone_number">Phone Number</label>
                    <div className={styles.formInput}>
                        <i className={styles.inputIcon}>
                            <img src='images/input-call-icon.svg' />
                        </i>
                        <input type="phone" name="phone_number" placeholder="e.g  +234  ******" required />
                    </div>
                    {phoneError ? <p className={styles.errorMessage}>{phoneError}</p> : null}
                    <AnimatedButton title='Submit' isLoading={formIsSubmitting} />
                </form>
            </div>
        </>

    )
}
