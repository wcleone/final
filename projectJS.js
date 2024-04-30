submitButton = document.getElementById("submitButton");

function myWindow()
    {
        var printButton = document.createElement('button');
        visitorName = document.getElementById("myName").value;
        visitorGoal = document.getElementById("myGoal").value;
        visitorEmail = document.getElementById("myEmail").value;
        visitorBreakfast = document.getElementById("myBreakfast").value;
        visitorLunch = document.getElementById("myLunch").value;
        visitorSnack = document.getElementById("mySnack").value;
        visitorDinner = document.getElementById("myDinner").value;
        myText = ("<html><head><title>WEB-115 Final Project</title><style>");
        myText += ("nav {position:fixed; background-color: rgb(10, 10, 120); width: 100%; right: 0%; top: 0%; margin-right: 0%}h1 {justify-content: left; text-align: left; color: #fff; min-width: 50%; display: inline-block}h2 {justify-content: right; text-align: right; color: #fff; min-width: 50%; display: inline-block}section {margin-top: 45px}div {width: 13%; display: inline-block;}h3 {text-align: center}");
        myText += ("</style></head><body><nav><h1>&nbsp;&nbsp;Build Your Meal Plan</h1><h2>Cooper Leone WEB.115.0002&nbsp;&nbsp;</h2></nav><br>");
        myText += ("<section></section><p>Hello " + visitorName + ", this meal plan was created on-the-fly just for you!</p>Goal for the week: "+ visitorGoal +"<main>");
        myText += ("<div><h3>Sunday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("<div><h3>Monday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("<div><h3>Tuesday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("<div><h3>Wednesday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("<div><h3>Thursday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("<div><h3>Friday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("<div><h3>Saturday</h3><h4>Breakfast:</h4>"+ visitorBreakfast +"<h4>Lunch:</h4>"+ visitorLunch +"<h4>Snack:</h4>"+ visitorSnack +"<h4>Dinner:</h4>"+ visitorDinner +"</div>\n");
        myText += ("</main><br></body></html>");

        flyWindow = 
        window.open('about:blank','newWindow','width=800,height=800,left=300,top=150');
        flyWindow.document.write(myText);
        printButton.textContent = 'Print';
        printButton.onclick = function () {
            this.remove();
            flyWindow.focus();
            flyWindow.print();
            flyWindow.close();}
        flyWindow.document.body.appendChild(printButton);

        console.log("Name: " + visitorName);
        console.log("Email: " + visitorEmail);
        console.log("Goal for the week: " + visitorGoal);
    };

document.getElementById("submitButton").addEventListener("click", function validateEmailAndRunFunction() 
    {
        var emailInput = document.getElementById('myEmail').value;
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
        if (emailPattern.test(emailInput)) {
          myWindow();
        } else {
          alert("Please enter a valid email address.");
        }
    });
document.getElementById("clearButton").addEventListener("click", function clear() 
    {
        document.getElementById("myForm").reset();
    });
