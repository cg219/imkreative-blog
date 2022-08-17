import { Handlers, MiddlewareHandlerContext } from "$fresh/server.ts";

export function handler (req: Request, ctx: MiddlewareHandlerContext) {
    const url = new URL(req.url);

    if (url.hostname == Deno.env.get('IMK_REDIRECT_FROM')) {
        url.hostname = Deno.env.get('IMK_REDIRECT_TO')!;

        return Response.redirect(url, 302);
    } else {
        return ctx.next();
    }
}
