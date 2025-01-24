let titleColor = document.querySelector('.title-color')
let areaCar = document.querySelector('#area-color-car')
let whiteArtico = document.querySelector('.branco-artico span')
let redZadar = document.querySelector('.red-zadar')
let blackAsturias = document.querySelector('.preto-asturias span')
let greyTorres = document.querySelector('.cinza-torres span')
let greyCatalunha = document.querySelector('.cinza-catalunha span')
let blueEstoril = document.querySelector('.azul-estoril span')
let redArizona = document.querySelector('.vermelho-arizona span')
let blueAlgarve = document.querySelector('.blue-algarve')

let colorsCar = [whiteArtico,
    redZadar,
    blackAsturias,
    greyTorres,
    greyCatalunha,
    blueEstoril,
    redArizona,
    blueAlgarve
]

whiteArtico.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!whiteArtico.classList.contains('active')) {
        whiteArtico.classList.add('active')
        titleColor.innerHTML = `Branco Ártico`
        areaCar.src = 'assets/images/branco-artico.png'
    }
})

blueAlgarve.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!blueAlgarve.classList.contains('active')) {
        blueAlgarve.classList.add('active')
        titleColor.innerHTML = `Azul Algarve`
        areaCar.src = 'assets/images/azul.algarve.png'
    }
})

redZadar.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!redZadar.classList.contains('active')) {
        redZadar.classList.add('active')
        titleColor.innerHTML = `Vermelho Zadar`
        areaCar.src = 'assets/images/vermelho-zadar.png'
    }
})
blackAsturias.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!blackAsturias.classList.contains('active')) {
        blackAsturias.classList.add('active')
        titleColor.innerHTML = `Preto Asturias`
        areaCar.src = 'assets/images/preto-asturias.png'
    }
})
greyTorres.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!greyTorres.classList.contains('active')) {
        greyTorres.classList.add('active')
        titleColor.innerHTML = `Cinza Torres`
        areaCar.src = 'assets/images/cinza-torres.png'
    }
})
greyCatalunha.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!greyCatalunha.classList.contains('active')) {
        greyCatalunha.classList.add('active')
        titleColor.innerHTML = `Cinza Catalunha`
        areaCar.src = 'assets/images/cinza-catalunia.png'
    }
})
blueEstoril.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!blueEstoril.classList.contains('active')) {
        blueEstoril.classList.add('active')
        titleColor.innerHTML = `Azul Estoril`
        areaCar.src = 'assets/images/azul-estoril.png'
    }
})
redArizona.addEventListener('click', () => {
    //Removendo .active de todos os elementos
    for (let cont of colorsCar) {
        if (cont.classList.contains('active')) {
            cont.classList.remove('active')
        }
    }
    //Alterando o elemento caso ele não estejá com a class .active
    if (!redArizona.classList.contains('active')) {
        redArizona.classList.add('active')
        titleColor.innerHTML = `Vermelho Arizona`
        areaCar.src = 'assets/images/vermelho-arizona.png'
    }
})
