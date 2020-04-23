 

function signup() {
    // Get the current user id
    const user = netlifyIdentity.currentUser();
    console.log("current user is: ", user);
    let id = user.id;
    console.log("id is: ", id);

    // Pull the gender from the form
    let gender = document.getElementById("myForm").elements.namedItem("gender").value;
    console.log("gender is: ", gender);

    // TODO: we need to add all the form inputs
    // TODO: we should check that the input is valid here, like nothing in empty

    // Pass the data along to the Function to upload to Airtable
    fetch(
        window.location.origin + "/.netlify/functions/putFormData",
        {
            method: "POST",
            body: JSON.stringify({
                "id": id,
                "gender": gender
            })
        }
        )
    .then(response => {
        // If the response is OK, then forward the user along
        if (response.ok) {
            location.href = "dashboard.html";
        } else {
            console.log("Oops. Something went wrong.")
        }
    });
}