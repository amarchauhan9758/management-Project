
 
// var idName = 1;
// function AddBoard(id) {
    
//     idName  ++;
//     var listID = 'ProjectList_' + idName;
   
//     var templateBoard='<div id="BoardBlock">'+
//      '<section>'+
//       ' <div >' + id.value+'Board name" <button onclick="removeBtn()">Remove Board</button> </div>'+
//       ' <div class="project-block" id='+ listID+'></div>'+
//      '</section>';
//  document.getElementById('BoardBlock').innerHTML += templateBoard;
//  showProject(listID); 

// }


var ProjectCard = [
    {
        name: "ProjectCar1"
    },
    {
        name: "ProjectCArd2"
    }
];




function showProject(listId){
         ProjectCard.forEach(function (value,index) {
        var Template ='<div class="project-card">'+ value.name +
       
            '  <ul>' +
            ' <li>Task one </li>' +
            '  <li>Task two</li>' +
           
            '   </ul>' +
            
            '</div>';
            document.getElementById(listId).innerHTML += Template;
              console.log(listId)  
            });
            
          
    };



function toggleMenu() {
    var toggleVariable = document.getElementsByClassName("menu-block")[0];

    if (toggleVariable.style.display == "none") {
        toggleVariable.style.display = "";

    }
    else {
        toggleVariable.style.display = "none";
    }

}
function removeBtn(element) {
    document.getElementById(element.id).innerHTML = "";
}
var idName = 1;
function AddBoard(id) {
    // console.log(id.value)
    idName ++;
    var listId = 'projectList_' + idName;
    console.log(listId)
    var boardId = 'board_'+idName;
    var templateBoard= '<section class ="board-block" id = '+boardId+'>'+
      ' <div >' + id.value+'<button onclick="removeBtn('+boardId+')">Remove Board</button> </div>'+
      ' <div class="project-block" id='+ listId+'></div>'+
     '</section>'
     
 document.getElementById('boardBlockList').innerHTML += templateBoard; 
 showProject(listId);
 document.getElementById('menuList').innerHTML +='<li onClick ="loadMenu('+boardId+')">'+id.value+"</li>";

}
    
function loadMenu(element){
    console.log(element.id);
    document.getElementById(element.id).style.display = 'block';
}
    
    
// var btn = document.getElementById('Removebtn')
// btn.addEventListener("click",function () {
//     document.getElementById('projectList').innerHTML = 'none';
//     // // // document.getElementById('projectList').innerHTML = '';
//     console.log(projectList)
    
// })
    






    

