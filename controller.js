netlifyIdentity.on("login", user =>
  console.log("login", netlifyIdentity.currentUser())
);
