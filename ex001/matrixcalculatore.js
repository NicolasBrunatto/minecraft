function Calcular()
{
    var txt_a1 = document.getElementById('a1') //getting the number from the table
    var txt_a2 = document.getElementById('a2')
    var txt_a3 = document.getElementById('a3')
    var txt_b1 = document.getElementById('b1')
    var txt_b2 = document.getElementById('b2')
    var txt_b3 = document.getElementById('b3')
    var txt_c1 = document.getElementById('c1')
    var txt_c2 = document.getElementById('c2')
    var txt_c3 = document.getElementById('c3')

    var a1 = txt_a1.value
    var a2 = txt_a2.value
    var a3 = txt_a3.value
    var b1 = txt_b1.value
    var b2 = txt_b2.value
    var b3 = txt_b3.value
    var c1 = txt_c1.value
    var c2 = txt_c2.value
    var c3 = txt_c3.value

    var Get_Result = document.getElementById('Result_Det')

    var Det = (a1*b2*c3 + a2*b3*a3 + a3*b1*c2) - (a3*b2*c1 + a2*b1*c3 + a1*b3*c2)

    Get_Result.innerHTML = `<strong>${Det}</strong>`
}