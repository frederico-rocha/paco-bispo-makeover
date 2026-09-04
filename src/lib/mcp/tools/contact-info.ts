import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get contact info",
  description:
    "Return contact details for Paço do Bispo boutique house: reservations email and location.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const info = {
      name: "Paço do Bispo Boutique House",
      reservationsEmail: "geral@pacodobispoboutiquehouse.com",
      location: "Sintra, Portugal",
      website: "https://pacodobispo.com",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(info, null, 2) }],
      structuredContent: info,
    };
  },
});
