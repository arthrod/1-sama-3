import { createCanvas } from "canvas";
import fs from "fs";

// Create a 32x32 canvas
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext("2d");

// Set background (merlot color)
ctx.fillStyle = "#541e23";
ctx.fillRect(0, 0, 32, 32);

// Set text properties
ctx.fillStyle = "#faf9f7";
ctx.font = '18px "Great Vibes", cursive';
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// Draw "Sá" text
ctx.fillText("Sá", 16, 16);

// Convert to PNG buffer
const buffer = canvas.toBuffer("image/png");

// Write the file
fs.writeFileSync("src/app/favicon.ico", buffer);

console.log("favicon.ico created successfully!");
