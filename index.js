import OpenAI from 'openai'

const OPENAI_API_KEY = "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"
const client = new OpenAI({
    apiKey: OPENAI_API_KEY,
})

const stream = await client.responses.create({
    model: "gpt-4.1",
    input: "write a story about a robot",
    temperature: 0.7,
    max_output_tokens : 50,
    stream:true

})
// async iterate
for await (const event of stream) {
    if(event.delta)
    console.log(event.delta)
}