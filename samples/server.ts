import { serve } from 'https://deno.land/std/http/server.ts';

const s = serve({ port: 8000 });
console.log('Visit http://localhost:8000/ in your browser...');

const re = /\/\?refer\=/ig;

for await (const req of s) {
    const referUrl = req.url,
        normalizedUrl = referUrl.replace('/?refer=', '');

    if (re.test(referUrl)) {
        fetch(normalizedUrl)
            .then(async (res) => {
                const body = new Uint8Array(await res.arrayBuffer());

                req.respond({ body })
            })
            .catch(e => {
                req.respond({ body: e.message })
            });

    } else {
        req.respond({ body: 'Pass a "?refer=HTTP://GOOGLE.COM" variable in your request' })
    }
}