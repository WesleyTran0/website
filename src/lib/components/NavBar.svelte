<div class="flex justify-center">
	<nav class="flex justify-center mt-6">
		<div>
			<ul class="ul-with-dots flex flex-row space-x-5 list-none">
				<li><a href="/" class="hyperlink p-2 px-3 text-xl">Home</a></li>
				<li><a href="/projects" class="hyperlink p-2 px-3 text-xl">Projects</a></li>
				<li><a href="/contact" class="hyperlink p-2 px-3 text-xl">Contact</a></li>
			</ul>
		</div>
	</nav>
</div>

<style>
	.ul-with-dots li:not(:last-child)::after {
		content: '•';
		color: #e0e7ff;
		margin-left: 1rem;
		font-size: 0.875rem;
	}
</style>
