const products = [
    {
        id: 0,
        img:'/images/products/jugofresa.png',
        name: 'Jugo de fresa',
        price: 7000, 
        type: 'jugos',
        popularity: 9,
        new: 6,
        por: '200 ml',
        kcal: '178,9',
        prot: '4 gr',
        gra: '2 gr',
        carb: '39,4 gr',
        azu: '5 gr',
        description: 'Delicioso jugo de fruta 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',

    },

    {
        id: 1,
        img:'/images/products/jugogranadilla.png',
        name: 'Jugo de granadilla',
        price: 7000, 
        type: 'jugos',
        popularity: 13,
        new: 1,
        por: '200 ml',
        kcal: '119,1',
        prot: '2,4 gr',
        gra: '0,2 gr',
        carb: '30,2 gr',
        azu: '5 gr',
        description: 'Delicioso jugo de fruta 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',
        
    },

    {
        id: 2,
        img:'/images/products/jugonaranja.png',
        name: 'Jugo de naranja',
        price: 7000, 
        type: 'jugos',
        popularity: 5,
        new: 14,
        por: '200 ml',
        kcal: '151',
        prot: '2,1 gr',
        gra: '0,6 gr',
        carb: '36 gr',
        azu: '5 gr',
        description: 'Delicioso jugo de fruta 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',

        
    },

    {
        id: 3,
        img:'/images/products/jugomora.png',
        name: 'Jugo de mora',
        price: 7000, 
        type: 'jugos',
        popularity: 17,
        new: 10,
        por: '200 ml',
        kcal: '68,5',
        prot: '1,3 gr',
        gra: '0,2 gr',
        carb: '17 gr',
        azu: '5 gr',
        description: 'Delicioso jugo de fruta 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',
        


    },

    {
        id: 4,
        img:'/images/products/jugokiwi.png',
        name: 'Jugo de kiwi',
        price: 7000, 
        type: 'jugos',
        popularity: 1,
        new: 2,
        por: '200 ml',
        kcal: '169',
        prot: '2,5 gr',
        gra: '1 gr',
        carb: '41,5 gr',
        azu: '5 gr',
        description: 'Delicioso jugo de fruta 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',

    },

    {
        id: 5,
        img:'/images/products/manipasas.png',
        name: 'Maní con pasas',
        price: 5000, 
        type:'mani',
        popularity: 10,
        new: 15,
        por: '200 gr',
        kcal: '924',
        prot: '27,4 gr',
        gra: '50,4 gr',
        carb: '110,6 gr',
        azu: '5 gr',
        description: 'Delicioso maní con pasas 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',

    },

    {
        id: 6,
        img:'/images/products/manidulce.png',
        name: 'Maní dulce',
        price: 5000,
        type:'mani',
        popularity: 14,
        new: 11,
        por: '200 gr',
        kcal: '961',
        prot: '23,7 gr',
        gra: '49,7 gr',
        carb: '118,8 gr',
        azu: '5 gr',
        description: 'Delicioso maní dulce 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',
 
    },

    {
        id: 7,
        img:'/images/products/manisal.png',
        name: 'Maní con sal',
        price: 5000, 
        type:'mani',
        popularity: 18,
        new: 18,
        por: '200 gr',
        kcal: '1170',
        prot: '47,4 gr',
        gra: '99,4 gr',
        carb: '118,8 gr',
        azu: '5 gr',
        description: 'Delicioso maní con sal 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 8,
        img:'/images/products/manimixto.png',
        name: 'Maní mixto',
        price: 5000,
        type:'mani',
        popularity: 6,
        new: 3,
        por: '200 gr',
        kcal: '1172',
        prot: '40 gr',
        gra: '101,3 gr',
        carb: '45,7 gr',
        azu: '5 gr',
        description: 'Delicioso maní mixto 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',

 
    },

    {
        id: 9,
        img:'/images/products/manichocolate.png',
        name: 'Maní con chocolate',
        price: 5000, 
        type:'mani',
        popularity: 2,
        new: 7,
        por: '200 gr',
        kcal: '1078',
        prot: '32 gr',
        gra: '94 gr',
        carb: '64 gr',
        azu: '5 gr',
        description: 'Delicioso maní con chocolate 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 10,
        img:'/images/products/temanzanilla.png',
        name: 'Té de manzanilla',
        price: 2000,
        type:'te', 
        popularity: 15,
        new: 19,
        por: '0 gr',
        kcal: '0',
        prot: '0 gr',
        gra: '0 gr',
        carb: '0 gr',
        azu: '0 gr',
        description: 'Delicioso té de manzanilla 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 11,
        img:'/images/products/tefrutosrojos.png',
        name: 'Té de frutos rojos',
        price: 2000,
        type:'te',
        popularity: 7, 
        new: 16,
        por: '0 gr',
        kcal: '0',
        prot: '0 gr',
        gra: '0 gr',
        carb: '0 gr',
        azu: '0 gr',
        description: 'Delicioso té de frutos rojos 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',

 
    },

    {
        id: 12,
        img:'/images/products/tejengibre.png',
        name: 'Té de jengibre',
        price: 2000, 
        type:'te', 
        popularity: 20,
        new: 12,
        por: '0 gr',
        kcal: '0',
        prot: '0 gr',
        gra: '0 gr',
        carb: '0 gr',
        azu: '0 gr',
        description: 'Delicioso té de jengibre 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


 

    },

    {
        id: 13,
        img:'/images/products/tementa.png',
        name: 'Té de menta',
        price: 2000,
        type:'te',  
        popularity: 3,
        new: 8,
        por: '0 gr',
        kcal: '0',
        prot: '0 gr',
        gra: '0 gr',
        carb: '0 gr',
        azu: '0 gr',
        description: 'Delicioso té de menta 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 14,
        img:'/images/products/teuva.png',
        name: 'Té de uva',
        price: 2000, 
        type:'te',
        popularity: 11, 
        new: 4,
        por: '0 gr',
        kcal: '0',
        prot: '0 gr',
        gra: '0 gr',
        carb: '0 gr',
        azu: '0 gr',
        description: 'Delicioso té de uva 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 15,
        img:'/images/products/barrafrutos.png',
        name: 'Barra de frutos secos',
        price: 3000, 
        type:'barras', 
        popularity: 16,
        new: 20,
        por: '25 gr',
        kcal: '82',
        prot: '2,6 gr',
        gra: '3,1 gr',
        carb: '11,6 gr',
        azu: '5 gr',
        description: 'Deliciosa barra de frutos secos 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 16,
        img:'/images/products/barramiel.png',
        name: 'Barra de miel y avellana',
        price: 3000,
        type:'barras',
        popularity: 19,
        new: 13,
        por: '25 gr',
        kcal: '108',
        prot: '3,0 gr',
        gra: '5,0 gr',
        carb: '14,3 gr',
        azu: '5 gr',
        description: 'Deliciosa barra de miel y avellana 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


  
    },

    {
        id: 17,
        img:'/images/products/barracoco.png',
        name: 'Barra de coco',
        price: 3000, 
        type:'barras', 
        popularity: 4,
        new: 17,
        por: '25 gr',
        kcal: '99',
        prot: '2,7 gr',
        gra: '4,7 gr',
        carb: '12,5 gr',
        azu: '5 gr',
        description: 'Deliciosa barra de coco 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 18,
        img:'/images/products/barrachocolate.png',
        name: 'Barra de chocolate',
        price: 3000,
        type:'barras', 
        popularity: 8, 
        new: 9,
        por: '25 gr',
        kcal: '107',
        prot: '3,1 gr',
        gra: '6 gr',
        carb: '13,2 gr',
        azu: '5 gr',
        description: 'Deliciosa barra de chocolate 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

    {
        id: 19,
        img:'/images/products/barralimon.png',
        name: 'Barra de limón',
        price: 3000, 
        type:'barras',
        popularity: 12, 
        new: 5,
        por: '25 gr',
        kcal: '82',
        prot: '2,6 gr',
        gra: '3,0 gr',
        carb: '12,2 gr',
        azu: '5 gr',
        description: 'Deliciosa barra de limón secos 100% natural, sin conservantes artificiales, no es fuente significativa de calorías de grasa, colesterol y fibra dietaria.',


    },

];

module.exports = products;