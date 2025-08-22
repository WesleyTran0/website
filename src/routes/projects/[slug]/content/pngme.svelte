<script context="module" lang="ts">
	import type { ProjectMetadata } from '$lib/types';

	export const metadata: ProjectMetadata = {
		title: 'PNGme - Embed Messages Into Images',
		slug: 'pngme',
		date: '2025-05-15',
		pinned: false,
		// image: link
		technologies: ['Rust', 'Image Data', 'CLI']
	};
</script>

<div class="space-y-6">
	<h1 class="flex justify-center">PNGme</h1>

	<h2>Overview</h2>
	<p class="">
		PNGme is a image encoder/decoder while following <a
			href="https://robertheaton.com/"
			class="hyperlink"
		>
			Robert Heaton's
		</a> pngme tutorial, with a goal to learn to create clean, idiomatic, and scalable Rust. Using the
		command line, messages are encoded into images by specifying an image "Chunk" that the user would
		like to embed a message into.
	</p>

	<h2>Goals</h2>

	<p>Coming into this project, I had one goal: to "learn," Rust. And so my goals looked as such:</p>
	<ul>
		<li>
			Familiarize myself with Rust and learn to create programs that run just through the command
			line
		</li>
		<li>Understand PNG files better (a chunk of wha.)</li>
		<li>Keep myself coding after my semester had ended</li>
	</ul>
	<p>
		It was the beginning of my first summer after starting university. Picking up a new skill
		sounded like a great idea, and learning a new programming language was as great of a skill as
		any. Rust, quickly becoming a top language to learn in the low-level programming scene AND being
		a language recommended by a peer to be my language of choice for a class in my next semester,
		stood out as a top choice.
	</p>

	<p>
		I found <a href="https://jrdngr.github.io/pngme_book/introduction.html" class="hyperlink">
			Robert Heaton's PNGme tutorial
		</a>
		right at the beginning of the summer while looking for resources to learn Rust, and despite it being
		"outdated" (at LEAST 5 years old) it was an amazingly formatted. There was no code in immediate site,
		links to documentation, and crystal clear guidelines on how to think about project structure our
		program so that it can be used later on. After reading halfway through the
		<a href="https://doc.rust-lang.org/book/title-page.html" class="hyperlink"> Rust Book </a>
		, I felt as if there was nothing more to learn through reading.
	</p>

	<h2>How Does PNGme Work?</h2>
	<p>
		Keeping it as simple as I can, an image is made up of chunks. As an oversimplification, these
		chunks are made of three things: a header, their type, and some data.
	</p>
</div>
