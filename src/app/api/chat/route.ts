import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPEN_API_KEY || '',
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
      stream: true, // Streaming diaktifkan
    });

    // Buat ReadableStream untuk menangani streaming respons
    const readableStream = new ReadableStream({
      async start(controller) {
        for await (const chunk of stream) {
          // Encode chunk sebagai teks dan tambahkan ke stream
          controller.enqueue(
            new TextEncoder().encode(JSON.stringify(chunk))
          );
        }
        controller.close(); // Selesaikan streaming
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/event-stream',
      },
    });
  } catch (error) {
    console.error('Error in OpenAI request:', error);
    return new Response('Failed to fetch AI response', { status: 500 });
  }
}
