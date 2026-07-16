import { defineMcp } from "@lovable.dev/mcp-js";
import listRoomsTool from "./tools/list-rooms";
import getRoomTool from "./tools/get-room";
import contactInfoTool from "./tools/contact-info";

export default defineMcp({
  name: "paco-do-bispo-mcp",
  title: "Paço do Bispo",
  version: "0.1.0",
  instructions:
    "Public tools for Paço do Bispo boutique house in Sintra. Use `list_rooms` to browse available rooms, `get_room` for full details of a room by slug, and `get_contact_info` for reservations and location.",
  tools: [listRoomsTool, getRoomTool, contactInfoTool],
});
