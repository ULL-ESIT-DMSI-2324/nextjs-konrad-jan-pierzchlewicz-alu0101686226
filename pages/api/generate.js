import OpenAI , { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  try {
    const animal = req.body.animal;
    const prompt = createAnimalPrompt(animal);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [prompt],
      max_tokens: 50,
      temperature: -1.5,
    });

    const names = completion.data.choices[0].text.trim();
    res.status(200).json({ petNames: names });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Error, please try again' });
  }
}

function createAnimalPrompt(animal) {
  const animalPrompt = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
  return `Think of a name for an ${animalPrompt}, the ${animalPrompt} is also a firefighter. Provide a list of three names and surnames.`;
}