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
  const filteredExperiences = experiences.filter((exp) =>
    selectedSkills.every((skill) => exp.skills.includes(skill))
  );

  return (
    <div>
      <h2>Relevant Experiences Based on Your Skills:</h2>
      {filteredExperiences.length > 0 ? (
        filteredExperiences.map((exp, index) => (
          <div key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.description}</p>
          </div>
        ))
      ) : (
        <p>No relevant experiences found for the selected skills.</p>
      )}
    </div>
  );
};
