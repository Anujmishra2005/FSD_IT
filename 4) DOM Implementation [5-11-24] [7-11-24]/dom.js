const div = document.createElement("p");
div.id="Div-1";
div.style.backgroundColor="yellow";
div.style.width="200px";
div.style.height="200px";
document.body.appendChild(div);


const para = document.createElement("p");
    para.id="para-1";
    para.style.color="red";
    para.innerText="this is my first paragraph";
    div.appendChild(para);