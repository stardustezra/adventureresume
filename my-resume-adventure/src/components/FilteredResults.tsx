import React from "react";

interface Experience {
  title: string;
  description: string;
  skills: string[];
}

interface Education {
  title: string;
  institution: string;
  description: string;
  skills: string[];
}

interface FilteredResultsProps {
  selectedSkills: string[];
}

const experiences: Experience[] = [
  {
    title: "Frontend Developer at Helphouse.io",
    skills: ["React", "TypeScript"],
    description: "Refactoring and development of apps for Zendesk.",
  },
  {
    title: "Educator at AIDS Fondet",
    skills: ["Project Management", "Teaching", "Sexual Education"],
    description:
      "Sexual education tailored for grades 7-10 with a norm-critical approach.",
  },
  {
    title: "Supporter at YouSee",
    skills: ["Customer Service", "Tech Support", "Billing"],
    description:
      "Floorwalker: Helped new employees when the manager was unavailable. Supported DSL, COAX, Fiber, and mobile. Handled customer service via mail and phone support for billing inquiries.",
  },
  {
    title: "Graphic Designer at Odense Aafart",
    skills: ["UX/UI Design", "WordPress", "Adobe Creative Suite"],
    description: "Re-designed the website for canoe rental service.",
  },
  {
    title: "Ambassador at UCL",
    description:
      "Marketing, event management, and social media content creation.",
    skills: ["Project Management", "Content Creation", "Social Media"],
  },
  {
    title: "SoMe Manager at Riptos ApS",
    description: "Handled Instagram and video production for YouTube.",
    skills: ["Project Management", "Content Creation", "Social Media"],
  },
];

const educations: Education[] = [
  {
    title: "Pba. Web Development",
    institution: "UCL Erhvervsakademi og Professionshøjskole",
    description:
      "Focused on backend and frontend development, including SQL, Node.js, Express.js, and React.",
    skills: ["React", "Node.js", "SQL", "Vue.js", "Python", "Angular"],
  },
  {
    title: "Pba. Digital Concept Development",
    institution: "UCL Erhvervsakademi og Professionshøjskole",
    description:
      "Specialized in UX/UI design, project management, and user research.",
    skills: ["UX/UI Design", "Project Management", "User Research"],
  },
  {
    title: "Multimedia Design",
    institution: "UCL Erhvervsakademi og Professionshøjskole",
    description:
      "Covered web design, WordPress, and Adobe creative tools like Photoshop and Illustrator.",
    skills: ["HTML", "CSS", "WordPress", "Adobe Creative Suite"],
  },
];

export const FilteredResults: React.FC<FilteredResultsProps> = ({
  selectedSkills,
}) => {
  const filteredExperiences = experiences.filter((experience) =>
    experience.skills.some((skill) => selectedSkills.includes(skill))
  );

  const filteredEducations = educations.filter((education) =>
    education.skills.some((skill) => selectedSkills.includes(skill))
  );

  return (
    <div className="results-screen">
      <h2 className="results-title">Matched Results</h2>

      {filteredExperiences.length > 0 && (
        <div className="section">
          <h3 className="section-title">Experiences</h3>
          {filteredExperiences.map((experience, index) => (
            <div key={index} className="card">
              <h4 className="card-title">{experience.title}</h4>
              <p className="card-description">{experience.description}</p>
              <p className="card-skills">
                <strong>Skills:</strong> {experience.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}

      {filteredEducations.length > 0 && (
        <div className="section">
          <h3 className="section-title">Educations</h3>
          {filteredEducations.map((education, index) => (
            <div key={index} className="card">
              <h4 className="card-title">{education.title}</h4>
              <p className="card-institution">
                <strong>Institution:</strong> {education.institution}
              </p>
              <p className="card-description">{education.description}</p>
              <p className="card-skills">
                <strong>Skills:</strong> {education.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      )}

      {filteredExperiences.length === 0 && filteredEducations.length === 0 && (
        <p className="no-matches">
          No experiences or educations match your selected skills.
        </p>
      )}

      <button className="btn-restart" onClick={() => window.location.reload()}>
        Back to Start
      </button>
    </div>
  );
};
