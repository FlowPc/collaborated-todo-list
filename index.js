$(document).ready(function(){
    function validateMe() {
        let agreedBox = document.getElementById("agreedBox");
        let strikethrough = document.getElementById("strikeThrough");
        let strikeThroughSecond = document.getElementById("strikeThroughSecond")
       

        if (agreedBox.checked == true){
            strikethrough.style.textDecoration = "line-through"  
        }

        else { strikethrough.style.textDecoration = "none"}

        if (agreedBox.checked == true){
            strikeThroughSecond.style.textDecoration ="line-through"
            
        }

        else {strikeThroughSecond.style.textDecoration = "none"}
    }
    $("#agreedBox").click(function(){
        validateMe()
    });

    $("#todoBold").click(function(){
        let todoWord = document.getElementById("todoWord")
        let todoBold = document.getElementById("todoBold")
     
    })

    
})