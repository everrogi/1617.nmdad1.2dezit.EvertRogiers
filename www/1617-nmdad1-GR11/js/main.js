
//kaart



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

 console.log('test');
//Google maps





//for sports
//obj = JSON.parse(text);

//console.log(obj);
//foreach
//document.getElementById("sports").innerHTML +=
 //   "<li>" + obj.sports[0].name + "<br>" + obj.sports[0].synopsis + "<br>"+ obj.sports[0].pictures +" </a></li>";

//document.getElementById("sports").innerHTML +=
  //  "<li>" + obj.sports[1].name + "<br><small>" + obj.sports[1].description + "</small></a></li>";

/*$.getJSON("sporten.json", function(data) {
    console.log(data);
    // data is a JavaScript object now. Handle it as such
    "<li>" + obj.sports[0].name + "<br>" + obj.sports[0].synopsis + "<br>"+ obj.sports[0].pictures +" </a></li>";
});*/

{
  let timeout;
  let sporten;

  const createResultList = sporten => {
      const $results = document.querySelector(`.results`);
      $results.innerHTML = ``;
      sporten.forEach(sport => $results.appendChild(getSportListItem(sport)));
  };

  const getSportListItem = sport => {
    const $li = document.createElement(`li`);

    $li.innerHTML = `<a href="locatie/locatie-detail-${sport.name.toLowerCase()}.html">${sport.name}</a>`;
    $li.classList.add(`sportitem`);

    return $li;
  };

  const filterSporten = (sporten, term) => {
    return sporten.filter(sport => sport.name.toLowerCase().includes(term)).sort(sortBySportName);
  };

  const sortBySportName = (a, b) => a.name > b.name;

  const search = value => {
    if(value.length > 0){
      const results = filterSporten(sporten, value);
      createResultList(results);
    }else{
      document.querySelector(`.results`).innerHTML = ``;
    }
  };

  const handleKeyUpSearch = e => {
    clearTimeout(timeout);
    const $input = e.currentTarget;

    timeout = setTimeout(() => {
      search($input.value.toLowerCase());
    }, 150);
  };

  const init = () => {
      if(document.querySelector(`.search`)){
          document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
      }

    const url = `./sporten.json`;
    fetch(url)
      .then(r => r.json())
      .then(jsonData => sporten = jsonData.sports);
  };

  init();

}







// login

function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser = "test";
	var corpass = "123";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			window.alert("You are logged in as " + user.value);
			window.open("http://127.0.0.1:4040/");
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}


