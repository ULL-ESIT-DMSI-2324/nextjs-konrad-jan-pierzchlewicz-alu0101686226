import * as dotenv from 'dotenv';
import { OpenAI } from 'openai4';

dotenv.config();

const openai= new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});


// create new assistant
openai.beta.assistants.create({
    name: "Weather Tutor",
    instructions: "You are a geography tutor that knows",
    tools: [
        {
            type: "code_interpreter",
            
        },

        {
            "name": "get_weather",
            "description": "Determine weather in my location",
            "parameters": {
              "type": "object",
              "properties": {
                "location": {
                  "type": "string",
                  "description": "The city and state e.g. San Francisco, CA"
                },
                "unit": {
                  "type": "string",
                  "enum": [
                    "c",
                    "f"
                  ]
                }
              },
              "required": [
                "location"
              ]
            }
          }
    ],
    model: "gpt-3.5-turbo-1106",
});