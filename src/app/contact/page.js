'use client'
import ContactForm from "../components/ContactForm";
import Navbar from "../components/NavBar";
import FooterComponent from "../components/footer";
import styles from "../styles/general.module.css";

export default function contact() {
    return <>
        <Navbar />
        <div className={styles.pageContainer}>
        <div className={styles.pageContent}>
            <h1 className={styles.h1}>Contact Us</h1>
            <h2>Discover Your True Colors with Colorista</h2>
            <p>
            Get in touch with Colorista for all your color needs! Whether you have questions about our products, or want to share your latest creative endeavors, our team is here to assist you. Contact filling out the form below. We can't wait to hear from you and help bring your colorful visions to life!
            </p>
        </div>
        <ContactForm />
        </div>
        <FooterComponent/>

    </>

}