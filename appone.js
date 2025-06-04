//const questions = fetch("https://opentdb.com/api.php?amount=10")
//                    .then(console.log(resolve))

async function getData() {
    const response = await fetch("https://opentdb.com/api.php?amount=10")
 //   console.log(response)

    const file  = await response.json()
 //   console.log(file)
 //   console.log(typeof(file))

    /* file.forEach(question => {
        console.log(question)
    }); */

    for (const question in file ) {
        console.log(`${question} ${file[question]}`)
    }

} 

getData()

async function getQuestions () {
    getData()
    file.forEach(question => {
        console.log(question)
    });
console.log(file)
    
}