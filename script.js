var timee

function jogardado() {
    clearTimeout(timee)
    var aleat = Math.round(Math.random() * 5 + 1)
    $("#resultadoDado").html(aleat)
    $("#resultadoDadoGeral").show()
    regras()
    timee = setTimeout(function() {
        $("#resultadoDadoGeral").hide()
    }, 10000)
}

function regras() {
    $("#nivel").html("Desafio ou Desafio?")
    $("#ordem").html(`<p>Regras:</p>
    <br>
    <p>Jogue os dados</p>
    <p> Se sair 1, 2 ou 3: Clique em nível 1.</p>
    <p> Se cair 4 ou 5: Clique em nível 2.</p>
    <p> Se cair 6: Clique no nível 3.</p>`)
    $("#shot").html(`O nível 4 tem a chance de sair em qualquer um dos 3 primeiros níveis. <br> O pedido da carta poderá ser: <strong>Selecione uma carta do nível 4.</strong>`)
    $("#header").removeClass("bg-primary")
        .removeClass("bg-success")
        .removeClass("bg-danger")
        .removeClass("bg-dark")
        .addClass("bg-info")
}

var nivel1 = []
var nivel2 = []
var nivel3 = []
var nivel4 = []

function filtro(a, b) {
    return (a[1] == b)
}

function aleatorio(array1) {
    var n = array1.length - 1
    var aleat = Math.round(Math.random() * n)
    return (array1[aleat])
}

function play1() {
    var select = aleatorio(window.nivel1)
    $("#nivel").html("Nível 1")
    $("#ordem").html(select[0])
    $("#shot").html(select[2])
    $("#header").addClass("bg-primary")
        .removeClass("bg-success")
        .removeClass("bg-danger")
        .removeClass("bg-dark")
        .removeClass("bg-info")

}

function play2() {
    var select = aleatorio(window.nivel2)
    $("#nivel").html("Nível 2")
    $("#ordem").html(select[0])
    $("#shot").html(select[2])
    $("#header").removeClass("bg-primary")
        .addClass("bg-success")
        .removeClass("bg-danger")
        .removeClass("bg-dark")
        .removeClass("bg-info")
}


function play3() {
    var select = aleatorio(window.nivel3)
    $("#nivel").html("Nível 3")
    $("#ordem").html(select[0])
    $("#shot").html(select[2])
    $("#header").removeClass("bg-primary")
        .removeClass("bg-success")
        .addClass("bg-danger")
        .removeClass("bg-dark")
        .removeClass("bg-info")
}


function play4() {
    var select = aleatorio(window.nivel4)
    $("#nivel").html("Nível 4")
    $("#ordem").html(select[0])
    $("#shot").html(select[2])
    $("#header").removeClass("bg-primary")
        .removeClass("bg-success")
        .removeClass("bg-danger")
        .addClass("bg-dark")
        .removeClass("bg-info")
}


$(function() {
    $.getJSON("https://script.google.com/macros/s/AKfycbyKsbwaK35wj5nfSslFwDsPbGBLF7_L8s9RNWXRhRj-U_WQ-ME/exec?func=get", function(data) {
        console.log(data)
        var dados = data.result
        window.nivel1 = dados.filter(function(x) {
            return (filtro(x, 1))
        })
        window.nivel2 = dados.filter(function(x) {
            return (filtro(x, 2))
        })
        window.nivel3 = dados.filter(function(x) {
            return (filtro(x, 3))
        })
        window.nivel4 = dados.filter(function(x) {
            return (filtro(x, 4))
        })
        $('button').prop('disabled', false);
    })
})

// https://script.google.com/macros/s/AKfycbyKsbwaK35wj5nfSslFwDsPbGBLF7_L8s9RNWXRhRj-U_WQ-ME/exec?func=get
//Login: investorcp
//Senha: Icp030536660