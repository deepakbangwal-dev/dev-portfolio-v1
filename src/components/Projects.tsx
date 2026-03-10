import { useState, useRef, useEffect, useCallback } from 'react'
import './Projects.css'

const MAX_VISIBLE_TAGS = 5

const projects = [
  {
    title: 'Recovery Audit Workbench',
    client: 'A company providing financial audit processing services',
    duration: 'Aug 2023 – Present',
    description:
      'Project involved the analysis of accounts and finance for a business unit, performing internal audits, and checking for duplicate and statement claims. It offered a complete line of recovery audit services to the world\'s largest and most complex companies.',
    details:
      'This project was a state-of-the-art web application with a backend based on Microservices architecture. REST APIs were developed using Spring Boot and Hibernate, while OData URL conventions ensure quick development. Messaging was facilitated through RabbitMQ. It utilized various databases, including SQL, PostgreSQL, and MongoDB. The deployment was simplified with Docker and Kubernetes. On the frontend, Angular 14 powered microapps with Kendo features for enhanced functionality.',
    tech: ['Angular 14', 'Java 17', 'Spring Boot', 'Hibernate', 'Apache Kafka', 'PostgreSQL', 'SQL Server', 'OpenShift', 'Microservices', 'OData', 'Rancher'],
    responsibilities: [
      'Involved in requirement discussion/analysis and development of new features',
      'Participated in fixing and debugging high-priority bugs at BE',
      'Production release management',
      'Wrote unit test cases for the components and services',
      'Responsible for admin tasks such as reviewing the code reviews',
      'Handled the story analysis and estimations',
    ],
    emoji: '🔍',
  },
  {
    title: 'Digital Banking Transformation',
    client: 'A distinguished bank from a Middle Eastern country',
    duration: 'May 2022 – Jun 2023',
    description:
      'Project involved developing a loan disbursal application for digital transformation. The approach utilized Microservices architecture with domain-driven design.',
    details:
      'It was a completely new project that the bank needed to develop, aiming to create a high-performing platform for their end-users. The development started from scratch and involved integrating bank APIs for both existing and new users. The customer application was responsible for loan disbursal, while the broker app was used for adding properties against which customers availed loans and for referring customers.',
    tech: ['Spring Boot', 'Docker', 'Kubernetes', 'OpenShift', 'PostgreSQL', 'Liquibase', 'Kafka', 'Redis', 'Microservices'],
    responsibilities: [
      'Designed and developed product modules and implemented OOP core features',
      'Contributed to development efforts in 2 squads in different projects',
      'Followed a test-driven development approach during the development phase',
      'Involved in the development of the EMI calculator for the loan application',
    ],
    emoji: '🏦',
  },
  {
    title: 'Building Plan Approval Platform',
    client: 'A leading municipal organization in a major metropolitan area in India',
    duration: 'Aug 2021 – Apr 2022',
    description:
      'Project involved working on an online platform to facilitate the issuance of building plan approvals online.',
    details:
      'Features included online registration of Architects/Engineers/Supervisors, online real-time scrutiny of drawings/plans, submission of applications and uploading documents, application processing by the department, and online payment.',
    tech: ['Java', 'J2EE', 'Spring MVC', 'Hibernate', 'Spring Boot', 'PostgreSQL', 'BIRT', 'jQuery', 'JSTL', 'Jenkins'],
    responsibilities: [
      'Designed and developed a dynamic form driven from the database, with all fields, events, and validations being pulled from the database',
      'Created and implemented a REST API for extracting data from AutoCAD files and generating a report',
      'Addressed bug fixes raised by QA',
      'Integrated with an API to send SMS and email notifications',
    ],
    emoji: '🏢',
  },
  {
    title: 'Online Town Planning Approval Platform',
    client: 'A leading municipal organization in a major metropolitan area in India',
    duration: 'Apr 2021 – Aug 2021',
    description:
      'Project involved working on an online platform to facilitate town planners and Architects for approvals of their plans.',
    details:
      'The application comprised registration of town planners/Architects and raising a request for the process/approval of the application. It featured location-based mapping and coordinate display.',
    tech: ['Java', 'J2EE', 'Spring MVC', 'Hibernate', 'Spring Boot', 'PostgreSQL', 'BIRT', 'jQuery', 'JSTL', 'Jenkins', 'OpenStreetMap'],
    responsibilities: [
      'Developed the logic and coding scenario for processing applications',
      'Implemented the draw and display coordinates functionality on the map for locations',
      'Tracked and resolved UAT issues',
    ],
    emoji: '🗺️',
  },
  {
    title: 'Performance Appraisal Reporting Application',
    client: 'A government agency',
    duration: 'Sep 2017 – Mar 2021',
    description:
      'Project involved designing an application to file performance appraisal reports (PAR). The application provided a feature for employees to submit PAR, which was then commented on by reporting and reviewing authorities.',
    details:
      'It was a workflow-based application that required DSC (digital signature certificate)/e-sign for signing the content. It was taken in two phases – physical phase and electronic phase, and the electronic phase was further divided into online and offline concepts.',
    tech: ['Java', 'J2EE', 'Spring MVC', 'Hibernate', 'Spring IoC', 'JSTL', 'Apache Tomcat', 'PostgreSQL', 'JasperReports', 'BIRT', 'jQuery', 'Bootstrap'],
    responsibilities: [
      'Developed modules such as migration, support, force-forward, and dashboard',
      'Tracked development issues and provided UAT support',
      'Performed code management',
      'Addressed production bug fixes',
    ],
    emoji: '📊',
  },
  {
    title: 'Integrated Immovable Property Reporting',
    client: 'A government agency',
    duration: 'Apr 2017 – Sep 2017',
    description:
      'Project involved working on an application that integrated with the performance appraisal system, wherein every employee was required to submit an annual return providing full particulars of their immovable property.',
    details:
      'The application provided a form in which an officer could fill in their immovable property details, or they could upload the relevant documents. It enabled submission through DSC and e-sign. Additionally, it provided a dashboard containing records of the total IPR filled in respective services.',
    tech: ['Java', 'J2EE', 'Spring MVC', 'Hibernate', 'Spring IoC', 'JSTL', 'Apache Tomcat', 'PostgreSQL', 'iReport', 'BIRT', 'jQuery', 'Bootstrap'],
    responsibilities: [
      'Developed modules such as the dashboard and the multi-row addition form',
      'Implemented vulnerability fixes in the application',
    ],
    emoji: '🏠',
  },
  {
    title: 'Employee Information Management System',
    client: 'A government agency',
    duration: 'Oct 2016 – Mar 2017',
    description:
      'Project involved working on a workflow-based system for maintaining employee details including identity, skill sets, contact details, posting, CGHS, nominations, service records, loans, salary, and more.',
    details:
      'It allowed users to enter and update the employee\'s personal data and employment records based on their access and role privileges. It stored all the information required from an employee as per the provisions of the service book.',
    tech: ['Java', 'J2EE', 'Spring MVC', 'Hibernate', 'Spring IoC', 'JSTL', 'Apache Tomcat', 'PostgreSQL', 'JasperReports', 'BIRT', 'jQuery', 'Bootstrap'],
    responsibilities: [
      'Developed modules for posting details and nominations',
      'Created a report for the service book',
      'Resolved bugs raised by QA',
    ],
    emoji: '👤',
  },
  {
    title: 'Asset Management System',
    client: 'A leading global telecommunications company',
    duration: 'Jul 2014 – Sep 2014',
    description:
      'Project involved working on an asset management system that allowed an organization to store, update, and maintain information about assets used at different offices/headquarters.',
    details:
      'The system provided functionality to add, update, and delete information about an asset, either individually or in bulk. Additionally, it allowed users to view reports of assets categorized within the system.',
    tech: ['Java', 'J2EE', 'Apache Tomcat', 'Oracle 10g', 'JSP', 'Servlet'],
    responsibilities: [
      'Designed the basic setup of the project',
      'Prepared the database according to the business logic of the modules',
      'Developed the logic and coding scenarios',
    ],
    emoji: '📦',
  },
]

export default function Projects() {
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const tooltipRef = useRef<HTMLDivElement | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const closeTooltip = useCallback(() => {
    setActiveTooltip(null)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node) &&
        !cardRefs.current.some(ref => ref?.contains(e.target as Node))
      ) {
        closeTooltip()
      }
    }
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeTooltip()
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [closeTooltip])

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="reveal">
          <div className="section-label">🚀 Portfolio</div>
          <h2 className="section-title">My <span>Projects</span></h2>
          <p className="section-subtitle">Real-world projects I've built and delivered</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              ref={el => { cardRefs.current[i] = el }}
              className={`project-card reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setActiveTooltip(i)}
              onMouseLeave={() => setActiveTooltip(null)}
            >
              <div className="project-card-top" aria-hidden="true" />
              <div className="project-card-header">
                <div className="project-emoji">{project.emoji}</div>
                <div className="project-header-info">
                  <h3 className="project-title">{project.title}</h3>
                  <span className="project-duration">
                    <i className="fas fa-calendar-alt" /> {project.duration}
                  </span>
                </div>
              </div>
              <p className="project-client">
                <i className="fas fa-building" /> {project.client}
              </p>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.tech.slice(0, MAX_VISIBLE_TAGS).map(t => (
                  <span key={t} className="project-tech-tag">{t}</span>
                ))}
                {project.tech.length > MAX_VISIBLE_TAGS && (
                  <span className="project-tech-more">+{project.tech.length - MAX_VISIBLE_TAGS}</span>
                )}
              </div>

              <button
                className="project-expand-btn"
                onClick={() => setActiveTooltip(activeTooltip === i ? null : i)}
                aria-expanded={activeTooltip === i}
              >
                <span>View Details</span>
                <i className="fas fa-eye" />
              </button>

              {activeTooltip === i && (
                <div ref={tooltipRef} className="project-tooltip">
                  <div className="project-tooltip-inner">
                    <div className="project-tooltip-header">
                      <span className="project-tooltip-emoji">{project.emoji}</span>
                      <h4>{project.title}</h4>
                    </div>
                    {project.details && (
                      <div className="project-details-block">
                        <h5><i className="fas fa-info-circle" /> Project Details</h5>
                        <p>{project.details}</p>
                      </div>
                    )}
                    <div className="project-responsibilities">
                      <h5><i className="fas fa-tasks" /> Key Responsibilities</h5>
                      <ul>
                        {project.responsibilities.map((r, idx) => (
                          <li key={idx}>{r}</li>
                        ))}
                      </ul>
                    </div>
                    {project.tech.length > MAX_VISIBLE_TAGS && (
                      <div className="project-full-tech">
                        <h5><i className="fas fa-cogs" /> Full Tech Stack</h5>
                        <div className="project-tech">
                          {project.tech.map(t => (
                            <span key={t} className="project-tech-tag">{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
