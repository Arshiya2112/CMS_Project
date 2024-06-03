import React from "react";
import Navbar from "../components/Navbar";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";


function Contact() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <ContactUs/>
            </div>
            <Footer />
        </>
    );
}

export default Contact;