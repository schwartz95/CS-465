var fs = require('fs');
var newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));

/* GET news view */
const newsList = (req, res) => {
    res.render('news', {
        title: "Travlr Getaways",
        activeNews: true,
        latestNews: newsData.latestNews,
        vacationTips: newsData.vacationTips
    });
};

module.exports = {
    newsList
};
