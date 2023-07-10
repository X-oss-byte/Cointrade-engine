# Cointrade-engine
# Create PaymentIntent
post https://api.payment.sandbox.coinify.com/v1/payment-intents

Coinify provides a hosted checkout user interface to enable the customer to make a payment regarding a specific PaymentIntent. Use the GET HTTP verb and redirect the customer to the paymentWindowUrl which is received in the successful response of this endpoint.

If you want to preselect a cryptocurrency before redirecting your customer to the Payment Window, first use this endpoint to create the PaymentIntent and get the URL, create a quote for the preferred cryptocurrency, and then redirect the end-user to the related paymentWindowUrl.

Property	Type	Description
id	string	The ID of the newly created PaymentIntent.
paymentWindowUrl	string	The URL to redirect the customer in order to use Coinify's payment window.
🦉

Merchant Integration

Open Recipe

Click Try It! to start a request and see the response here!