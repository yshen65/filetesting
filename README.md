
## about filetesting 
### (for android only)
### this is a testing bay for SD card read and write 
### For phonegap build
. since file olny get you the emulated/0 which is not real SD card..this test many plugin for read write and open file on sd card



## Find your sd card
I use cordova.plugins.diagnostic to find SD card. this is not perfect ,but it did find the SD location for you.

## set permision
beside in AndroidManifast.xml..
If you need to read and write into SD card...you need to do this on your config.xml<BR>
	   preference name="AndroidPersistentFileLocation" value="Compatibility" <BR>
     preference name="AndroidExtraFilesystems" value="files,files-external,documents,sdcard,cache,cache-external,assets,root"<BR>
     
## open file
I use cordova-plugin-file-opener . This fix opener2's problem and easy to use too.

## Android 6 runtime permission 
still working on it

