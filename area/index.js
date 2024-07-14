function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  var allMeals = [];
  async function getRandomMeal() {
    console.log("hi");
    var meals = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    var finalData = await meals.json();
    // console.log(finalData.meals);
    allMeals=finalData.meals;
    displayMeals();
    
  }
  getRandomMeal();
  
  function displayMeals() {
    var mealsData=``;
    console.log(`allMeals.length`,allMeals.length);
    for (var i=0;i<allMeals.length;i++){
      mealsData+=`<div class="col-md-3">
                          <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                              <img class="image" src="<i class="fa-solid fa-house-laptop fa-4x"></i>" alt="">
                              <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                  <h3>${allMeals[i].strArea}</h3>
                                  <p></p>
                              </div>
                          </div>
                      </div>`
    }
    console.log('mealsData',mealsData);
    document.getElementById('screenData').innerHTML=mealsData;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  