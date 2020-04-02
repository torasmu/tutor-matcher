netlifyIdentity.on("login", user => {
  console.log("login", user);
  var id = user.get("id");
  // Try to get the airtable api
  fetch(
    "https://ecstatic-feynman-8d399f.netlify.com/.netlify/functions/getAirtableEntries"
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
  // location.href = "signup.html";
});
