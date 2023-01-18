      let button = document.querySelector(".but");
      let liste = document.querySelector("ul");
      let input = document.querySelector("input");
      let check = document.getElementsByClassName("Check");
      let done = document.querySelector("span");
      button.addEventListener("click", addTodo);
      button.addEventListener("click", Delete);
 

//####Trigger a Button Click on Enter####//
       input.addEventListener("keypress", function(event) {
       if (event.key === "Enter") {
        event.preventDefault();
       button.click();
    }
  });
//##############ADD ITEM#########################//     
      function addTodo() {
        if(input.value=="")
        alert('Empty to-Do!')
        else
        liste.innerHTML += `<li class="Item"> <input onclick="Done()" class="Check" type="checkbox"> <label> ${input.value} </label> <button onclick="Msg()" class="But2">Delete</button> </li>`;
        
      }

//##############CLEAR INPUT AFTER ADDING ITEM#########################//                          
      function Delete(){
        if(input.value!="")
        input.value="";

      }

//##############DELETE ITEM#########################//  
function DeleteItem(){ 
  let AllLi = document.querySelectorAll(".Item");
    for (let index = 0; index <AllLi.length; index++){
        AllLi[index].querySelector("button").addEventListener("click",
        function(){
            this.closest(".Item").remove();
            
        });
    }

    
}

//##############TASK COMPLETED#########################//
let AllLis = document.querySelectorAll(".Item");
    for (let index = 0; index <AllLis.length; index++){
        AllLis[index].querySelector(".Check").addEventListener("click",
        function(){

          this.closest(".Item").innerHTML+= "<span>Done!<span>";           
          /*console.log(this.closest(".Check"));*/
            /*console.log(this.find("label"));*/

        });
    }