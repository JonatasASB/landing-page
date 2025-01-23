let titleColor = document.querySelector('.title-color')
let areaCar = document.querySelector('#area-color-car')
let whiteArtico = document.querySelector('.branco-artico span')
let redZadar = document.querySelector('span.red-zar')
let blackAsturias = document.querySelector('.preto-asturias span')
let greyTorres = document.querySelector('.cinza-torres span')
let greyCatalunha = document.querySelector('.cinza-catalunha span')
let blueEstoril = document.querySelector('.azul-estoril span')
let redArizona = document.querySelector('.vermelho-arizona span')
let blueAlgarve = document.querySelector('.blue-algarve')

let colorsCar = [whiteArtico ,redZadar, blackAsturias, greyTorres, greyCatalunha, blueEstoril, redArizona, blueAlgarve]

whiteArtico.addEventListener('click', (event) => {
    for (let cont = 0; cont <= colorsCar.length; cont++) {
        if (colorsCar[cont].classList.contains('active')) {
            colorsCar[cont].classList.remove('active')
        }
        break;
    }
    if (!whiteArtico.classList.contains('active')) {
        titleColor.innerHTML = `Branco asd`
        areaCar.src = 'assets/images/branco-artico.png'
    }
    
    whiteArtico.classList.add('active')
})

blueAlgarve.addEventListener('click', () => {
    blueAlgarve.classList.remove('acvite')
    if (!blueAlgarve.classList.contains('active')) {
        blueAlgarve.classList.add('active')
        titleColor.innerHTML = `Azul Algarve`
        areaCar.src = '/assets/images/azul.algarve.png'
    }
})

    
