const courses={
 "calculus":{name:"Calculus",weeks:{1:{pdf:"MAweek1.pdf",html:"MAweek1.html",exercises:"Homework1.pdf"},2:{pdf:"week2.pdf",html:"MAweek2.html",exercises:"Homework2.pdf"}}},
 "linear-algebra":{name:"Linear Algebra",weeks:{1:{pdf:"LAweek1.pdf",html:"LAweek1.html",exercises:"LAexercises1.pdf"},2:{exercises:"LAexercises2.pdf"}}}
};
const params=new URLSearchParams(location.search),course=params.get("course")||"calculus",type=params.get("type")||"pdf",data=courses[course];
if(!data){location.replace("/en/notes/mathematical-notes/page.html");}
const typeName=type==="html"?"HTML":type==="exercises"?"Exercises":"PDF";
document.title=(data?data.name:"Weekly Notes")+" · "+typeName+" · Jiayu Chen";
document.getElementById("title").textContent=data?data.name:"Weekly Notes";
document.getElementById("subtitle").textContent=typeName+" · Weekly materials";
const base="/en/notes/mathematical-notes/"+(course==="calculus"?"calculus/":"linear-algebra/"),weeks=document.getElementById("weeks");
for(let week=1;week<=12;week++){const files=data.weeks[week]||{},link=document.createElement("a");link.className="week";link.href=files[type]?base+files[type]:"#";link.textContent="Week "+week;if(files[type]&&type!=="html"){link.target="_blank";link.rel="noopener"}weeks.appendChild(link)}
