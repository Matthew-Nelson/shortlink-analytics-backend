require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { Url, Click } = require('./models');

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.post('/shorten', async (req, res) => {
  const { long_url, custom_id } = req.body;
  const short_id = custom_id || Math.random().toString(36).substr(2, 8);
  const url = await Url.create({ long_url, short_id, custom_id });
  res.json({ short_url: `${req.protocol}://${req.get('host')}/${short_id}` });
});

app.get('/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ where: { short_id: shortId } });
  if (url) {
    await Click.create({ url_id: url.id, timestamp: new Date(), location: 'unknown', referrer: req.get('Referer') });
    res.redirect(url.long_url);
  } else {
    res.status(404).send('Not Found');
  }
});

app.get('/analytics/:shortId', async (req, res) => {
  const { shortId } = req.params;
  const url = await Url.findOne({ where: { short_id: shortId } });
  if (url) {
    const clicks = await Click.findAll({ where: { url_id: url.id } });
    res.json({ clicks });
  } else {
    res.status(404).send('Not Found');
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});