const form = document.querySelector('form')
// Don't write these code here, it will return null value
// const height = parseInt(document.querySelector('#height').value)
// const weight = parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',(e) =>{
    e.preventDefault(); //to prevent the form to do its default function that is submiting value through url or server

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please enter valid height ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please enter valid weight ${weight}`
    }else{
        const bmi = weight / ((height * height)/10000)
        result.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)}</span>`

        if(bmi < 18.5){
            const under = document.querySelector('#under')
            under.style.color = "orange"
        } else if(bmi > 18.5 && bmi < 24.9){
            const normal = document.querySelector('#normal')
            normal.style.color = "green"
        } else if(bmi > 24.9){
            const over = document.querySelector('#over')
            over.style.color = "red"
        }
    }
})