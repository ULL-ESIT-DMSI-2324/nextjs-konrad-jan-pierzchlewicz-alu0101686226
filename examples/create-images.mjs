import OpenAI from "openai4";

const openai = new OpenAI();

async function main() {
  const image = await openai.images.generate({ model: "dall-e-3", prompt: "A hyena on the dessert" });

  console.log(image.data);
}
main();