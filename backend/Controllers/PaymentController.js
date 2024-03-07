const stripe = require("stripe")(process.env.STRIPE_TEST)

module.exports.RecievePayment = async (req, res) => {
    try{
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency
        });
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    }
    catch(error){
        res.status(400).send({error:error.message})
        console.error(error)
    }
};