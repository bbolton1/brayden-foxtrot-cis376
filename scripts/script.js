$(document).ready(function () {
    $('#submitBtn').click(function () {
      displayResults();
    });

  function displayResults() {
    let answer = $('#answer').val();
    let output = $('#output');

    if (answer === "Personal info") {
      let finalMessage = "My name is Brayden Bolton and I am an undergraduate IT student at UNA. I am from Russellville, Alabama." +
        "I plan to focus on work involving cybersecurity and systems analysis. I am currently 20 years old. ";

      let message = $('<div></div>').text(finalMessage);
      output.empty().append(message);
    } else if (answer === "Capabilities") { // a rough list of my capabilities
      let finalMessage = "I am proficient in using Google Cloud services, Windows Active Directory, and a myriad of programming languages." +
        "These languages are as follows: Python, C++, Java, JavaScript, and MySQL." +
        "The coding language I am best at properly utilizing is Python. I also have experience in creating diagrams through Lucid Charts." +
        "If you have any questions, please let me know at bbolton1@una.edu . Thank you for visiting my page";

      let message = $('<div></div>').text(finalMessage);
      output.empty().append(message);
    } else if (answer === "Links") { // links to my projects
      let links = [
        {text: "Github Repositories", url: "https://github.com/bbolton1?tab=repositories"},
        {text: "Codepen", url: "https://codepen.io/bbolton1"},
        {text: "Alpha", url: "https://codepen.io/bbolton1/pen/mdoBqgd"},
        {text: "Bravo", url: "https://codepen.io/bbolton1/pen/poYaPya"},
        {text: "Charlie", url: "https://github.com/bbolton1/CIS376-Charlie-Brayden"},
        {text: "Delta", url: "https://github.com/bbolton1/delta-lab-brayden"},
        {text: "Echo", url: "https://github.com/bbolton1/brayden-cis376-echo"},
        {text: "Foxtrot", url: "https://github.com/bbolton1/brayden-foxtrot-cis376"},
      ];

      output.empty(); 

      $.each(links, function (index, link) {
        let anch = $('<a></a>').attr('href', link.url).attr('target', '_blank').addClass('btn btn-secondary m-2').text(link.text);
        output.append(anch);
      });
    }
  }
    $('#bright').click(function () {
        $('body').css('background-color', 'lightblue');
    });
    // two buttons to change the "brightness" of a page (just changes the background)
    $('#dark').click(function () {
        $('body').css('background-color', 'darkblue');
    });
});
