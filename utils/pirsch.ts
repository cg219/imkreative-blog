import { HandlerContext } from "https://deno.land/x/fresh@1.0.2/server.ts";

export function hit(req: Request, ctx: HandlerContext) {
    const request = new Request('https://api.pirsch.io/api/v1/hit', {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${Deno.env.get('PIRSCH_SECRET')}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            url: req.url,
            ip: (ctx.remoteAddr as Deno.NetAddr).hostname,
            user_agent: req.headers.get('user-agent'),
            accept_language: req.headers.get('accept-language'),
            referer: req.headers.get('referer'),
            title: ctx.state.title
        })

    })

    fetch(request);
}
