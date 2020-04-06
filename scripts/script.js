let txt2 = "";

function showPromptForLogoUrl() {

    let addACompany = prompt("Enter the URL to a corporate logo.");

    if (addACompany === null || addACompany === undefined || addACompany === "" || !addACompany.includes("http")) {
        document.getElementById("showCorporateLogo").innerHTML = txt2;
    } else {
    txt2 += `<div><img src='${addACompany}' width='250px'></div>`;
    document.getElementById("showCorporateLogo").innerHTML = txt2;
    }
    
}
