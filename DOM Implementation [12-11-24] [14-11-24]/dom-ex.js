const btnl = document.getElementById("addpara");
btnl.addEventListener("click",()=>{
    const para=document.createElement("p")
    para.innerHTML="<h1>This is a new Paragraph"
    para.style.color = "white";
    para.style.backgroundColor="black";
    document.body.append(para)
})