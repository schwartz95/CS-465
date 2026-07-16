var fs = require('fs');
var rooms = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const roomsList = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways", activeRooms: true, rooms });
};

module.exports = {
    roomsList
};
