/*
Script Name:	Remove Marketo embedded form styles
Description:	This script will remove extra HTML bloat and all forced styles from embedded Marketo forms. This allows you to keep all your form styles in your site's CSS file.    
Version:		1.0.0
Author:			Rod Homor
License:		GPL3
 
This script is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.
 
This script is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.
 
You should have received a copy of the GNU General Public License
along with This script. If not, see https://www.gnu.org/licenses/gpl-3.0.en.html
*/

(function( $ ) {

	"use strict";

	$(document).ready(function(){
		if (typeof MktoForms2 !== 'undefined') {
			MktoForms2.whenReady(function (form) {
				$('#mktoForms2BaseStyle, #mktoForms2ThemeStyle, .mktoClear, .mktoGutter, .mktoOffset, .mktoForm style').remove();
				$('.mktoForm, .mktoButtonWrap, .mktoFormCol, .mktoHasWidth').removeAttr('style').removeClass('mktoHasWidth');
				$('.mktoFormRow input:hidden').parent().removeClass('mktoFormRow').css('display', 'none');
				$('.mktoField').each(function() {
					if($(this).hasClass('mktoRequired') && $(this).attr('id')){
						$('label[for='+ $(this).attr('id') +'] .mktoAsterix').replaceWith('<span class="asterisk">*</span>');
					}
					else if($(this).attr('id')){
						$('label[for='+ $(this).attr('id') +'] .mktoAsterix').remove();
					}
				});
			});
		}
	});
})(jQuery);