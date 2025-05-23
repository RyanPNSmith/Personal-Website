'use client';
import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/NavBar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Analytics } from "@vercel/analytics/next";

export default function PsychWorksProject() {
  return (
    <>
      <Analytics />
      <NavBar fromColor="rgba(137, 123, 174, 0.7)" toColor="rgba(255, 255, 255, 0.7)" textColor="black" />
      <div className="min-h-screen bg-gradient-to-b from-[#897bae] to-white text-black py-20 px-4 pt-32">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#5a4d7a] hover:underline text-base mb-8 inline-block">&larr; Back to Home</Link>
          
          <h1 className="text-5xl font-bold mb-6 text-[#5a4d7a]">PsychWorks Report Generation Tool</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-black/80 mb-8">
              PsychWorks is a custom-built report generation system created in collaboration with Fort Worth PsychWorks, a neuropsychological assessment clinic. The system was designed to address inefficiencies in their existing workflow, which required psychologists to manually fill out assessment tables, transcribe scores, and write narrative summaries for each patient. This process was not only time-consuming but also prone to inconsistency and redundant effort.
            </p>

            <p className="text-xl text-black/80 mb-8">
              The platform automates this workflow by allowing clinicians to build and manage assessment templates, input scores, and instantly generate professional-grade reports that incorporate pre-written narratives tied to the data. PsychWorks saves time, improves accuracy, and ensures consistency across reports while keeping everything compliant with privacy requirements.
            </p>

            <div className="flex flex-col items-center my-12">
              <Image
                src="/PsychWorks/PsychworkPoster.jpg"
                alt="Presenting PsychWorks at the TCU Senior Research Symposium"
                width={700}
                height={470}
                className="rounded-lg border border-black/10 shadow-md bg-black/5"
                priority
              />
              <span className="text-black/60 text-base mt-2 text-center">Presenting PsychWorks at the TCU Senior Research Symposium</span>
            </div>

            <h2 className="text-3xl font-semibold text-[#5a4d7a] mb-6 mt-12">Technical Overview</h2>
            <p className="text-xl text-black/80 mb-6">
              PsychWorks was developed using modern web technologies. The frontend is built with React using the Next.js framework and styled with TailwindCSS. We used TypeScript for static typing and reliability, and Supabase for user authentication and cloud-hosted PostgreSQL storage. The application was deployed using Vercel, which allowed for seamless CI/CD integration through GitHub.
            </p>

            <div className="flex flex-col items-center mb-8">
              <Image
                src="/TechStack.png"
                alt="PsychWorks Technical Stack Diagram"
                width={350}
                height={350}
                className="rounded-lg border border-black/10 shadow-md bg-black/5"
                priority
              />
              <span className="text-black/60 text-base mt-2">System architecture and technology stack for PsychWorks</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black/5 p-4 rounded-lg">
                <h3 className="text-[#5a4d7a] text-xl font-semibold mb-3">Frontend</h3>
                <ul className="list-disc list-inside text-black/80 text-lg">
                  <li>Next.js</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              <div className="bg-black/5 p-4 rounded-lg">
                <h3 className="text-[#5a4d7a] text-xl font-semibold mb-3">Backend</h3>
                <ul className="list-disc list-inside text-black/80 text-lg">
                  <li>Supabase</li>
                  <li>PostgreSQL</li>
                  <li>Authentication</li>
                  <li>Role-based Access</li>
                </ul>
              </div>
              <div className="bg-black/5 p-4 rounded-lg">
                <h3 className="text-[#5a4d7a] text-xl font-semibold mb-3">Deployment</h3>
                <ul className="list-disc list-inside text-black/80 text-lg">
                  <li>Vercel</li>
                  <li>GitHub CI/CD</li>
                  <li>Automated Deployments</li>
                  <li>Environment Management</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-[#5a4d7a] mb-6 mt-12">Key Functionality</h2>
            <div className="space-y-6 mb-8">
              <div className="bg-black/5 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#5a4d7a] mb-4">Template Management</h3>
                <p className="text-xl text-black/80">
                  Psychologists can build and manage assessment templates, selecting areas of measurement, test types, and narrative options. These templates can be reused for different patients, ensuring consistency across reports.
                </p>
              </div>
              <div className="bg-black/5 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#5a4d7a] mb-4">Real-time Report Generation</h3>
                <p className="text-xl text-black/80">
                  The system automatically generates appropriate narrative summaries as scores are entered, with a live preview that updates instantly. Reports can be downloaded in DOCX format for recordkeeping.
                </p>
              </div>
              <div className="bg-black/5 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#5a4d7a] mb-4">Security & Compliance</h3>
                <p className="text-xl text-black/80">
                  Built-in security features include automatic session timeouts, role-based access control, and audit logging. The system maintains compliance with privacy requirements while ensuring data security.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-[#5a4d7a] mb-6 mt-12">System Walkthrough</h2>
            
            <div className="video-swiper-container">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="video-swiper"
              >
                <SwiperSlide>
                  <div className="bg-black/5 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-[#5a4d7a] mb-4">Assessment Creation</h3>
                    <p className="text-xl text-black/80 mb-4">
                      This video demonstrates how clinicians can create new assessment table templates, selecting between behavioral or cognitive test types. The process includes defining domains/subtests, score types (StS, ScS, T, Z), and percentile graphing fields. Each assessment template can be customized with unique names, descriptions, and measurement criteria while ensuring compliance with psychiatric guidelines.
                    </p>
                    <div className="w-full aspect-video bg-black/10 rounded-lg overflow-hidden">
                      <video 
                        controls 
                        className="w-full h-full object-cover"
                        poster="/PsychWorks/PsychWorksSlide.png"
                      >
                        <source src="/PsychWorks/PsychWorks-AssessmentCreation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-black/5 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-[#5a4d7a] mb-4">Template Creation</h3>
                    <p className="text-xl text-black/80 mb-4">
                      Watch how clinicians can build comprehensive report templates by combining multiple assessment table templates. The video shows the process of creating a new report template, including naming conventions, adding assessment tables, and structuring the final report format. This feature ensures consistency across all clinical reports while maintaining flexibility for different assessment types.
                    </p>
                    <div className="w-full aspect-video bg-black/10 rounded-lg overflow-hidden">
                      <video 
                        controls 
                        className="w-full h-full object-cover"
                        poster="/PsychWorks/PsychWorksSlide.png"
                      >
                        <source src="/PsychWorks/PsychWorks-ReportTemplateCreation.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="bg-black/5 p-6 rounded-lg">
                    <h3 className="text-2xl font-semibold text-[#5a4d7a] mb-4">Report Generation</h3>
                    <p className="text-xl text-black/80 mb-4">
                      This video showcases the automated report generation process, where the system calculates percentiles based on input scores and generates professional-grade reports. The demonstration includes data validation, automatic narrative generation through intelligent text substitution from assessment tables, and the ability to review and edit reports before finalizing. The system ensures HIPAA compliance while providing a streamlined workflow for clinicians. Note: Due to patient confidentiality and company ownership of the reports, the final output is not shown in this demonstration.
                    </p>
                    <div className="w-full aspect-video bg-black/10 rounded-lg overflow-hidden">
                      <video 
                        controls 
                        className="w-full h-full object-cover"
                        poster="/PsychWorks/PsychWorksSlide.png"
                      >
                        <source src="/PsychWorks/PsychWorks-ReportGen.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <h2 className="text-3xl font-semibold text-[#5a4d7a] mb-6 mt-12">Deployment & Reliability</h2>
            <p className="text-xl text-black/80 mb-6">
              The application is hosted on Vercel, providing scalable, low-maintenance deployment. We implemented automated deployment pipelines integrated with GitHub for rapid feature deployment and bug fixes. The system includes autosave features, audit logs, and safeguards against data loss, ensuring stability and reliability during peak usage.
            </p>

            <div className="bg-black/5 p-6 rounded-lg mt-12">
              <h2 className="text-3xl font-semibold text-[#5a4d7a] mb-6">Project Impact</h2>
              <ul className="list-disc list-inside text-black/80 space-y-3 text-xl">
                <li>Significantly reduced report generation time</li>
                <li>Improved consistency across all clinical reports</li>
                <li>Enhanced data security and privacy compliance</li>
                <li>Streamlined workflow for clinicians</li>
                <li>Reduced manual data entry errors</li>
              </ul>
            </div>

            <p className="text-xl text-black/70 mt-12">
              If you'd like to learn more about this project or see the code, please contact me directly or check out the link below.
            </p>
          </div>
          <div className="flex flex-col items-center my-12">
              <a
                href="https://seniordesign.cs.tcu.edu/2425Psychworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5a4d7a] text-lg font-semibold underline hover:text-[#897bae] transition-colors mt-8"
              >
                View the PsychWorks Project on the TCU Senior Design Website
              </a>
            </div>
        </div>
      </div>

      <style jsx global>{`
        .video-swiper-container {
          width: 100%;
          padding: 40px 10px 10px;
          overflow: visible !important;
          position: relative;
          z-index: 1;
        }
        
        .video-swiper {
          width: 100%;
          padding: 30px 0;
          overflow: visible;
          position: relative;
          z-index: 1;
        }
        
        .video-swiper .swiper-slide {
          width: 100%;
          height: auto;
          transition: all 700ms ease;
          filter: brightness(0.8) blur(0px);
          transform: scale(0.85);
          opacity: 0.7;
          border: 1px solid rgba(90, 77, 122, 0.2);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
          background: linear-gradient(rgba(32, 49, 63, 0), rgba(32, 49, 63, 0));
          position: relative;
          overflow: hidden;
          border-radius: 1rem;
        }
        
        .video-swiper .swiper-slide-active {
          filter: brightness(1) blur(0px);
          transform: scale(1);
          opacity: 1;
          z-index: 10;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 0px solid rgba(255, 255, 255, 0);
          background: linear-gradient(rgba(137, 123, 174, 0.7), rgba(255, 255, 255, 0.7));
          overflow: hidden;
          border-radius: 1rem;
        }

        .video-swiper .swiper-slide-prev,
        .video-swiper .swiper-slide-next {
          opacity: 0.8;
          filter: brightness(0.9) blur(0px);
          z-index: 5;
        }
        
        .video-swiper .swiper-button-next,
        .video-swiper .swiper-button-prev {
          color: rgba(90, 77, 122, 0.9) !important;
          background: rgba(137, 123, 174, 0.7);
          width: 40px !important;
          height: 40px !important;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          border: 1px solid rgba(90, 77, 122, 0.3);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          z-index: 20;
        }

        .video-swiper .swiper-button-prev {
          left: -50px;
        }

        .video-swiper .swiper-button-next {
          right: -50px;
        }
        
        .video-swiper .swiper-button-next:after,
        .video-swiper .swiper-button-prev:after {
          font-size: 18px !important;
        }
        
        .video-swiper .swiper-pagination-bullet {
          background: rgba(90, 77, 122, 0.7);
          opacity: 0.5;
        }
        
        .video-swiper .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.3);
          background: rgba(90, 77, 122, 1);
        }

        @media (max-width: 640px) {
          .video-swiper-container {
            padding: 40px 40px 60px;
          }

          .video-swiper .swiper-button-next,
          .video-swiper .swiper-button-prev {
            width: 30px !important;
            height: 30px !important;
          }

          .video-swiper .swiper-button-prev {
            left: -10px;
          }

          .video-swiper .swiper-button-next {
            right: -10px;
          }
          
          .video-swiper .swiper-pagination {
            bottom: 0px !important;
          }
        }
      `}</style>
    </>
  );
} 