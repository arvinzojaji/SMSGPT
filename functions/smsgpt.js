const OpenAI = require("openai");
exports.handler = async function (context, event, callback) {
    const twiml = new Twilio.twiml.MessagingResponse();
    const inbMsg = event.Body;
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });
    const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: inbMsg || "" }],
        n: 1
    })
    twiml.message(response.choices[0].message.content);
    callback(null, twiml);
};
