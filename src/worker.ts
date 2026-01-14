import handler from "@astrojs/cloudflare/entrypoints/server";
// import { DurableObject } from "cloudflare:workers";

// export class MyDurableObject extends DurableObject<Env> {
//   constructor(ctx: DurableObjectState, env: Env) {
//     super(ctx, env);
//   }
// }

export default {
  // @ts-expect-error return value is not typed correctly
  async fetch(request, env, ctx) {
    // @ts-expect-error request is not typed correctly
    return handler.fetch(request, env, ctx);
  },
} satisfies ExportedHandler<Env>;
