import React from "react";

type FilteredExperiencesProps = {
  selectedSkills: string[];
};

const experiences = [
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
];

export const FilteredExperiences: React.FC<FilteredExperiencesProps> = ({
  selectedSkills,
}) => {
  // Filter experiences that have at least one matching skill
  const filteredExperiences = experiences.filter((experience) =>
    experience.skills.some((skill) => selectedSkills.includes(skill))
  );

  return (
    <div>
      <h2>Matched Experiences</h2>
      {filteredExperiences.length > 0 ? (
        <ul>
          {filteredExperiences.map((experience, index) => (
            <li key={index}>
              <h3>{experience.title}</h3>
              <p>{experience.description}</p>
              <strong>Skills: {experience.skills.join(", ")}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No experiences match your selected skills.</p>
      )}
    </div>
  );
};
