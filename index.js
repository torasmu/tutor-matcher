netlifyIdentity.on("login", user => {
  console.log("login", user);
  // var id = user.get("id");
  // Try to get the airtable api
  fetch("https://tutor-matcher.netlify.com/.netlify/functions/getAllUserIds")
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  // location.href = "signup.html";
});
