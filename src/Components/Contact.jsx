import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccesToast, setshowSuccesToast] = useState(false);
    const [showErrorToast, setshowErrorToast] = useState(false);

    const sendEmail = (e) => {
        setIsLoading(true);
        e.preventDefault();

        emailjs
            .sendForm("service_9ln66an", "template_lvo32bk", form.current, {
                publicKey: "l5ETh_n2Xcn3pA10g",
            })
            .then(
                () => {
                    form.current.reset();
                    setIsLoading(false);
                    setshowSuccesToast(true);
                    setTimeout(() => {
                        setshowSuccesToast(false);
                    }, 3000);
                },
                (error) => {
                    setIsLoading(false);
                    setshowErrorToast(true);
                    setTimeout(() => {
                        setshowErrorToast(false);
                    }, 3000);
                }
            );
    };

    return (
        <motion.div
            id="contact"
            className="p-10 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {showSuccesToast && (
                <div className="toast toast-top toast-end top-[80px]">
                    <div className="alert alert-success">
                        <span>Message Sent Successfully</span>
                    </div>
                </div>
            )}
            {showErrorToast && (
                <div className="toast toast-top toast-end top-[80px]">
                    <div className="alert alert-error">
                        <span>Something went wrong, Please Try Again</span>
                    </div>
                </div>
            )}

            <motion.form
                ref={form}
                onSubmit={sendEmail}
                className="max-md:w-full flex flex-col justify-center items-center space-y-9 mt-8 p-10 border-2 border-primary w-[600px] rounded-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
            >
                <h1 className="title">CONTACT</h1>
                <label className="floating-label mt-8">
                    <span>Full Name *</span>
                    <input
                        required
                        name="name"
                        type="text"
                        placeholder="Enter Your Name Here"
                        className="input input-md input-primary w-100 max-md:w-60"
                    />
                </label>
                <label className="floating-label">
                    <span>Your Email *</span>
                    <input
                        required
                        name="mail"
                        type="email"
                        placeholder="example@gmail.com"
                        className="input input-md input-primary w-100 max-md:w-60"
                    />
                </label>
                <label className="floating-label">
                    <span>Subject *</span>
                    <input
                        required
                        name="subject"
                        type="text"
                        placeholder="Enter Subject"
                        className="input input-md input-primary w-100 max-md:w-60"
                    />
                </label>
                <label className="floating-label">
                    <span>Enter Message *</span>
                    <textarea
                        required
                        className="textarea w-100 textarea-primary max-md:w-60"
                        placeholder="Enter Your Message Here"
                        name="message"
                    ></textarea>
                </label>
                {isLoading ? (
                    <button disabled type="submit" className="btn btn-primary">
                        Sending <span className="loading loading-spinner loading-xs"></span>
                    </button>
                ) : (
                    <button type="submit" className="btn btn-primary">
                        Send Message
                    </button>
                )}
            </motion.form>
        </motion.div>
    );
};
