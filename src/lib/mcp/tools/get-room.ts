import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { getRoomInfo, roomsInfo } from "../../../data/rooms-info";

export default defineTool({
  name: "get_room",
  title: "Get room details",
  description:
    "Return full details for a single room by slug: description, amenities, capacity and bed type. Use list_rooms to discover valid slugs.",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe(`Room slug. One of: ${roomsInfo.map((r) => r.slug).join(", ")}`),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const room = getRoomInfo(slug);
    if (!room) {
      return {
        content: [
          {
            type: "text",
            text: `No room found with slug "${slug}". Available: ${roomsInfo
              .map((r) => r.slug)
              .join(", ")}.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(room, null, 2) }],
      structuredContent: { room },
    };
  },
});
