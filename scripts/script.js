let companyList = "";

function showPromptForLogoUrl() {
    let addCompanyName = prompt("Enter the name of the company.");
    let companyNameArr = [];
    companyNameArr.push(addCompanyName);


    let addCompanyLogo = prompt("Enter the URL to a corporate logo.");
    let companyLogoArr = [];
    companyLogoArr.push(addCompanyLogo);

    let addCompanyDescription = prompt("Write a breif description of the company.")
    let companyDescriptionArr = [];
    companyDescriptionArr.push(addCompanyDescription);


    if (addCompanyLogo === null || addCompanyLogo === undefined || addCompanyLogo === "" || !addCompanyLogo.includes("http")) {
        document.getElementById("showCorporateLogo").innerHTML = companyList;
    } else {
        for (let i = 0; i < companyNameArr.length; i ++) {
        companyList += `<div class='individualLogoContainers img-thumbnail'><div class=''><img src='${companyLogoArr[i]}' width='250px' class='image'></div><div class=''><p>${companyNameArr[i]}</p></div><div class=''><p>${companyDescriptionArr[i]}</p></div></div>`;
        }
    document.getElementById("showCorporateLogo").innerHTML = companyList;
    }

    
}
