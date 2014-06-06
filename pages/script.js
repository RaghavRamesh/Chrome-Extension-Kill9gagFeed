function killNewsFeed() {
	var feed = document.getElementById("list-view-2");
	feed.className = "hide";

	var sidebar = document.getElementById("sidebar");
	sidebar.className = "hide";

	var div = document.createElement("div");
	div.setAttribute("id", "message");
	div.setAttribute("style", "padding-left: 300px; font-size: 30px;");

	div.innerHTML = "Y U NO CONCENTRATE ON WORK!!";
	document.body.appendChild(div);	
};


killNewsFeed();
