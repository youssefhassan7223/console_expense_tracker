let addexpense = (num1,num2) => num1+num2; 
let subtbudget = (num1, num2) => num1-num2;
let budget = +(prompt("Welcome! Please type the total budget: ") ?? 1000);
let totexpenses = 0;
mainloop: while (true){
    let choice = +prompt("1) Add expenses, 2) Show the expenses & the reminder, 3) Exit ");
    switch (choice){
        case 1:
            let expenses = +prompt("Type the expenses: ");
            if (expenses > budget){
                alert("Cannot be done.");
                continue
            } else if(expenses < 0 || isNaN(expenses)) {
                alert("Cannot be done.");
                continue
            } else {
                totexpenses = addexpense(totexpenses, expenses);
                budget = subtbudget(budget, expenses);
            }
            break;
        case 2:
            alert("Expenses: " + totexpenses + ", Current budget: " + budget);
            break;
        case 3:
            alert("Goodbye")
            break mainloop;
        default:
            alert("Invalid")
            continue
    }
}
alert("Expenses: " + totexpenses + ", Current budget: " + budget);
