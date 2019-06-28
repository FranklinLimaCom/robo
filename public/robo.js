/* Pernas Básicas*/
let getPernasBasico = (ataque, pbAtk, defesa, pbDef) => {
    ataque = ataque + pbAtk
    defesa = defesa + pbDef
    return ataque
}
let setPernasBasico = () => {
    if (moedas >= pbPreco && qtdPernas > 0) {
        ataque = getPernasBasico(ataque, pbAtk)
        document.getElementById("atk").innerHTML = ataque

        defesa = getPernasBasico(defesa, pbDef)
        document.getElementById("def").innerHTML = defesa

        moedas = moedas - pbPreco
        document.getElementById("moedas").innerHTML = moedas

        qtdPernas--
    }
    else if (moedas < pbPreco) {
        alert("Você não tem moedas suficientes")
    } else if (qtdPernas == 0) {
        alert("Você já comprou pernas")
    }
}

/* Pernas Raras*/
let getPernasRaro = (ataque, prAtk, defesa, prDef) => {
    ataque = ataque + prAtk
    defesa = defesa + prDef
    return ataque
}
let setPernasRaro = () => {
    if (moedas >= prPreco && qtdPernas > 0) {
        ataque = getPernasRaro(ataque, prAtk)
        document.getElementById("atk").innerHTML = ataque

        defesa = getPernasRaro(defesa, prDef)
        document.getElementById("def").innerHTML = defesa

        moedas = moedas - prPreco
        document.getElementById("moedas").innerHTML = moedas

        qtdPernas--
    }
    else if (moedas < prPreco) {
        alert("Você não tem moedas suficientes")
    } else if (qtdPernas == 0) {
        alert("Você já comprou pernas")
    }
}

/* Pernas Lendárias*/
let getPernasLendario = (ataque, plAtk, defesa, plDef) => {
    ataque = ataque + plAtk
    defesa = defesa + plDef
    return ataque
}
let setPernasLendario = () => {
    if (moedas >= plPreco && qtdPernas > 0) {
        ataque = getPernasLendario(ataque, plAtk)
        document.getElementById("atk").innerHTML = ataque

        defesa = getPernasLendario(defesa, plDef)
        document.getElementById("def").innerHTML = defesa

        moedas = moedas - plPreco
        document.getElementById("moedas").innerHTML = moedas

        qtdPernas--
    }
    else if (moedas < plPreco) {
        alert("Você não tem moedas suficientes")
    } else if (qtdPernas == 0) {
        alert("Você já comprou pernas")
    }
}

/* Bracos Básicas*/
let getBracosBasico = (ataque, bbAtk, defesa, bbDef) => {
    ataque = ataque + bbAtk
    defesa = defesa + bbDef
    return ataque
}
let setBracosBasico = () => {
    if (moedas >= bbPreco && qtdBracos > 0) {
        ataque = getBracosBasico(ataque, bbAtk)
        document.getElementById("atk").innerHTML = ataque

        defesa = getBracosBasico(defesa, bbDef)
        document.getElementById("def").innerHTML = defesa

        moedas = moedas - bbPreco
        document.getElementById("moedas").innerHTML = moedas

        qtdBracos--
    }
    else if (moedas < pbPreco) {
        alert("Você não tem moedas suficientes")
    } else if (qtdBracos == 0) {
        alert("Você já comprou Braços")
    }
}

/* Bracos Raras*/
let getBracosRaro = (ataque, brAtk, defesa, brDef) => {
    ataque = ataque + brAtk
    defesa = defesa + brDef
    return ataque
}
let setBracosRaro = () => {
    if (moedas >= brPreco && qtdBracos > 0) {
        ataque = getBracosRaro(ataque, brAtk)
        document.getElementById("atk").innerHTML = ataque

        defesa = getBracosRaro(defesa, brDef)
        document.getElementById("def").innerHTML = defesa

        moedas = moedas - brPreco
        document.getElementById("moedas").innerHTML = moedas

        qtdBracos--
    }
    else if (moedas < prPreco) {
        alert("Você não tem moedas suficientes")
    } else if (qtdBracos == 0) {
        alert("Você já comprou Braços")
    }
}

/* Bracos Lendárias*/
let getBracosLendario = (ataque, blAtk, defesa, blDef) => {
    ataque = ataque + blAtk
    defesa = defesa + blDef
    return ataque
}
let setBracosLendario = () => {
    if (moedas >= blPreco && qtdBracos > 0) {
        ataque = getBracosLendario(ataque, blAtk)
        document.getElementById("atk").innerHTML = ataque

        defesa = getBracosLendario(defesa, blDef)
        document.getElementById("def").innerHTML = defesa

        moedas = moedas - blPreco
        document.getElementById("moedas").innerHTML = moedas

        qtdBracos--
    }
    else if (moedas < blPreco) {
        alert("Você não tem moedas suficientes")
    } else if (qtdBracos == 0) {
        alert("Você já comprou Braços")
    }
}
