var inquirer = require("inquirer");
var fs = require("fs");
var Manager = require("./lib/Manager");
var Intern = require("./lib/Intern");
var Engineer = require("./lib/Engineer");
var managerlist = []
var internlist = []
var engineerlist = []
var managerHtml = require("./template/manager");
var engineerHtml = require("./template/engineer");
var internHtml = require("./template/intern");
var beginningHtml = require("./template/htmlhead");
var footHtml = require("./template/foothtml")

displaymenu()
function displaymenu(){
    inquirer.prompt([
        {
            type: "list",
            choices: [
                "Add Manager",
                "Add Engineer",
                "Add Intern",
                "Exit Application"
            ],
            message: "What would you lite to do ?",
            name: "useroption"
    
        }
    ]).then (function (response){
        switch (response.useroption){
            case "Add Manager": 
            addManager();
            break;

            case "Add Engineer": 
            addEngineer();
            break;
            
            case "Add Intern": 
            addIntern();
            break;

            default: generateHtml()            
        }
    })
}
function addManager(){

    console.log("add manager")
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager name",
            name: "managerName"

        },
        {
            type: "input",
            message: "Enter manager I.D.",
            name: "managerId"

        },
        {
            type: "input",
            message: "Enter manager email",
            name: "managerEmail"

        },
        {
            type: "input",
            message: "Enter manager office number",
            name: "managerNumber"

        }

    ]).then(function(userinput){
        const manager = new Manager(userinput.managerName, userinput.managerId, userinput.managerEmail, userinput.managerNumber)
        managerlist.push(manager);
        displaymenu()
    })

    
}
function addEngineer(){

    console.log("add engineer")
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager name",
            name: "engineerName"

        },
        {
            type: "input",
            message: "Enter manager I.D.",
            name: "engineerId"

        },
        {
            type: "input",
            message: "Enter manager email",
            name: "engineerEmail"

        },
        {
            type: "input",
            message: "Enter engineer github username",
            name: "username"

        }

    ]).then(function(userinput){
        const engineer = new Engineer(userinput.engineerName, userinput.engineerId, userinput.engineerEmail, userinput.username)
        engineerlist.push(engineer);
        displaymenu()
    })

    
}
function addIntern(){

    console.log("add intern")
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager name",
            name: "internName"

        },
        {
            type: "input",
            message: "Enter manager I.D.",
            name: "internId"

        },
        {
            type: "input",
            message: "Enter manager email",
            name: "internEmail"

        },
        {
            type: "input",
            message: "Enter intern school",
            name: "internSchool"

        }

    ]).then(function(userinput){
        const intern = new Intern(userinput.internName, userinput.internId, userinput.internEmail, userinput.internSchool)
        console.log("Intern",intern)
          internlist.push(intern);
        displaymenu()
    })

    
}

function generateHtml(){
    var htmlText = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
    </head>
    
    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">`

    // console.log(htmlText)
    // console.log("========================")
    var managertext = ""
    for (let i =0; i< managerlist.length; i++){
       console.log(managerlist[i], managerlist[i].email)
        managertext = managertext + `
                <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${managerlist[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${managerlist[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${managerlist[i].email}">:${managerlist[i].email}</a></li>
                        <li class="list-group-item">Office number:${managerlist[i].officeNumber}</li>
                    </ul>
                </div>
            </div>
       `
    }
    htmlText = htmlText+managertext
    var interntext = ""
    for (let i =0; i<internlist.length; i++){
        console.log(internlist[i], internlist[i].school)
        interntext = interntext + `
                <div class="card employee-card">
                <div class="card-header">
                    <h2 class="card-title">${internlist[i].name}</h2>
                    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Intern</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${internlist[i].id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${internlist[i].email}">${internlist[i].email}</a></li>
                        <li class="list-group-item">School Name:${internlist[i].school}</li>
                    </ul>
                </div>
            </div>
       `
    }
    htmlText = htmlText+interntext
    var engineertext = ""  
     for (let i =0; i< engineerlist.length; i++){
        console.log(engineerlist[i], engineerlist[i].email)
      
        engineertext = engineertext + `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineerlist[i].name}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineerlist[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineerlist[i].email}">${engineerlist[i].email}</a></li>
                <li class="list-group-item">Github Username:${engineerlist[i].github}</li>
            </ul>
        </div>
    </div>
`
     }
     htmlText = htmlText+engineertext
    //  console.log(htmlText)
    //  console.log("===================")
     htmlText = htmlText + ` </div>
     </div>
 </div>
</body>

</html>`
    //  console.log(htmlText)
     fs.writeFile("./output.html",htmlText,function(e,r){
         if(e) throw e;
         console.log("HTML Generataed -- see you next time")
         process.exit(0)
     })


}