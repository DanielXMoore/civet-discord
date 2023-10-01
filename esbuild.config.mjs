import esbuild from "esbuild"
import civetPlugin from "@danielx/civet/esbuild-plugin"
import packageJSON from "./package.json" assert {type: 'json'}

esbuild
  .build({
    entryPoints: ["src/index.civet", "src/autoUpdate.civet"],
    bundle: true,
    platform: "node",
    outdir: "dist",
    target: "node18",
    plugins: [civetPlugin()],
    external: Object.keys(packageJSON.dependencies),
  })
  .catch(() => process.exit(1))
