import handler from "@astrojs/cloudflare/entrypoints/server";
// import { DurableObject } from "cloudflare:workers";

// export class MyDurableObject extends DurableObject<Env> {
//   constructor(ctx: DurableObjectState, env: Env) {
//     super(ctx, env);
//   }
// }

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext,
  ): Promise<Response> {
    return handler.fetch(
      request as unknown as Parameters<typeof handler.fetch>[0],
      env as unknown as Parameters<typeof handler.fetch>[1],
      ctx,
    ) as unknown as Promise<Response>;
  },
} satisfies ExportedHandler<Env>;
