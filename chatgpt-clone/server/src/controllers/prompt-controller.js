const OpenAIHelper = require ("openai")

module.exports = {
    async this.sendText(req, res){
        const openaiAPI = openai.configuration()
        try{
            const response = await openaiAPI.createCompletion(
                openai.textCompletion("me de nomes de artigos de node")
            )
            return res.status(200).json({sucess:true, data: response.data.choices[0].text})
        } catch (error){
            return res.status(400).json({
                sucess: false, error: error.response ? error.response : "There was an inssue on the server"
            })

        }
    }
}