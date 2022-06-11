function calcarea(){
    const componente = document.querySelector('.componet');
    const x = altura.value;
    const y = largura.value;

    if(x==''&&y==''&&z==''){
        alert('Preencha todos os campos');
    }else{
   
    const result = (x * y) * 0.14;


    resultado.innerText = result.toFixed(2) ;
    componente.classList.add('active');
    }
}