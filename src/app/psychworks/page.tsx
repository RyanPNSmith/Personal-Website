import Link from 'next/link';
import Image from 'next/image';
import NavBar from '../../components/NavBar';

export default function PsychWorksProject() {
  return (
    <>
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

            <h2 className="text-3xl font-semibold text-[#5a4d7a] mb-6 mt-12">Deployment & Reliability</h2>
            <p className="text-xl text-black/80 mb-6">
              The application is hosted on Vercel, providing scalable, low-maintenance deployment. We implemented automated deployment pipelines integrated with GitHub for rapid feature deployment and bug fixes. The system includes autosave features, audit logs, and safeguards against data loss, ensuring stability and reliability during peak usage.
            </p>

            <div className="mb-8">
              <div className="w-full aspect-[16/9] bg-black/10 rounded-lg flex items-center justify-center">
                <span className="text-black/40 text-lg">[Project screenshots coming soon]</span>
              </div>
            </div>

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
              If you'd like to learn more about this project or see the code, please contact me directly or check out: https://seniordesign.cs.tcu.edu/
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 