import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const sourceRoot = path.resolve("src");
const publicRoot = path.resolve("public");
const sourceOrigin =
  "https://id-preview--ccd2fcfe-d170-4845-b20e-a2f72513ad70.lovable.app";
const pagesBase = "/paco-bispo-makeover/";

async function findAssetManifests(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const absolutePath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await findAssetManifests(absolutePath)));
    } else if (entry.name.endsWith(".asset.json")) {
      files.push(absolutePath);
    }
  }

  return files;
}

async function prepareAsset(manifestPath) {
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

  if (!manifest.url?.startsWith("/__l5e/assets-v1/")) {
    return;
  }

  const response = await fetch(new URL(manifest.url, sourceOrigin));

  if (!response.ok) {
    throw new Error(
      `Failed to download ${manifest.original_filename}: ${response.status}`,
    );
  }

  const targetPath = path.join(publicRoot, manifest.url.replace(/^\/+/, ""));
  await mkdir(path.dirname(targetPath), { recursive: true });
  await writeFile(targetPath, Buffer.from(await response.arrayBuffer()));

  manifest.url = `${pagesBase}${manifest.url.replace(/^\/+/, "")}`;
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

const manifests = await findAssetManifests(sourceRoot);

for (let index = 0; index < manifests.length; index += 8) {
  await Promise.all(manifests.slice(index, index + 8).map(prepareAsset));
}

console.log(`Prepared ${manifests.length} Lovable assets for GitHub Pages.`);
