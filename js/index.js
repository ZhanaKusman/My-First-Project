document.addEventListener('DOMContentLoaded', function () {
    
    const today = new Date();
    const thisYear = today.getFullYear();
    const footer = document.querySelector('footer');
    const copyright = document.createElement('p');
    copyright.innerHTML = "Zhana Kusman " + thisYear;
    footer.appendChild(copyright);
  
    const skills = [
        'Front-end: JavaScript, HTML, CSS',
        'Back-end: Node.js',
        'Databases: MongoDB',
        'Frameworks: React',
        'Version Control: GitHub',
        'Tools: Chrome DevTools, Charles Proxy, Tizen'
    ];
    const skillsList = document.querySelector('#Skills ul');
    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });
  
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
    
       
        const mailtoLink = document.createElement('a');
        mailtoLink.href = `mailto:${usersEmail}`;
        mailtoLink.textContent = usersName;
        mailtoLink.style.fontWeight = 'bold';
        mailtoLink.style.marginRight = '5px';
    
        newMessage.appendChild(mailtoLink);
    
       
        messageContent.textContent = ` wrote: ${usersMessage}`;
    
        
        const removeButton = document.createElement('button');
        removeButton.innerText = "remove";
        removeButton.type = 'button';
        removeButton.style.marginLeft = "15px";
    
        removeButton.addEventListener('click', function() {
            newMessage.remove();
        });
    
       
        newMessage.appendChild(messageContent);
        newMessage.appendChild(removeButton);
    
        
        messageList.appendChild(newMessage);
        messageList.scrollTop = messageList.scrollHeight;
    });
});