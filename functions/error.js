exports.handler = (context, event, callback) => {
    const twiml = new Twilio.twiml.MessagingResponse();
    twiml.message('Sorry, something went wrong. Please try again.');
    return callback(null, twiml);
};
