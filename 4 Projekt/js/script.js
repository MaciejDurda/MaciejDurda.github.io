"use strict";
console.log("Wypłaty Premii");

let btn = document.querySelector('#oblicz');
let uczniowie = document.querySelector('#uczniowie');

let inputs = document.querySelectorAll('input[type = "number"]');
inputs.forEach(el => {
    el.setAttribute('max', '6')
    el.setAttribute('min', '1')
})

class Uczen {
    constructor(imie = '', matematyka = 1, polski = 1, biologia = 1, geografia = 1, fizyka = 1, chemia = 1, informatyka = 1, dodatkowe = '') {
        this.imie = imie;
        this.matematyka = matematyka;
        this.polski = polski;
        this.biologia = biologia;
        this.geografia = geografia;
        this.fizyka = fizyka;
        this.chemia = chemia;
        this.informatyka = informatyka;
        this.dodatkowe = dodatkowe;
    }

    bonus(element) {
        switch (element) {
            case "matematyka":
                this.matematyka += 0.5;
                break;
            case "polski":
                this.polski += 0.5;
                break;
            case "biologia":
                this.biologia += 0.5;
                break;
            case "geografia":
                this.geografia += 0.5;
                break;
            case "fizyka":
                this.fizyka += 0.5;
                break;
            case "chemia":
                this.chemia += 0.5;
                break;
            case "informatyka":
                this.informatyka += 0.5;
                break;
        }
    }
}

let listaWszystkichUczniow = []
let listaPrzedmiotow = []
btn.addEventListener('click', (el) => {
    el.preventDefault();

    let listaUczniow = document.querySelectorAll('[id *= "uczen"]');

    listaUczniow.forEach((el, index) => {
        let imie = el.querySelector(".uczen").innerText;
        let matematyka = Number(el.querySelector(".matematyka").value);
        let polski = Number(el.querySelector(".polski").value);
        let biologia = Number(el.querySelector(".biologia").value);
        let geografia = Number(el.querySelector(".geografia").value);
        let fizyka = Number(el.querySelector(".fizyka").value);
        let chemia = Number(el.querySelector(".chemia").value);
        let informatyka = Number(el.querySelector(".informatyka").value);
        let dodatkowe = el.querySelector(".zajecia-dodatkowe").value.split(' ');

        listaPrzedmiotow = ["matematyka", "polski", "biologia", "geografia", "fizyka", "chemia", "informatyka"];

        listaWszystkichUczniow[index] = new Uczen(imie, matematyka, polski, biologia, geografia, fizyka, chemia, informatyka, dodatkowe)

        listaWszystkichUczniow[index].dodatkowe.forEach((el, index) => {
            if (listaPrzedmiotow.includes(el.replace(/,/g, '')) && listaWszystkichUczniow[index][`${el.replace(/,/g, '')}`] <= 5.5) {
                listaWszystkichUczniow[index].bonus(el.replace(/,/g, ''))
            }
        })
        let srednia = (listaWszystkichUczniow[index].matematyka +
            listaWszystkichUczniow[index].polski +
            listaWszystkichUczniow[index].biologia +
            listaWszystkichUczniow[index].geografia +
            listaWszystkichUczniow[index].fizyka +
            listaWszystkichUczniow[index].chemia +
            listaWszystkichUczniow[index].informatyka) / 7



        for (const key in listaWszystkichUczniow[index]) {

            if (typeof listaWszystkichUczniow[index][key] == 'number' && listaWszystkichUczniow[index][key] == 1) {
                el.querySelector(`.${key}`).style.background = 'red';
                el.querySelector(`.uczen`).style.background = 'red';
            }
            if (matematyka > 1 && polski > 1 && biologia > 1 && geografia > 1 && fizyka > 1 && chemia > 1 && informatyka > 1 && (typeof listaWszystkichUczniow[index][key] == 'number')) {
                el.querySelector(`.${key}`).style.background = 'lightgray';
                el.querySelector(`.uczen`).style.background = 'yellow';

                if (srednia > 4.74) {
                    el.querySelector(`.srednia`).style.background = 'green';
                    el.querySelector(`.uczen`).style.background = 'green';
                }
                if (srednia < 4.74) {
                    el.querySelector(`.srednia`).style.background = '#bb20da';
                    el.querySelector(`.uczen`).style.background = 'yellow';
                }
            }
        }

        el.querySelector(".srednia").innerText = srednia.toFixed(2)
    })
})