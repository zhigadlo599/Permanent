#!/usr/bin/env node
// Remove audio track from public/hero-background.mp4 -> public/hero-background-silent.mp4
const { spawn } = require("child_process");
const path = require("path");
const ffmpegPath = require("ffmpeg-static");
const fs = require("fs");

const input = path.resolve(__dirname, "..", "public", "hero-background.mp4");
const output = path.resolve(__dirname, "..", "public", "hero-background-silent.mp4");

if (!fs.existsSync(input)) {
  console.error("Input file not found:", input);
  process.exit(2);
}

console.log("Using ffmpeg at:", ffmpegPath);
console.log("Stripping audio from:", input);

const args = ["-i", input, "-c", "copy", "-an", output];
const proc = spawn(ffmpegPath, args, { stdio: "inherit" });

proc.on("close", (code) => {
  if (code === 0) {
    console.log("Saved silent video to:", output);
    process.exit(0);
  } else {
    console.error("ffmpeg exited with code", code);
    process.exit(code || 1);
  }
});


