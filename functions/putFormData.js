var Airtable = require("airtable");
var apiKey = process.env.AIRTABLE_API_KEY;
var baseId = process.env.AIRTABLE_BASE_ID;
var table = process.env.AIRTABLE_TABLE_NAME;
var base = new Airtable({ apiKey: apiKey }).base(baseId);
exports.handler = function(event, context, callback) {

  // Pull the data out that we passed in from before
  let data = JSON.parse(event.body);
  let id = data.id;
  let gender = data.gender;

  // Put the data that got passed in into the table.
  base('Table 1').create([
  {
    "fields": {
      "id": id,
      "gender": gender
    }
  }
  ], function(err, records) {
    if (err) {
      console.error(err);
      return;
    }
    console.log("records: ", records);
    return callback(null, {
      statusCode: 200,
      body: "Success!"
    });
});
};
