import OpenAI , { Configuration, OpenAIApi } from "openai";
// kutas
const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

export default async function (req, res) {
  try {
    const animal = req.body.animal;
    const prompt = createAnimalPrompt(animal);

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [prompt],
      max_tokens: 9,
      temperature: -1.5,
    });

    const names = completion.data.choices[0].text.trim();
    res.status(200).json({ petNames: names });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Error, try again' });
  }
}

function createAnimalPrompt(animal) {
  const animalFormatted = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
  return `Invent unique and clever names for a ${animalFormatted} that is also a medieval heroe. Provide a list of three names and surnames. Make one of them always "PiPo" and invent a crazy excuse as why.`;
}