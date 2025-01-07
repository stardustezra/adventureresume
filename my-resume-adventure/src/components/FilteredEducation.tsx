import React from "react";

interface Education {
  title: string;
  institution: string;
  description: string;
  skills: string[];
}

interface FilteredEducationsProps {
  selectedSkills: string[];
}

const educations: Education[] = [
  {
    title: "Pba. Web Development",
    institution: "UCL Erhvervsakademi og Professionshøjskole",
    description:
      "Focused on backend and frontend development, including SQL, Node.js, Express.js, Vue and React.",
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

export const FilteredEducations: React.FC<FilteredEducationsProps> = ({
  selectedSkills,
}) => {
  // Filter educations that have at least one matching skill
  const filteredEducations = educations.filter((education) =>
    education.skills.some((skill) => selectedSkills.includes(skill))
  );

  return (
    <div>
      <h2>Matched Educations</h2>
      {filteredEducations.length > 0 ? (
        <ul>
          {filteredEducations.map((education, index) => (
            <li key={index}>
              <h3>{education.title}</h3>
              <p>
                <strong>Institution:</strong> {education.institution}
              </p>
              <p>{education.description}</p>
              <strong>Skills: {education.skills.join(", ")}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No educations match your selected skills.</p>
      )}
    </div>
  );
};
