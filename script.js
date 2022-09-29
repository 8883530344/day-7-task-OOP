var request= new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for (var i=0; i<result.length; i++)
    console.log(result[i]);

//  Get all the countries from the Asia continent /region using the Filter function
var result1=result.filter((ele)=>ele.region==="Asia");
console.log(result1);

// Get all the countries with a population of less than 2 lakhs using Filter function
var popu =result.filter((ele)=>ele.population<200000);
console.log(popu);

// Print the following details name, capital, flag using forEach function

 result.forEach((element)=>console.log(element.name)+console.log(element.capital)+console.log(element.flag));


//  Print the total population of countries using reduce function
var result4=result.reduce((acc,cv)=>acc+cv.population,0);
console.log(result4);

// Print the country which uses US Dollars as currency.
var result4=result.filter((ele)=>ele.currencies);
console.log(result4);
}
