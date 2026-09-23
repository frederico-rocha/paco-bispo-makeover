import loft1Asset from "@/assets/loft-1.jpg.asset.json";
const loftHero = loft1Asset.url;
const loftGallery = [loft1Asset.url];
import penthouse0534Asset from "@/assets/penthouse-053-4.jpg.asset.json";
import penthouse061Asset from "@/assets/penthouse-061.jpg.asset.json";
import penthouse065Asset from "@/assets/penthouse-065.jpg.asset.json";
import penthouse071Asset from "@/assets/penthouse-071.jpg.asset.json";
import penthouse062Asset from "@/assets/penthouse-062.jpg.asset.json";
import penthouse057Asset from "@/assets/penthouse-057.jpg.asset.json";
const penthouseHero = penthouse0534Asset.url;
const penthouseGallery = [
  penthouse061Asset.url,
  penthouse065Asset.url,
  penthouse071Asset.url,
  penthouse062Asset.url,
  penthouse057Asset.url,
];
import standard0262Asset from "@/assets/standard-026-2.jpg.asset.json";
import standard0272Asset from "@/assets/standard-027-2.jpg.asset.json";
import standard0302Asset from "@/assets/standard-030-2.jpg.asset.json";
import standard0312Asset from "@/assets/standard-031-2.jpg.asset.json";
const standardHero = standard0272Asset.url;
const standardGallery = [
  standard0262Asset.url,
  standard0302Asset.url,
  standard0312Asset.url,
];
import superior0322Asset from "@/assets/superior-032-2.jpg.asset.json";
import superior0342Asset from "@/assets/superior-034-2.jpg.asset.json";
import superior0372Asset from "@/assets/superior-037-2.jpg.asset.json";
import superior069Asset from "@/assets/superior-069.jpg.asset.json";
import superior072Asset from "@/assets/superior-072.jpg.asset.json";
import superior075Asset from "@/assets/superior-075.jpg.asset.json";
import superior079Asset from "@/assets/superior-079.jpg.asset.json";
import superior046Asset from "@/assets/superior-046.jpg.asset.json";
import superior052Asset from "@/assets/superior-052.jpg.asset.json";
import superior039Asset from "@/assets/superior-039.jpg.asset.json";
import superior121Asset from "@/assets/superior-121.jpg.asset.json";
import superior043Asset from "@/assets/superior-043.jpg.asset.json";
import superior044Asset from "@/assets/superior-044.jpg.asset.json";
const superiorHero = superior039Asset.url;
const superiorGallery = [
  superior039Asset.url,
  superior0322Asset.url,
  superior0342Asset.url,
  superior0372Asset.url,
  superior069Asset.url,
  superior072Asset.url,
  superior075Asset.url,
  superior079Asset.url,
  superior046Asset.url,
  superior052Asset.url,
  superior121Asset.url,
  superior043Asset.url,
  superior044Asset.url,
];
import deluxe1Asset from "@/assets/deluxe-102_1.jpg.asset.json";
import deluxeWc1Asset from "@/assets/deluxe-102_wc1.jpg.asset.json";
import deluxe017Asset from "@/assets/deluxe-017.jpg.asset.json";
import deluxe019Asset from "@/assets/deluxe-019-2.jpg.asset.json";
import deluxe023Asset from "@/assets/deluxe-023.jpg.asset.json";
import deluxe024Asset from "@/assets/deluxe-024.jpg.asset.json";
import deluxe084Asset from "@/assets/deluxe-084.jpg.asset.json";
import deluxe125Asset from "@/assets/deluxe-125.jpg.asset.json";
const deluxeHero = deluxe1Asset.url;
const deluxeGallery = [
  deluxe1Asset.url,
  deluxe017Asset.url,
  deluxe019Asset.url,
  deluxeWc1Asset.url,
  deluxe023Asset.url,
  deluxe024Asset.url,
  deluxe125Asset.url,
  deluxe084Asset.url,
];

import { roomsInfo, type RoomInfo } from "./rooms-info";

export type Room = RoomInfo & {
  hero: string;
  gallery: string[];
};

const images: Record<string, { hero: string; gallery: string[] }> = {
  standard: { hero: standardHero, gallery: standardGallery },
  deluxe: { hero: deluxeHero, gallery: deluxeGallery },
  superior: { hero: superiorHero, gallery: superiorGallery },
  penthouse: { hero: penthouseHero, gallery: penthouseGallery },
  loft: { hero: loftHero, gallery: loftGallery },
};

export const rooms: Room[] = roomsInfo.map((r) => ({
  ...r,
  hero: images[r.slug]?.hero ?? "",
  gallery: images[r.slug]?.gallery ?? [],
}));

export const getRoom = (slug: string) => rooms.find((r) => r.slug === slug);
