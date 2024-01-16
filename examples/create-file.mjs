import fs from "fs";
import OpenAI from "openai4";

const openai = new OpenAI();

async function main() {
  const file = await openai.files.create({
    file: fs.createReadStream("example.jsonl"),
    purpose: "fine-tune",
  });

  console.log(file);
}

main();