// Contact Information
function addContactInfo(icon, text) {
    const contactInfo = document.querySelector('.contactinfo ul');
    const newContact = document.createElement('li');
    newContact.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="text">${text}</span>
    `;
    contactInfo.appendChild(newContact);
}

// Education
function addEducation(year, title, institution) {
    const education = document.querySelector('.contactinfo[education] ul');
    const newEducation = document.createElement('li');
    newEducation.className = 'education-info';
    newEducation.innerHTML = `
        <h5>${year}</h5>
        <h4>${title}</h4>
        <h4>${institution}</h4>
    `;
    education.appendChild(newEducation);
}

// Skills
function addSkill(skill, percent) {
    const skills = document.querySelector('.skills');
    const newSkill = document.createElement('div');
    newSkill.className = 'box';
    newSkill.innerHTML = `
        <h4>${skill}</h4>
        <div class="percent">
            <div style="width: ${percent}%;"></div>
        </div>
    `;
    skills.appendChild(newSkill);
}

// Work Experience
function addWorkExperience(year, company, position, duties) {
    const experience = document.querySelector('.about[title2="Experience"] .box');
    const newExperience = document.createElement('div');
    newExperience.className = 'box';
    newExperience.innerHTML = `
        <div class="year_company">
            <h5>${year}</h5>
            <h5>${company}</h5>
        </div>
        <div class="text">
            <h4>${position}</h4>
            <p>${duties}</p>
        </div>
    `;
    experience.appendChild(newExperience);
}

// Example usage:
addContactInfo('', 'newemail@example.com');
addEducation('2025', 'New Certificate', 'New Institution');
addSkill('New Skill', '50%');
addWorkExperience('2022-2023', 'New Company', 'New Position', 'New Duties');