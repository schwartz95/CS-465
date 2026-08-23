const tripEndpoint = "http://localhost:3000/api/trips";
const options = {
    method: "GET",
    headers: {
        Accept: "application/json"
  }
};
//var fs = require("fs");
// var trips = JSON.parse(fs.readFileSync("trips.json", "utf8"));

const travel = async function (req, res, next) {
    //console.log('TRAVEL CONTROLLER BEGIN);
    await fetch(tripEndpoint, options)
        .then((res )=> res.json())
        .then((json) => {
            //console.log('TRAVEL CONTROLLER END');
            res.render('travel', { title: 'Travlr Getaways', trips: json, message });
        })
        .catch((err) => res.status(500).json({ error: err.message }));
};

module.exports = {
  travel
};