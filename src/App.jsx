function App() {
	return (
		<div className="m-auto mt-8 w-[600px] font-sans">
			<h1
				className="my-5 text-center text-4xl font-bold text-gray-700"
				uu>
				Test React App
			</h1>
			<p className="break-normal font-serif text-xl text-gray-800">
				A sample react app that i made to learn and apply github
				actions. What i was missing from a long time was knowing how
				CI/CD and pipelines and stuff works. So while going through the
				docs, i felt the need to have a dedicated repo where i can test
				all sort of github actions.
			</p>
			<ul className="font-serif text-xl text-gray-700 list-disc p-6">
				<li>change-1</li>
			</ul>
			<div className="links m-auto w-fit font-serif text-xl text-blue-700">
				<a
					href="https://github.com/m2x07"
					target="_blank"
					className="underline-offset-2 hover:underline">
					github
				</a>
				{" | "}
				<a
					href="https://twitter.com/_m2x07"
					target="_blank"
					className="underline-offset-2 hover:underline">
					twitter
				</a>
			</div>
		</div>
	);
}

export default App;
