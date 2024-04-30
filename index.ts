import inquirer from "inquirer"

console.log("Welcome To My Quiz Game:")
console.log("Passing Marks are 4")

let points = 0

let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "TypeScript is superset of?",
        type: "list",
        choices: ["Python", "C++", "Java", "JavaScript"]
    }
])
if (question1.one == "JavaScript") {
    console.log("Your Answer is Correct.")
    points++
} else {
    console.log("Incorrect Answer.")
}

let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "Who is the founder of Microsoft?",
        type: "list",
        choices: ["Elon Musk", "Bill Gates", "Mark Zukerberg", "Warren Buffet"]
    }
])

if (question2.two == "Bill Gates") {
    console.log("Your Answer is Correct.")
    points++
} else {
    console.log("Incorrect Answer.")
}

let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Capital of Pakistan?",
        type: "list",
        choices: ["Karachi", "Los Angeles", "San Diego", "Islamabad"]
    }
])

if (question3.three == "Islamabad") {
    console.log("Your Answer is Correct.")
    points++
} else {
    console.log("Incorrect Answer.")
}

let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "Who is the founder of Apple Company?",
        type: "list",
        choices: ["Bill Gates", "Steve Job", "Charlie Munger", "Brian Tracy"]
    }
])

if (question4.four == "Steve Job") {
    console.log("Your Answer is Correct.")
    points++
} else {
    console.log("Incorrect Answer.")
}

let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "Capital of USA?",
        type: "list",
        choices: ["Berlin", "New York", "Washington D.C", "Dallas"]
    }
])

if (question5.five == "Washington D.C") {
    console.log("Your Answer is Correct.")
    points++
} else {
    console.log("Incorrect Answer.")
}

let question6 = await inquirer.prompt([
    {
        name: "six",
        message: "Which is not the programming language?",
        type: "list",
        choices: ["C", "TypeScript", "Urdu", "Go"]
    }
])

if (question6.six == "Urdu") {
    console.log("Your Answer is Correct.")
    points++
} else {
    console.log("Incorrect Answer.")
}

if (points >= 4) {
    console.log("Congratulations! You are passed.")
    console.log(`Your points: ${points}`)
} else {
    console.log("You are failed! Try Next Time.")
    console.log(`Your points: ${points}`)
}