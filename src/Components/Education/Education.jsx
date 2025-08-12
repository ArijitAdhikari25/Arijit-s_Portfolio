import React from 'react'
import { education } from '../../constants'

function Education() {
  return (
    <section
      id="education"
      className="py-24  px-[5vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative">
        {/* Desktop vertical line (center) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[3px] bg-white top-0 bottom-0 hidden sm:block"></div>

        {/* Mobile vertical line (left) */}
        <div className="absolute left-8 w-[3px] bg-purple-500 top-0 bottom-0 sm:hidden"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`mb-12 flex flex-col sm:flex-row items-center w-full ${
              index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'
            }`}
          >
            {/* Mobile layout */}
            <div className="flex sm:hidden items-start gap-4 relative">
              {/* Timeline Dot */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-white border-4 border-[#8245ec] w-12 h-12 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 p-3 rounded-xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]">
                <h3 className="text-base font-semibold text-white">{edu.degree}</h3>
                <h4 className="text-sm text-gray-300">{edu.school}</h4>
                <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                <p className="mt-2 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400 text-sm">{edu.desc}</p>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden sm:flex sm:w-1/2"></div>
            <div className="hidden sm:flex justify-center items-center z-10 mb-6 sm:mb-0">
              <div className="bg-white border-4 border-[#8245ec] w-14 h-14 rounded-full overflow-hidden flex justify-center items-center shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/2 p-5 rounded-xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:scale-[1.02] transition-transform duration-300">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {edu.degree}
              </h3>
              <h4 className="text-sm text-gray-300">{edu.school}</h4>
              <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
              <p className="mt-3 text-gray-400 font-bold">Grade: {edu.grade}</p>
              <p className="mt-3 text-gray-400 text-sm">{edu.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
