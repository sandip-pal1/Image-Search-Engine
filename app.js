const accessKey = "JVruhyRFnghQebAa1-56XtXb0VKyHgpfIad2g6bjpxs";

const searchFrom = document.getElementById("search-from");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMore = document.getElementById("show-more");


let keyword = "";
let page = 1 ;

async function  searchImage() {
    keyword = searchBox.value ;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

    const responce = await fetch(url);
    const data = await responce.json();
    const results = data.results;

    if(page === 1){
        searchResult.innerHTML = "";
    }

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
    })
    
}

searchFrom.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();

});

showMore.addEventListener("click", () => {
    page ++;
    searchImage();
});