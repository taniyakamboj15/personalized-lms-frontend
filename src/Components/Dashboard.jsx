import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { api } from "../utils/api";
import { useSelector } from "react-redux";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Confetti from "react-confetti";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const [level, setLevel] = useState(0);
  const [xp, setXp] = useState(0);
  const [streak, setStreak] = useState(0);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [showConfetti, setShowConfetti] = useState(false);
  const prevLevel = useRef(0);

  const { name } = useSelector((state) => state.user?.user || {});

  useEffect(() => {
    const getSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    getSize();
    window.addEventListener("resize", getSize);

    api.get("user/dashboard").then((res) => {
      const data = res.data;
      setDashboardData(data.dashboard || []);
      setXp(data.xp || 0);
      setStreak(data.streak || 0);
      setLevel(data.level || 0);

      if (data.level > prevLevel.current) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
      }
      prevLevel.current = data.level;
    });

    return () => window.removeEventListener("resize", getSize);
  }, []);

  const percentToNextLevel = xp % 100;

  return (
    <div className='p-6 md:p-10 bg-gradient-to-br from-[#1f2937] to-[#111827] min-h-screen text-white'>
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <div className='flex flex-col md:flex-row justify-between items-center gap-6 mb-10'>
        <motion.div
          className='flex items-center gap-4 bg-gray-800 p-5 rounded-2xl shadow-xl w-full md:w-fit'
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className='w-20 h-20'>
            <CircularProgressbar
              value={percentToNextLevel}
              text={`Lv ${level}`}
              styles={buildStyles({
                textColor: "#fff",
                pathColor: "#4ade80",
                trailColor: "#374151",
                textSize: "22px",
              })}
            />
          </div>
          <div>
            <h1 className='text-2xl font-bold'>
              Welcome back, {name?.split(" ")[0] || "Learner"} 👋
            </h1>
            <p className='text-sm text-gray-300'>
              XP: {xp} • Streak: 🔥 {streak} days
            </p>
          </div>
        </motion.div>

        <motion.div
          className='bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 rounded-xl shadow-lg font-semibold text-lg animate-pulse'
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          🎖️ <span className='text-white'>Level {level}</span>
        </motion.div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {dashboardData.length > 0 ? (
          dashboardData.map((course, idx) => (
            <motion.div
              key={course.courseId}
              className='bg-gray-800 p-5 rounded-2xl shadow-2xl hover:shadow-indigo-500/20 transition-shadow hover:scale-[1.02]'
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <img
                src={course.imageUrl}
                alt={course.title}
                className='w-full h-44 object-cover rounded-xl mb-4 border border-gray-700'
              />
              <h2 className='text-xl font-bold mb-1'>{course.title}</h2>
              <p className='text-sm text-gray-400 mb-2'>
                Difficulty:{" "}
                <span className='capitalize text-indigo-400'>
                  {course.difficulty}
                </span>
              </p>

              <div className='w-full bg-gray-700 h-3 rounded-full overflow-hidden mb-3'>
                <motion.div
                  className='bg-green-400 h-full'
                  style={{ width: `${course.progressPercent}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${course.progressPercent}%` }}
                  transition={{ duration: 1.2 }}
                />
              </div>

              <p className='text-sm text-gray-300'>
                {course.completedCount}/{course.totalTopics} Topics •{" "}
                <span className='capitalize text-green-300'>
                  {course.status}
                </span>
              </p>
            </motion.div>
          ))
        ) : (
          <motion.p
            className='text-center text-gray-300 col-span-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No course progress yet. Enroll to begin your journey!
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
