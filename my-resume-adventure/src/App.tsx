import React, { useState } from "react";
import { SkillSelection } from "./components/SkillSelection";
import { FilteredResults } from "./components/FilteredResults";
import "./App.css"; // We'll add styles here

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

  const resetApp = () => {
    setSelectedSkills([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="app">
      {currentScreen === "welcome" && (
        <div className="screen fade-in">
          <h1 className="title">Welcome Ezra's Resume Adventure!</h1>
          <p className="subtitle">
            Take an interactive journey through my experiences and education to
            discover how I can fit your needs.
          </p>
          <button className="btn" onClick={goToSkillsScreen}>
            Start
          </button>
        </div>
      )}

      {currentScreen === "skills" && (
        <div className="screen fade-in">
          <SkillSelection
            skillsList={skillsList}
            selectedSkills={selectedSkills}
            onSkillSelection={handleSkillSelection}
          />
          <button
            className="btn"
            onClick={goToResultsScreen}
            disabled={selectedSkills.length === 0}
          >
            See Results
          </button>
        </div>
      )}

      {currentScreen === "results" && (
        <div className="screen fade-in">
          <FilteredResults selectedSkills={selectedSkills} />
          <button className="btn" onClick={resetApp}>
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
