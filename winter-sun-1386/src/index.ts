/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.toml`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

var src_default = {
	async fetch(request, env, ctx){
	   console.log("Logging: " + request.url)

	   const responseMap = {
		1: "First random response",
		2: "Second random response",
		3: "Third random response",
		4: "Forth random response",
	  };

		if(request.method == "POST"){
			return new Response('{ "json": "content" }', {
				headers: {
					'content-type': 'application/json'
				},
			});
		}

		function getRandomInt(min, max) {
			const minCeiled = Math.ceil(min);
			const maxFloored = Math.floor(max);
			return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
		  }

		const rnnumber = getRandomInt(1,5);
		const rnresponse = responseMap[rnnumber];

	   return new Response("Based on the random number " + rnnumber + ", your random response is " + rnresponse);
	}
};

export {
    src_default as default
};
