	//POP功能
	popnotice=function(x) { //一般地跳出
		out="<div id='popu3'>";
		out+="	<a href=''  class='popcloseu3 popclosebg' style='' ></a>";
		out+="	<div id='popinu3'  style=''>\n";
		out+="		<div  class='popcloseu3 popclosebtn btn ' style='-webkit-border-radius: 5vw;-moz-border-radius: 5vw;border-radius: 5vw;' ><i class='fa fa-times' aria-hidden='true'></i></div>";
		out+="		<div class='popbody' style='height:270px;padding:15px;'>\n";
		out+=x;
		out+="		</div>\n";
		out+="	</div>";
		out+="</div>";
		$("#popu3").remove();  
		$("body").prepend(out);
		//$("#popinu").animate({"margin-top":0},500);
		$("#popu3").stop().fadeIn(300);  
		$("#popinu3").animate({"top":"100"},500);
    }
	popbase = function(x) { //----
		//var xp=$(window).scrollTop();
		var out="<div id='pop'>";
		out+="	<a href=''  class='popclose popclosebg' style='' ></a>";
		out+="	<div id='popin'>\n";
		//out+="		<div  class='popclose popclosebtn' style='' ><i class='fa fa-times' aria-hidden='true'></i></div>";
		out+="		<div class='popbody'>\n";
		out+=x;
		out+="		</div>\n";
		out+="	</div>";
		out+="</div>";
		$("#pop").remove();  
		$("body").prepend(out);
		$("#pop").stop().fadeIn(300);  
		$("#popin").animate({"left":($(window).width()-$("#popin").width())/2},500);
		$("body").css("height","100%").css("overflow","hidden");
   };  
  	sppop = function(x) { //----
		//特殊pop up 做宣傳廣告使用--按下去後跳sppop2--無固定底色全螢幕版
		//所需 style設定 和  cont 內容
		var out="<div id='sppop' style='"+x['style']+"'>";
		out+=x['cont'];
		out+="</div>";
		$("#sppop").remove();  
		$("body").prepend(out);
		$("#sppop").stop().fadeIn(300);  
		$("body").css("height","100%").css("overflow","hidden");
   };  
  	sppop2 = function(x) { //----
		//特殊pop up 做宣傳廣告使用--按下去後跳sppop2--無固定底色全螢幕版
		//所需 xa=left,right,xb=數值,  y 位置     w h 高寬  cont 內容
		var out="<div id='sppop2'>";
		out+="	<a href=''  class='sppopcloseclick2 sppopclosebg' style='' ></a>";
		out+=x;
		out+="</div>";
		$("#sppop2").remove();  
		$("body").prepend(out);
		$("#sppop2").stop().fadeIn(300);  
		$("body").css("height","100%").css("overflow","hidden");
   }; 
 	poptemp = function(x) { //顯示警告
		var out="<div id='pops' style='z-index:10001'>";
		out+="	<a href=''  class='popclose popclosebg' style='' ></a>";
		out+="	<div id='popins'>\n";
		out+="		<div class='popbody'>\n";
		out+=x;
		out+="		</div>\n";
		out+="	</div>";
		out+="</div>";
		$("#pops").remove();  
		$("body").prepend(out);
		$("#popins").animate({"margin-top":150},500);
		$("#pops").stop().fadeIn(300).delay(3000).fadeOut(300,function(){
			$("#pops").remove();
		});  
   }; 
	popbaseu = function(x) { //title/內容/是否可以關閉
		out="<div id='popu'>";
		out+="	<a href=''  class='popcloseu popclosebg' style='' ></a>";
		out+="	<div id='popinu'>\n";
		out+="		<div  class='popcloseu popclosebtn btn ' style='' ><i class='fa fa-times' aria-hidden='true'></i></div>";
		out+="		<div class='popbody'>\n";
		out+=x;
		out+="		</div>\n";
		out+="	</div>";
		out+="</div>";
		$("#popu").remove();  
		$("body").prepend(out);
		//$("#popinu").animate({"margin-top":0},500);
		$("#popu").stop().fadeIn(300);  
		$("#popinu").animate({"left":($(window).width()-$("#popinu").width())/2},500);
   }; 

  	popbaseu2 = function(x) { //title/內容/是否可以關閉
		out="<div id='popu2'>";
		out+="	<a href=''  class='popcloseu2 popclosebg' style='' ></a>";
		out+="	<div id='popinu2'>\n";
		out+="		<div  class='popcloseu2 popclosebtn btn ' style='' ><i class='fa fa-times' aria-hidden='true'></i></div>";
		out+="		<div class='popbody'>\n";
		out+=x;
		out+="		</div>\n";
		out+="	</div>";
		out+="</div>";
		$("#popu2").remove();  
		$("body").prepend(out);
		$("#popu2").stop().fadeIn(300);  
		$("#popinu2").animate({"left":($(window).width()-$("#popinu2").width())/2},500);
   }; 
   popclose= function() {
		$("#popin").stop().animate({"left":"-100%"},500,function(){
			$("#pop").stop().fadeOut(300).remove();
		});
		
		$("body").css("height","auto").css("overflow","auto");
   }
   popcloseu= function() {
	  //  $("#popinu").stop().animate({"left":"-100%"},500);
		//$("#popinu").stop().animate({"margin-top":-600},500);
		//$("#popu").delay(500).stop().fadeOut(300).remove();
		 $("#popinu").stop().animate({"left":"-100%"},500,function(){
			$("#popu").stop().fadeOut(300).remove();
		});
   }
   popcloseu2= function() {
		 $("#popinu2").stop().animate({"left":"-100%"},500,function(){
			$("#popu2").stop().fadeOut(300).remove();
		});
   }
   popcloseu3= function() {
		 $("#popinu3").stop().animate({"top":"-800"},500,function(){
			$("#popu3").stop().fadeOut(300).remove();
		});
   }
   sppopclose= function() {
		$("#sppop").stop().fadeOut(300).remove();
		$("body").css("height","auto").css("overflow","auto");
   }
   sppopclose2= function() {
		$("#sppop2").stop().fadeOut(300).remove();
		$("body").css("height","auto").css("overflow","auto");
   }
   
   
   
   //斷航功能
   nl2br=function(x){
		x2=x.replace(/\n/g, "<BR>"); 
		return x2;
   }
   //反轉 n12br
   br2nl=function(x){
		xa=x.replace(/<br>/g, "\n"); 
	   return xa;
   }   
   //設定時間成為標準規格
	run_addZero=function(i) {
		if (i < 10) {
			i = "0" + i;
		}
		return i;
	}
	// AJAX  JASON
 	ajaxarr=function(x,y,z){	//兩個項目的 ajax	 x=程式變數  y1,y2=網頁變數	..回復 array..第三個是頁面
		return  $.ajax({
			 type:'GET',
			 dataType: "json",
			 crossDomain: true,
			 url:z,
			 data:{"job":x,"val":y,"timtess":$.now()}
		});

	}; 
 	ajaxarrval=function(x,y,z){	//兩個項目的 ajax	 x=程式變數  y1,y2=網頁變數	..回復 array..第三個是頁面
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
	//form validation NEW
	//配合一條多項目使用
	//移除錯誤資訊轉移到開始
	vemailn=function(x,z){
		var a = x.val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9_.-]+.[a-z]{2,4}$/;
		if(filter.test(a)){
			//x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;
		}
	}
	vtextn=function(x,y,z,mx){
		if(x.val().length> mx){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;			
		}else if(x.val().length < y){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;
		}else{
			x.removeClass("forminput");
			//x.parent(".formitem").siblings(".formerr").html('');
			return true;
		}
	}
	vphonen=function(x,y,z,mx){
		if(x.val().length> mx){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;			
		}else if(x.val().length < y){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;
		}else{
			var numbers = /^[-+]?[0-9]+$/; 
			if(x.val().match(numbers)){
				x.removeClass("forminput");
				//x.parent(".formitem").siblings(".formerr").html('');
				return true;
			}else{
				x.addClass("forminput");
				x.parents(".formitem").siblings(".formerr").append(z);
				return false;
			}
		}
	}
	 vnumn=function(x,y,z,mx){
		var numbers = /^[-+]?[0-9]+$/;  
		if(x.val().match(numbers) && x.val() >=y && x.val()<=mx){  
			//x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;
		}
	}
	vdaten=function(x,z){
		t=Date.parse(x.val());
		if(isNaN(t)){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;
		}else{
			//x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;			
		}
	}
	 vcheckn=function(x,z){
		var numbers = /^[-+]?[0-9]+$/;  
		if(x.is(':checked')){  
			//x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").append(z);
			return false;
		}
	}
	//form validation
	vemail=function(x,z){
		var a = x.val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9]+[a-zA-Z0-9_.-]+.[a-z]{2,4}$/;
		if(filter.test(a)){
			x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.parent(".formitem").siblings(".formerr").html(z);
			return false;
		}
	}
	vtext=function(x,y,z,mx){
		if(x.val().length> mx){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").html(z);
			return false;			
		}else if(x.val().length < y){
			x.addClass("forminput");
			x.parents(".formitem").siblings(".formerr").html(z);
			return false;
		}else{
			x.removeClass("forminput");
			x.parents(".formitem").siblings(".formerr").html('');
			return true;
		}
	}
	vphone=function(x,y,z,mx){
		if(x.val().length> mx){
			x.addClass("forminput");
			x.parent(".formitem").siblings(".formerr").html(z);
			return false;			
		}else if(x.val().length < y){
			x.addClass("forminput");
			x.parent(".formitem").siblings(".formerr").html(z);
			return false;
		}else{
			var numbers = /^[-+]?[0-9]+$/; 
			if(x.val().match(numbers)){
				x.removeClass("forminput");
				x.parent(".formitem").siblings(".formerr").html('');
				return true;
			}else{
				x.addClass("forminput");
				x.parent(".formitem").siblings(".formerr").html(z);
				return false;
			}
		}
	}
	 vnum=function(x,y,z,mx){
		var numbers = /^[-+]?[0-9]+$/;  
		if(x.val().match(numbers) && x.val() >=y && x.val()<=mx){  
			x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.parent(".formitem").siblings(".formerr").html(z);
			return false;
		}
	}
	vdate=function(x,z){
		t=Date.parse(x.val());
		if(isNaN(t)){
			x.addClass("forminput");
			x.parent(".formitem").siblings(".formerr").html(z);
			return false;
		}else{
			x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;			
		}
	}
	 vcheck=function(x,z){
		var numbers = /^[-+]?[0-9]+$/;  
		if(x.is(':checked')){  
			x.parent(".formitem").siblings(".formerr").html('');
			x.removeClass("forminput");
			return true;
		}else{
			x.addClass("forminput");
			x.parent(".formitem").siblings(".formerr").html(z);
			return false;
		}
	}
	tinysetup=function(x){
		tinymce.init({
			language:"zh_TW",
			valid_children : "+body[style],+body[link]",
			theme_advanced_font_sizes: "12px,14px,15px,16px,18px,21px,24px",
			font_size_style_values : "12px,14px,15px,16px,18px,21px,24px",
			selector: x,
			plugins: [
									"advlist autolink lists link image charmap print preview anchor",
									"searchreplace visualblocks code fullscreen",
									"table contextmenu paste",
									"textcolor"
			],
			toolbar: "insertfile undo redo | styleselect | bold italic forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image"
		});
	}
	//計算字串寬度(中文=2)
	stringBytes=function(c){
		var n=c.length,s;
		var len=0;
		for(var i=0; i <n;i++){
			s=c.charCodeAt(i);
			while( s > 0 ){
				len++;
				s = s >> 8;
			}
		}
		return len;
	}
	stringcut=function(c,x){//x=cut的位置
		var n=c.length,s;
		var len=0;
		var cut=0;
		for(var i=0; i <n;i++){
			s=c.charCodeAt(i);
			while( s > 0 ){
				len++;
				s = s >> 8;
			}
			if(len>=x && cut==0){
				cut=i;
			}
		}
		return cut;
	}
	//檢查功能
	//檢查是否可連線
	chk_online=function(ajaxurl){
		var ttt=0;
		tempvals=Array('adwqe');
		//return false;
		//return tempitem=ajaxarr("testcon1",tempvals,ajaxurl);
		if(tempitem=ajaxarr("testcon1",tempvals,ajaxurl)){
			return tempitem.success(function(data){
				if(data[0]=="1"){
					return true;
				}else{//後台已無連線資料
					var isapp = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;//这个分开手机浏览器和app
					sessionStorage.removeItem("username");
					sessionStorage.removeItem("userid");
					sessionStorage.removeItem("userkey");
					sessionStorage.removeItem("userlevel");
					sessionStorage.removeItem("usereffective");
					sessionStorage.setItem("userpoint",data[8]);					
					//如有自動連線..企圖重新登入
					if(isapp && localStorage.getItem("re_userid") && localStorage.getItem("re_key")){//app版已经登入.确认登入...没有时间性需要重新登入限制
						return chk_login(ajaxurl,localStorage.getItem("re_userid"),localStorage.getItem("re_key"),"app").success(function(data){
							if(parseInt(data[0])==1){
								sessionStorage.setItem("username",data[1]);
								sessionStorage.setItem("userid",data[2]);
								sessionStorage.setItem("userkey",data[3]);
								sessionStorage.setItem("userlevel",data[6]);	
								sessionStorage.setItem("usereffective",data[7]);
								sessionStorage.setItem("userpoint",data[8]);								
								return true;
							}else{
								return false;
							}
							
						}).error(function(){
							return false;
						});
					}else if(localStorage.getItem("re_userid") && localStorage.getItem("re_time") && localStorage.getItem("re_key")){//有自动登入...送后台检查..需有时间性需要重新登入限制
						return chk_login(ajaxurl,localStorage.getItem("re_userid"),localStorage.getItem("re_key"),localStorage.getItem("re_time")).success(function(data){
							if(parseInt(data[0])==1){
								sessionStorage.setItem("username",data[1]);
								sessionStorage.setItem("userid",data[2]);
								sessionStorage.setItem("userkey",data[3]);	
								sessionStorage.setItem("userlevel",data[6]);	
								sessionStorage.setItem("usereffective",data[7]);	
								sessionStorage.setItem("userpoint",data[8]);								
								return true;
							}else{
								return false;
							}
						}).error(function(){
							return false;
						});
					}else{
						return false;
					}
				}
			});
		}else{
			return false;
		}
	}
	//檢查非會員重新登入
	chk_authwarp=function(ajaxurl,a,b,c){
		//這邊送ajax檢查
		//rtype="app"-->來自app.免時間要求  
		//localStorage.getItem("re_userid") && localStorage.getItem("re_key")
		//rtype=其他 需要檢查時間rtype就是時間
		//localStorage.getItem("re_userid") && localStorage.getItem("re_time") && localStorage.getItem("re_key")
		var tempvals=Array(a,b,c);
		//return false;
		//這只是假的
		//return tempitem=ajaxarr("testcon",tempvals,ajaxurl);
		 //ajaxarr("testcon",tempvals,ajaxurl).success(function(data){callback(data);});
		return  $.ajax({
			 type:'GET',
			 dataType: "json",
			 crossDomain: true,
			 url:ajaxurl,
			 data:{"job":"testcon2","val":tempvals,"timtess":$.now()}
		});

	}	
	//檢查自動登入
	chk_login=function(ajaxurl,a,b,c){
		//這邊送ajax檢查
		//rtype="app"-->來自app.免時間要求  
		//localStorage.getItem("re_userid") && localStorage.getItem("re_key")
		//rtype=其他 需要檢查時間rtype就是時間
		//localStorage.getItem("re_userid") && localStorage.getItem("re_time") && localStorage.getItem("re_key")
		var tempvals=Array(a,b,c);
		//return false;
		//這只是假的
		//return tempitem=ajaxarr("testcon",tempvals,ajaxurl);
		 //ajaxarr("testcon",tempvals,ajaxurl).success(function(data){callback(data);});
		return  $.ajax({
			 type:'GET',
			 dataType: "json",
			 crossDomain: true,
			 url:ajaxurl,
			 data:{"job":"testcon","val":tempvals,"timtess":$.now()}
		});

	}
	fail_online=function(x){
		$(".temploader").hide();
		poptemp("您目前的联机不稳定,请确认后在试,谢谢");
	}
	$("body").delegate(".popclose","click",function(e){
		e.preventDefault();
		popclose();
	});	
	$("body").delegate(".popcloseu","click",function(e){
		e.preventDefault();
		popcloseu();
	});
	$("body").delegate(".popcloseu2","click",function(e){
		e.preventDefault();
		popcloseu2();
	});
	$("body").delegate(".popcloseu3","click",function(e){
		e.preventDefault();
		popcloseu3();
	});
	$("body").delegate(".btn","click",function(e){
		e.preventDefault();									   
	});
	$("body").delegate(".sppopcloseclick","click",function(e){
		e.preventDefault();
		sppopclose();
	});	
	$("body").delegate(".sppopcloseclick2","click",function(e){
		e.preventDefault();
		sppopclose2();
	});	
	//自動延伸 teatarea 功能
	$("textarea").css("-ms-overflow-style","none");
	$("textarea").css("overflow","hidden");
	//$("textarea").val("");
	$("body").delegate("textarea","keyup",function(){
		if(!$(this).hasClass("notmove")){
			 $(this).height( 0 );								   
			inheight=this.scrollHeight;
			if(inheight<40){
				inheight=40;
			}
			$(this).css("height",inheight);
		}
	});
	$("body").delegate("textarea","focus",function(){
			inheight=this.scrollHeight;
			$(this).css("height",inheight);
	});
	$('body').on('focus',".birthday", function(){
		$(this).datepicker({
            			changeYear: true,
						yearRange: "-80:-5",
						dateFormat: 'yy-mm-dd',
						minDate: '1920-07-01',
						maxDate: '0',
						defaultDate: '-9000'
		});
	});