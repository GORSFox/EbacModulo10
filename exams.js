import months from './months.js'

const filteredMonths = months.filter((months) => {
    return months.days === 30
})

console.log(filteredMonths)

let toPrint = ''

filteredMonths.forEach(month => {
    toPrint += month.month + ','
});

let meses = [30,30,30]
// reduce - funcao com todos os itens do array e devolve 1 só
let sumMonthDays = months.reduce((prev, next) =>{
    
    return {days: prev.days + next.days}
})

// Map -funcoes em arrays retorno individual
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map((cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML =
toPrint +'<br> Soma dos dias dos meses selecionados:'
+ sumMonthDays.days +'<br> idade humana dos cachorros:'
+ years + ''

