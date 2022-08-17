import { ServerContext } from "https://deno.land/x/fresh@1.0.2/server.ts";

export function hit(req: Request, ctx: ServerContext) {
    console.log(req);
    console.log('IP', req.headers.get('host'))
    console.log(ctx)
    // fetch('https://api.pirsch.io/api/v1/hit', {
    //     headers: {

    //     }
    // })
}
