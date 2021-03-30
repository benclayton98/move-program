# 3rd Party Libraries

### Learning Objectives
- Use code from a third party library in a project
- Explain different testing strategies for third party code

### Intro

Let's use a 3rd party library, twilio, to send SMS messages to our phone!

## Instructions

- [ ] Follow the documentation to set up an account with [twilio](https://www.twilio.com/docs/sms/quickstart/node) You'll have to verify your email and phone number. You'll have a limited time on the free trial. Use the free credit to [search](https://www.twilio.com/docs/sms/quickstart/node#sign-up-for-twilio-and-get-a-twilio-phone-number) for a SMS enabled UK number.
- [ ] copy the twilio code into message.js
- [ ] Use the docs to send a message to yourself
- [ ] Now refactor the design and make an expectation that the methods were called.
- [ ] Use environment variables to store your auth credentials
- [ ] You'll know you have succeded when
  - your tests pass and no SMS messages are sent to your phone
  - you can run `node index.js` and send a message to your phone
  - all of your credentials and personal data is stored in environment variables

## Further work
- [ ] uncomment the two extra lines of code and explore how they work

### Resources
- [Jasmine Spies](https://jasmine.github.io/api/edge/Spy.html)
- [Jasmine Matchers](https://jasmine.github.io/api/edge/matchers.html)
- [Environment Variables](https://www.twilio.com/blog/2017/01/how-to-set-environment-variables.html)
