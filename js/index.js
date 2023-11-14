const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = "Your Name " + thisYear;
footer.appendChild(copyright);

const skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li');
    skill.textContent = skills[i]; // Set the text content of the skill element
    skillsList.appendChild(skill);
}