
let showListCat = document.getElementById("subList")
let showListContact = document.getElementById("subListTwo")
let showBar = document.getElementById("showBar")


function showListOne(){
    showListCat.classList.toggle("showList")
}
function showListTwo(){
    showListContact.classList.toggle("showListTwoContact")
}
function showM(){
    showBar.classList.toggle("showBar")
}


// data collections 

let data = [
    {id:1, Pname:"IQ Pro", Price:20000, Pimage:"images/mobile1.webp", category:"mobile"},
    {id:2, Pname:"IQ 5g", Price:19000, Pimage:"images/mobile2.webp", category:"mobile"},
    {id:3, Pname:"Samsung M4", Price:18000, Pimage:"images/mobile3.webp", category:"mobile"},
    {id:4, Pname:"Google Pixel", Price:50000, Pimage:"images/mobile4.webp", category:"mobile"},
    {id:5, Pname:"Google Pro", Price:80000, Pimage:"images/mobile5.webp", category:"mobile"},
    {id:6, Pname:"US Polo", Price:1000, Pimage:"images/shirt1.webp", category:"shirt"},
    {id:7, Pname:"Khadi", Price:1500, Pimage:"images/shirt2.webp", category:"shirt"},
    {id:8, Pname:"Wrogn", Price:800, Pimage:"images/shirt3.webp", category:"shirt"},
    {id:9, Pname:"Wrogn", Price:1200, Pimage:"images/shirt4.webp", category:"shirt"},
    {id:10, Pname:"Bata", Price:1000, Pimage:"images/shoes1.webp", category:"shoes"},
    {id:11, Pname:"Jack & Jones", Price:2000, Pimage:"images/shoes2.webp", category:"shoes"},
    {id:12, Pname:"Us Polo", Price:1200, Pimage:"images/shoes3.webp", category:"shoes"},
    {id:13, Pname:"Sonata", Price:500, Pimage:"images/watch1.webp", category:"watch"},
    {id:14, Pname:"Timex", Price:800, Pimage:"images/watch2.webp", category:"watch"},
    {id:15, Pname:"Titan", Price:500, Pimage:"images/watch3.webp", category:"watch"},
    {id:16, Pname:"Dress", Price:900, Pimage:"images/wdress1.webp", category:"women"},
    {id:17, Pname:"Dress", Price:1000, Pimage:"images/wdress2.webp", category:"women"},
    {id:18, Pname:"Dress", Price:1200, Pimage:"images/wdress3.webp", category:"women"},
    
]


let totalData = data.map((items)=>{
    return(
        `
        <div class="pic">
        <img src = ${items.Pimage}>
        <h3>${items.Pname}</h3>
        <p>${items.category}</p>
        <p>Rs:${items.Price}</p>
        </div>
        `
    )
});

document.getElementById("mydata").innerHTML=totalData;


// filter data 

function filterData(cat){
    let filterItem = data.filter((currentCat)=>{
        return cat === currentCat.category
    });

    let totalData = filterItem.map((item)=>{
        return(
            `
            <div class="pic">
            <img src = ${item.Pimage}>
            <h3>${item.Pname}</h3>
            <p>${item.category}</p>
            <p>Rs:${item.Price}</p>
            </div>
            `
        )
    })
    document.getElementById("mydata").innerHTML=totalData;

}


// for search box


function notWork(){
    // let noWork = document.getElementById("iconTwo");
    alert("sorry! this button is in under process")
}