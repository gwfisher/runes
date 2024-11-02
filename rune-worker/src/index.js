/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { M } from "vitest/dist/chunks/reporters.C_zwCd4j.js";

export default {
	async fetch(request, env, ctx) {
		
		var runes = {
			F: "\u{16A0}",
			U: "\u{16A2}",
			Th: "\u{16A6}",
			A: "\u{16A8}",
			R: "\u{16B1}",
			K: "\u{16B2}",
			G: "\u{16B7}",
			W: "\u{16B9}",
			H: "\u{16BA}",
			N: "\u{16BE}",
			I: "\u{16C1}",
			J: "\u{16C3}",
			Eoh: "\u{16C7}",
			P: "\u{16C8}",
			Al: "\u{16C9}",
			S: "\u{16CA}",
			T: "\u{16CF}",
			B: "\u{16D2}",
			E: "\u{16D6}",
			M: "\u{16D7}",
			L: "\u{16DA}",
			Ing: "\u{16D6}",
			O: "\u{16DF}",
			D: "\u{16DE}"
		};

		var dailyRune = function (runes) {
			const keys = Object.keys(runes);
			const randomKey = keys[Math.floor(Math.random() * keys.length)];
			return runes[randomKey]; // Access the value using the random key
		  };
		  
		  var randomRune = dailyRune(runes);	
		
		var html = `
			<h1>${randomRune}</h1>
		`;

		return new Response(html, {
				headers: { "content-type": "text/html;charset=UTF-8"}
		});
	},
};
