//Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).

const myArraySpesa = ['latte', 'pane', 'farina', 'uova', 'birra', 'frutta', 'verdura','sale', 'zucchero','pasta'];

//ciclo for
const outputFor = document.getElementById('output-for');

for(let i=0; i<myArraySpesa.length; i++){
  outputFor.innerHTML += 'L\'articolo '+ myArraySpesa[i]+' ricopre la posizione '+(i+1)+' nella lista; <br>';
}

//ciclo while
const outputWhile = document.getElementById('output-while');

let c=0;
while(c<myArraySpesa.length){
  outputWhile.innerHTML += 'L\'articolo '+ myArraySpesa[c]+' ricopre la posizione '+(c+1)+' nella lista; <br>';
  c++;
}