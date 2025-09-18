import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt'
import picture from '../../assets/Me.jpg'

function About() {
  return (
    <section
      id='about'
      className='py-4 px-[5vw] md:px-[7vw] lg:px-[12vw] font-sans mt-8 md:mt-[64px]'
    >
      <div className='flex flex-col-reverse md:flex-row items-center gap-x-8'>
        {/* Left side */}
        <div className='md:w-5/12 text-center md:text-left mt-8 md:mt-0'>
          <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Arijit Adhikari
          </h2>
          <h3 className="text-xl sm:text-xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            I am a{' '}
            <span className='text-[#8245ec]'>
              <Typewriter
                words={['FullStack Developer', 'Problem Solver']}
                loop={0}
                cursorRender={(cursor) => (
                  <span className='text-[#8245ec]'>{cursor}</span>
                )}
                cursorStyle='|'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a full-stack developer building scalable web applications.
            Skilled in both front-end and back-end development, I specialize
            in the MERN stack and other modern technologies to create seamless
            user experiences and efficient solutions.
          </p>

          <a
            href="https://drive.google.com/file/d/1XVD-8zvoz2LpGaJvoIoTvQW7LQxkvu6j/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            View My Resume
          </a>
        </div>

        {/* Right side */}
        <div className='md:w-5/12 flex justify-center md:justify-end'>
          <Tilt
            className="relative z-0 w-40 h-40 sm:w-56 sm:h-56 md:w-[22rem] md:h-[22rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={picture}
              alt="Arijit Adhikari"
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  )
}

export default About
