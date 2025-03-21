// pour afficher les donner d'un tableux avec deux methode

// methode 1 :
const voiture = ['BMW' , 'Dacia' , 'Rono' , 'BagirA']

const affichage = (value , key) => {
    //console.log(`${key} : ${value}`);
}

voiture.forEach(affichage)


// methode 2 :

for (let i = 0 ; i < voiture.length ; i++){
    //console.log(`${i} : ${voiture[i]}`);
}



// les fonctions de tableau

// ----function map ---- :  pour modifier les element d'un tableaux ------------------------------------------

let mapNumber = [1 , 2 , 3] 


mapNumber = mapNumber.map(function(value){
    return value * 5
})
console.log("fuction map : "+ mapNumber)


// ----function filter ---- :  pour filtrer les element d'un tableaux ---------------------------------------------

let filterNumber = [1 , 2 , 3] 

filterNumber = filterNumber.filter(function(value){
    return value <= 2
})
console.log("fuction filter : "+ filterNumber) 


// ----function some ---- :  kat3teha wahd param okat9leb 3leh f table wach kayn ila kan ktrje3 lik true makaanch ktrje3 lik false  ---------------------------------------------

let someNumber = [1 , 2 , 3] 

someNumber = someNumber.some(function(value){
    return value === 'x'
})
console.log("fuction some : " + someNumber)


// ----function every ---- :  katt3teha wahd l parametre okhssha tkon mteb9a 3la kolchi les elements dyal table  ---------------------------------------------

let everyNumber = [1 , 2 , 3]
everyNumber =  everyNumber.every(function(value){
    return value > 0
})
console.log("fuction every : "+everyNumber)


// ----function fill ---- : kifache n3mro un tableau ------------------------------------------------------

let fillNumber = [1 , 2 , "ahmed"]

fillNumber = fillNumber.fill('zizo' , 0 , 1)

console.log("fuction fille : "+fillNumber)



// ----function reduce ---- : had fuction katkhlet lik les elements okat3tik wahd element    ------------------------------------------------------
// ---               => kat3teha deux param sum et value okader binatha naw3 dyal tkhlita
// ---               => o mn be3d kat3tah mn ina case khssha tbda

let reduceNumber = [1 , 2 , "ahmed"]

reduceNumber = reduceNumber.reduce(function(sum,value){
    return sum + value
},0)

console.log("fuction reduce : "+reduceNumber)