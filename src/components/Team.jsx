import React from 'react';

// Import team member images
import { jabes, naillah, owen, evans, denzel } from '../assets/images';

import { twitter, linkedin, github } from '../assets/icons';

// Team member data
const teamMembers = [
  {
    name: 'Nshuti Jabes',
    role: 'Team Lead',
    imgSrc: jabes,
    description:
      'I bring our team’s ideas together, making sure we’re aligned and working toward the best solutions for job creation through arts, culture, and design.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/jabes',
      twitter: 'https://twitter.com/jabes',
      github: 'https://github.com/n-jabes',
    },
  },
  {
    name: 'Ineza Naillah',
    role: 'Operations Coordinator',
    imgSrc: naillah,
    description:
      'I organize our findings and structure them into clear, meaningful presentations and reports for our final deliverables.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/naillah',
      twitter: 'https://twitter.com/naillah',
      github: 'https://github.com/naillah',
    },
  },
  {
    name: 'Ally Denzel',
    role: 'Lead Researcher',
    imgSrc: denzel,
    description:
      'I gather and analyze data to back up our strategies, ensuring we make informed decisions based on facts and trends.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/denzel',
      twitter: 'https://twitter.com/denzel',
      github: 'https://github.com/denzel',
    },
  },
  {
    name: 'Evans Ndahiro',
    role: 'Creative Director',
    imgSrc: evans,
    description:
      'I design the visuals and presentations, ensuring our ideas are creatively expressed and resonate with our audience.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/evans',
      twitter: 'https://twitter.com/evans',
      github: 'https://github.com/evans',
    },
  },
  {
    name: 'Owen Muhoozi',
    role: 'Innovation Lead',
    imgSrc: owen,
    description:
      'I am te idea generator, always pushing for new, creative',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/owen',
      twitter: 'https://twitter.com/owen',
      github: 'https://github.com/owen',
    },
  },
];

const Team = () => {
  return (
    <section className="flex flex-col items-center min-h-screen font-poppins">
      <div className="title text-center py-10">
        <h4 className="text-2xl font-poppins font-semibold">Meet Our Team</h4>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group w-72 h-96 bg-gradient-to-r from-purple-700 to-purple-500 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all ease-in-out duration-500 hover:cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src={member.imgSrc}
                alt={member.name}
                className="w-full h-full object-cover transform scale-110 transition-all ease-in-out duration-700"
              />
            </div>

            <div className="absolute bottom-0 h-1/3 w-full p-5 bg-white bg-opacity-75 backdrop-blur-md rounded-b-lg transition-all duration-500 ease-in-out group-hover:h-2/3">
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {member.name}
                <br />
                <span className="text-sm font-light">{member.role}</span>
              </h3>

              <div className="flex justify-center gap-5 mt-3">
                <a
                  href={member.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-gray-600 border rounded-full p-2"
                >
                  <img
                    src={linkedin}
                    className="text-gray-500 w-4 h-4 text-2xl"
                  />
                </a>
                <a
                  href={member.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-gray-600 border rounded-full p-2"
                >
                  <img
                    src={twitter}
                    className="text-gray-500 w-4 h-4 text-2xl"
                  />
                </a>
                <a
                  href={member.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:border-gray-600 border rounded-full p-2"
                >
                  <img
                    src={github}
                    className="text-gray-500 w-4 h-4 text-2xl"
                  />
                </a>
              </div>

              <p className="text-sm text-gray-600 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
