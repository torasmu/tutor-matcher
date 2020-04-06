netlifyIdentity.on("login", user => {
  // Report user that logged in
  console.log("current user is ", user);
  console.log("current user id is ", user.id);
  // Try to get the airtable api
  fetch(window.location.origin + "/.netlify/functions/getAllUserIds")
    .then(response => {
      return response.json();
    })
    .then(x => {
      // Convert JSON string to array of IDs
      console.log("type of x: ", typeof x);
      console.log("x: ", x);

      var userHasAlreadyRegistered = x.includes(user.id);

      if (userHasAlreadyRegistered) {
        console.log("already registered");
      } else {
        console.log("forwarding to signup page");
        location.href = "signup.html";
      }

      return;
    });
});
