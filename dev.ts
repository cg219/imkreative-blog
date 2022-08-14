#!/usr/bin/env -S deno run -A --watch=static/,routes/
import dev from "$fresh/dev.ts";
import { config } from "std/dotenv/mod.ts";

await config({
    export: true
});

await dev(import.meta.url, "./main.ts");
