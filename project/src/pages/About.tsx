import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Award, BookOpen, Briefcase, GraduationCap } from 'lucide-react';
import CtaSection from '../components/sections/CtaSection';
import { images, imageAlts } from '../config/images';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Financial Care';
  }, []);

  const milestones = [
    {
      year: '2004',
      title: 'Qualified as Chartered Accountant',
      description: 'Received certification from the Institute of Chartered Accountants of India.'
    },
    {
      year: '2006',
      title: 'Established Financial Care',
      description: 'Founded Financial Care with a vision to provide comprehensive financial services.'
    },
    {
      year: '2012',
      title: 'Expanded Service Portfolio',
      description: 'Introduced specialized services in GST compliance and corporate filing.'
    },
    {
      year: '2018',
      title: 'Reached 500+ Client Milestone',
      description: 'Successfully served over 1650 clients across various industries.'
    }
  ];

  return (
    <>
      {/* Header Section */}
      <div className="bg-primary py-32">
        <div className="container">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About CA Lalit Kabra
          </motion.h1>
          <motion.div 
            className="h-1 w-20 bg-accent rounded-full"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 80 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>
        </div>
      </div>

      {/* Bio Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <SectionHeading 
                title="Meet The Director" 
                subtitle="CA Lalit Kabra, Director of Financial Care"
              />
              <p className="mb-4 text-neutral-600">
                CA Lalit Kabra is a seasoned Chartered Accountant with over 20 years of experience in providing 
                comprehensive financial services. He specializes in tax planning, business auditing, and financial advisory 
                for individuals and businesses alike.
              </p>
              <p className="mb-4 text-neutral-600">
                Having worked with clients across various industries, CA Lalit Kabra has developed a deep understanding 
                of diverse financial landscapes and challenges. His meticulous approach and commitment to excellence 
                have earned him a reputation for delivering accurate, timely, and value-added services.
              </p>
              <p className="text-neutral-600">
                He believes in building long-term relationships with clients based on trust, transparency, and personalized 
                attention. His mission is to simplify complex financial matters and help clients achieve their financial goals 
                with confidence.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center">
                  <BookOpen className="text-primary mr-2" />
                  <span>Chartered Accountant</span>
                </div>
                <div className="flex items-center">
                  <Briefcase className="text-primary mr-2" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Award className="text-primary mr-2" />
                  <span>Industry Expert</span>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="text-primary mr-2" />
                  <span>ICAI Member</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="bg-background p-4 rounded-lg shadow-lg">
                <img 
                  src={images.team.member1}
                  alt={imageAlts.team.member1}
                  className="w-full h-auto rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/placeholder-team.svg';
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section bg-background">
        <div className="container">
          <SectionHeading 
            title="Our Mission & Values" 
            subtitle="What drives us and shapes our approach"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-neutral-600">
                To provide exceptional financial services that empower our clients to make informed decisions, 
                achieve financial clarity, and realize their goals. We strive to be trusted advisors who deliver 
                value through personalized solutions and unwavering commitment to excellence.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="text-neutral-600 space-y-2">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Integrity:</strong> We uphold the highest ethical standards in all our dealings.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Excellence:</strong> We strive for excellence in every service we provide.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Client-Centric:</strong> Our clients' needs and goals are at the center of our approach.</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-2"></span>
                  <span><strong>Innovation:</strong> We embrace innovative solutions to address complex financial challenges.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline/Milestones */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Our Journey" 
            subtitle="Key milestones in our professional journey"
            center
          />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 rounded-full"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <h4 className="text-xl font-bold text-primary mb-2">{milestone.title}</h4>
                    <p className="text-neutral-600">{milestone.description}</p>
                  </div>

                  {/* Year bubble */}
                  <div className="w-2/12 flex justify-center">
                    <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-lg">
                      {milestone.year}
                    </div>
                  </div>

                  {/* Empty space for alignment */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
};

export default About;