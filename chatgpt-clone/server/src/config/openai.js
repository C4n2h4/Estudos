const {Configuration, OpenAIApi 
} = require("openai")

module.exports = class openai{
    static Configuration(){
        const configuration = Configuration({
            apiKey: process.env.OPENAI_API_KEY
        });
        return new OpenAIApi(configuration)
    }
    static textCompletion ({prompt}){
    return{
            
    model: "davinci-002",
    prompt: `${prompt}`,
    temperature: 0,
    max_tokens: 3500,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,

    }
    }
}

export default OpenAIHelper;

