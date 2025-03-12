import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  return (
    <main className="page">
      <section className="introduction">
        <div className="intro-image">
          <h1>Jiaqi Wu (<b>吴佳麒</b>)</h1>
          <Image 
            src="/images/selfie.jpg" 
            alt="selfie of Jiaqi" 
            width={200} 
            height={200}
          />
          <div className="social-icons">
            <a href="https://github.com/IGiotto12" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/icons/github.png" 
                alt="GitHub"
                width={24}
                height={24}
              />
            </a>
            <a href="https://www.instagram.com/igiotto12" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/icons/instagram.png" 
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="https://act.ucsd.edu/myTritonlink20/display.htm" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/images/icons/ucsd.png" 
                alt="UCSD"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
        <div className="intro-text board">
          <TypewriterText />
        </div>
      </section>

      <section className="project-banner">
        <h2>Projects Gallery</h2>
        <div className="icon"></div>
      </section>
      
      <section className="project-section">
        <div className="project-card">
          <Image 
            src="/images/db.jpeg" 
            alt="Admin Panel Project"
            width={300}
            height={200}
          />
          <h3>Fullstack Admin Panel <span className="badge">New!</span></h3>
          <p>A modern fullstack system using Next.js, Prisma, and PostgreSQL, featuring authentication and API routes for secure data management.</p>
          <a href="https://github.com/IGiotto12/admin_panel" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="project-card">
          <Image 
            src="/images/notion.png" 
            alt="Notion"
            width={300}
            height={200}
          />
          <h3>Student Dashboard</h3>
          <p>A Template for school stuff management</p>
          <a href="https://www.notion.so/Time-Regression-45d01a85b2e142c2a6c36a83345cd59a?pvs=4" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="project-card">
          <Image 
            src="/images/some1.gif" 
            alt="cssalogo"
            width={300}
            height={200}
          />
          <h3>CSSA App</h3>
          <p>App development for UCSD CSSA</p>
          <a href="https://github.com/IGiotto12/ucsdcssa-app-frontend" target="_blank" rel="noopener noreferrer">Learn More</a>
        </div>

        <div className="project-card">
          <Image 
            src="/images/agential.png" 
            alt="Agential Project Pic"
            width={300}
            height={200}
          />
          <h3>Agential</h3>
          <p>The encyclopedia of popular LLM-based agents prompting and fine-tuning methods.</p>
          <a href="https://agential.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Archieved</a>
        </div>
      </section>
    </main>
  );
}
