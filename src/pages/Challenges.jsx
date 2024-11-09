import React from 'react';
import CTA from '../components/CTA';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { challenges } from '../constants';
import { Link } from 'react-router-dom';

const Challenges = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        The 6 Challenges of
        <span className="blue-gradient_text font-semibold drop-shadow ml-2">
          E-lab
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          non ab, totam odio quis mollitia debitis eaque, aliquid esse obcaecati
          neque voluptas quasi quisquam at! Vitae labore amet alias asperiores.
        </p>
      </div>

      {/* E-lab challenges */}
      <div className="py-16">
        <div className="mt-12 flex">
          <VerticalTimeline>
            {challenges.map((challenge) => {
              const embedUrl = challenge.link
                ?.replace('youtu.be', 'youtube.com/embed')
                .split('?')[0];

              return (
                <VerticalTimelineElement
                  key={challenge.company_name}
                  date={challenge.date}
                  icon={
                    <div className="flex justify-center items-center w-full h-full">
                      <img
                        src={challenge.icon}
                        alt={challenge.company_name}
                        className="w-[90%] h-[90%] object-contain"
                      />
                    </div>
                  }
                  iconStyle={{ background: challenge.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: challenge.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className="text-black text-xl font-poppins font-semibold">
                      {challenge.title}
                    </h3>
                    <p
                      className="text-black-500 font-medium font-base"
                      style={{ margin: 0 }}
                    >
                      {challenge.company_name}
                    </p>
                  </div>

                  {/* YouTube Video Embed */}
                  {embedUrl && (
                    <div className="my-4 aspect-w-16 aspect-h-9">
                      <iframe
                        src={embedUrl}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-md shadow-lg"
                      ></iframe>
                    </div>
                  )}

                  {challenge.img && (
                    <Link to="/">
                      <div className="w-full h-[200px] rounded-md shadow-lg">
                        <img
                          src={challenge.img}
                          alt="challenge"
                          className="w-full h-full object-cover cursor-pointer"
                        />
                      </div>
                    </Link>
                  )}

                  {/* Description */}
                  <p className="text-black-500/50 font-normal text-sm mt-4">
                    {challenge.description}
                  </p>
                </VerticalTimelineElement>
              );
            })}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default Challenges;
