export default {
  async fetch(req: Request, env: any) {
    const { message, sessionId } = await req.json();

    const id = env.MEMORY.idFromName(sessionId);
    const stub = env.MEMORY.get(id);

    return stub.fetch("https://memory/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });
  }
};
