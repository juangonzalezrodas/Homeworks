//at() Devuelve el elemento en la posición que le digas
let arrAt = [10, 20, 30, 40];
console.log(arrAt.at(2));



//concat junta dos arrays y los devuelve como uno solo
let arrConcat1 = [1, 2];
let arrConcat2 = [3, 4];
console.log(arrConcat1.concat(arrConcat2)); 



// copyWithin()copia una parte del array y lo pega en otro lugar del mismo
let arrCopy = [1, 2, 3, 4, 5];
arrCopy.copyWithin(0, 3);
console.log(arrCopy);



// entries() da pares organizados en [posicion, valor] para reccorrer
let arrEntries = ['a', 'b', 'c'];
for (let [i, val] of arrEntries.entries()) {
console.log(i, val);
}



//every() revisa si todos cumplen la condicion
let arrEvery = [2, 4, 6];
console.log(arrEvery.every(x => x % 2 === 0));



//fill() rellena con un valor escogido desde una posicion hasta otra
let arrFill = [1, 2, 3, 4, 5];
arrFill.fill(1, 1, 3)
console.log(arrFill);



//filter() devuelve los que cumplen la condicion
let arrFilter = [5, 10, 15];
console.log(arrFilter.filter( x => x < 11))



//Find() devuelve el primer valor que cumple la condicion
let arrFind = [1, 3, 5, 7, 10];
console.log(arrFind.find(x => x > 3));



//findIndex() devuelve la posicion del primer valor que cumpla la condicion
let arrfindIndex = [1, 3, 5, 7];
console.log(arrfindIndex.findIndex(x => x > 3));



//findLast() devuelve el ultimo valor que cumple la condicion
let arrFindLast = [1, 3, 5, 7];
console.log(arrFindLast.findLast(x => x > 3));



//findLastIndex() devuelve la posicion del ultimo valor que cumple la condicion
let arrFindLastIndex = [1, 3, 5, 7];
console.log(arrFindLastIndex.findLastIndex(x => x > 3));



//flat() aplana arrays dentro de arrays
let arrFlat = [1, [2, [3]]];
console.log(arrFlat.flat(2));



//flatMAp() hace un map y luego aplana el resultado
let arrFlatMap = [1, 2, 3];
console.log(arrFlatMap.flatMap(x => [x, x * 2]));



//fprEach() recorre el array y ejecuta una funcion por cada elemento
let arrForEach = [1, 2, 3];
arrForEach.forEach(x => console.log(x * 2));



//Includes() devuelve true si el valor esta en el array
let arrIncludes = [1, 2, 3];
console.log(arrIncludes.includes(2)); 



//IndexOf() devuelve la posicion de un valor, si no esta devuelve -1
let arrIndexOf = [10, 20, 30];
console.log(arrIndexOf.indexOf(20));



//Join() une todo en un String con el separador que indiquemos
let arrJoin = ['a', 'b', 'c'];
console.log(arrJoin.join('-'));



//Keys() da un iterador con las posiciones
let arrKeys = ['x', 'y', 'z'];
for (let key of arrKeys.keys()) {
    console.log(key);
}



//lastIndexOf() devuelve la ultima posicion de un valor que le indiquemos
let arrLastIndexOf = [1, 2, 3, 2];
console.log(arrLastIndexOf.lastIndexOf(2));



//map() crea un nuevo array con los resultados nuevos al aplicar una funcion
let arrMap = [1, 2, 3];
console.log(arrMap.map(x => x * 2));



//pop() elimina el ultimo elemento del array lo devuelve
let arrPop = [1, 2, 3];
console.log(arrPop.pop()); // 3
console.log(arrPop);



//push() mete un elemento o mas al final del arreglo
let arrPush = [1, 2];
arrPush.push(3, 4);
console.log(arrPush);



//reduce() reduce todo a un solo valor aplicando una funcion
let arrReduce = [1, 2, 3];
console.log(arrReduce.reduce((a, b) => a + b, 0));



//reduceRight() hace lo mismo que reduce pero en sentido contrario(derecha a izquierda)
let arrReduceRight = [1, 2, 3];
console.log(arrReduceRight.reduceRight((a, b) => a - b));



//reverse() invierte el orden de los elementos del array
let arrReverse = [1, 2, 3];
arrReverse.reverse();
console.log(arrReverse);



//shift() elimina el primer elemento del array y lo devuelve
let arrShift = [1, 2, 3];
console.log(arrShift.shift()); // 1
console.log(arrShift);



//slice() corta un pedazo del array y lo devuelve sin modificar el original
let arrSlice = [1, 2, 3, 4];
console.log(arrSlice.slice(1, 3));



//some() devuelve true si al menos uno cumple la condicion
let arrSome = [1, 2, 3];
console.log(arrSome.some(x => x > 2));



//sort() ordena los elementos del array
let arrSort = [3, 1, 2];
arrSort.sort((a, b) => a - b);
console.log(arrSort);



//splice() quita o mete elementos en cualquier posicion del array
let arrSplice = [1, 2, 3];
arrSplice.splice(1, 1, 99);
console.log(arrSplice);



//locale() convierte a String con formato local
let arrLocale = [1000, 2000];
console.log(arrLocale.toLocaleString());



//toString() convierte el array a String
let arrToString = [1, 2, 3];
console.log(arrToString.toString());



// unshift() agrega uno o mas elementos al inicio del array
let arrUnshift = [2, 3];
arrUnshift.unshift(1);
console.log(arrUnshift);

//valuesof() itera sobre los valores del array
let arrValues = ['a', 'b', 'c'];
for (let val of arrValues.values()) {
    console.log(val);
}