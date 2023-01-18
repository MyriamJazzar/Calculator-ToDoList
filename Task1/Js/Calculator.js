let x = document.querySelector("#X");
let y = document.querySelector("#Y");

      function ShowAdd() {
        document.querySelector("h3").innerHTML = Somme(x.value,y.value);
         }
      function Somme(x, y) {
        if(x=="" || y=="")
        alert("Missing Number!")
        else
        {
            x = Number(x)
            y = Number(y)
            return "Addition : " + (x + y);
        }
        
      }

      function ShowMult() {
        document.querySelector("h3").innerHTML = Mult(x.value,y.value);
         }
      function Mult(x, y) {
        if(x=="" || y=="")
        alert("Missing Number!")
        else
        {
            x = Number(x)
            y = Number(y)
            return "Multiplication : " + (x * y);
        }
        
      }

      function ShowSub() {
        document.querySelector("h3").innerHTML = Sub(x.value,y.value);
         }
      function Sub(x, y) {
        if(x=="" || y=="")
        alert("Missing Number!")
        else
        {   x = Number(x)
            y = Number(y)
            return "Subtraction : " + (x - y);
        }
        
      }

      function ShowDiv() {
        document.querySelector("h3").innerHTML = Div(x.value,y.value);
         }
      function Div(x, y) {
        if(x=="" || y=="")
        alert("Missing Number!")
        else{
            x=Number(x)
            y=Number(y)
            if(y == 0)
            return "You can't divide by zero!"
            else
            return "Division : " + (x / y);}
      }