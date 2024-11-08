import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

import { projects, socialLinks, experiences, skills } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hello, we are
        <span className="blue-gradient_text font-semibold drop-shadow ml-2">
          Ubuntu Knights
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          non ab, totam odio quis mollitia debitis eaque, aliquid esse obcaecati
          neque voluptas quasi quisquam at! Vitae labore amet alias asperiores.
        </p>
      </div>

      <div className="py-10">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            non ab, totam odio quis mollitia debitis eaque, aliquid esse
            obcaecati neque voluptas quasi quisquam at! Vitae labore amet alias
            asperiores.
          </p>
        </div>
      </div>

      {/* <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">Our Values</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl"></div>
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* our values */}
      <div className="flex flex-wrap my-10 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-black rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div
                className="mt-5 flex items-centergap-2
              font-poppins"
              >
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
