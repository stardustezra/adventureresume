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
  // Filter experiences that match at least one selected skill
  const filteredExperiences = experiences.filter((experience) =>
    experience.skills.some((skill) => selectedSkills.includes(skill))
  );

  // Filter educations that match at least one selected skill
  const filteredEducations = educations.filter((education) =>
    education.skills.some((skill) => selectedSkills.includes(skill))
  );

  return (
    <div>
      <h2>Matched Results</h2>

      {filteredExperiences.length > 0 && (
        <div>
          <h3>Experiences</h3>
          <ul>
            {filteredExperiences.map((experience, index) => (
              <li key={index}>
                <h4>{experience.title}</h4>
                <p>{experience.description}</p>
                <strong>Skills: {experience.skills.join(", ")}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}

      {filteredEducations.length > 0 && (
        <div>
          <h3>Educations</h3>
          <ul>
            {filteredEducations.map((education, index) => (
              <li key={index}>
                <h4>{education.title}</h4>
                <p>
                  <strong>Institution:</strong> {education.institution}
                </p>
                <p>{education.description}</p>
                <strong>Skills: {education.skills.join(", ")}</strong>
              </li>
            ))}
          </ul>
        </div>
      )}

      {filteredExperiences.length === 0 && filteredEducations.length === 0 && (
        <p>No experiences or educations match your selected skills.</p>
      )}
    </div>
  );
};
