import React, { useState } from "react";
import { SkillSelection } from "./components/SkillSelection";
import { FilteredResults } from "./components/FilteredResults";

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<
    "welcome" | "skills" | "results"
  >("welcome");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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
    "Content Creation",
    "Social Media",
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

  const goToSkillsScreen = () => {
    setCurrentScreen("skills");
  };

  const goToResultsScreen = () => {
    setCurrentScreen("results");
  };

  return (
    <div className="app">
      {currentScreen === "welcome" && (
        <div>
          <h1>Welcome to My Resume Adventure!</h1>
          <p>
            Take an interactive journey through my experiences and education to
            discover how I can fit your needs.
          </p>
          <button onClick={goToSkillsScreen}>Start</button>
        </div>
      )}

      {currentScreen === "skills" && (
        <div>
          <SkillSelection
            skillsList={skillsList}
            selectedSkills={selectedSkills}
            onSkillSelection={handleSkillSelection}
          />
          <button
            onClick={goToResultsScreen}
            disabled={selectedSkills.length === 0}
          >
            See Results
          </button>
        </div>
      )}

      {currentScreen === "results" && (
        <FilteredResults selectedSkills={selectedSkills} />
      )}
    </div>
  );
};

export default App;
