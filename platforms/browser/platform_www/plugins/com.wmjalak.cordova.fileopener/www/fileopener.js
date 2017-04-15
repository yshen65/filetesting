cordova.define("com.wmjalak.cordova.fileopener.FileOpener", function(require, exports, module) { module.exports = {

    open: function (url, success, failure) {
        if (!success) {
            success = function () {
                console.log("file opened successfully");
            };
        }
        if (!failure) {
            failure = function (error) {
                console.log(error);
            };
        }
        cordova.exec(success, failure, "FileOpener", "openFile", [url]);
    }

}
});
