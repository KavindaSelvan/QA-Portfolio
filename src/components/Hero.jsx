import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { heroContent, socialLinks } from "../data/portfolioData";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (

    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-[#ff2a2a]"
    >

      {/* ==========================================
          FLOATING SOCIAL MEDIA ICONS
      ========================================== */}

      <div
  className="
    hidden lg:flex
    flex-col
    items-center
    gap-6
    fixed left-6 top-1/2
    -translate-y-1/2
    z-40
  "
>
  {/* GitHub */}
  <a
    href={socialLinks.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white transition-all duration-300 hover:scale-125"
    aria-label="GitHub"
  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  </a>

  {/* LinkedIn */}
  <a
    href={socialLinks.linkedin}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white transition-all duration-300 hover:scale-125"
    aria-label="LinkedIn"
  >
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  </a>
</div>


      {/* ==========================================
          MAIN HERO CONTENT
      ========================================== */}

      <div
        className="
          relative z-20
          w-full max-w-7xl mx-auto
          px-5 sm:px-8 lg:px-12
          pt-28 pb-28
          md:pt-32 md:pb-32
          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-12 lg:gap-8
        "
      >


        {/* ==========================================
            LEFT SIDE - TEXT CONTENT
        ========================================== */}

        <div
          className="
            flex flex-col
            items-start text-left
            w-full lg:w-1/2
            max-w-xl
          "
        >


          {/* Mobile Social Icons */}

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-5 mb-6 lg:hidden"
          >

            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
              aria-label="GitHub"
            >

              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />

              </svg>

            </a>


            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#0a66c2] shadow-lg ring-2 ring-white/80"
              aria-label="LinkedIn"
            >

              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />

              </svg>

            </a>

          </div>



          {/* ==========================================
              MAIN HEADING
          ========================================== */}

          <h1
            data-aos="fade-up"
            className="
              text-white
              text-4xl
              sm:text-5xl
              md:text-6xl
              xl:text-7xl
              font-black
              mb-6
              tracking-tight
              leading-[1.1]
              drop-shadow-2xl
            "
          >

            {heroContent.greeting},

            <br />

            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white
                to-gray-300
              "
            >

              {heroContent.titleHighlight}

            </span>

          </h1>



          {/* ==========================================
              SUBHEADING
          ========================================== */}

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="
              text-white
              text-base
              sm:text-lg
              md:text-xl
              font-semibold
              mb-10
              max-w-lg
              leading-relaxed
              drop-shadow-lg
            "
          >

            {heroContent.subtitle}

          </p>



          {/* ==========================================
              BUTTONS
          ========================================== */}

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="
              flex flex-col
              sm:flex-row
              flex-wrap
              items-stretch
              sm:items-center
              gap-4
              w-full
            "
          >


            {/* View Experience Button */}

            <a
              href={heroContent.ctaPrimary.href}
              className="
                px-7 py-4
                rounded-full
                bg-white
                text-black
                font-bold
                text-sm sm:text-base
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:bg-gray-100
                hover:scale-105
              "
            >

              {heroContent.ctaPrimary.text}

            </a>



            {/* Contact Button */}

            <a
              href={heroContent.ctaSecondary.href}
              className="
                px-7 py-4
                rounded-full
                bg-white/10
                border-2 border-white
                text-white
                font-bold
                text-sm sm:text-base
                text-center
                backdrop-blur-md
                shadow-lg
                transition-all
                duration-300
                hover:bg-white/20
                hover:scale-105
              "
            >

              {heroContent.ctaSecondary.text}

            </a>



            {/* Download Resume Button */}

            <a
              href="/QA-CV.pdf"
              download="QA-CV.pdf"
              className="
                px-7 py-4
                rounded-full
                bg-white/10
                border-2 border-white
                text-white
                font-bold
                text-sm sm:text-base
                backdrop-blur-md
                inline-flex
                items-center
                justify-center
                gap-3
                shadow-lg
                transition-all
                duration-300
                hover:bg-white/20
                hover:scale-105
              "
            >

              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14"
                />

              </svg>

              Download Resume

            </a>

          </div>

        </div>



        {/* ==========================================
            RIGHT SIDE - RESPONSIVE PROFILE IMAGE
        ========================================== */}

        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="
            w-full
            lg:w-1/2
            flex
            justify-center
            items-center
            mt-8 lg:mt-0
          "
        >


          {/* Responsive Image Wrapper */}

          <div
            className="
              relative
              w-full
              max-w-[320px]
              sm:max-w-[380px]
              md:max-w-[420px]
              lg:max-w-[440px]
              xl:max-w-[480px]
              aspect-[3/4]
            "
          >


            {/* Black Outer Frame */}

            <div
              className="
                w-full h-full
                bg-black
                p-3 sm:p-4
                rounded-[35px]
                shadow-[0_20px_60px_rgba(0,0,0,0.38)]
              "
            >


              {/* Image Container */}

              <div
                className="
                  w-full h-full
                  overflow-hidden
                  rounded-[25px]
                  bg-black
                "
              >


                {/* Profile Image */}

                <img
                  src="/portfolio_image.png"
                  alt="Kavinda Selvan - QA Engineer"
                  className="
                    block
                    w-full h-full
                    object-cover
                    object-center
                    transition-transform
                    duration-500
                    hover:scale-105
                  "
                />


              </div>

            </div>

          </div>

        </div>

      </div>



      {/* ==========================================
          SCROLL INDICATOR
      ========================================== */}

      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="
          hidden lg:block
          absolute
          bottom-24
          left-1/2
          -translate-x-1/2
          z-20
          pointer-events-none
        "
      >

        <div className="animate-bounce">

          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            viewBox="0 0 24 24"
          >

            <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />

          </svg>

        </div>

      </div>



      {/* ==========================================
          WHITE WAVE DIVIDER
      ========================================== */}

      <div
        className="
          absolute
          bottom-0 left-0
          w-full
          pointer-events-none
          z-30
        "
      >

        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24 fill-white"
        >

          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"
          />

        </svg>

      </div>

    </section>

  );

};

export default Hero;