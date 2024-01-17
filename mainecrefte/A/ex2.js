function main()
{
    const txtn1 = document.getElementById('n1')
    const txtn2 = document.getElementById('n2')
    const res = document.getElementById('res')
    
    const n1 = Number(txtn1.value)
    const n2 = Number(txtn2.value)
    
    const soma = Calcular(n1, n2)
    
    res.innerHTML = soma
}
function Calcular(n1, n2)
{
    const soma = n1 + n2

    return soma
}
