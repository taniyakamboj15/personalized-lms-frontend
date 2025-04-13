import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.png";
import { features } from "../constants/constant";
import { api } from "../utils/api";
import { useEffect, useMemo, useState } from "react";
import HeroShimmer from "./HeroShimmer";

const HomePage = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        const res = await api.get("feedback");
        setFeedbacks(res.data);
      } catch (err) {
        console.error("Failed to fetch feedback:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  const selectedTestimonials = useMemo(() => {
    const filtered = feedbacks.filter((f) => f.rating > 3);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, [feedbacks]);
  {
    loading ? (
      <HeroShimmer />
    ) : (
      <div className='min-h-screen bg-gradient-to-r from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white transition-colors'>
        {/* Hero Section */}
        <section className='py-20 px-5 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-10'>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className='max-w-xl'
          >
            <h1 className='text-5xl font-bold leading-tight mb-4'>
              Unlock Your Potential
            </h1>
            <p className='text-lg mb-6'>
              Dive into tailored courses, solve engaging questions, and learn at
              your own pace with our smart LMS.
            </p>
            <Link
              to='/courses'
              className='px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition'
            >
              Start Learning
            </Link>
          </motion.div>

          <motion.img
            src={HeroImage}
            alt='LMS Illustration'
            className='w-full max-w-lg'
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
        </section>

        {/* Feature Cards */}
        <section className='py-16 px-5 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-8'>
          {features.map((feature, i) => (
            <Tilt
              key={i}
              glareEnable={true}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className='bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all'
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className=' w-full h-40 mb-4 object-cover'
                />
                <h2 className='text-xl font-semibold mb-2'>{feature.title}</h2>
                <p>{feature.desc}</p>
              </motion.div>
            </Tilt>
          ))}
        </section>

        {/* Stats Section */}
        <motion.section
          className='px-5 lg:px-20 py-14 bg-gray-100 dark:bg-gray-900 text-center'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl font-bold mb-10'>Platform Impact</h2>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 text-xl'>
            <div>
              <span className='text-blue-600 font-bold text-4xl'>20K+</span>
              <p>Learners Enrolled</p>
            </div>
            <div>
              <span className='text-green-600 font-bold text-4xl'>500+</span>
              <p>Courses Completed</p>
            </div>
            <div>
              <span className='text-purple-600 font-bold text-4xl'>4.9/5</span>
              <p>User Rating</p>
            </div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className='py-16 px-5 lg:px-20 bg-white dark:bg-gray-800'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl font-bold mb-10 text-center'>
            What Learners Say
          </h2>
          <div className='grid md:grid-cols-2 gap-10'>
            {selectedTestimonials.map((t, i) => (
              <Tilt key={i} glareEnable tiltMaxAngleX={10} tiltMaxAngleY={10}>
                <div className='bg-gray-50 dark:bg-gray-700 p-6 rounded-xl shadow-md'>
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg'>
                      {t.name[0]}
                    </div>
                    <div>
                      <h4 className='font-semibold text-lg'>{t.name}</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-300'>
                        {t.email}
                      </p>
                    </div>
                  </div>
                  <p className='italic mb-2'>"{t.message}"</p>
                  <div className='flex gap-1'>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>
                        {index < Math.floor(t.rating) ? "⭐" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          className='text-center py-16 px-6 bg-blue-100 dark:bg-blue-900'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className='text-3xl font-bold mb-4'>
            Ready to start your journey?
          </h2>
          <p className='mb-6 text-lg'>
            Join a course and begin transforming your skills today.
          </p>
          <Link
            to='/courses'
            className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition'
          >
            Get Started
          </Link>
        </motion.section>
      </div>
    );
  }
};

export default HomePage;
