
/**

<!-- 
*Author: Edwin Asare (Dr.Brainz)
*Author URL: http://www.braintech.cf
*Author Email: brainztech08@gmail.com
*Author Email: info@brainztech.cf.com
*Copyright(c) 2018 Brainz Tech Inc.
*This is a Premium School blog theme for your shcool,you may edit it per your needs.
*Contact the author or visit our website for more premium themes for your project.


**Note: Show some love for our hardwork by remaining the footer credit which link back to our website.
  Or you can use your own means to link back to website.
  *But note that footer credit must remain the same according to the license agreement.*
  Thanks.

  NB: This file is use to add some css on the html page.
  Edit per your needs.
**
-->

**/


$(document).ready(function () {
	// body...
	$(window).scroll(function () {
		// body...CSS change on class-lead when you scroll your mouse down
		var scroll = $(window).scrollTop();
		if (scroll > 30) {
			$('.lead').css("color", "#000");
		} else {
			$('.lead').css("color", "#3333335e");
		}
		if (scroll > 30) {
			$('.lead').css("font-size", "1.5rem");
		} else {
			$('.lead').css("font-size", "1rem");
		}
		if (scroll > 30) {
			$('.lead').css("font-weight", "500");
		} else {
			$('.lead').css("font-weight", "400");
		}
		// css chnage on h1
		if (scroll > 60) {
			$('.header-h1').css("color", "#fff");
		} else {
			$('.header-h1').css("color", "#000");
		}

		//css change on navbar
		
		if (scroll > 50) {
			$('.navbar').css("background", "#3333335e");
		} else {
			$('.navbar').css("background", "transparent");
		}
		
	});
});

