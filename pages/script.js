function killNewsFeed() {
	var feed = document.getElementById("list-view-2");
	feed.className = "hide";
	console.log(feed);

	var sidebar = document.getElementById("sidebar");
	sidebar.className = "hide";
	console.log(sidebar);
};


killNewsFeed();
