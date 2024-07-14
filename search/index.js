async function searchMeal(term) {
    try {
      if (term === '') return;
      // Clear previous results
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';
  
      // Fetch data from the API
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      
  
      // Display the results
      data.meals.forEach(meal => {
        const listItem = document.createElement('div');
        listItem.innerHTML = `
                            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                                <img class="image" src="${meal.strMealThumb}" alt="">
                                <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                                    <h3>${meal.strMeal}</h3>
                                </div>
                            </div>`;
        listItem.classList.add('col-md-2');
        listItem.style.margin = '5px'
        resultsContainer.appendChild(listItem);
      });
  
    } catch (error) {
      console.error('Error fetching data:', error);
      // Optional: Display a message to the user or handle the error gracefully
    }
  }
  
  // Event listener for input field
  const searchTermInput = document.getElementById('searchTerm');
  searchTermInput.addEventListener("input", function() {
    const term = this.value.trim();
    if (term.length > 0) {
      searchMeal(term);
    } else {
      // Clear results if search term is empty
      const resultsContainer = document.getElementById('results');
      resultsContainer.innerHTML = '';
    }
  });
  
  