window.onload = function () {
	content = document.getElementById('content');
	header = document.getElementById('header');
	footer = document.getElementById('footer');
	content.style.top = header.offsetHeight + "px";
	content.style.bottom = footer.offsetHeight + "px";

	var skill = document.getElementById("skill");
	var dd = skill.getElementsByTagName('dd');
	for (var i = 0, len = dd.length; i < len; i++) {
		dd[i].onmouseover = function () {
			var ul = this.getElementsByTagName('ul')[0];
			ul.style.display = "block";
		}
		dd[i].onmouseout = function () {
			var ul = this.getElementsByTagName('ul')[0];
			ul.style.display = "none";
		}
	}
}

window.onresize = function () {
	content.style.top = header.offsetHeight + "px";
	content.style.bottom = footer.offsetHeight + "px";
	footer.style.bottome =
	console.log(footer.offsetHeight)
}

