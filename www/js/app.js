var  entry, documentname, documentid, referenceID, callLogID, filePath, blob,cdr,fileObject;
var filename = "test.pdf";
var fileURL = "";
var imagePath = "";
var sdpath="";
var sdfilepath="";
$(document).ready(function() {

	$(".aclick").click(function(e){
		e.preventDefault();
		alert("openfile");
		window.open($(this).attr("href"),'rr','',false);
	})
	document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var fileTransfer = new FileTransfer();
			//取得根目錄
		 	getsdpath();
			//取得SD權力
		//	askforrights();
			//取得檔案權力

			//測試上傳
			$('#download').click( function() {
					runtimeask();

			});
		   $('#download2').click( function(){
				 	opentest();
			 });
			 $('#download3').click( function(){
					uploadtestorg();
			 });
			 $('#download4').click( function(){
					opentest2();
			 });
			 // 取得資料存取全力
			 function runtimeask(){
				 	alert("ask start")
					cordova.plugins.diagnostic.requestRuntimePermissions(function(statuses){
						 for (var permission in statuses){
									 switch(statuses[permission]){
											 case cordova.plugins.diagnostic.permissionStatus.GRANTED:
													 alert("Permission granted to use "+permission);
													 break;
											 case cordova.plugins.diagnostic.permissionStatus.NOT_REQUESTED:
													 alert("Permission to use "+permission+" has not been requested yet");
													 break;
											 case cordova.plugins.diagnostic.permissionStatus.DENIED:
													 alert("Permission denied to use "+permission+" - ask again?");
													 break;
											 case cordova.plugins.diagnostic.permissionStatus.DENIED_ALWAYS:
													 alert("Permission permanently denied to use "+permission+" - guess we won't be using it then!");
													 break;
									 }
							 }
						}, function(error){
					     alert("The following error occurred: "+error);
					  },[
    					cordova.plugins.diagnostic.permission.ACCESS_FINE_LOCATION,
    					cordova.plugins.diagnostic.permission.ACCESS_COARSE_LOCATION
					]);

			 }
				//取得sdpath
				function getsdpath(){
					cordova.plugins.diagnostic.getExternalSdCardDetails(function(details){
							details.forEach(function(detail){
									if(detail.canWrite && detail.freeSpace > 100000){
										temp = detail.filePath;
										sdfilepath=temp;
										ta=temp.split("storage/");
										tb=ta[1].split("/");
										sdpath="/storage/"+tb[0]+"/";
										cordova.file.externalSdCardDirectory = sdpath;
										alert("sdpath_got");
										alert(cordova.file.externalSdCardDirectory)
									}
							});
					}, function(error){
							alert(error);
					});
				}
				//取得SD權力
				function askforrights(){
						cordova.plugins.diagnostic.requestExternalStorageAuthorization(function(status){
							alert("Authorization request for external storage use was " + (status == cordova.plugins.diagnostic.permissionStatus.GRANTED ? "granted" : "denied"));
						}, function(error){
							alert(error);
						});
				}
				//上船測試
				function uploadtest(){
						 try {
							 	alert('upload start ');
								var uri = encodeURI("http://99mission.why3s.tw/img/sitemap.pdf");
								alert("dest - " + cordova.file.externalSdCardDirectory+"VIDEOS/"+filename);
								fileTransfer.download(uri,cordova.file.externalSdCardDirectory+"VIDEOS/"+filename,
									function(entry) {
										var temp=cordova.file.externalSdCardDirectory+"VIDEOS/"+filename;
										openFile(temp);
									},function(error) {
										alert("upload error");
									},
									true);
								/*
								// working org
								var uri = encodeURI("http://99mission.why3s.tw/img/sitemap.pdf");
								alert("dest - " + cordova.file.externalSdCardDirectory+"/"+filename);
								fileTransfer.download(uri,cordova.file.externalSdCardDirectory+"/"+filename,
									function(entry) {
										var temp=cordova.file.externalSdCardDirectory+"/"+filename;
										openFile(temp);
									},function(error) {
										alert("upload error");
									},
									true);
									*/
					 	}catch(err) {
						 		alert("ER - " + err.message);
					 	}
			 }
			 function openFile(x) {
				 		alert("LOCAL URL - " + x);
						fileOpener.open(x);
			 }
			 function opentest(){
						 try{
							 alert('open test start');
							 fileOpener.open(sdpath+'VIDEOS/C21.mp4');
							 /*
							 cordova.plugins.fileOpener2.open(cordova.file.externalSdCardDirectory+'/C21_test.mp4','video/mp4',
								 {
									 error : function(e) {
										 alert('Error status: ' + e.status + ' - Error message: ' + e.message);
									 },
									 success : function () {
									 }
								 }
							 );
						 	*/
						 } catch(err) {
							 alert("ER - " + err.message);
						 }

			 }
			 function opentest2(){
						 try{
							 alert('open test start');
							 fileOpener.open(sdpath+'VIDEOS/C21_test.mp4');
						 } catch(err) {
							 alert("ER - " + err.message);
						 }

			 }
			 function uploadtestorg(){
						try {
							 alert('upload ORG way start ');
							 window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory,function(fileSystem){
								 			var entry=fileSystem;
				 							alert("LOCAL FOLDER - "+fileSystem.toURL());
											entry.getDirectory("teach2", {create: true, exclusive: false}, function(dir) {
															alert("LOCAL FOLDER - "+entry.toURL());
															var dir=dir;
															dir.getFile(filename,{create:true, exclusive:false},function(fileEntry){
																		var uri = encodeURI("http://99mission.why3s.tw/img/sitemap.pdf");
																		alert("dest - " + dir.nativeURL+filename);
																		fileTransfer.download(uri,dir.nativeURL+filename,
																				function(entry) {
																					temp=dir.nativeURL+filename;
																					openFile(temp);
																				},
																				function(){alert("error upload");},true);
															}, function(){alert("onfileFail");});
											},function(){alert("onGetDirectoryFail");});
							 }, function(){alert("resolveLocalFileSystem fail");});
					 }catch(err) {
							 alert("ER - " + err.message);
					 }
			}






		}

});// JQ end
