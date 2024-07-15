/** @type {import('next').NextConfig} */

// https://env.t3.gg/docs/nextjs#validate-schema-on-build-(recommended)
import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files :)
jiti("./src/env");

const nextConfig = {};

export default nextConfig;
