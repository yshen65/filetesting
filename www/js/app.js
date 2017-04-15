var  entry, documentname, documentid, referenceID, callLogID, filePath, blob,cdr,fileObject;
var filename = "test.pdf";
$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady, false);
});

var fileURL = "";
var imagePath = "";
function onDeviceReady() {	
 	var sdpath="";
//這部分成功了
	cordova.plugins.diagnostic.getExternalSdCardDetails(function(details){
		details.forEach(function(detail){
			if(detail.canWrite && detail.freeSpace > 100000){
				temp = detail.filePath;
				ta=temp.split("storage/");
				tb=ta[1].split("/");
				sdpath="/storage/"+tb[0]+"/";
			}
		});
	}, function(error){
		console.error(error);
	});
	var permissions = cordova.plugins.permissions;
	/*
	permissions.hasPermission(permissions.ACCESS_FINE_LOCATION, function( status ){
	  if ( status.hasPermission ) {
			alert("Y");
	  }
	  else {
		  alert("N");
		  permissions.requestPermission(permissions.ACCESS_FINE_LOCATION , psuccess, perror);
	  }
	});
	*/
	 permissions.requestPermission(permissions.ACCESS_FINE_LOCATION , psuccess, perror);
	 function perror() {
		  alert("無授權無法使用本軟體");
	}
	function psuccess( status ) {
		   if( !status.hasPermission ) perror();
	}
	//sessionStorage.platform = device.platform;
	//var fileTransfer = new FileTransfer();
     $('#download').click( function() 
		{	
		    try {
				alert('hi');
				cordova.plugins.fileOpener2.open(sdpath+'Android/data/com.maorongexam.app/files/C21_test.mp4','video/mp4', 
					{ 
						error : function(e) { 
							alert('Error status: ' + e.status + ' - Error message: ' + e.message);
						},
						success : function () {
							//alert('file opened successfully'); 				
						}
					}
				);
			}
			catch(err) {
				alert("ER - " + err.message);
			}
		});	
     $('#download2').click( function() 
		{	
		    try {
				alert('hi');
				cordova.plugins.fileOpener2.open('/sdcard/teach/video/C21.mp4','video/mp4', 
					{ 
						error : function(e) { 
							alert('Error status: ' + e.status + ' - Error message: ' + e.message);
						},
						success : function () {
							//alert('file opened successfully'); 				
						}
					}
				);
			}
			catch(err) {
				alert("ER - " + err.message);
			}
		});
     $('#download3').click( function() 
		{	
		    try {
				alert('hi2');
				cordova.plugins.fileOpener2.open('/sdcard/teach/video/C21_test.mp4','video/mp4', 
					{ 
						error : function(e) { 
							console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
						},
						success : function () {
							console.log('file opened successfully'); 				
						}
					});
			}
			catch(err) {
				alert("ER - " + err.message);
			}
		});
		//window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory,onFileSystemSuccess, onError);
		//window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory,onFileSystemSuccess, onError);
		//window.requestFileSystem(LocalFileSystem.PERSISTENT, 0,onFileSystemSuccess, onError);
		//window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory,onFileSystemSuccess, onError);
		//window.resolveLocalFileSystemURL("file:///storage",onFileSystemSuccess, onError);
		//window.resolveLocalFileSystemURL(cordova.file.externalRootDirectory,onFileSystemSuccess, onError);
		//window.resolveLocalFileSystemURL("file://storage",onFileSystemSuccess, onError);	 
		function onError(e) {
			alert(e.target.error.code);
		};

		function onFileSystemSuccess(fileSystem) {
			//var directoryReader = fileSystem.root.createReader();
			//directoryReader.readEntries(onReadEntries, function (evt){alert("ERRR... 2");});
			//alert(fileSystem.root);
			//alert(fileSystem.root.toURL());
			alert("G");
			var directoryReader = fileSystem.createReader();
			directoryReader.readEntries(onReadEntries, function (evt){alert("ERRR... 2");});
			
/*
			var entry="";
			if (sessionStorage.platform.toLowerCase() == "android") {
				entry=fileSystem;
				alert(fileSystem.toURL());
			}
			
			else {
				entry=fileSystem.root;
			}			
			entry.getDirectory("teach", {create: true, exclusive: false}, onGetDirectorySuccess, onGetDirectoryFail);
*/
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
		
		function openFile() {
			alert("URL - " + cdr.nativeURL+filename);
			cordova.plugins.fileOpener2.open(
				cdr.nativeURL+filename, 
				'application/pdf', 
				//'text/plain',
				{ 
					error : function(e) { 
						alert('Error status: ' + e.status + ' - Error message: ' + e.message);
					},
					success : function () {						               
					}
				}
			);
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