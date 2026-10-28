/** Local response adapter for UI development; replace it with the private server chat endpoint later. */
const wait = (milliseconds: number) =>
	new Promise<void>((resolve) => window.setTimeout(resolve, milliseconds));

// Keep this predictable placeholder separate from the UI so it can later be replaced by a server request.
function createDemoReply(prompt: string): string {
	const quote = `“${prompt}”`;
	if (/bronce|website|site|zeus/i.test(prompt)) {
		return `I’m Zeus, a local demo assistant for bronce.org. You asked: ${quote}\n\nThis preview shows how a response will appear. Once connected to an AI service, I’ll be able to give a real answer about your site and projects.`;
	}
	return `Thanks for asking: ${quote}\n\nI’m Zeus, a local demo assistant, so I’m not connected to an AI model yet. This scripted reply previews the chat experience while the real assistant is being built.`;
}

/** Yield small text chunks so ZeusChat can display a natural-looking streamed reply. */
export async function* streamDemoResponse(prompt: string): AsyncGenerator<string> {
	await wait(650);
	const words = createDemoReply(prompt).match(/\S+\s*/g) ?? [];
	for (const word of words) {
		await wait(42);
		yield word;
	}
}
