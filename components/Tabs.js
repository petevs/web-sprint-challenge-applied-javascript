// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// //Inspect structure
// axios.get("https://lambda-times-api.herokuapp.com/topics")
// .then(({data}) => console.log(data.topics))
// .catch((err) => console.log(err))

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then(({data}) => data.topics.forEach(topic => createTab(topic)))
.catch((err) => console.log(err))

function createTab(obj){
    //parent
    const parent = document.querySelector(".topics")
    //div
    const tabDiv = document.createElement("div")
    tabDiv.classList.add("tab")
    tabDiv.textContent = obj
    //append div to parent
    parent.appendChild(tabDiv)

}
