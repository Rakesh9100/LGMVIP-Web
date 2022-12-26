var form=document.getElementById("form");
var submit = document.querySelector(".submit");
var element = form.elements;
var display = document.querySelector(".display");
var i;

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    data();
    form.reset();
});

var loadFile = function(event){
    i=URL.createObjectURL(event.target.files[0]);
}

function data(){
    var div = document.createElement("div");
    var div1 = document.createElement("div");
    var name = document.createElement("div");
    var id = document.createElement("div");
    var course = document.createElement("div");
    var Email = document.createElement("div");
    var skills = document.createElement("div");
    var img = document.createElement("img");

    name.innerHTML="NAME: "+element[0].value;
    id.innerHTML="REGN. ID: "+element[1].value;
    course.innerHTML="COURSE: "+element[2].value;
    Email.innerHTML="EMAIL: "+element[3].value;
    img.alt="student image";
    if(element[4].value !=""){
        img.src=i;
    }

    if(element[5].checked){skills.innerHTML="SKILLS: HTML and CSS";}
    if(element[6].checked){skills.innerHTML="SKILLS: ReactJS";}
    if(element[7].checked){skills.innerHTML="SKILLS: C++";}
    if(element[5].checked && element[6].checked){skills.innerHTML="SKILLS: HTML and CSS, ReactJS";}
    if(element[5].checked && element[7].checked){skills.innerHTML="SKILLS: HTML and CSS, C++";}
    if(element[6].checked && element[7].checked){skills.innerHTML="SKILLS: ReactJS, C++";}
    if(element[5].checked && element[6].checked && element[7].checked){skills.innerHTML="SKILLS: HTML and CSS, ReactJS, C++";}

    div1.appendChild(name);
    div1.appendChild(id);
    div1.appendChild(course);
    div1.appendChild(Email);
    div1.appendChild(skills);
    div.appendChild(div1);
    div.appendChild(img);
    display.appendChild(div);

    img.classList.add("img");
    div.classList.add("d");
    div1.classList.add("div1");
    display.classList.add("display");
    
}