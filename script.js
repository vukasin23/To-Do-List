

function dodaj()
{

    //UZIMANJE IZ TEXT INPUTA(TEXT BOX)
    let stvarKojuTrebaUraditi = document.getElementById('Dodaj');
    stvarKojuTrebaUraditi = stvarKojuTrebaUraditi.value;
    
    // STAVLJANJE IZ stvarKojuTrebaUraditi U StvarKoju RADIM KOJA JE ELEMENT P
    let stvarKojuRadim = document.createElement('p');
    stvarKojuRadim.innerText = stvarKojuTrebaUraditi;
    //STVALJANJE U DIV I KREIRANJE DIVA
    
    let div = document.createElement('div');
   
    div.innerHTML=`<p class="todoItem">${stvarKojuRadim.innerText}<p> <button class="brisanje" onclick="brisanje()">X</button> `;
    div.setAttribute('id','todo');
    div.setAttribute('onclick','uradjeno(this)');

    

    document.body.appendChild(div);
    console.log(div.innerText);
    
    
}





function brisanje()
{
    let izbrisi = document.getElementById('todo');
    
    izbrisi.remove();
}

function uradjeno(id)
{

   id.style.backgroundColor = 'red';
   
}