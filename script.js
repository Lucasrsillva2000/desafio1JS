let n1 = prompt('Digite um número:')
let n2 = prompt('Digite outro número:')

let soma = Number(n1) + Number(n2)
let sub = Number(n1) - Number(n2)
let multi = Number(n1) * Number(n2)
let div = Number(n1) / Number(n2)
let res = Number(n1) % Number(n2)

if (soma % 2 === 0 || n1 === n2) {
  alert(
    `${n1} e ${n2} são iguais. A soma de ${n1} e ${n2} é igual a ${soma}, e ${soma} é um número par.`
  )
} else {
  alert(
    `${n1} e ${n2} não são iguais. A soma de ${n1} e ${n2} é igual a ${soma}, e ${soma} não é um número par.`
  )
}

if (sub % 2 === 0 || n1 === n2) {
  alert(
    `${n1} e ${n2} são iguais. A subtração de ${n1} e ${n2} é igual a ${sub}, e ${sub} é um número par.`
  )
} else {
  alert(
    `${n1} e ${n2} não são iguais. A subtração de ${n1} e ${n2} é igual a ${sub}, e ${sub} não é um número par.`
  )
}

if (multi % 2 === 0 || n1 === n2) {
  alert(
    `${n1} e ${n2} são iguais. A multiplicação de ${n1} e ${n2} é igual a ${multi}, e ${multi} é um número par.`
  )
} else {
  alert(
    `${n1} e ${n2} não são iguais. A multiplicação de ${n1} e ${n2} é igual a ${multi}, e ${multi} não é um número par.`
  )
}

if (div % 2 === 0 || n1 === n2) {
  alert(
    `${n1} e ${n2} são iguais. A divisão de ${n1} e ${n2} é igual a ${div}, e ${div} é um número par.`
  )
} else {
  alert(
    `${n1} e ${n2} não são iguais. A divisão de ${n1} e ${n2} é igual a ${div}, e ${div} não é um número par.`
  )
}

if (res % 2 === 0 || n1 === n2) {
  alert(
    `${n1} e ${n2} são iguais. O resto da divisão de ${n1} e ${n2} é igual a ${res}, e ${res} é um número par.`
  )
} else {
  alert(
    `${n1} e ${n2} não são iguais.O resto da divisão de ${n1} e ${n2} é igual a ${res}, e ${res} não é um número par.`
  )
}
