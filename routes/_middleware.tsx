import { Handlers, MiddlewareHandlerContext } from "$fresh/server.ts";

export function handler (req: Request, ctx: MiddlewareHandlerContext) {
    const url = new URL(req.url);
    console.log(url);
    return ctx.next();
}
