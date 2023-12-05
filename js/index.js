document.addEventListener('DOMContentLoaded', function () {
    
    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = "Zhana Kusman " + thisYear;
    footer.appendChild(copyright);
  
    
    const skillsSection = document.getElementById('Skills'); 
    const skillsList = skillsSection.querySelector('ul');
  
  
    const messageForm = document.forms['leave_message'];
  
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
      newMessage.appendChild(removeButton); 
    });

    newMessage.appendChild(messageContent);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
  });
});