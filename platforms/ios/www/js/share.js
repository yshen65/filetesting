 (function($){ 
	popimg=function(x,y){
		wh = $(window).height();
		ww=$(window).width();
		
		if($("#pop")){
			$("#pop").remove();
		}
		out="<div id='pop' style='position:fixed;background:url(img/b70.png);width:100%;height:100%;z-index:999999;display:none;overflow:hidden;'>";
		out+="<a href=''  class='popclose' style='position:absolute;top:0px;right:0px;width:100%;height:100%;z-index:0;display:block;' ></a>";
		out+="<div id='popin' class='shadow' style='position:absolute;top:50%;left:50%;width:40px;height:40px;padding:20px;margin-top:-40px;margin-left:-40px;z-index:9;text-align:center;background:#000;'>\n";
		out+="<a href='' class='popclose' style='position:absolute;top:5px;right:5px;z-index:99;display:block;font-size:30px;color:#fff;text-shadow:2px 2px 1vw rgba(0,0,0,0.6);'><i class='fa fa-times-circle' aria-hidden='true'></i></a>";
		out+="<div id='popimg'><img src='img/preloader.gif' id='temppreload'></div>";
		out+="</div>";
		out+="</div>";
		$("body").prepend(out);
		$("#pop").fadeIn(500);
		var tepimg = new Image();
		tepimg.onload = function(){
			dd=this.height;
			ee=this.width;
			if(ee>(ww-60)){
				dd=dd*(ww-60)/ee;
				ee=ww-60;
			}
			$("#temppreload").remove();
			$("#popimg").html("<a href='"+y+"' target='_new'><img src='"+x+"' style='opacity:0;width:40px;'></a>");
			$("#popimg img").animate({"opacity":1,"width":ee},500);
			$("#popin").animate({"width":ee,"height":dd,"margin-top":-(dd/2+20),"margin-left":-(ee/2+20)},500);
		}
		tepimg.src = x;	
	}
	// AJAX  JASON
 	ajaxxml=function(){	//兩個項目的 ajax	 x=程式變數  y1,y2=網頁變數	..回復 array..第三個是頁面
		return  $.ajax({
			 type:'GET',
			 dataType: 'xml',
			 url:'class.xml',
			 timeout: 1000
		});
	};

 	ajaxarr=function(x,y,z){	//兩個項目的 ajax	 x=程式變數  y1,y2=網頁變數	..回復 array..第三個是頁面
		return  $.ajax({
			 type:'GET',
			 dataType: "json",
			 url:z,
			 data:{"job":x,"val":y,"timtess":$.now()}
		});
	}; 	
	ajaxarrpost=function(x,y,z){	//兩個項目的 ajax	 x=程式變數  y1,y2=網頁變數	..回復 array..第三個是頁面
		return  $.ajax({
			 type:'POST',
			 dataType: "json",
			 url:z,
			 data:{"job":x,"val":y,"timtess":$.now()}
		});
	}; 
 	cleanhref= function(x) { 
		temp=x;
		if(temp.indexOf("/")>=0){
			temp=temp.substring(temp.lastIndexOf('/') + 1);
		}
		return temp;
	};
	// FUNCTIONS
	var scrollTop="";
   popclose= function() {
		$("#popin").stop().fadeOut(200).remove();
		$("#pop").delay(100).stop().fadeOut(200).remove();
   }
   popclosex= function() {
		$("#popin").stop().hide().remove();
		$("#pop").stop().fadeOut(100).remove();
   }
	//form validation
	vemail=function(x,z){
		var a = x.val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		if(filter.test(a)){
			x.siblings(".formerr").hide();
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.siblings(".formerr").show();
			return false;
		}
	}
	vtext=function(x,y,z,mx){
		if(x.val().length> mx){
			x.addClass("forminput");
			x.siblings(".formerr").show();
			return false;			
		}else if(x.val().length < y){
			x.addClass("forminput");
			x.siblings(".formerr").show();
			return false;
		}else{
			x.siblings(".formerr").hide();
			x.removeClass("forminput");
			return true;
		}
	}
	 vnum=function(x,y,z,mx){
		var numbers = /^[-+]?[0-9]+$/;  
		if(x.val().match(numbers) && x.val() >=y && x.val()<=mx){  
			$(".error").text("");
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			$(".error").text(z);
			return false;
		}
	}
	
	
	// SITE SETTING
})(jQuery); 
$(document).ready(function(){
   ismobile=0;
	// POP50 CLOSE
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		ismobile=1;
	}
	if(ismobile==1){
	}
	$("body").delegate(".popclose","click",function(e){
		e.preventDefault();
		popclose();
	});	
	$("body").delegate(".btn","click",function(e){
		e.preventDefault();									   
	});
	//跳出條文
	$("body").delegate(".popclick","click",function(e){
		popagree();
	});
	// 互換 IMAGE 的 HOVER 共用
	$(".hoverimg").hover(function(){
		if($(this).parents("a").hasClass("selected")){
		}else{
			changeimg($(this));
		}
	},function(){
		if($(this).parents("a").hasClass("selected")){
		}else{
			if($(this).hasClass("selected")){
			}else{
				changeimg($(this));
			}
		}
	});	
	//確認 nav
	
});
