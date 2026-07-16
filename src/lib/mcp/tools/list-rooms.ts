import { defineTool } from "@lovable.dev/mcp-js";
import { rooms } from "@/data/rooms";

export default defineTool({
  name: "list_rooms",
  title: "List rooms",
  description:
    "List all rooms at Paço do Bispo boutique house with slug, name, short description, size, guest capacity, bed type and view.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = rooms.map((r) => ({
      slug: r.slug,
      name: r.name,
      count: r.count,
      short: r.short,
      size: r.size,
      guests: r.guests,
      bed: r.bed,
      view: r.view,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { rooms: summary },
    };
  },
});
