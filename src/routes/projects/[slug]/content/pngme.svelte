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
	<h1 class="flex justify-center">
		<a href="https://github.com/WesleyTran0/pngme?tab=readme-ov-file" class="hyperlink">PNGme</a>
	</h1>

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

	<p>
		Coming into this project, I had major want: to "learn," Rust. And so my goals looked as such:
	</p>
	<ul>
		<li>
			Familiarize myself with Rust and learn to create programs that run just through the command
			line
		</li>
		<li>Understand PNG files better (images have chunks? -.-)</li>
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
	<p class="mb-0">
		Keeping it as simple as I can, an image is made up of chunks. As an oversimplification, these
		chunks are made of three things: a header, their type, and some data. PNGme allows users to
		create a <a href="https://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html" class="hyperlink">
			chunk
		</a> (as long as it is a valid chunk type) and attach a message onto that chunk.
	</p>
	<pre><code class="language-bash">
		pngme encode "path/to/img.png" "valid chunk" "Your hidden message"
		pngme decode "path/to/img.png" "chunk to decode" 
		pngme remove "path/to/img.png" "chunk to remove"
		pngme print "path/to/img.png"
		pngme help</code
		></pre>
	<p>
		These simple commands allow users to find, hide, and remove messages hidden within a PNG file.
	</p>

	<h2>Lessons Learned</h2>
	<p>
		After finishing this project, I certainly had more confidence with Rust. Performing functions
		over Iterators, splitting work into different internal crates, and even small things like
		writing tests or defining functions made so much more sense. But I honestly came out of this
		with so much more than just "Rust knowledge."
	</p>
	<p>
		I learned SO much more about images and how they are rendered: using chunk types to encapsulate
		information about information and when to, finally understanding why printing an image fills the
		screen with Wingdings, and how image stenography works. I also got a sneak peak into publishing
		crates and creating command line tools, and with that comes input validation in Rust and the
		strength of Rust's error handling system.
	</p>
	<p>
		Truthfully, this simple project grew my fondness of Rust and how eloquently it mixes object and
		functional programming AND provides so many features like type checking, error handling, even
		built-in testing systems that are all SO clean and easy to read when done right.
	</p>

	<h2>Conclusion & Acknoledgements</h2>
	<p>
		Once again, big thanks for to Robert Heaton and his tutorial, my first Rust project could not
		have been possible without you. If you want to check out the project yourself, it is hyperlinked
		on the title or you can click
		<a href="https://github.com/WesleyTran0/pngme?tab=readme-ov-file" class="hyperlink">here </a> to
		be check it out.
	</p>
</div>
