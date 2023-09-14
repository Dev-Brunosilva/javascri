function  verificar (){
    var data = new Date ()
    var ano = data.getFullYear()
    var fano=document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano){
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number (fano.value)
        var genero =''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex [0].checked) {
            genero ='Homens'

            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','bebemenino.jpg')
              
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src' , 'jovemmenino.jpg')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src','homen.jpg')
            } else  {
                //idoso
                img.setAttribute('src', 'velhohomen.jpg')
            }
        } else if ( fsex [1].checked) {
            genero='Mulheres'
            
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src','bebemulher.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','jovemmenina.jpg')
            } else if (idade < 50 ) {
                //adulto
                img.setAttribute('src','mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src','velhamulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML=`detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}