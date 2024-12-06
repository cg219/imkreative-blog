export function GET({ request }) {
    const url = new URL(request.url);

    url.pathname = url.pathname.replace('/blog', '/read');

    return Response.redirect(url, 302);
}

