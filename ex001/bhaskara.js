function calcular()
{
    var txtVa = document.getElementById("Va")
    var txtVb = document.getElementById("Vb")
    var txtVc = document.getElementById("Vc")
    var a = Number(txtVa.value)
    var b = Number(txtVb.value)
    var c = Number(txtVc.value)
    var resultadosX = document.getElementById("valoresX")
    var x1
    var x2
    var delta
    var vertices = document.getElementById('vertices')
    var vX
    var vY

    delta = (b**2)- 4*a*c
    
    if (delta < 0)
    {
        valoresX.innerHTML = `x = (${-b} +- sqrt(${delta}))/${2*a}`
    }else
    {
        x2 = ((-b) + Math.sqrt(delta))/2*a
        x1 = ((-b) - Math.sqrt(delta))/2*a
        valoresX.innerHTML = `x1: <strong> ${x1}</strong> <br> x2: <strong>${x2}</strong>`
    }

    vX = -b/2*a
    vY = -delta/4*a
    vertices.innerHTML = `Vértice da parábola: (${vX},${vY})`
}