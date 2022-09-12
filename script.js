const form = document.getElementById('form');

form.addEventListener('submit', getFormValue);

function getFormValue(event) {
    event.preventDefault(); 
}

const weight = form.querySelector('[name="weight"]')
const height = form.querySelector('[name="height"]')


function res() {
    console.log(weight.value)
    console.log(height.value)
    let w = weight.value
    let h = height.value
    let i = w / ((h / 100) * (h / 100))
    console.log(`Индекс массы тела: ${i}`)
    let res = document.querySelector('[name="result"]')
    res.innerHTML = Math.round(i)

    let diagnoz = document.querySelector('[name="diagnoz"]')

    if (i < 16) {
        diagnoz.innerHTML = 'Выраженный дефицит массы'
    } else if (i < 19) {
        diagnoz.innerHTML = 'Недостаточная (дефицит) масса тела'
    } else if (i < 25) {
        diagnoz.innerHTML = 'Норма'
    } else if (i < 30) {
        diagnoz.innerHTML = 'Избыточная масса тела (предожирение)'
    } else if (i < 35) {
        diagnoz.innerHTML = 'Ожирение первой степени'
    } else if (i <= 40) {
        diagnoz.innerHTML = 'Ожирение второй степени'
    } else if (i > 40) {
        diagnoz.innerHTML = 'Ожирение третьей степени (морбидное)'
    } else {
     diagnoz.innerHTML = 'Введите корректные данные'
     res.innerHTML = 0
    }

    weight.value = ""
    height.value = ""
}


