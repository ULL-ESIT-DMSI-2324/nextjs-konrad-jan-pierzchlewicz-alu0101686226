import OpenAI , { Configuration, OpenAIApi } from "openai";

const configuration = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAI(configuration);

export default async function (req, res) {
  try {
    const animal = req.body.animal;
    const prompt = createImagePrompt(animal);

    const response = await openai.image.generate({
      model: "dall-e-3", 
      prompt: prompt,
      n: 1, 
      size: "1024x1024" 
    });

    const image = response.data[0]; 
    res.status(200).json({ image: image });
  } catch (error) {
    console.error('Error: ', error);
    res.status(500).json({ message: 'Error, try again' });
  }
}

function createImagePrompt(animal) {
  const animalFormatted = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
  return `Think of a name for an ${animalPrompt}, the ${animalPrompt} is also a firefighter. Provide a list of three names and surnames`;
}