const axios = require("axios");
const ApiNewsKey = process.env.APIKEY_NEWS;
const newsURL = `https://newsapi.org/v2/top-headlines?q=covid-19&q=corona&country=id&apiKey=${ApiNewsKey}`;
exports.getCovidNews = async (req, res) => {
  try {
    axios.get(newsURL).then(response => {
      return res.json({
        success: true,
        news : response.data.articles
      });
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      stauts: "Server error 😴😴😴",
      error: err
    });
  }
};
