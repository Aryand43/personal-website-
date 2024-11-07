(function() {
    if (typeof document === 'undefined') {
        console.error('This script should be run in a browser environment where the document object is available.');
        return;
    }

    document.addEventListener("DOMContentLoaded", () => {
        fetch('resume_data.json')
            .then(response => response.json())
            .then(data => {
                // Profile Summary
                document.getElementById("profile-content").innerText = data["Profile Summary"];

                // Education Section
                let educationSection = document.getElementById("education-list");
                data["Education"].forEach(edu => {
                    let listItem = document.createElement("li");
                    listItem.innerText = edu;
                    educationSection.appendChild(listItem);
                });

                // Experience Section (Modified for formatting)
                let experienceSection = document.getElementById("experience-list");
                data["Experience"].forEach(exp => {
                    let listItem = document.createElement("li");

                    // Apply formatting by searching for specific keywords
                    let formattedText = exp
                        .replace(/^(.*?)\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\b.*? – .*$/i, "<strong>$1</strong>")
                        .replace(/([A-Za-z\s]+):/, "<strong>$1:</strong>"); // Makes positions and dates bold

                    listItem.innerHTML = formattedText;
                    experienceSection.appendChild(listItem);
                });

                // Skills Section
                let skillsContainer = document.getElementById("skills-container");
                data["Skills"].forEach(skill => {
                    let skillDiv = document.createElement("div");
                    skillDiv.classList.add("skill");

                    let skillName = document.createElement("p");
                    skillName.innerText = skill; // Directly display each skill as text
                    skillDiv.appendChild(skillName);

                    skillsContainer.appendChild(skillDiv);
                });

                // Projects Section
                let projectsSection = document.getElementById("projects-list");
                data["Projects"].forEach(project => {
                    let listItem = document.createElement("li");
                    listItem.innerText = project;
                    projectsSection.appendChild(listItem);
                });
            })
            .catch(error => console.error('Error fetching the resume data:', error));
    });
})();
