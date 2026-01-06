import React from "react";
import TitleHeader from "../TitleHeader";
import { expCards } from "../../constants";
import { div } from "three/tsl";
import GlowCard from "../GlowCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    

    gsap.to('.timeline',{
      transformOrigin: 'bottom bottom',
      ease: 'power1.inOut',
      scrollTrigger:{
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        onUpdate: (self) => {
          gsap.to('.timeline',{
            scaleY: 1 - self.progress,
          })
        }
      },
    });

      gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
    
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: text,
          start: "top 60%",
        },
      });
    });
  
  }, []);

  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="My Career Overview"
        />
        <div className="relative mt-32">
          {/* Left Card  */}
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, idx) => (
              <div
                key={card.title}
                className="flex flex-col-reverse xl:flex-row xl:gap-20 gap-10 justify-between"
              >
                {/* GlowCard  */}
                <div className="xl:w-2/6 flex justify-center">
                  <GlowCard card={card} idx={idx}>
                    <div>
                      <img className="h-[500px]" src={card.imgOnly} alt={card.title} />
                    </div>
                  </GlowCard>
                </div>
                {/* TimeLine  */}
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="absolute top-0 xl:left-[35.5vw] md:left-10 left-5 h-full flex justify-center">
                      <div className="timeline" />
                      <div className="_gradient-line w-1 h-full" />
                    </div>

                    {/* Experience Map  */}

                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="logo" />
                      </div>
                      <div>
                        <h1 className="text-3xl font-semibold">{card.title}</h1>
                        <p className="my-5 text-white-50">📅 {card.date}</p>
                        <p className="text-[#839cb5] italic text-lg">
                          Responsibilities
                        </p>
                        <ul className="ms-5 mt-5 flex flex-col gap-5 text-white-50 list-disc">
                          {card.responsibilities.map((responsibilities) => (
                            <li key={responsibilities} className="text-lg">
                              {responsibilities}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
