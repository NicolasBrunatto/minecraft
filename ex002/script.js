function hora()
{
    var Get_Dia = new Date()
    var horadia = Get_Dia.getHours()
    var txtHorario = document.getElementById('hora')


    txtHorario.innerHTML = `${horadia}:00 horas`

    var txtPeriodoDia = document.getElementById('Periodo')
    var img = document.getElementById('image')
    var BG_color = document.getElementsByTagName('body')[0]

    if(horadia<=24 && horadia>=18)
    {
        BG_color.style.backgroundColor = '#2d0080'
        img.src = 'imgs/noite.jpg'
        txtPeriodoDia.innerHTML = 'Boa noite!'
    }else if(horadia>=12)
    {
        BG_color.style.backgroundColor = 'var(--cor1)'
        img.src = 'imgs/afternoon.jpg'
        txtPeriodoDia.innerHTML = 'Boa tarde'
    }else
    {
        BG_color.style.backgroundColor = '#57ba82'
        img.src = 'imgs/morning.jpg'
        txtPeriodoDia.innerHTML = 'Bom dia!'
    } 
}