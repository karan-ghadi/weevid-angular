var slider = document.getElementById("slider");

slider.oninput = function () {
	$(".count").text(this.value);
	$(".fill").css("width", this.value + "%");
};