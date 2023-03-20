import civetPlugin from "@danielx/civet/esbuild-plugin";
import esbuild from "esbuild";

esbuild
  .build({
    entryPoints: ["src/index.civet"],
    bundle: true,
    platform: "node",
    outdir: "dist",
    target: "node18",
    plugins: [civetPlugin],
    external: ["dotenv", "@danielx/civet", "discord.js", "prettier"],
  })
  .catch(() => process.exit(1));
