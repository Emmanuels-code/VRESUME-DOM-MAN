// Manipulated Dom for new Contact Information
function addContactInfo(icon, text) {
    const contactInfoList = document.querySelector('.contactinfo ul');
    const newContact = document.createElement('li');
    newContact.innerHTML = `
        <span class="icon">${icon}</span>
        <span class="text">${text}</span>
    `;
    contactInfoList.appendChild(newContact);
}

//  TO  add new Educational qualification
function addEducation(year, title, institution) {
    const educationList = document.querySelector('.contactinfo[education] ul');
    const newEducation = document.createElement('li');
    newEducation.className = 'education-info';
    newEducation.innerHTML = `
        <h5>${year}</h5>
        <h4>${title}</h4>
        ${institution ? `<h4>${institution}</h4>` : ''}
    `;
    educationList.appendChild(newEducation);
}

//  To add new Skills
function addSkill(skill, percent) {
    percent = parseFloat(percent); 
    const skillsContainer = document.querySelector('.about.skills');
    const newSkill = document.createElement('div');
    newSkill.className = 'box';
    newSkill.innerHTML = `
        <h4>${skill}</h4>
        <div class="percent">
            <div style="width: ${percent}%;"></div>
        </div>
    `;
    skillsContainer.appendChild(newSkill);
}

// Work Experience Manipulation for Additional future work Experience
function addWorkExperience(year, company, position, duties) {
    const experienceContainer = document.querySelector('.about > .box'); // Assumes first .box is the experience container
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
    experienceContainer.appendChild(newExperience);
}

// Example usage:
addContactInfo('', 'newemail@example.com');
addEducation('2025', 'New Certificate', 'New Institution');
addSkill('New Skill', '50'); // Percent should be a number
addWorkExperience('2022-2023', 'New Company', 'New Position', 'New Duties');
