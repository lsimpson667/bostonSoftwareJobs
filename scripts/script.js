 // }
// // Code for ADD COMPANY button starts here
// function addCompany(e) {

// }

// let addCompanyBtn = document.querySelector("addCompanyLogo");
// addCompanyBtn.addEventListener("click", addCompany);


// Code for CLEAR button starts here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let clearBtn = document.querySelector("#clearAll");
clearBtn.addEventListener("click", function(e) {
    clearAll(e);
})
function clearAll(e) {
    let tar = e.target;
    
    let eachInput = document.querySelectorAll(".inputs-container input");
    let blurb = document.getElementById("blurb");

    for (let i = 0; i < eachInput.length; i++) {

        
        
        if (eachInput[i].value != "" || blurb.value != "") {
            eachInput[i].value = "";
            blurb.value = "";
        } else {
            console.log("The input fields are already blank.");
        }
    
}
}

// Code for DISPLAY button starts here>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
// May need to declare one or more other variable(s) 

// Create array of company objects
let companies = [{
	name: 'LogMeIn',
	logo: 'http://www.codesquad-test.org/bootcamp/LogMeIn_logo.png',
	blurb: "Simplifying how people interact with each other and the world around them to drive meaningful insight, deeper relationships and better outcomes for all has helped LogMeIn grow to become one of the world's top 10 SaaS companies with a leadership position in every one of our markets."
}, {
	name: 'TripAdvisor',
	logo: 'https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg',
	blurb: 'Tripadvisor helps nearly a half a billion travelers each month make every trip their best trif accommodations, restaurants, experiences, airlines and cruises.'
}, {
	name: 'Agero',
	logo: 'https://www.agero.com/sites/all/themes/agero/images/logo_header.png',
	blurb: "Agero's mission is to transform the entire driving experience through an unmatched combination of innovative technology and human-powered solutions."
}];



// Listen for user click on "DisplayAll" button
let displayAllBtn = document.querySelector('#displayAll')
displayAllBtn.addEventListener('click', displayAll);

let spotForCorporateLogos = document.querySelector("#showCorporateLogo");
let listSpace;
function displayAll() {
    // let tar = e.target;
    listSpace ="";


    // Loop through array and display each one on Companies page
    // Display long string of company names, logos and descriptions on page
    for (let i = 0; i < companies.length; i++) {
        listSpace += `<div class='individualLogoContainers img-thumbnail'><div class=''><img src='${companies[i].logo}' width='250px' class='image'></div><div class=''><p>${companies[i].name}</p></div><div class=''><p>${companies[i].blurb}</p></div></div>`;
    }
    spotForCorporateLogos.innerHTML = listSpace;
}

// Listen for user click on "Add company" button
// {
    // Create object cp. Use the Tripadvisor site and app to browse hundreds of millions of reviews and opinions oonstructor for new company
function Company(name, logo, blurb) {
	this.name = name;
	this.logo = logo;
	this.blurb = blurb;
}
    let addCompanyBtn = document.querySelector("#addCompanyLogo");
    addCompanyBtn.addEventListener("click", addCompany);

    function addCompany() {
        // let tar = e.target;
        
        // Get company info from user
    let compName = document.querySelector('#compName').value;
    let url = document.querySelector('#url').value;
    let blurb = document.querySelector('#blurb').value;
         // Create a new company object
    let newCompany = new Company(compName, url, blurb);

     // Add the new object to the companies array
     companies.push(newCompany);

	displayAll();

    }

//    Create a separate function for Add Company Button
    
   

	// Display all companies
	// displayAll();
// }


// BONUS: Listen for user click on "Alphabetize" button
// {}
let alphabetizeBtn = document.querySelector("#alphabetizeAll");
alphabetizeBtn.addEventListener("click", function() {
    companies.sort(compare); displayAll();
});
function compare(a, b) { 
    // create new variables to isolate the name keys
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase(); 
    let comparison = 0;
    if (nameA > nameB) {
        comparison = 1;
    } else if (nameA < nameB) {
        comparison = -1;
    };
     console.log(nameA);
    return comparison;
    
}

    // compare two companies from the array; if a is greater (i.e. closer to end of alphabet), comparison variable = 1, if b is greater, comparison = -1


