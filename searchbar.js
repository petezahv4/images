let postsData = "";
const postsContainer = document.querySelector(".services__container");
fetch(
  "https://gist.githubusercontent.com/jemimaabu/564beec0a30dbd7d63a90a153d2bc80b/raw/0b7e25ba0ebee6dbba216cfcfbae72d460a60f26/tutorial-levels"
).then(async (response) => {
  postsData = await response.json();
  postsData.map((post) => createPost(post));
});
const createPost = (postData) => {
  const { title, link, image, categories } = postData;
  const post = document.createElement("div");
  post.className = "post";
  post.innerHTML = ` 
<a class="post-preview" href="${link}" target="_blank"> 
<img class="post-image" src="${image}"> 
</a> 
<div class="post-content"> 
<p class="post-title">${title}</p> 
<div class="post-tags"> 
${categories
            .map((category) => {
              return '<span class="post-tag">' + category + "</span>";
            })
            .join("")} 
</div> 
</div> 
`;
  postsContainer.append(post);
};
  let searchResults = [...postsData].filter(
    (post) =>
      post.categories.some((category) => category.toLowerCase().includes(searchQuery)) ||
      post.title.toLowerCase().includes(query)
  );
const searchDisplay = document.querySelector(".search-display");
if (searchResults.length == 0) {
    searchDisplay.innerHTML = "No results found"
} else if (searchResults.length == 1) {
    searchDisplay.innerHTML = `1 result found for your query: ${query}`
} else {
    searchDisplay.innerHTML = `${searchResults.length} results found for your query: ${query}`
}
