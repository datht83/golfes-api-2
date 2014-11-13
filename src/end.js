/* end section */

xhr.profile.then(function(res) {
	App.log(url, res);

	url = 'mypage/delete';
	return post(url, {});
})
.done(function(res) {
	App.log(url, res);
	console.log('API TEST COMPLETE!!!!');
	App.append('<p class="bg-success mark">[成功] API テスト完了！！</p>');
})
.fail(function(XHR, status, res) {
	console.log('API TEST ERROR: ' + url);
	var error = JSON.parse(XHR.responseText);
	App.append('<p class="bg-danger mark">[失敗] Error：' + url + ' msg： ' + error.msg + '</p>');
	console.log(error);
	console.log(status);
	console.log(res);
});
