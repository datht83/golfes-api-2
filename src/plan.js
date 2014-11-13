/* plan section */

xhr.plan = xhr.user
.then(function(res) {
	App.log(url, res);

	url = 'plan/list';
	return get(url, {
	    sort: 'ranking',
	    offset: 0,
	    hits: 20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/list';
	return get(url, {
	    sort: 'new',
	    offset: 0,
	    hits: 20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/detail';
	return get(url, {plan_id: 1});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/list_want_to_join_comment';
	return get(url, {plan_id: 1});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/list_comment';
	return get(url, {plan_id: 1});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/area_list';
	return get(url, {plan_id: 1});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/category_list';
	return get(url, {plan_id: 1});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/like';
	return post(url, {
		plan_id: 2
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/want_to_join';
	return post(url, {
		plan_id: 2,
		message: '参加しますー',
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/vote';
	return post(url, {
		plan_id: 2
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/comment';
	return post(url, {
		plan_id: 2,
		comment: '企画のコメントです。',
		parent_id: 3
	});
});