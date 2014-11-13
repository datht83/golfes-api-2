/* planner section */

xhr.planner = xhr.planvote
.then(function(res) {
	App.log(url, res);

	url = 'plan/cancel_request_budget';
	return post(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/cancel_request_location';
	return post(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/cancel_request_date';
	return post(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/cancel_request_detail';
	return post(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/add_plan_note';
	return post(url, {
		plan_id: 1,
		comment: 'これは備考'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_create_ticket';
	return post(url, {
		plan_id: 1,
		comment: 'チケットの実現化をお願いします'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_delete';
	return post(url, {
		plan_id: 1,
		comment: '企画の削除をお願いします'
	});
});