// post.js
document.addEventListener("DOMContentLoaded", () => {
  // Get the post ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"));

  // Find the post with the matching ID
  const post = posts.find(p => p.id === postId);

  if (post) {
    // Update the page title
    document.title = `${post.title} - Basith Paravoor`;

    // Update the HTML elements with post data
    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-meta").textContent = post.meta;
    document.getElementById("post-image").src = post.image;
    document.getElementById("post-body").innerHTML = post.content;
  } else {
    // Handle case where post is not found
    document.getElementById("post-title").textContent = "Post Not Found";
    document.getElementById("post-meta").textContent = "";
    document.getElementById("post-image").style.display = "none";
    document.getElementById("post-body").innerHTML = "<p>The blog post you're looking for doesn't exist.</p>";
  }

  // Back button functionality
  const backLink = document.querySelector(".back-link");
  if (backLink) {
    backLink.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.back();
    });
  }
});