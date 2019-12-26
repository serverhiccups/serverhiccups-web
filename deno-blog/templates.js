function postTemplate(post, markdown) {
	return `<html>
	<head>
		<meta charset="UTF-8">
		<title>${post.title} - serverhiccups</title>
		<link rel="stylesheet" type="text/css" href="../css/blog.css">
		<link rel="stylesheet" href="https://use.typekit.net/uwr8lod.css">
	</head>
	<body class="stripey">
		<nav id="floating-nav">
			<a href="#main-cover">serverhiccups</a>
			<a href="#projects">projects</a>
			<a href="#aboutme">about</a>
			<a href="#contact">contact</a>
			<a href="https://se.hiccup01.com">svenska</a>
		</nav>
		<div id="content">
			<a id="back" href="./index.html">back</a>
			${markdown}
		</div>
	</body>
</html>`
}

function indexTemplate(posts) {
	return `<html>
	<head>
		<meta charset="UTF-8">
		<title>blog - serverhiccups</title>
		<link rel="stylesheet" type="text/css" href="../css/blog.css">
		<link rel="stylesheet" href="https://use.typekit.net/uwr8lod.css">
	</head>
	<body class="stripey">
		<nav id="floating-nav">
			<a href="#main-cover">serverhiccups</a>
			<a href="#projects">projects</a>
			<a href="#aboutme">about</a>
			<a href="#contact">contact</a>
			<a href="https://se.hiccup01.com">svenska</a>
		</nav>
		<div id="index">
		<span id="title">Blog</span>
		` +
		posts.map((post) => {
			return `<div class="post">
	<span class="post-date">${post.dateString}</span>
	<a class="post-title" href="${post.normalisedTitle + "." + post.id + ".html"}">${post.title}</a>
	</div>`
		}).join("\n") +
		`</div>
	</body>
</html>`
}

export { postTemplate, indexTemplate };
