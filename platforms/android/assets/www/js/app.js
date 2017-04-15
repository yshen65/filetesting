var  entry, documentname, documentid, referenceID, callLogID, filePath, blob,cdr,fileObject;
var filename = "test.pdf";
var fileURL = "";
var imagePath = "";
var sdpath="";
$(document).ready(function() {
	$(".aclick").click(function(e){
		e.preventDefault();
		window.open($(this).attr("href"),'rr','',false)
	})
	document.addEventListener("deviceready", onDeviceReady, false);
		function onDeviceReady() {
			var fileTransfer = new FileTransfer();
			//取得根目錄
		 	getsdpath();
			//取得SD權力
			askforrights();
			//測試上傳
			$('#download').click( function() {
					uploadtest();
			});
		   $('#download2').click( function(){
				 	opentest();
			 });
			 $('#download3').click( function(){
					uploadtestorg();
			 });
				//取得sdpath
				function getsdpath(){
					cordova.plugins.diagnostic.getExternalSdCardDetails(function(details){
							details.forEach(function(detail){
									if(detail.canWrite && detail.freeSpace > 100000){
										temp = detail.filePath;
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
								alert("dest - " + cordova.file.externalSdCardDirectory+"/"+filename);
								fileTransfer.download(uri,cordova.file.externalSdCardDirectory+"/"+filename,
									function(entry) {
										var temp=cordova.file.externalSdCardDirectory+"/"+filename;
										openFile(temp);
									},function(error) {
										alert("upload error");
									},
									true);
					 	}catch(err) {
						 		alert("ER - " + err.message);
					 	}
			 }
			 function openFile(x) {
				 		alert("LOCAL URL - " + x);
					 cordova.plugins.fileOpener2.open(
						 x, 'application/pdf',
						 {
							 error : function(e) {
								 alert('Error status: ' + e.status + ' - Error message: ' + e.message);
							 }, success : function () {
							 }
						 }
					 );
			 }
			 function opentest(){
						 try{
							 alert('open test start');
							 cordova.plugins.fileOpener2.open(cordova.file.externalSdCardDirectory+'/C21_test.mp4','video/mp4',
								 {
									 error : function(e) {
										 alert('Error status: ' + e.status + ' - Error message: ' + e.message);
									 },
									 success : function () {
									 }
								 }
							 );
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
				function onFileSystemSuccess(fileSystem) {
					//var directoryReader = fileSystem.root.createReader();
					//directoryReader.readEntries(onReadEntries, function (evt){alert("ERRR... 2");});
					//alert(fileSystem.root);
					//alert(fileSystem.root.toURL());
					alert("G");
					alert(fileSystem.toURL());
					//var directoryReader = fileSystem.createReader();
					//directoryReader.readEntries(onReadEntries, function (evt){alert("ERRR... 2");});


					var entry="";
					entry=fileSystem;
					alert(fileSystem.toURL());
					entry.getDirectory("teach", {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail);

				};
			function onReadEntries(entries) {
				for (var i = 0; i < entries.length; i++) {
					alert(entries[i].name);
					alert(entries[i].toURL());
				}
			}
				function onGetDirectorySuccess(dir) {
					dir.getDirectory("video", {create: true, exclusive: false}, onGetDirectorySuccess1, onGetDirectoryFail);
				};
				function onGetDirectorySuccess1(dir) {
					cdr = dir;
					dir.getFile(filename,{create:true, exclusive:false},gotFileEntry, errorHandler);
				};
				function gotFileEntry(fileEntry) {
						var uri = encodeURI("http://99mission.why3s.tw/img/sitemap.pdf");
						alert("dest - " + cdr.nativeURL+filename);
						fileTransfer.download(uri,cdr.nativeURL+filename,
							function(entry) {
								openFile();
							},
							function(error) {
								alert("download error source " + error.source);
								alert("download error target " + error.target);
								alert("upload error code" + error.code);
								alert("error");
							},
							true);
				};


				function onFileSystemSuccessDelete(fileSystem) {
					var entry="";
					if (sessionStorage.platform.toLowerCase() == "android") {
						entry=fileSystem;
					}
					else {
						entry=fileSystem.root;
					}
					entry.getDirectory("Cordova/Sample_App", {create: true, exclusive: false}, onGetDirectorySuccessDelete, onGetDirectoryFail);

				};
				function onGetDirectorySuccessDelete(dir) {
					dir.getFile(filename,{create: true, exclusive:false},gotFileEntryDelete, fail);
				};

				function gotFileEntryDelete(fileEntry) {
					fileEntry.remove();
					var uri = encodeURI("http://99mission.why3s.tw/img/sitemap.pdf");
						fileTransfer.download(uri,cdr.nativeURL+filename,
							function(entry) {
								console.log("download complete: " + entry.toURL());
								openFile();
							},
							function(error) {
								alert("download error source " + error.source);
								alert("download error target " + error.target);
								alert("upload error code" + error.code);
								alert("error");
							},
							true);
				};

				function fail(error){
					alert("ec - " + error.code);
				};

				function  errorHandler(e) {
					var msg = '';
					switch (e.code) {
						case FileError.QUOTA_EXCEEDED_ERR:
							msg = 'QUOTA_EXCEEDED_ERR';
							break;
						case FileError.NOT_FOUND_ERR:
							msg = 'NOT_FOUND_ERR';
							break;
						case FileError.SECURITY_ERR:
							msg = 'SECURITY_ERR';
							break;
						case FileError.INVALID_MODIFICATION_ERR:
							msg = 'INVALID_MODIFICATION_ERR';
							break;
						case FileError.INVALID_STATE_ERR:
							msg = 'INVALID_STATE_ERR';
							break;
						default:
							msg = e.code;
							break;
					};
					alert("Msg - " + msg);
				};

				function onGetDirectoryFail(error) {
					alert("onGetDirectoryFail");
				};

				$('#delete').click(ClearDirectory);

				function ClearDirectory() {
					alert("delete");
					if (sessionStorage.platform.toLowerCase() == "android") {
						window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory,onFileSystemDirSuccess, fail);
					}
					else {
						window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,onFileSystemDirSuccess, fail);
					}
				}
				function onFileSystemDirSuccess(fileSystem) {
					var entry = "";
					if (sessionStorage.platform.toLowerCase() == "android") {
						entry=fileSystem;
					}
					else {
						entry=fileSystem.root;
					}
		            entry.getDirectory("Cordova",{create : true, exclusive : false},
		                function(entry) {
							entry.removeRecursively(function() {
								console.log("Remove Recursively Succeeded");
							}, fail);
						}, getDirFail);
		        }

				function getDirFail(error){
					alert("getDirFail - " + error.code);
				};

		}

});// JQ end
