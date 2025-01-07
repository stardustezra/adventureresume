import React, { useState } from "react";
import { SkillSelection } from "./components/SkillSelection";
import { FilteredExperiences } from "./components/FilteredExperiences";

const App: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showExperiences, setShowExperiences] = useState(false);

  const skillsList = [
    "React",
    "TypeScript",
    "Node.js",
    "Project Management",
    "UX/UI Design",
    "WordPress",
    "Customer Service",
    "Tech Support",
    "Billing",
    "Teaching",
    "Sexual Education",
    "Adobe Creative Suite",
  ];

  const handleSkillSelection = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill)); // Deselect skill
    } else {
      if (selectedSkills.length < 3) {
        setSelectedSkills([...selectedSkills, skill]); // Select skill
      }
    }
  };

  const handleContinue = () => {
    setShowExperiences(true);
  };

  return (
    <div className="app">
      {!showExperiences ? (
        <div>
          <h1>Welcome to My Resume Adventure!</h1>
          <SkillSelection
            skillsList={skillsList}
            selectedSkills={selectedSkills}
            onSkillSelection={handleSkillSelection}
          />
          <button
            onClick={handleContinue}
            disabled={selectedSkills.length === 0}
          >
            See My Experiences
          </button>
        </div>
      ) : (
        <FilteredExperiences selectedSkills={selectedSkills} />
      )}
    </div>
  );
};

export default App;
