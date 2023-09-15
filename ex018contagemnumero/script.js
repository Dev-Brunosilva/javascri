function contar (){
    let ini =document.getElementById ('txti')
    let fim =document.getElementById('txtf')
    let paso =document.getElementById('txtp')
    let res = document.getElementById('res')

    if( ini.value.length == 0 || fim.value.length == 0 || paso.value.length == 0 ){ window.alert ('[ERRO] faltam dados !')
    } else {
        res.innerHTML= 'contando'
        let i = Number (ini.value)
        let f = Number (fim.value)
        let p = Number (paso.value)

        for (let c = i ; c <= f ; c += p ){
            res.innerHTML += `${c}\u{1F609}`
        }
    }  
}