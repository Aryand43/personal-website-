document.addEventListener("DOMContentLoaded", () => {
    fetch('resume_data.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById("profile-summary").innerText = data["Profile Summary"];

            // Education Section
            let educationSection = document.getElementById("education");
            data["Education"].forEach(edu => {
                let listItem = document.createElement("li");
                listItem.innerText = edu;
                educationSection.appendChild(listItem);
            });

            // Experience Section
            let experienceSection = document.getElementById("experience");
            data["Experience"].forEach(exp => {
                let listItem = document.createElement("li");
                listItem.innerText = exp;
                experienceSection.appendChild(listItem);
            });

            // Skills Section
            let skillsSection = document.getElementById("skills");
            data["Skills"].forEach(skill => {
                let listItem = document.createElement("li");
                listItem.innerText = skill;
                skillsSection.appendChild(listItem);
            });

            // Projects Section
            let projectsSection = document.getElementById("projects");
            data["Projects"].forEach(project => {
                let listItem = document.createElement("li");
                listItem.innerText = project;
                projectsSection.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching the resume data:', error));
});
