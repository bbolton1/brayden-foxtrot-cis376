
function displayResults() {
    const answer = document.getElementById('answer').value;
    const output = document.getElementById('output');

    if (answer === "Personal info"){
        const finalMessage = "My name is Brayden Bolton and I am an undergraduate IT student at UNA. I am from Russellville, Alabama." +
        "I plan to focus on work involving cybersecurity and systems analysis. I am currently 20 years old. ";

        const message = document.createTextNode(finalMessage);
    
        output.innerHTML = '';
        output.appendChild(message);
    }

    else if (answer === "Capabilities"){  // gives a short rundown of what I can do
        const finalMessage = "I am proficient in using Google Cloud services, Windows Active Directory, and a myriad of programming languages." +
        "These languages are as follows: Python, C++, Java, JavaScript, and MySQL." +
        "The coding language I am best at properly utilizing is Python. I also have experience in creating diagrams through Lucid Charts." +
        "If you have any questions, please let me know at bbolton1@una.edu . Thank you for visiting my page";
                    
        const message = document.createTextNode(finalMessage);
        
        output.innerHTML = '';
        output.appendChild(message);
    }

    else if (answer === "Links"){ // outputs links
        const links = [
        {text: "Github Repositories", url: "https://github.com/bbolton1?tab=repositories"},
        {text: "Codepen", url: "https://codepen.io/bbolton1"},
        {text: "Alpha", url: "https://codepen.io/bbolton1/pen/mdoBqgd"},
        {text: "Bravo", url: "https://codepen.io/bbolton1/pen/poYaPya"},
        {text: "Charlie", url: "https://github.com/bbolton1/CIS376-Charlie-Brayden"},
        {text: "Delta", url: "https://github.com/bbolton1/delta-lab-brayden"},
        {text: "Echo", url: "https://github.com/bbolton1/brayden-cis376-echo"},
        {text: "Foxtrot", url: "https://github.com/bbolton1/brayden-cis376-echo"},
        ];

        output.innerHTML = ''; // Clear any previous content

        // Loops through each link and creates an anchor element to expedite the process
        links.forEach(link => {
        const anch = document.createElement('a');
        anch.href = link.url; // puts the actual link in the href
        anch.target = "_blank" // opens a new tab for each link
        anch.className = 'btn btn-secondary m-2';
        anch.textContent = link.text;
        output.appendChild(anch);
        });


    }

}

function changeBackground (){
    document.getElementById('bright').addEventListener('click', function() {
        document.body.style.backgroundColor = "lightblue";
  });
  
    document.getElementById('dark').addEventListener('click', function() {
        document.body.style.backgroundColor = 'darkblue';
  });
}
