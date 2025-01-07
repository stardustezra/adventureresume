import React from "react";

type SkillSelectionProps = {
  skillsList: string[];
  selectedSkills: string[];
  onSkillSelection: (skill: string) => void;
};

export const SkillSelection: React.FC<SkillSelectionProps> = ({
  skillsList,
  selectedSkills,
  onSkillSelection,
}) => {
  return (
    <div>
      <h2>Select up to 3 skills:</h2>
      <div className="skills">
        {skillsList.map((skill) => (
          <button
            key={skill}
            className={selectedSkills.includes(skill) ? "selected" : ""}
            onClick={() => onSkillSelection(skill)}
            disabled={
              selectedSkills.length >= 3 && !selectedSkills.includes(skill)
            }
          >
            {skill}
          </button>
        ))}
      </div>
      <p>Selected skills: {selectedSkills.join(", ")}</p>
    </div>
  );
};
