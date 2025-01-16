
document.getElementsByClassName('cat')[0].addEventListener("click", () => {
    console.log('test')
    fetch('http://localhost:4000/catFact', {
        method: "GET"
    }).then(response => {
        response.json().then(fact => {
            console.log(fact)
            document.getElementsByClassName('cat-text')[0].innerHTML = `Cat Fact: ${fact.fact}`

        })
    })

})