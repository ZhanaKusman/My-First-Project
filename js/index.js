document.addEventListener('DOMContentLoaded', function () {
    
    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = "Zhana Kusman " + thisYear;
    footer.appendChild(copyright);
  
    
    const skillsSection = document.getElementById('Skills'); 
    const skillsList = skillsSection.querySelector('ul');
  
  
    const messageForm = document.getElementById('leave_message_form');
  
    messageForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const usersName = messageForm.usersName.value;
      const usersEmail = messageForm.usersEmail.value;
      const usersMessage = messageForm.usersMessage.value;
  
      console.log(usersName, usersEmail, usersMessage);
  
      messageForm.reset();
  
      const messageList = document.querySelector('#messages ul'); 
  
      const newMessage = document.createElement('li');
      const messageContent = document.createElement('span');

      newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a> wrote: <span>${usersMessage}</span>`;
  
      const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.setAttribute('type', 'button');
    removeButton.style.marginLeft = "15px"; 

    removeButton.addEventListener('click', function() {
      const entry = removeButton.parentNode; 
      entry.remove(); 
      // newMessage.appendChild(removeButton); 
    });

    newMessage.appendChild(messageContent);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  });

  fetch('https://api.github.com/users/ZhanaKusman/repos')
  .then(response => response.json())
  .then(data => {
      const projectsList = document.querySelector('#projects ul');

          data.forEach(repo => {
          const listItem = document.createElement('li');
          listItem.textContent = repo.name;
          projectsList.appendChild(listItem);
      });
  })
  .catch(error => console.error('Error:', error));
});
     
 


const githubRequest = new XMLHttpRequest();
githubRequest.open("GET", "https://api.github.com/users/ZhanaKusman/repos");

githubRequest.addEventListener('load', function () {
    if (githubRequest.status === 200) {
        const repositories = JSON.parse(githubRequest.response);
        console.log(repositories);
     
        const projectSection = document.getElementById('project');
        const projectList = projectSection.querySelector('ul');

    
        for (let i = 0; i < repositories.length; i++) {
            const project = document.createElement('li');
            project.innerText = repositories[i].name;

        
            projectList.appendChild(project);
        }



    } else {
        console.error('Error fetching GitHub repositories:', githubRequest.statusText);
    }
});

githubRequest.send();

