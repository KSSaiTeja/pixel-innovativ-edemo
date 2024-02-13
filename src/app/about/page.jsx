"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col gap-24 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col justify-center gap-12">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/profile.jpg"
              alt=""
              width={112}
              height={112}
              className="object-cover rounded-full w-28 h-28"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="text-2xl font-bold">About Me.</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              As a dedicated and highly organized 4th year B-Tech Computer
              Science student at Nalla Malla Reddy Engineering College, I am
              eager to secure a challenging position in a professional company
              that allows me to apply and enhance my skills while gaining
              valuable experience.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Empowering progress through passion, precision, and perpetual
              learning.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              {/* sign svg file */}
              <Image src="/sign.svg" alt="signature" width={200} height={40} />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col justify-center gap-12" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-wrap gap-4"
            >
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Canva Designing
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Problem Solving
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Project Management
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Time Management
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                Creative Thinking
              </div>
              <div className="p-2 text-sm text-white bg-black rounded cursor-pointer hover:bg-white hover:text-black">
                MS Office
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col justify-center gap-12 pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    Industrial Training: 220/132 KV Chandrayangutta Substation
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Completed 6-month industrial training at the 220/132 KV
                    Chandrayangutta Substation from June to December 2020.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    June - Dec, 2020
                  </div>
                  {/* JOB COMPANY */}
                </div>
                {/* CENTER */}
                <div className="flex justify-center w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="flex justify-center w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    TCS Ion Career Edge
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Young Professional Program in August 2023. Acquired
                    essential communication, teamwork, and professional
                    development skills to enhance career readiness.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    July - Aug, 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold bg-white rounded-b-lg rounded-s-lg">
                    AWS Academy Graduate{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Received certification of completion for the AWS Academy
                    Graduate program and successfully completed an internship as
                    part of the AICTE - Eduskills Cohort-6{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-sm font-semibold text-red-400">
                    Nov 2023{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="flex justify-center w-1/6">
                  {/* LINE */}
                  <div className="relative w-1 h-full bg-gray-600 rounded">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 bg-white rounded-full ring-4 ring-red-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="sticky top-0 z-30 hidden w-1/3 lg:block xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
