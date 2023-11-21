document.addEventListener('DOMContentLoaded', function () {

    // Copyright information
    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = "Zhana Kusman " + thisYear;
    footer.appendChild(copyright);

    // Skills list
    const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];
    const skillsSection = document.getElementById('skills');
    const skillsList = skillsSection.querySelector('ul');

    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement('li');
        skill.textContent = skills[i];
        skillsList.appendChild(skill);
    }
});