import { defineTool } from "@lovable.dev/mcp-js";
import { roomsInfo } from "../../../data/rooms-info";

export default defineTool({
  name: "list_rooms",
  title: "List rooms",
  description:
    "List all rooms at Paço do Bispo boutique house with slug, name, short description, guest capacity and bed type.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const summary = roomsInfo.map((r) => ({
      slug: r.slug,
      name: r.name,
      count: r.count,
      short: r.short,
      guests: r.guests,
      bed: r.bed,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(summary, null, 2) }],
      structuredContent: { rooms: summary },
    };
  },
});
