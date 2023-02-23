let historico = ""
let numero1 = ""
let numero2 = 0
let numero3 = 0
let ophistorico = "";


let resultado =document.querySelector('#resultado')
let number = document.querySelectorAll('.number')
let displayHistoric = document.querySelector('#last-calc')

let operations = document.querySelectorAll('.operation')

operations.forEach((n)=>{
    n.addEventListener('click',function(){
        if(n.id == '='){
            switch(ophistorico){
                case '+':
                    numero3 = parseFloat(numero1) + numero2;
                    break;
                  case '-':
                    numero3 = parseFloat(numero1) - numero2;
                    break;
                  case '*':
                    numero3 = parseFloat(numero1) * numero2;
                    break;
                  case '/':
                    numero3 = parseFloat(numero1) / numero2;
                  case '%':
                    numero3 = parseFloat(numero1) % numero2;
                  default:
                    numero3 = parseFloat(numero1)
                    break;
            }
            
            
                resultado.textContent = numero3
                historico = "" + numero3
                numero1 = historico 
                numero2 = 0
                numero3 = 0
                ophistorico = ""
               
            

        }else{
            if(n.id == "C"){
                console.log("teste")
                historico = ""
                numero1 = ""
                numero2 = 0
                numero3 = 0
                ophistorico = "";
                resultado.textContent = "0"
                displayHistoric.textContent = "0"
            }else if(n.id == "CE"){
                numero1 = ""
                historico = numero2 + ophistorico
                displayHistoric.textContent = historico
            }else if(historico.includes('+') || historico.includes('-') ||historico.includes('*') || historico.includes('/')){
                return
            }else{
                historico = historico +''+ n.id +''
                displayHistoric.textContent = historico
                numero2 = parseFloat(numero1)
                numero1 = "" 
                ophistorico = n.id
            }
            
        }
    
    })
})

number.forEach((n)=>{
    n.addEventListener('click',function(){
        if(n.textContent == "." && numero1.includes(".")){
            return
        }else{
            displayHistoric.textContent = historico
            historico = historico + n.textContent
            displayHistoric.textContent = historico
            
            numero1 = numero1 + n.textContent
        }
    })
})