import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  try {
    // Get the animal from the request query parameters
    const { animal } = req.query;

    // Generate the prompt using the animal
    const prompt = generatePrompt(animal);

    // Call the OpenAI API to generate the response
    const response = await openai.complete({
      engine: 'davinci',
      prompt: prompt,     // prompt from `generatePrompt`
      maxTokens: 100,
      temperature: 0.7,
      n: 1,
      stop: '\n',
    });

    // Extract the generated text from the response
    const generatedText = response.choices[0].text.trim();

    // Send the generated text as the response
    res.status(200).json({ generatedText });
  } catch (error) {
    console.error(error);
    res.status(200).json({ result: completion.data.choices[0].text });
  }
}

function generatePrompt(animal) {
  const prompt = `I want to learn more about ${animal}. Can you tell me some interesting facts about ${animal}?`;
  console.log(prompt);
  return prompt;
}