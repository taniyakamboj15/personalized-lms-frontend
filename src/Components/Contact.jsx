import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import FeedbackForm from "./FeedBackForm";
import { useSelector } from "react-redux";
const Contact = () => {
  const isLoggedIn = useSelector((state) => state.user?.isLoggedIn);
  return (
    <section className='min-h-screen py-14 px-6 sm:px-10 md:px-20 bg-gradient-to-br  from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800'>
      <div className='max-w-6xl mx-auto'>
        <motion.h2
          className='text-4xl sm:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h2>

        <motion.p
          className='text-center text-gray-700 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          We'd love to hear from you! Reach out to us through the details below
          or visit our office.
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-start'>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              glareEnable={true}
              glareMaxOpacity={0.3}
              glareColor='#ffffff'
              glarePosition='bottom'
              scale={1.02}
              transitionSpeed={400}
              className='bg-white dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 shadow-2xl'
            >
              <h3 className='text-2xl font-semibold text-indigo-700 mb-6'>
                Contact Details
              </h3>
              <ul className='space-y-4 text-gray-800 dark:text-gray-300'>
                <li>
                  <strong>📍 Company:</strong> Eduvibe Technologies Pvt. Ltd.
                </li>
                <li>
                  <strong>📞 Phone:</strong> +91 98765 XXXXX
                </li>
                <li>
                  <strong>✉️ Email:</strong> contact@eduvibe.in
                </li>
                <li>
                  <strong>🕐 Timings:</strong> Mon - Fri, 9:00 AM - 6:00 PM
                </li>
              </ul>
            </Tilt>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor='#ffffff'
              glarePosition='bottom'
              scale={1.01}
              transitionSpeed={400}
              className='rounded-2xl overflow-hidden shadow-2xl border border-gray-200'
            >
              <h3 className='text-xl font-semibold text-indigo-700 px-4 py-2 bg-white drak:bg-gray-600 border-b border-gray-200'>
                📍 Locate Us
              </h3>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7238.908028023683!2d77.99610599403873!3d30.27109364445088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1744365051984!5m2!1sen!2sin'
                width='100%'
                height='350'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Eduvibe Location'
              ></iframe>
            </Tilt>
          </motion.div>
        </div>
        {isLoggedIn && (
          <div className=''>
            <FeedbackForm />
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
