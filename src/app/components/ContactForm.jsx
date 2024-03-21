import styles from '../styles/contact.module.css'
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    let values = {
        name: "",
        email: "",
        message: ""
    }

    const [contact, setContact] = useState(values);
   

    const publicKey = "Wdk7ZXbjsR8uZ14Cw"
    useEffect(() => emailjs.init(publicKey), [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const serviceId = "service_xewl4ph";
        const templateId = "template_wn9d2h9";
        try {
            ;
            await emailjs.send(serviceId, templateId, {
                name: contact.name,
                email: contact.email,
                message: contact.message
            });
            toast.success("Thank you for contacting me. I will reply to you soon.");
            setContact(values)

        } catch (error) {
            console.log(error);
        }

    };




    const handleChange = (e) => {
        const { id, value } = e.target;
        setContact((prevContact) => ({ ...prevContact, [id]: value }));
    };




    return <div className={styles.contactsFormContainer}>
            <h1>Send your message</h1>
        <form action="#" className={styles.contactsForm} onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input className={styles.inputContainer} type="text" id="name" value={contact.name}
                onChange={handleChange} required />
            <label htmlFor="email">Email:</label>
            <input className={styles.inputContainer} type="email" id="email" value={contact.email}
                onChange={handleChange} required />
            <label htmlFor="message">Message:</label>
            <input className={styles.inputContainer} type="text" id="message" value={contact.message}
                onChange={handleChange} required
            />
            <button className={styles.contactsSubmit} >
                Send Email
            </button>
             <ToastContainer 
        position="bottom-right"
        autoClose={2000}
        /> 

        </form>
    </div>

}