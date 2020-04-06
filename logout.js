// This code will be executed on user logout
netlifyIdentity.on("logout", () => {
  // Redirect to index.html
  location.href = "index.html";
});
