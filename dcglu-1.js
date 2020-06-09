// source --> https://medhome.com.mx/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=3.7.0 
jQuery(function(o){if("undefined"==typeof wc_add_to_cart_params)return!1;function t(){this.requests=[],this.addRequest=this.addRequest.bind(this),this.run=this.run.bind(this),o(document.body).on("click",".add_to_cart_button",{addToCartHandler:this},this.onAddToCart).on("click",".remove_from_cart_button",{addToCartHandler:this},this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart removed_from_cart",{addToCartHandler:this},this.updateFragments)}t.prototype.addRequest=function(t){this.requests.push(t),1===this.requests.length&&this.run()},t.prototype.run=function(){var t=this,a=t.requests[0].complete;t.requests[0].complete=function(){"function"==typeof a&&a(),t.requests.shift(),0<t.requests.length&&t.run()},o.ajax(this.requests[0])},t.prototype.onAddToCart=function(t){var a=o(this);if(a.is(".ajax_add_to_cart")){if(!a.attr("data-product_id"))return!0;t.preventDefault(),a.removeClass("added"),a.addClass("loading");var r={};o.each(a.data(),function(t,a){r[t]=a}),o(document.body).trigger("adding_to_cart",[a,r]),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),data:r,success:function(t){t&&(t.error&&t.product_url?window.location=t.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?o(document.body).trigger("added_to_cart",[t.fragments,t.cart_hash,a]):window.location=wc_add_to_cart_params.cart_url)},dataType:"json"})}},t.prototype.onRemoveFromCart=function(t){var a=o(this),r=a.closest(".woocommerce-mini-cart-item");t.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),t.data.addToCartHandler.addRequest({type:"POST",url:wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),data:{cart_item_key:a.data("cart_item_key")},success:function(t){t&&t.fragments?o(document.body).trigger("removed_from_cart",[t.fragments,t.cart_hash,a]):window.location=a.attr("href")},error:function(){window.location=a.attr("href")},dataType:"json"})},t.prototype.updateButton=function(t,a,r,e){(e=void 0!==e&&e)&&(e.removeClass("loading"),e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),o(document.body).trigger("wc_cart_button_updated",[e]))},t.prototype.updateFragments=function(t,a){a&&(o.each(a,function(t){o(t).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),o.each(a,function(t,a){o(t).replaceWith(a),o(t).stop(!0).css("opacity","1").unblock()}),o(document.body).trigger("wc_fragments_loaded"))},new t});
// source --> https://medhome.com.mx/wp-content/plugins/js_composer/assets/js/vendors/woocommerce-add-to-cart.js?ver=5.7 
window.jQuery( document ).ready( function ( $ ) {
	$( 'body' ).on( 'adding_to_cart', function ( event, $button, data ) {
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.addClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.addClass( 'vc-woocommerce-add-to-cart-loading' )
			.append( $( '<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>' ) );
	} ).on( 'added_to_cart', function ( event, fragments, cart_hash, $button ) {
		if ( 'undefined' === typeof($button) ) {
			$button = $( '.vc-gitem-add-to-cart-loading-btn' );
		}
		$button && $button.hasClass( 'vc_gitem-link' ) && $button
			.removeClass( 'vc-gitem-add-to-cart-loading-btn' )
			.parents( '.vc_grid-item-mini' )
			.removeClass( 'vc-woocommerce-add-to-cart-loading' )
			.find( '.vc_wc-load-add-to-loader-wrapper' ).remove();
	} );
} );
// source --> https://medhome.com.mx/wp-content/plugins/super-socializer/js/front/social_login/general.js?ver=7.12.34 
function theChampPopup(e){window.open(e,"_blank","height=520,width=770,left=315,top=80,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status")}function theChampStrReplace(e,t,n){for(var r=0;r<e.length;r++){n=n.replace(new RegExp(e[r],"g"),t[r])}return n}function theChampCallAjax(e){if(typeof jQuery!="undefined"){e()}else{theChampGetScript("https://code.jquery.com/jquery-latest.min.js",e)}}function theChampGetScript(e,t){var n=document.createElement("script");n.src=e;var r=document.getElementsByTagName("head")[0],i=false;n.onload=n.onreadystatechange=function(){if(!i&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){i=true;t();n.onload=n.onreadystatechange=null;r.removeChild(n)}};r.appendChild(n)}function theChampGetElementsByClass(e,t){if(e.getElementsByClassName){return e.getElementsByClassName(t)}else{return function(e,t){if(t==null){t=document}var n=[],r=t.getElementsByTagName("*"),i=r.length,s=new RegExp("(^|\\s)"+e+"(\\s|$)"),o,u;for(o=0,u=0;o<i;o++){if(s.test(r[o].className)){n[u]=r[o];u++}}return n}(t,e)}}if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}
function heateorSsLJLoginPopup(){var a=document.createElement("div");a.innerHTML='<button id="heateor_ss_lj_popup_close" class="close-button separated"><img src="'+theChampCloseIconPath+'" /></button><div id="the_champ_sharing_more_content"><div class="all-services" style="padding:20px 10px 0px 10px;height:auto;"><fieldset id="ss_openid"><legend>LiveJournal Login</legend><form action="'+theChampLJAuthUrl+'" method="post" onsubmit="this.login.disabled=true;"><input type="hidden" name="openid_action" value="SuperSocializerLogin"><div style="clear:both">'+theChampLJLoginUsernameString+'</div><div style="clear:both"><input type="text" name="openid_url" required class="openid_login"><input type="submit" name="login" value="Login"></div></form></fieldset></div></div></div>',a.setAttribute("id","the_champ_sharing_more_providers"),a.setAttribute("style","height:auto;");var b=document.createElement("div");b.setAttribute("id","heateor_ss_lj_popup_bg"),jQuery("body").append(a).append(b),document.getElementById("heateor_ss_lj_popup_bg").onclick=document.getElementById("heateor_ss_lj_popup_close").onclick=function(){a.parentNode.removeChild(a),b.parentNode.removeChild(b)}}function theChampGetCookie(e){for(var t=e+"=",a=document.cookie.split(";"),h=0;h<a.length;h++){for(var i=a[h];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t))return i.substring(t.length,i.length)}return null};
// source --> https://medhome.com.mx/wp-content/plugins/super-socializer/js/front/social_login/common.js?ver=7.12.34 
function theChampLoginPopup(e){if("undefined"!=typeof theChampSameTabLogin&&theChampSameTabLogin==1){location.href=e}else{window.open(e,"_blank","height=520,width=770,left=315,top=80,resizable,scrollbars,toolbar=0,personalbar=0,menubar=no,location=no,directories=no,status")}}function theChampLoadingIcon(){jQuery(".the_champ_login_container").html('<img id="the_champ_loading_image" src="'+theChampLoadingImgPath+'" />')}function theChampInitiateLogin(e){var t=jQuery(e).parents("div.the_champ_login_container").find(".heateor_ss_social_login_optin");if(0==t.length||jQuery(t).is(":checked")){var a=e.getAttribute("alt");"Login with Facebook"==a?theChampLoginPopup(theChampFacebookAuthUrl):"Login with Twitch"==a?theChampLoginPopup(theChampTwitchAuthUrl):"Login with LiveJournal"==a?heateorSsLJLoginPopup():"Login with Steam"==a?theChampLoginPopup(theChampSteamAuthUrl):"Login with Twitter"==a?theChampLoginPopup(theChampTwitterAuthUrl):"Login with Xing"==a?theChampLoginPopup(theChampXingAuthUrl):("Login with Linkedin"==a&&theChampLoginPopup(theChampLinkedinAuthUrl),"Login with Google"==a?theChampLoginPopup(theChampGoogleAuthUrl):"Login with Vkontakte"==a?theChampLoginPopup(theChampVkontakteAuthUrl):"Login with Instagram"==a&&theChampInitializeInstaLogin())}else t.length>0&&jQuery(t).parent().css("color","red")}function theChampDisplayLoginIcon(e,t){if("undefined"!=typeof jQuery)for(var a=0;a<t.length;a++)jQuery("."+t[a]).css("display","block");else for(a=0;a<t.length;a++)for(var h=theChampGetElementsByClass(e,t[a]),i=0;i<h.length;i++)h[i].style.display="block"}function theChampValidateEmail(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function the_champ_save_email(e){var t=document.getElementById("the_champ_email").value.trim(),a=document.getElementById("the_champ_confirm_email").value.trim();return"save"!=e.id||theChampValidateEmail(t)?t!=a?(document.getElementById("the_champ_error").innerHTML="Email addresses do not match",void jQuery("#TB_ajaxContent").css("height","auto")):void theChampCallAjax(function(){theChampSaveEmail(e.id,t)}):(document.getElementById("the_champ_error").innerHTML=theChampEmailPopupErrorMsg,void jQuery("#TB_ajaxContent").css("height","auto"))}function theChampSaveEmail(e,t){document.getElementById("the_champ_error").innerHTML='<img src="'+theChampLoadingImgPath+'" />',jQuery.ajax({type:"POST",dataType:"json",url:theChampAjaxUrl,data:{action:"the_champ_save_email",elemId:e,email:t,id:theChampEmailPopupUniqueId},success:function(e){window.history.pushState({html:"html",pageTitle:"page title"},"","?done=1"),1==e.status&&e.message.response&&"success"==e.message.response?location.href=e.message.url:1==e.status&&"success"==e.message?location.href=theChampRegRedirectionUrl:1==e.status&&"cancelled"==e.message?tb_remove():1==e.status&&"verify"==e.message?document.getElementById("TB_ajaxContent").innerHTML="<strong>"+theChampEmailPopupVerifyMessage+"</strong>":0==e.status&&(document.getElementById("the_champ_error").innerHTML=e.message,jQuery("#TB_ajaxContent").css("height","auto"))},error:function(e,t,a){location.href=decodeURIComponent(theChampRedirectionUrl)}})}function theChampCapitaliseFirstLetter2(e){return e.charAt(0).toUpperCase()+e.slice(1)}if(void 0===theChampLinkingRedirection)var theChampLinkingRedirection="";theChampVerified&&theChampLoadEvent(function(){tb_show(theChampPopupTitle,theChampAjaxUrl)}),theChampEmailPopup&&theChampLoadEvent(function(){tb_show(theChampEmailPopupTitle,theChampEmailAjaxUrl)});var theChampCommentFormLogin=!1;theChampLoadEvent(function(){null!=theChampGetCookie("heateorSsSLOptin")&&jQuery("input.heateor_ss_social_login_optin").prop("checked",!0)}),jQuery("input.heateor_ss_social_login_optin").click(function(){if(jQuery(this).is(":checked")){if(null==theChampGetCookie("heateorSsSLOptin")){var e=new Date;e.setTime(e.getTime()+31536e6),document.cookie="heateorSsSLOptin=1; expires="+e.toUTCString()+"; path=/"}}else document.cookie="heateorSsSLOptin=; expires=Fri, 02 Jan 1970 00:00:00 UTC; path=/"});