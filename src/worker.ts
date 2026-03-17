import handler from "@astrojs/cloudflare/entrypoints/server";
// import { DurableObject } from "cloudflare:workers";

// export class MyDurableObject extends DurableObject<Env> {
//   constructor(ctx: DurableObjectState, env: Env) {
//     super(ctx, env);
//   }
// }

export default {
  async fetch(request, env, ctx) {
    return handler.fetch(request, env, ctx);
  },
} satisfies ExportedHandler<Env>;
