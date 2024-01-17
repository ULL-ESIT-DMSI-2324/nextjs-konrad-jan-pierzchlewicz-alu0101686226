import OpenAI, { Configuration, OpenAIApi } from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
export default async function (req, res) {
  const response = await openai.images.generate({
    model: "dall-e-3",
    prompt: req.body.name,
    n: 1,
    size: "1024x1024",
  });
  return res.status(200).json({ image: response.data[0].url });
}