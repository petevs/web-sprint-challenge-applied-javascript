// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //parent
    const parent = document.querySelector(".header-container")

    //header div
    const headerDiv = document.createElement("div")
    headerDiv.classList.add("header")
    //span
    const date = document.createElement("span")
    date.textContent = "MARCH 28, 2020"
    //headline
    const headline = document.createElement("h1")
    headline.textContent = "Lambda Times"
    //temp
    const temp = document.createElement("span")
    temp.textContent = "98°"

    //Append span to header
    headerDiv.appendChild(date)
    headerDiv.appendChild(headline)
    headerDiv.appendChild(temp)

    //append header to parent
    parent.appendChild(headerDiv)
}

Header()
