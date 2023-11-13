import OpenAI from "openai4"

const openai = new OpenAI();

async function main() {
    const list = await openai.models.list();

    for (const model of list) {
        console.log(model);
    }
}
main();