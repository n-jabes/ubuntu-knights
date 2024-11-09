import React from 'react';
import { challenge, opportunity } from '../assets/images';
import CTA from '../components/CTA';
import Team from '../components/Team';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import DiversityIcon from '@mui/icons-material/Diversity3';
// import EcoIcon from '@mui/icons-material/Eco';

const values = [
  {
    name: 'Collaboration',
    description:
      'We believe in the power of teamwork, working together to amplify our strengths and achieve more collectively than we could alone.',
    icon: <GroupWorkIcon className="text-blue-500" />,
  },
  {
    name: 'Creativity',
    description:
      'We embrace innovative thinking and encourage artistic expression, using the arts to drive meaningful change and inspire fresh perspectives.',
    icon: <LightbulbIcon className="text-blue-500" />,
  },
  {
    name: 'Community Empowerment',
    description:
      'We are dedicated to uplifting communities, creating opportunities through arts, culture, and design that enhance livelihoods and foster resilience.',
    icon: <PeopleIcon className="text-blue-500" />,
  },
  {
    name: 'Integrity',
    description:
      'We uphold honesty and transparency in everything we do, building trust and accountability with our partners, clients, and communities.',
    icon: <CheckCircleIcon className="text-blue-500" />,
  },
  {
    name: 'Excellence',
    description:
      'We strive for the highest standards in our work, constantly seeking to grow and refine our impact on the cultural and creative sectors.',
    icon: <StarIcon className="text-blue-500" />,
  },
  {
    name: 'Inclusivity',
    description:
      'We celebrate diversity and inclusion, ensuring that everyone’s voice is valued and that our efforts benefit all members of society.',
    icon: <DiversityIcon className="text-blue-500" />,
  },
];

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, we are
        <span className="blue-gradient_text font-semibold drop-shadow ml-2">
          Ubuntu Knights
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Ubuntu Knights is a visionary consultancy and community-centered
          organization in Rwanda, committed to creating impactful change and
          reducing unemployment by harnessing the potential of arts, culture,
          and design. We strive to unlock job opportunities and foster
          sustainable economic growth through creative industries, empowering
          communities and shaping a vibrant cultural future.
        </p>
      </div>

      <div className="mt-8 w-full flex flex-col-reverse gap-6 md:gap-0 flex-wrap md:flex-row items-center justify-between">
        <div className="w-full md:w-1/2 bg-blue-500 bg-opacity-5 p-4 rounded-md">
          <h3 className="text-xl font-semibold font-poppins text-blue-400">
            Problem Statement
          </h3>
          <div className="h-[4px] md:block bg-blue-400 w-16 mt-2 rounded-ld"></div>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              The 2024 survey carried out by the National Institute of
              Statistics in Rwanda (NISR), showed that an average of 16.7% of
              Rwandans are unemployed. This is due to different factors which
              include population growth, limited job opportunities and skills
              mismatch.
            </p>
          </div>
        </div>
        <div className="w-full h-[240px] md:w-1/2">
          <img
            className="w-full h-full object-contain"
            src={challenge}
            alt="challenge gif"
          />
        </div>
      </div>

      <div className="my-16 w-full flex flex-col gap-6 md:gap-0 flex-wrap md:flex-row items-center justify-between">
        <div className="w-full h-[240px] md:w-1/2">
          <img
            className="w-full h-full object-contain"
            src={opportunity}
            alt="opportunity gif"
          />
        </div>
        <div className="w-full md:w-1/2 bg-blue-500 bg-opacity-5 p-4 rounded-md">
          <h3 className="text-xl font-semibold font-poppins text-blue-400">
            Our Mission
          </h3>
          <div className="h-[4px] md:block bg-blue-400 w-16 mt-2 rounded-ld"></div>
          <div className="mt-5 flex flex-col gap-3 text-slate-500">
            <p>
              UBUNTU KNIGHTS’ mission is to empower creative individuals by
              driving innovation in arts, culture, and design, creating
              sustainable opportunities that foster economic growth, preserve
              cultural heritage, and spark social transformation. We envision a
              Rwanda where creativity serves as a cornerstone for job creation
              and community development, cultivating a more inclusive, diverse,
              and dynamic economy that thrives on the strength of its people’s
              creative potential.
            </p>
          </div>
        </div>
      </div>

      {/* our values */}
      <div className="title text-center py-10">
        <h4 className="text-2xl font-poppins font-semibold">Our Values</h4>
      </div>

      <div className="flex  items-center justify-evenly flex-wrap my-10 gap-4 font-poppins">
        {values.map((value, index) => (
          <div
            key={index}
            className="w-full md:w-[40%] flex items-start gap-2 cursor-pointer my-2 mb:my-4"
          >
            <div className="bg-blue-100 rounded-full p-2">{value.icon}</div>
            <div>
              <h2 className="text-blue-700/60">{value.name}</h2>
              <p className="text-slate-500 text-xs">{value.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Team />

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
