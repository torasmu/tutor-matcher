var Airtable = require("airtable");
var key = "key4NpGO6wBYyX3Ca";
var base = new Airtable({ apiKey: key }).base("appVCgPdvws9nVFzV");
exports.handler = function(event, context, callback) {
  // your server-side functionality
  base("Table 1")
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: "Grid view"
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function(record) {
          console.log("Retrieved", record.get("email"));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  return callback(null, {
    statusCode: 200,
    body: "Hello, World"
  });
};
