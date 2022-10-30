let input,botao, calc, resultado;
input = document.querySelector("#conta")
botao = document.querySelector('#btn')
display = document.querySelector("#mostrador")

botao.addEventListener('click', res = () =>{ 
    calc = input.value.replace(",",".").replace("²",`**${Number(2)}`).replace("³",`**${Number(3)}`)
    if(calc != ""){
        display.innerHTML = `${calc} <br> tem como resultado <br>  ${eval(calc)}`
        input.value = ""
    }else{
        display.innerHTML = `<h1 id="alerta">Digite algum número</h1>`
    }
})


input.addEventListener("keyup", function (e){
    if (e.keyCode === 13){
        e.preventDefault();
        botao.click();
    }
});