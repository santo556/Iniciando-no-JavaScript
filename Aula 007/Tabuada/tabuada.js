
/**
 * JS - Aula7: Tabuada
 */

//var valor = 9;

 //for(var i = 1; i < 11; i++) {
        /*document.write(valor + " x " + i + " = " + (valor * i) + "<br>")*/
       // document.write("<p>Tabuada do " + i + "</p>")
       // for(var j = 1; j < 11; j++) {
            //document.write(i + " x " + j + " = " + (i * j) + "<br>")
        //}
 //}

 function tabuada() {
    let num = document.getElementById('txtv')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!!!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
 }
 