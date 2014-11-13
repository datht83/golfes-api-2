var App = {};

$.ajaxSetup({crossDomain: true, cache: false});
$(document).ajaxSend(function(e, XHR, setting) {
	return false;
	console.log('ajax setting...');
	console.log(setting);
});

$(document).on('click', '.title', function(e) {
	var $base = $(e.target).next().find('textarea');
	var rowsNum = $base.attr('rows');
	var toggleNum = (Number(rowsNum) === 3) ? 20: 3;
	$base.attr('rows', toggleNum);
});

var base = 'http://next.golfes.jp/api/v1/';
var appId = 'abc';
var url = 'none';
var xhr = {};

App.token = 'none';
App.setToken = function(token) {
	return App.token = token;
};
App.resetToken = function(token) {
	return App.token = 'none';
};

App.url = function(url, params) {
	var u = base + url;
	params.app_id = appId;
	if (App.token !== 'none') params.token = App.token;
	var p = $.param(params);
	return u + '?' + p;
};

App.append = function(node) {
	$('#result').append(node);
};

App.tmpl = function(title, res) {
	var tmpl = _.template($('#tmpl').text());
	var json = JSON.stringify(res, null, "    ");
	return tmpl({title: title, json: json});
};

App.log = function(url, res) {
	console.log('API : ' + url + ' OK!');
	console.log(res);
	console.log('');
	App.append(App.tmpl(url, res));
};

App.err = function(url) {
	console.log('API : ' + url + ' NG...error...');
};

function get(url, params) {
	return $.get(App.url(url, params), {});
}

function post(url, params) {
	return $.post(App.url(url, {}), params);
}