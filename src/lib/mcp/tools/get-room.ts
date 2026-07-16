import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getRoom, rooms } from "@/data/rooms";

export default defineTool({
  name: "get_room",
  title: "Get room details",
  description:
    "Return full details for a single room by slug: description, amenities, size, capacity and view. Use list_rooms to discover valid slugs.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe(`Room slug. One of: ${rooms.map((r) => r.slug).join(", ")}`),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const room = getRoom(slug);
    if (!room) {
      return {
        content: [
          {
            type: "text",
            text: `No room found with slug "${slug}". Available: ${rooms
              .map((r) => r.slug)
              .join(", ")}.`,
          },
        ],
        isError: true,
      };
    }
    const { hero: _h, gallery: _g, ...data } = room;
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: { room: data },
    };
  },
});
