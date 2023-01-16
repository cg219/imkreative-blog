import { Handlers, HandlerContext } from "$fresh/server.ts";
import { hit } from "../../utils/pirsch.ts";

export const handler: Handlers = {
  GET(req: Request, ctx: HandlerContext) {
    const url = new URL(req.url);

    url.pathname = url.pathname.replace('/blog', '/read');

    hit(req, ctx);
    return Response.redirect(url, 302);
  },
};
