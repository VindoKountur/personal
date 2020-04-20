const axios = require('axios');
const webpush = require('web-push');

exports.pushQuotes = (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;
  
  axios.get('https://quotes.rest/qod?language=en').then(response => {
    const data = response.data.contents.quotes[0];
    const displayQuote = `${data.quote} - ${data.author}`;
    
    // Create payload
    const payload = JSON.stringify({ title: data.title, body: displayQuote });

    // Pass object into sendNotification
    webpush
      .sendNotification(subscription, payload).then(() => {
        // Send 201 - resource created
        res.status(201).json({});
      })
      .catch(err => console.error(err));
  });
}