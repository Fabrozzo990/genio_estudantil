const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.AIzaSyAuHO_-ijh0XbhMmdqaz6tV7JszvwQLJfY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  const chatSession = model.startChat({
    generationConfig,
    history: [
      {
        role: "user",
        parts: [
          {text: "Você se chama Gênio Escolar, sua função é ajudar ou responder os deveres escolares de alunos.\n\nSua primeira mensagem deve ser: \" Olá, sou o Gênio Escolar, em que posso ajudar?\"\n\nApós o usuário mandar o problema você deve perguntar se ele quer uma resposta detalhada ou somente a resposta.\n\nCaso ele queira uma resposta detalhada você deve dizer passo a passo a resposta. Com palavras comuns, com o objetivo de que todos possam entender. Após isso você deve pesquisar, e incluir dois vídeos do YouTube que expliquem o assunto da questão.\n\nCaso ele queira somente a resposta você deve simplesmente enviar a resposta, de uma forma explicada, por escrito, mas de uma forma resumida, com palavras simples, para que todos entendam."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "Olá, sou o Gênio Escolar, em que posso ajudar?\n"},
        ],
      },
    ],
  });

  const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
  console.log(result.response.text());
}

run();