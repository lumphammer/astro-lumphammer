import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { env } from "cloudflare:workers";

// https://developers.cloudflare.com/kv/
// https://docs.astro.build/en/guides/actions/

/*
export default {
  async fetch(request, env, ctx): Promise<Response> {
    // write a key-value pair
    await env.KV.put('KEY', 'VALUE');

    // read a key-value pair
    const value = await env.KV.get('KEY');

    // list all key-value pairs
    const allKeys = await env.KV.list();

    // delete a key-value pair
    await env.KV.delete('KEY');

    // return a Workers response
    return new Response(
      JSON.stringify({
        value: value,
        allKeys: allKeys,
      }),
    );
  },

} satisfies ExportedHandler<{ KV: KVNamespace }>;
*/

// const baz = 3;

export const server = {
  hello: defineAction({
    input: z.object({
      name: z.string(),
    }),
    handler: async (input) => {
      return `Hello, ${input.name}!`;
    },
  }),
  dateAndTime: defineAction({
    // input: z.object({
    //   format: z.string().default("YYYY-MM-DD HH:mm:ss"),
    // }),
    handler: async () => {
      const date = new Date();
      return date.toLocaleString("en-GB", {
        timeZone: "UTC",
        timeZoneName: "short",
      });
    },
  }),
  // increment the "counter" value in kv by one and return the new value
  increment: defineAction({
    input: z.object({
      incrementBy: z.number().min(1).default(1),
    }),
    handler: async (_input, _context) => {
      const counterText = await env.COUNTER_KV.get("counter", "text");
      const current = parseInt(counterText ?? "0", 10);
      const newCounter = current + _input.incrementBy;
      await env.COUNTER_KV.put("counter", newCounter.toString());
      return newCounter;
    },
  }),

  // return the current value of the "counter" key in kv
  counter: defineAction({
    handler: async (_input, _context) => {
      const counterText = await env.COUNTER_KV.get("counter", "text");
      const current = parseInt(counterText ?? "0", 10);
      return current;
    },
  }),
};
