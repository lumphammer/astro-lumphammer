// originally based on example at https://www.launchfa.st/blog/real-time-chat-astro-cloudflare-durable-objects
// but it's weird (maybe outdated?)
//
// astro's own docs are at
// https://docs.astro.build/en/guides/integrations-guide/cloudflare/#typing

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {
    // Add custom locals here
  }
}
