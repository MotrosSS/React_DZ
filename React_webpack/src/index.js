import { HelloLesha } from './lesha'
import { HelloPetya } from './petya'
import { HelloVasya } from './vasya'
import "./style/lesha.css"
import "./style/petya.css"
import "./style/vasya.css"

let lesha = document.getElementById('lesha')
let petya = document.getElementById('petya')
let vasya = document.getElementById('vasya')

lesha.innerText = HelloLesha();
lesha.className = 'lesha';

petya.innerText = HelloPetya();
petya.className = 'petya';

vasya.innerText = HelloVasya();
vasya.className = 'vasya'

