// src/Funded.jsx
import React from "react";
import "./FundedProjects.css"; // Adjust path if needed

function Funded() {
  const fundedProjects = [
    {
      id: 1,
      title: "Are microbiome central processing units feasible?",
      funder: "Programme EXPLOR'AE",
      summary: `Microbe-electrode interactions could enable real-time 
modulation of microbial ecosystems. Controlling the metabolic functions 
of complex microbiomes is currently a bottleneck. 

We will develop reactor prototypes to train artificial intelligence 
to control electroactive microbiomes with deep reinforcement 
learning.`,
    },
    {
      id: 2,
      title: "Discovering alternative steady states in e-microbiomes",
      funder: "Center for Interdisciplinary Microbial Science @ Paris Saclay",
      summary: `The biosphere teems with electroactive microbes whose ecosystems (e-microbiomes)
offer unique opportunities to sustainably convert industrial 
and domestic waste into electricity and valuable molecules. 

To fully harness this potential, our team is developing artificial 
intelligence agents designed to optimize e-microbiomes through 
real-time environmental control. Like many ecological systems, 
e-microbiomes can form alternative stable states, where identical 
microbes, under similar conditions, develop distinct functions 
influenced by their assembly history. 

By sustaining e-microbiomes in these alternative states, we will establish 
reference points to guide our AI agents, advancing toward the first 
real-world microbiome controllers.`,
    },
    {
      id: 3,
      title: "Predicting ecological partners for gut colonization using genome-scale metabolic models",
      funder: "HOLOFLUX/INRAE",
      summary: `How to transfer beneficial microbes from one environment to another? 
Many microbes have unique properties that could be valuable in new ecosystems. 
For example, bacteria adapted to fermenting plant-based foods might offer 
significant health benefits if they can survive and thrive in the human gut. 

However, establishing a flow of microbes between ecosystems—such as from 
food to the gut—is far from simple. Microbes must not only adapt to new 
environmental conditions but also compete with well-established microbiota. 

In this project we will use genomics and genome-scale metabolic modelling 
combined with mathematical modelling and state-of-the-art algorithms to 
find optimal partner combinations that maximize the probability of successful 
colonization in the gut environment.`,
    },
  ];

  return (
    <div className="funded-container">
      <h1 className="main-header">Research Projects</h1>
      <div className="projects-grid">
        {fundedProjects.map((project) => (
          <div key={project.id} className="project-card">
            <h2>{project.title}</h2>
            <p>
              <strong>Funder:</strong> {project.funder}
            </p>

            {/* 
              1. Split on double newlines -> paragraphs
              2. Replace single newlines with spaces so they don't break lines in the middle 
            */}
            {project.summary
              .split("\n\n")
              .map((paragraph, idx) => (
                <p className="project-summary" key={idx}>
                  {paragraph.replace(/\n/g, " ")}
                </p>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funded;
