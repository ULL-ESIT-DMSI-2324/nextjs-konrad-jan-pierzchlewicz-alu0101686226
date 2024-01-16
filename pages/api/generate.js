import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  try {
    const animal = req.body.animal;
    const prompt = createAnimalPrompt(animal);

    const completion = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      max_tokens: 100,
      temperature: 0.5,
    });

    const names = completion.data.choices[0].text.trim();
    res.status(200).json({ petNames: names });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Error processing your request' });
  }
}

function createAnimalPrompt(animal) {
  const animalFormatted = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
  return `Invent unique and clever names for a ${animalFormatted} that is also a superhero. Provide a list of three names.`;
}