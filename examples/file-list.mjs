import OpenAI from "openai4";

const openai = new OpenAI();

async function main() {
  const list = await openai.files.list();

  console.log(list)
  for await (const file of list) {
    console.log(file);
  }
}

main();