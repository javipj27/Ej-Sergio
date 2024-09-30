function onlyUniques(...argumentos){
    const set = new Set(argumentos);
    return Array.from(set);
}

function squareAndSum(...argumentos){
    let cuadrados=0;
    for(let i=0;i<argumentos.length;i++){
        cuadrados += Math.pow(argumentos[i],2);
    }
    return cuadrados;
}