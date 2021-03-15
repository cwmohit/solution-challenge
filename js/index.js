const individualButton = document.getElementById("Individual");
const organizationButton = document.getElementById("Oragnization");
individualButton.classList.add("activeButton");
document.getElementById("OragnizationForm").style.display="none";
individualButton.addEventListener("click",()=>{
    document.getElementById("OragnizationForm").style.display="none";
    document.getElementById("IndividualForm").style.display="block";
    individualButton.classList.add("activeButton");
    organizationButton.classList.remove("activeButton");
    console.log("Button clicked individual");
})
organizationButton.addEventListener("click",()=>{
    document.getElementById("IndividualForm").style.display="none";
    document.getElementById("OragnizationForm").style.display="block";
    organizationButton.classList.add("activeButton");
    individualButton.classList.remove("activeButton");
    console.log("Button clicked organization");
})