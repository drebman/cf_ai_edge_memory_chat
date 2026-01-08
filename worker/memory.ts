export class Memory {
  state: DurableObjectState;

  constructor(state: DurableObjectState) {
    this.state = state;
  }

  async fetch(req: Request, env: any) {
    const { message } = await req.json();
    const history = (await this.state.storage.get("history")) || [];

    history.push({ role: "user", content: message });

    const response = await env.AI.run("@cf/meta/llama-3.3-70b-instruct", {
      messages: history,
    });

    history.push({ role: "assistant", content: response.response });

    await this.state.storage.put("history", history);

    return new Response(JSON.stringify({ reply: response.response }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
