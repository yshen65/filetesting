	//測試
	//新聞主頁
	print_index=function(){//arr==傳值內容  x==分類
		var out="";
		out+="    <div id='indexclick' style='width:100%;height:100%;position:absolute;top:0;left:0;'>";
		out+="        <img src='img/learn_1.png'>";
		out+="        <div class='fullscrollitemtext_1'>";
		out+="            <img src='img/learn_3.png' id='indeximg1'>";
		out+="        </div>";
		out+=" 			<div class='fullscrollitemtext' style='font-size: 56px; line-height:70px;text-align: center; color: #33462c; top: 423px;'>";
		out+="			<b>國中雲端學院</b>";
		out+="        </div> ";
		out+=" 			<div class='fullscrollitemtext' style='font-size:24px;line-height:30px;text-align:center;color:#323232;top:508px;'>";
		out+="            <b>我們的使命 ─ 讓學生放心去玩</b>";
		out+="        </div> ";
		out+=" 			<div class='fullscrollitemtext' style='font-size:13px;text-align:center;color:#323232;top:551px;line-height:20px;z-index:4;'>";
		out+="            <p><b>我們傳授學生「終生有效」的學習方法！</b></p>";
		out+="            <p><b>讓學生在最短時間做好課業，</b></p>";
		out+="            <p><b>讓學生擁有更多時間，盡情去享受青春！</b></p>";
		//out+="            <p class='testclick' style='background:#fff;z-index:5'>測試開LOCAL一般影片</p>";
		//out+="            <p class='testclick2' style='background:#fff;z-index:5'>測試開SD一般影片</p>";
		//out+="            <p class='testclick2' style='background:#fff;z-index:5'>測試開app內一般影片</p>";
		out+="        </div>     ";
		out+="        <img src='img/table_1.png' style='position:absolute;bottom:0;left:0;'>";
		out+="        <img src='img/book_left.png' style='position:absolute;bottom:0;left:0;' id='indeximg2'>";
		out+="        <img src='img/book_right.png' style='position:absolute;bottom:0;right:0;' id='indeximg3'>";
		out+="        <div class='fullscrollitemtext' style='top:650px;font-size:11px;line-height:16px;text-align:center;color:#000;z-index:2;'>";
		out+="			<p>茂榕數位科技 版權所有 </p>";
		out+="			<p>2016© Maorongtech  All Rights Reserved.</p>";
		out+="		  </div> ";
		out+="	  </div> ";
		return out;
	}
	print_menu=function(){//arr==傳值內容  x==分類
		var out="";
		out+="    <div class='inwrap' style='width:100%;height:100%;position:absolute;top:0;left:0;'>";
		out+="		<div class='rely' style='z-index:3'>";
		out+="        <img src='img/Contents_1.png'>";
		out+="			<div class='centerwarp1_box01'>";
		out+="				<font color='#694a2b'><b>我的教室</b></font>";
		out+="			</div>";
		out+="			<div class='centerwarp1_box02'>";
		out+="				<font color='#af571e'><b>NEW  2017.07.16 - </b></font>";
		out+="				<font color='#020202'><b>最新版模擬考試題全新上線，現在馬上來測試看看實力吧。</b></font>";
		out+="            </div>";
		out+="            <div class='centerwarp1_box03'>";
		out+="				<font color='#af571e'><b>NEW  2017.07.14 - </b></font>";
		out+="				<font color='#020202'><b>考前最終圖庫新上線！立即來做最後的衝刺吧。</b></font>";
		out+="            </div>";
		out+="            	<div class='centerwarp1_home pageclick' data-page='0' >";
		out+="          	  </div>";
		out+="    </div>		";
		out+="    <div class='centerwarp4' style='z-index:1'>";
		out+="			<div class='books_2 page1insert'>        ";
		out+="			</div>	    ";
		out+="    </div>";
		out+="    <img src='img/Contents_2.png' style='position:absolute;bottom:0;left:0;z-index:3'>";
		out+="	  <div class='greenback tagfarm_1'></div>";
		out+="	 </div>";
		return out;
	}
	print_bookselve=function(){//arr==傳值內容  x==分類
		var out="";
		out+="    <div class='inwrap' style='width:100%;height:100%;position:absolute;top:0;left:0;'>";
		out+="		<div class='rely' style='z-index:3'>";
		out+="        <img src='img/Contents_1.png'>";
		out+="			<div class='centerwarp1_box01'>";
		out+="				<font color='#694a2b'><b class='page2title'></b></font>";
		out+="			</div>";
		out+="			<div class='centerwarp1_box02'>";
		out+="				<font color='#af571e'><b>NEW  2017.07.16 - </b></font>";
		out+="				<font color='#020202'><b>最新版模擬考試題全新上線，現在馬上來測試看看實力吧。</b></font>";
		out+="            </div>";
		out+="           <div class='centerwarp1_box03'>";
		out+="				<font color='#af571e'><b>NEW  2017.07.14 - </b></font>";
		out+="				<font color='#020202'><b>考前最終圖庫新上線！立即來做最後的衝刺吧。</b></font>";
		out+="            </div>";
		out+="            	<div class='centerwarp1_home pageclick' data-page='0' >";
		out+="         	  </div>";
		out+="    	</div>		";
		out+="    	<div class='centerwarp2' style='z-index:1'>";
		out+="    	</div>";
		out+="    	<img src='img/Contents_2.png' style='position:absolute;bottom:0;left:0;z-index:3'>";
		out+="	  </div> ";
		return out;
	}
	print_booklist=function(){//arr==傳值內容  x==分類
		var out="";
		out+="    <div class='inwrap' style='width:100%;height:100%;position:absolute;top:0;left:0;'>";
		out+="		<div class='rely' style='z-index:3'>";
		out+="          <img src='img/Contents_3.png'>";
		out+="			<div class='centerwarp1_box01'>";
		out+="				<font color='#694a2b'><b class='page3title pageclick' data-page='2'>我的教室</b></font>";
		out+="			</div>";
		out+="			<div class='centerwarp1_box02'>";
		out+="				<font color='#af571e'><b>NEW  2017.07.16 - </b></font>";
		out+="				<font color='#020202'><b>最新版模擬考試題全新上線，現在馬上來測試看看實力吧。</b></font>";
		out+="          </div>";
		out+="          <div class='centerwarp1_box03'>";
		out+="				<font color='#af571e'><b>NEW  2017.07.14 - </b></font>";
		out+="				<font color='#020202'><b>考前最終圖庫新上線！立即來做最後的衝刺吧。</b></font>";
		out+="          </div>";
		out+="          <div class='centerwarp1_home pageclick' data-page='0' ></div>";
		out+="          <a href='https://www.sites.google.com/site/maorongexam/' class='page3link' target='_new'><div class='centerwarp1_tag' ></div></a>";
		out+="     </div>";
		out+="     <div class='centerwarp3' style='z-index:1'>";
		out+="			<div class='books_4'>";
		out+="				<div class='text_box1 classcbox' style='padding-bottom:30px;'>";//這是課程wrap
		out+="    			</div>";
		out+="			</div>	    ";
		out+="     </div>";
		out+="     <img src='img/Contents_2.png' style='position:absolute;bottom:0;left:0;z-index:3'>";
		out+="	    <div class='greenback tagfarm_1'></div>";
		out+="	  </div> ";
		return out;
	}
