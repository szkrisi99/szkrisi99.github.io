$(".btn-submenu").on("click", function (e) {
	if ($(this).hasClass("selected")) {
		$(".service-card").show();
		$(".selected").removeClass("selected");
	} else {
		$(".selected").removeClass("selected");
		$(this).addClass("selected");

		var servicegroup = $(this).attr("data-service-group");
		$(".service-card").hide();
		$(".service-card[data-service-group*='" + servicegroup + "']").show();
		console.log(servicegroup);
	}
});
