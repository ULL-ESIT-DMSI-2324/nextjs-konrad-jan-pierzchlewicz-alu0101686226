import OpenAI, { Configuration, OpenAIApi } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function (req, res) {
  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    max_tokens: 7,
    temperature: 0,
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: generatePrompt(req.body.animal) },
    ],
  });
  console.log(completion.choices)
  res.status(200).json({ result: completion.choices[0].message.content});
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}