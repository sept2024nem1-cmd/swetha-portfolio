import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import SectionTitle from './components/SectionTitle';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Data from PDF ---
  const personalInfo = {
    name: "Swetha Ravi",
    title: "Software Test Engineer",
    tagline: "Quality Assurance Enthusiast | Agile Advocate | Automation Innovator",
    email: "swetharavijanarthanan1995@gmail.com",
    phone: "+91-8148021409",
    location: "Chennai, Tamil Nadu",
    linkedin: "https://www.linkedin.com/in/swetha-ravi-603571162",
    // Optional: set to a valid URL to display your real photo
    profileImage: "https://i.imgur.com/D3yM2gq.jpeg"
  };

  const professionalSummary = `
    QA engineer with experience in manual, mobile, and integration testing.
    Skilled in Agile processes, defect management, and tools like JIRA, Selenium, and Postman.
    Proven ability to deliver high-quality releases across domains including banking, robotics,
    education, and networking devices.
    Passionate about continuous learning and staying current with industry trends and tools.
  `;

  const coreSkills = [
    { category: "Testing Types", skills: ["Functional", "UAT", "System", "Integration", "Regression", "Mobile Testing"] },
    { category: "Tools", skills: ["JIRA", "Postman", "TestRail", "HP ALM", "Selenium", "JMeter"] },
    { category: "Methodologies", skills: ["Agile", "Scrum"] },
    { category: "Platforms", skills: ["BrowserStack", "Sauce Labs"] },
    { category: "Languages & Frameworks", skills: ["Basic Selenium", "API Testing (Postman)"] }
  ];

  const experience = [
    {
      company: "Teamware Solutions",
      role: "Software Test Engineer",
      period: "Feb 2022 - Dec 2022",
      client: "TCS - Bank of Montreal",
      description: "Tested banking BMO web applications for deposit and lending account functionalities. Performed smoke testing, bug reporting, agile ceremonies, API automation, test case design, UAT, regression, integration and functional testing. Conducted functional testing involving complex calculations in an Agile environment.",
      achievements: ["Led API automation efforts", "Improved defect detection in core modules"]
    },
    {
      company: "Presidio Solutions Pvt. Ltd",
      role: "Software Test Engineer",
      period: "July 2021 - Jan 2022",
      project: "P2P, Wisecut",
      description: "Conducted functional and mobile testing for a multi-tenancy job portal. Focused on cross-platform testing and usability, smoke and sanity testing.",
      achievements: ["Enhanced cross-platform compatibility", "Reduced pre-launch bugs by 30%"]
    },
    {
      company: "Amazon",
      role: "Software Test Engineer",
      period: "Jan 2019 - Jun 2021",
      project: "Astro",
      description: "Involved in device-level testing, annotations (Bbb, Fbb, Hkd, Hoe). Validated integration of hardware and software ensuring robotic performance. Led testing processes that included segmenting and annotating angles to ensure the robot's optimal performance. Applied System Integration Testing (SIT) expertise to validate seamless interaction between hardware components and software features.",
      achievements: ["Validated hardware-software synergy", "Ensured optimal robotic performance"]
    },
    {
      company: "CGI",
      role: "QA Analyst",
      period: "Oct 2016 - Apr 2018",
      client: "British Council",
      description: "Tested a learning platform application with varied user roles with permission access. Executed UAT and web application testing, identifying key usability bugs.",
      achievements: ["Above & Beyond Award", "Improved user role testing"]
    },
    {
      company: "Movate (formerly CSS Corp)",
      role: "Support Test Engineer",
      period: "Oct 2016 - Apr 2018",
      clients: "Netgear, Roku, Arlo cameras",
      description: "Delivered technical support for streaming and security devices. Specialized in troubleshooting networking hardware and application support.",
      achievements: ["Above & Beyond Award", "Enhanced device support quality"]
    }
  ];

  const certifications = [
    { name: "Manual Testing", provider: "Udemy" },
    { name: "API & Performance Testing", provider: "Udemy" }
  ];

  const education = [
    {
      degree: "B.Tech - Information Technology",
      institution: "Dhanalakshmi College of Engineering, Anna University",
      period: "2012-2016",
      grade: "75%"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Doveton Girls Higher Secondary School, Vepery, Chennai",
      period: "2012",
      grade: "80%"
    }
  ];

  const achievementsList = [
    "Above & Beyond Award - CGI and Movate",
    "Spot Award - Presidio",
    "BEC Certification - University of Cambridge",
    "Published research paper on 'Dynamic Open Flow Controlled Optical Packet Switching (OPS) Network'",
    "Actively upskilled through real-time projects and certifications"
  ];
  // --- End of Data ---

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navigation
        activeSection={activeSection}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
        scrollToSection={scrollToSection}
        personalInfo={personalInfo}
      />
      <HeroSection
        personalInfo={personalInfo}
        scrollToSection={scrollToSection}
      />
      <AboutSection
        professionalSummary={professionalSummary}
        coreSkills={coreSkills}
      />
      <div className="bg-gradient-to-b from-white to-blue-50/60 dark:from-slate-950 dark:to-slate-900">
        <ExperienceSection experience={experience} />
      </div>
      <section id="highlights" className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card gradient-border p-6 text-center">
              <p className="text-3xl font-extrabold text-gray-900">30%+</p>
              <p className="text-gray-700">Pre-release bug prevention</p>
            </div>
            <div className="glass-card gradient-border p-6 text-center">
              <p className="text-3xl font-extrabold text-gray-900">35%</p>
              <p className="text-gray-700">Faster regression cycles</p>
            </div>
            <div className="glass-card gradient-border p-6 text-center">
              <p className="text-3xl font-extrabold text-gray-900">4+ yrs</p>
              <p className="text-gray-700">QA experience across domains</p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-transparent dark:bg-transparent">
        <SkillsSection
          coreSkills={coreSkills}
          certifications={certifications}
        />
      </div>
      <div className="bg-transparent dark:bg-transparent">
        <ProjectsSection experience={experience} />
      </div>
      <section id="case-studies" className="py-16 bg-transparent dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Case Studies" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-rose p-6 hover-scale">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Regression Cycle Optimization</h3>
              <p className="text-gray-700 mb-3">Cut regression execution time by 35% by refining test selection, parallel runs and eliminating duplicate cases.</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Introduced smoke vs. deep suites with CI gating</li>
                <li>Mapped flakiness and removed brittle scenarios</li>
              </ul>
            </div>
            <div className="card-lavender p-6 hover-scale">
              <h3 className="text-xl font-bold text-gray-900 mb-2">API Quality Gate</h3>
              <p className="text-gray-700 mb-3">Improved API reliability with contract checks and negative testing; blocked 20+ breaking changes pre‑release.</p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Added schema validation and error code assertions</li>
                <li>Automated smoke in CI with Postman/Newman</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="tooling" className="py-16 bg-transparent dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Tooling" />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-sky p-6 hover-scale">
              <h4 className="font-semibold mb-2">Test Management</h4>
              <p className="text-gray-700">JIRA, TestRail, HP ALM</p>
            </div>
            <div className="card-rose p-6 hover-scale">
              <h4 className="font-semibold mb-2">Automation & APIs</h4>
              <p className="text-gray-700">Selenium basics, Postman, Newman</p>
            </div>
            <div className="card-mint p-6 hover-scale">
              <h4 className="font-semibold mb-2">Infra</h4>
              <p className="text-gray-700">BrowserStack, GitHub Actions (CI)</p>
            </div>
          </div>
        </div>
      </section>

      <section id="resources" className="py-16 bg-transparent dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Resources" />
          <div className="grid md:grid-cols-3 gap-6">
            <a href="/samples/test-plan.pdf" className="card-lavender p-6 block hover-scale" download>
              <h4 className="font-semibold mb-2">Sample Test Plan</h4>
              <p className="text-gray-700">Concise plan used to align scope, risks and timelines.</p>
            </a>
            <a href="/samples/bug-report.pdf" className="card-sky p-6 block hover-scale" download>
              <h4 className="font-semibold mb-2">Sample Bug Report</h4>
              <p className="text-gray-700">Clear repro steps, evidence and severity mapping.</p>
            </a>
            <a href="/samples/api-collection.json" className="card-mint p-6 block hover-scale" download>
              <h4 className="font-semibold mb-2">Postman Collection</h4>
              <p className="text-gray-700">Smoke API checks for quick CI validation.</p>
            </a>
          </div>
        </div>
      </section>
      <CertificationsSection
        certifications={certifications}
        education={education}
      />
      <AchievementsSection achievementsList={achievementsList} />
      <ContactSection personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
      <ScrollToTopButton scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;
