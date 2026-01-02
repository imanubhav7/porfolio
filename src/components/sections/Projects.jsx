import React, { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef(null)
  const project1Ref = useRef(null)
  const project2Ref = useRef(null)
  const project3Ref = useRef(null)

  
  
  
  useGSAP(() => {
    const projects = [project1Ref.current,project2Ref.current,project3Ref.current]
  gsap.fromTo(sectionRef.current, 
    {opacity:0},
    {opacity:1, duration:1.5}
  )
   projects.forEach((card,idx) => {
      gsap.fromTo(
        card,
        {
          y:50, opacity:0 
        },
        {
          y:0,
          opacity:1,
          duration:1,
          delay:0.3 * (idx+1),
          scrollTrigger:{
            trigger:card,
            start:'top bottom-=100'
          }
        }
      )
  })
  },[])

  return (
    <section id='project' ref={sectionRef} className='app-showcase'>
      <div className='w-full'>
        <div className='showcaselayout '>

            {/* left  */}
                <div className='first-project-wrapper ' ref={project1Ref}>
                    <div className='image-wrapper'>
                        <img src='/images/Project01.png' alt='CoachAI'/>
                    </div>
                    <div className='space-y-5 mt-5'>
                      <h2 className='text-xl md:text-3xl lg:text-4xl font-bold'>CoachAI - Built to Shape Confidence, Clarity, and Readiness for the Moments That Define Careers</h2>

                      <p className='text-white-50 md:text-xl'>Developed with Next.js and Tailwind CSS, with Gemini API integration, Clerk authentication and Prisma ORM</p>
                    </div>
                </div>

            {/* right  */}
            
            <div className='project-list-wrapper  overflow-hidden'>
                <div className='project '  ref={project2Ref}>
                    <div className='image-wrapper bg-[#ffefdb] p-2'>
                        <img src="/images/project2.png" alt="Cloud Vault" className='xl:rounded-4xl'  />
                    </div>
                    <h2>Cloud Vault</h2>
                </div>
                <div className='project ' ref={project3Ref}>
                    <div className='image-wrapper bg-[#ffefdb]'>
                        <img src="/images/project3.png" alt="EatBuzz" />
                    </div>
                    <h2>Project2</h2>
                </div>

            </div>
           
        </div>

      </div>
    </section>
  )
}

export default Projects
