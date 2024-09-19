document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(evento){
        evento.preventDefault();
        let numeroMaximo=document.getElementById('numero-maximo').value; 
        numeroMaximo=parseInt( numeroMaximo);  
        
        let numeroaleatorio=Math.random()*numeroMaximo;
        
        numeroaleatorio=Math.floor(numeroaleatorio+1);
       
        document.getElementById('resultado-valor').innerText=numeroaleatorio;

        document.querySelector('.resultado').style.display='block';

    })
})