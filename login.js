// This code will be executed when the user logs in
netlifyIdentity.on("login", user => {
  // Print user that logged in
  console.log("current user is ", user);
  console.log("current user id is ", user.id);
  // Call the getAllUserIds.js function
  fetch(window.location.origin + "/.netlify/functions/getAllUserIds")
    .then(response => {
      // Convert the String response to an Array
      return response.json();
    })
    .then(arrayOfUserIds => {
      // Check if our Airtable already has this user's info
      var userHasAlreadyRegistered = arrayOfUserIds.includes(user.id);

      if (userHasAlreadyRegistered) {
        console.log("already registered");
      } else {
        console.log("forwarding to signup page");
        location.href = "signup.html";
      }

      return;
    });
});
