const app = require("express")();
const stripe = require("stripe")("sk_test_3UUnF2bN7KozwU4ytYlADBIi00jEFBPMYj");
const port=3003
app.use(require("body-parser").text());

app.get('/', (req, res) => res.send('Hello World!'))

app.post("/charge", async (req, res) => {
    try {
      let status = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      //hold ={}

      res.json(status);
    
     console.log(status)
    ;                                      
    } catch (err) {
      console.log(err);
      res.status(500).end();
    }
  });

  app.listen(9000, () => console.log("Listening on port 9000"));

 // app.listen(port, () => console.log(`Example app listening on port ${port}!`))