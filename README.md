# Edge Memory Chat (Cloudflare AI)

Edge Memory Chat is an AI-powered chat application built on Cloudflare that runs entirely at the edge. It uses Workers AI with Llama 3.3, Durable Objects for persistent memory, and Cloudflare Pages for the UI.

## Features
- LLM-powered chat using Llama 3.3 (Workers AI)
- Persistent per-user memory using Durable Objects
- Edge-first architecture with Cloudflare Workers
- Simple browser-based chat interface

## Tech Stack
- Cloudflare Workers
- Workers AI (Llama 3.3)
- Durable Objects
- Cloudflare Pages
- TypeScript

## Running Locally
1. Install Wrangler
2. Run `wrangler dev`
3. Open the local URL in your browser

## Deployment
1. Deploy the Worker with `wrangler deploy`
2. Deploy Pages frontend via Cloudflare Pages
3. Update frontend API URL if needed

## How It Works
Each user session maps to a Durable Object that stores recent messages. Incoming chat messages are sent to the Worker, which retrieves memory from the Durable Object, calls the LLM, then stores the updated conversation state.
