// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

//For Inspecting
// axios.get("https://lambda-times-api.herokuapp.com/articles")
// .then(({data}) => console.log(data.articles))
// .catch((err) => console.log(err))



axios.get("https://lambda-times-api.herokuapp.com/articles")
.then(({data}) => {
    let topics = data.articles
    //because object and not array
    for (topic in topics){
        let articles = data.articles[topic]
        articles.forEach(article => createArticle(article))
    }
})
.catch((err) => console.log(err))


function createArticle(obj){
    //parent
    const cardsContainer = document.querySelector(".cards-container")

    //card div
    const card = document.createElement("div")
    card.classList.add("card")
    card.addEventListener("click",(e)=> console.log(obj.headline))

    //headline
    const headline = document.createElement("div")
    card.classList.add("headline")
    headline.textContent = obj.headline
    card.appendChild(headline)

    //author
    const authorDiv = document.createElement("div")
    authorDiv.classList.add("author")
    card.appendChild(authorDiv)

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")
    authorDiv.appendChild(imgContainer)

    const image = document.createElement("img")
    image.src = obj.authorPhoto
    imgContainer.appendChild(image)

    const authorName = document.createElement("span")
    authorName.textContent = `By ${obj.authorName}`
    authorDiv.appendChild(authorName)

    //Append to parent
    cardsContainer.appendChild(card)
}



//data.articles.forEach(topic => topic.forEach(article => createArticle(article)))


// const test = {
//     authorName: "FIDO WALKSALOT",
//     authorPhoto: "https://tk-assets.lambdaschool.com/1891c758-b3f4-4ec7-9d88-590bf7c7ceb2_fido.jpg",
//     headline: "Bootstrap 5: Get a Sneak Peak at all the New Features"
// }

// createArticle(test)