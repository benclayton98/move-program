class Message {
  constructor(client) {
    this.client = client || require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  send(total) {
    this.client.messages
      .create({
         body: `Your total is ${total}`,
         from: process.env.TWILIO_UK_NUMBER,
         to: process.env.PERSONAL_NUMBER
       })
      //.then(message => console.log(message.sid));
  }
}

module.exports = Message
