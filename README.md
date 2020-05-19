# HackingJavaScript
Sample code related to my "Hacking JavaScript" screencast

I will be updating this README with an episode list as I publish, but sample code will be listed in named branches.

### Episode 1: Deno

I recently started playing with Deno, branded as "A secure runtime for TypeScript built on V8" and I published
a [blog post](https://www.akawebdesign.com/2020/05/15/my-first-experience-with-deno/) about it.

### Samples

    cd ./samples

1) Hello, world!


    deno run hello-world.ts


2) HTTP server that attempts unauthorized network access:


    deno run --allow-net=0.0.0.0:8000 server.ts
    

3) Running a third-party script hosted elsewhere:

Note that we're requesting a resource from `arthurakay.com` but we're granting network access to `akawebdesign.com`:


    deno run --allow-net=www.akawebdesign.com third-party.ts


