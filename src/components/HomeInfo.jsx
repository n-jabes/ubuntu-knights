import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';
import NavigationGuide from './NavigationGuide';

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box w-4/6 md:w-1/3">
    <p className="font-medium text-sm text-center">{text} </p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <>
      <h1 className="sm:text-md sm:leading-snug text-center neo-brutalism-blue py-3 md:py-4 text-white px-5">
        Hi, we are the <span className="font-semibold">UBUNTU KNIGHTS</span> 👋🏾{' '}
        <br /> A think tank in the Sept24 intake, Cohort10
      </h1>
      <NavigationGuide/>
    </>
  ),
  2: (
    <InfoBox
      text="From different backgrounds to a great team with a shared mission"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="We involved in activities/E-Lab challenges which helped us make impact in our communities"
      link="/challenges"
      btnText="View portfolio"
    />
  ),
  4: (
    <InfoBox
      text="You got feedback for us or wanna keep in touch?"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
