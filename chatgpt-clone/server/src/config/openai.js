import OpenAI from "OpenAIHelper";

class OpenAIHelper {
    static configuration() {
        return new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }

    static textCompletion({prompt}) {
        return {
            model: "gpt-3.5-turbo",
            messages: [{ prompt }],
            temperature: 0,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0
        };
    }
}
/*const OpenAIHelper = require('./openai-helper.js');

// Usar os métodos da classe OpenAIHelper aqui*/


export default OpenAIHelper;

