import OpenAI from "openai";

export async function POST(req) {
  try {
    // Ensure the key exists
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI_API_KEY is missing");
      return new Response(
        JSON.stringify({ error: "Server missing OPENAI_API_KEY." }),
        { status: 500 }
      );
    }

    // Create client INSIDE the function
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { prompt } = await req.json();

    if (!prompt || !prompt.trim()) {
      return new Response(
        JSON.stringify({ error: "Missing prompt text." }),
        { status: 400 }
      );
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Pantry Pal. Keep responses under 200 words." },
        { role: "user", content: prompt },
      ],
      max_tokens: 200,
    });

    const text = completion.choices[0].message.content;

    return new Response(JSON.stringify({ text }), { status: 200 });
  } catch (error) {
    console.error("API ERROR:", error);
    return new Response(
      JSON.stringify({ error: "AI request failed." }),
      { status: 500 }
    );
  }
}
