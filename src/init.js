/* init section */

App.append('<p class="bg-info mark">APIテストスタート...</p>');

url = 'tool/reset_db';
xhr.init = get(url, {})
.then(function(res) {
	App.log(url, res);

	url = 'version';
	return get(url, {
		version: '1.0.0'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'server';
	return get(url, {});
})
.then(function(res) {
	App.log(url, res);

	url = 'footer/banner';
	return get(url, {
		hits: 3
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'footer/banner';
	return get(url, {});
});