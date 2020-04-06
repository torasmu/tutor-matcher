netlifyIdentity.on("login", user => {
  console.log("login", user);
  // var id = user.get("id");
  // Try to get the airtable api
  fetch(window.location.origin + "/.netlify/functions/getAllUserIds")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  // location.href = "signup.html";
});
