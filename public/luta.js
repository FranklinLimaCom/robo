// Função de atacar

seuTurno = true
turnoDoBoss = false

let atacarBoss = () => {
    if (seuTurno == true && bossHp > 0) {
        bossDef = bossDef - ataque
        document.getElementById("bossDef").innerHTML = bossDef
        if (bossDef < 0) {
            bossHp = bossHp + bossDef
            document.getElementById("bossHp").innerHTML = bossHp;
        }
        if (bossDef < 0) {
            document.getElementById("bossDef").innerHTML = 0
        }
        seuTurno = false
        turnoDoBoss = true
        bossAtacar(defesa, bossAtk)
    }
    else {
        alert('Você derrotou o Boss')
        location.reload()
    }
}


let bossAtacar = (defesa, bossAtk) => {

    if (turnoDoBoss == true && hp > 0) {
        defesa = defesa - bossAtk
        document.getElementById("def").innerHTML = defesa
        if (defesa <= 0) {
            hp = hp + defesa
            document.getElementById("hp").innerHTML = hp
        }
        if (defesa < 0) {
            document.getElementById("def").innerHTML = 0
        }
        seuTurno = true
        turnoDoBoss = false

    }
    else {
        alert('Você perdeu!')
        location.reload()
    }
}

// Habilidades Especial

let trovaoFlamejante = () => {   
    
        if (seuTurno == true && bossHp > 0) {
        animTrue = true
        bossDef = (bossDef - ataque) - 7
        document.getElementById("bossDef").innerHTML = bossDef
        if (bossDef < 0) {
            bossHp = bossHp + bossDef
            document.getElementById("bossHp").innerHTML = bossHp;
        }
        if (bossDef < 0) {
            document.getElementById("bossDef").innerHTML = 0
        }              
        seuTurno = false
        turnoDoBoss = true
        animTrue = false;
        bossAtacar(defesa, bossAtk)
        $("fogo").fadeIn(500); 
    }
    else {
        alert('Você derrotou o Boss')
        location.reload()
    }
}

