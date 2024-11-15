const reg=document.getElementById("register");
reg.addEventListener("submit",(e)=>{
    e.preventDefault();
    validate();
})

reg.addEventListener("submit",(e)=>{
    console.log("Form Submitted");
})
function validate() {
    const mono = document.getElementById("mobile");
    if (isNaN(mono.value) || mono.value.length != 10) {
        alert("Mobile Number is invalid.");
    }
    reg.submit();
}

// document.body
// document.getElementbyId(" ");
// document.getElementbyTagname(" ");
// document.getElementbyClassname(" ");
// document.getElementbyName(" ");

// Based on CSS 2 Styles are Introduced :--
// 1) document.QuerySelector(" ");
// 2) document.QuerySelectorAll(" ");