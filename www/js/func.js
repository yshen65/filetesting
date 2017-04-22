$(document).ready(function(){
	//設定元件
	var $window = $(window);
	var windowHeight = 0; 
	var windowwidth = 0;
	var mpage=0;
	var mval="";
	var xmlsave="";
	// POP50 CLOSE
	var isapp = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;//这个分开手机浏览器和app
	//如果進入index
	var querystring = location.search.replace( '?', '' ).split( '&' );
	var qs = {};
	var fileURL="";//SD根目錄
	for ( var i=0; i<querystring.length; i++ ) {
		  var name = querystring[i].split('=')[0];
		  var value = querystring[i].split('=')[1];
		  qs[name] = value;
	}
	if(qs['page']){
		mpage=qs['page'];
	}
	if(qs['val']){
		mval=qs['val'];
	}
	$(window).bind("popstate", function(e){
		var state =event.state;
		if(state){
			mpage=state.page;
			mval=state.v;
			showpage(mpage,mval);
		}
	});	
	var url=window.location.toString();
	page=url.substring(url.lastIndexOf('/') + 1).split("?")[0];
	$.when(
		$.getScript( "js/share.js" ),	//共享
		$.getScript( "js/print.js" ),	//打印
		$.Deferred(function( deferred ){
			$( deferred.resolve );
		})
	).done(function(){
		setsize();
		if(isapp){
			document.addEventListener("deviceready", onDeviceReady, false);
			function onDeviceReady() {
				cordova.plugins.diagnostic.getExternalSdCardDetails(function(details){
					details.forEach(function(detail){
						if(detail.canWrite && detail.freeSpace > 100000){
								temp = detail.filePath;
								ta=temp.split("storage/");
								tb=ta[1].split("/");
								fileURL="/storage/"+tb[0]+"/";//SD根目錄
								var me=ajaxxml();
								me.success(function(xml){
									xmlsave=xml;
									//進入
									showpage(mpage,mval);
								});
							}
					});
				}, function(error){});

			}
		}else{
			var me=ajaxxml();
			me.success(function(xml){
				xmlsave=xml;
				showpage(mpage,mval);
			});
		}
	});

	//處理使用者變換尺寸
	$window.resize(function(){
		$window = $(window);
		setsize();
	});	
	$(window).scroll(function (event) {
	});
	//互動
	//首頁內換頁
	$("body").delegate(".pageclick","click",function(){
		var mpage=$(this).data("page");
		if($(this).data("val")){
			mval=$(this).data("val");
		}else{
			mval="";
		}
		history.pushState({page:mpage,v:mval}, '', "?page="+mpage+"&v="+mval);//history
		showpage(mpage,mval);
	});
	//顯示影片
	$("body").delegate(".classclick","click",function(){
		var murl="file://"+fileURL+$(this).data("folder")+"/"+$(this).data("val")+".mp4";
		try{
			 fileOpener.open(murl);
		 } catch(err) {
			 alert("ER - " + err.message);
		 }
	});
	function setsize(){
	}
	//定義一些動態
	var rcloud="";
	function showpage(x,y){
		var mypage=parseInt(x);
		var myval=y;
		$("#outerwrap").css("opacity",0);
		if(rcloud){
			clearInterval(rcloud);
		}
		//首頁--在index.html
		if(mypage==0){
			var temp=print_index();
			$("#outerwrap").html(temp);
			$("#indeximg1").css("opacity",0).css("margin-top",-400);
			$("#indeximg2").css("opacity",0).css("margin-left",-400);
			$("#indeximg3").css("opacity",0).css("margin-right",-400);;
			$("#outerwrap").animate({"opacity":1},300);
			//跑動首頁
			$("#indeximg1").delay(500).animate({"opacity":1,"margin-top":0},800);
			$("#indeximg2").delay(1000).animate({"opacity":1,"margin-left":0},800);
			$("#indeximg3").delay(1000).animate({"opacity":1,"margin-right":0},800);
			rmycloud();
			setTimeout(function(){
				$("#indexclick").addClass("pageclick");
				$("#indexclick").data("page",1);
				
			},1000);
		}
		//課程選擇
		else if(x==1){
			var temp=print_menu();
			$("#outerwrap").html(temp);	
			if(tb=getxmlmenu()){
				$(".page1insert").html(tb);	
				$("#outerwrap").animate({"opacity":1},300);
			}
		}
		//書架
		else if(x==2){
			var temp=print_bookselve();
			$("#outerwrap").html(temp);	
			if(tb=getxmlselve(myval)){
				$(".centerwarp2").html(tb);	
				$("#outerwrap").animate({"opacity":1},300);
			}
		}
		//課程列表
		else if(x==3){
			var temp=print_booklist();
			$("#outerwrap").html(temp);	
			if(tb=getxmllist(myval)){
				$(".classcbox").html(tb);	
				$("#outerwrap").animate({"opacity":1},300);
			}
		}
	}
	function getxmllist(z){
		var out="";
		$(".page3title").html($(xmlsave).find('cyear[id='+z+']').siblings("name").text()+"教室");
		$(".page3title").data("val",$(xmlsave).find('cyear[id='+z+']').parents("classtype").attr("id"));
		out+="<div style='font-size:34px;'> <font color='#d5c13f'>"+$(xmlsave).find('cyear[id='+z+']').children("name").text()+"</font></div>";
		out+="<div style='font-size:23px;line-height:53px;font-weight: bold' class='page4content'>";
		var sublist=$(xmlsave).find('cyear[id='+z+']').children("subtype");
		if(sublist.length>0){
			for(var b=0;b<sublist.length;b++){
				out+="			<font color='#d5c13f' ><p>"+sublist.eq(b).children("name").text()+"</p></font>";
				out+="			<div class='line'></div>";			
				var classlist=sublist.eq(b).children("class");
				for(var a=0;a<classlist.length;a++){
					out+="		<div  class='classclick' data-val='"+classlist.eq(a).children("code").text()+"' data-folder='"+classlist.eq(a).parents("classtype").children("name").text()+"'>";
					out+="			<font color='#ffffff' ><p>"+classlist.eq(a).children("name").text()+"</p></font>";
					out+="			<div class='line'></div>";
					out+="		</div>";
				}
			}
		}else{
			var classlist=$(xmlsave).find('cyear[id='+z+']').children("class");
			for(var a=0;a<classlist.length;a++){
				out+="		<div  class='classclick' data-val='"+classlist.eq(a).children("code").text()+"'  data-folder='"+classlist.eq(a).parents("classtype").children("name").text()+"'>";
          		out+="			<font color='#ffffff' ><p>"+classlist.eq(a).children("name").text()+"</p></font>";
				out+="			<div class='line'></div>";
				out+="		</div>";
			}
		}
		out+="</div>";
		return out;
	}
	function getxmlselve(z){
		var out="";
		var classyear=$(xmlsave).find('classtype[id='+z+']').children("cyear");
		$(".page2title").html($(xmlsave).find('classtype[id='+z+']').children("name").text()+"書架");
		var xpg=Math.ceil(classyear.length/5);
		for(p=0;p<xpg;p++){
			out+="<div class='cutcontent2'>";
			out+="<div class='books_1'>";
			for(var a=p*5;a<p*5+5 && a<classyear.length;a++){
				out+="<img src='"+classyear.eq(a).children('cimg').text()+"' class='pageclick' data-page='3' data-val='"+classyear.eq(a).attr("id")+"'>";
			}
			out+="</div>";
			out+="</div>";
		}
		return out;
	}
	function getxmlmenu(){
		var out="";
		var classtype=$(xmlsave).find('classtype');
		for(var a=0;a<classtype.length;a++){
			out+="<img src='"+classtype.eq(a).children('cimg').text()+"' class='pageclick' data-page='2' data-val='"+classtype.eq(a).attr("id")+"' />";
		}
		return out;
	}
	function showxml(){
					var classtype=$(xmlsave).find('classtype');
					for(var a=0;a<classtype.length;a++){
						alert( classtype.eq(a).children('name').text());
						var cy=classtype.eq(a).find('cyear');
					//	alert(cy.length);
					}
	}
	function rmycloud(){
		var x=0;
			$("#indeximg1").css("transform-origin","50% 0%" );
			$("#indeximg1").css("-ms-transform-origin","50% 0%" );
			$("#indeximg1").css("-webkit-transform-origin","50% 0%" );
			$("#indeximg1").css("-moz-transform-origin","50% 0%" );
			setTimeout(function(){
					$("#indeximg1").removeClass("rot10");
			},1000);
			rcloud=setInterval(function(){
				$("#indeximg1").removeClass("rot10b").removeClass("rot10").addClass("rot10r");
				setTimeout(function(){
					$("#indeximg1").removeClass("rot10").removeClass("rot10r").addClass("rot10b");
				},1000);
			},2000);
	}
});
