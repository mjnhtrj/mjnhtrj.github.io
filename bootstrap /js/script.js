jQuery(document).ready(function () {
	 jQuery('#troxuong li.active a').click(function (e) {
	 	 // body...  
	 	 e.preventDefault(); //ngăn sự kiện daufault//

	 	 if (jQuery('#troxuong1').is(':hidden')){
	 	 		jQuery('#troxuong1').show();


	 	 } else {
	 	 	jQuery('#troxuong1').hide();
	 	 }
	 }) ;


});


