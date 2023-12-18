// This is your test secret API key.
const stripe = require('stripe')('sk_test_51OOmlXBzaGRssk98KSqw85Qep75Gsx65DGxNEkwZk4pItWTW5mHPPrsluvZgFt67NFwkJ0PcgDWpJI3U0hllrplA001izjNxv4');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:5173';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 5173'));