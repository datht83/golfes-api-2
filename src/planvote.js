/* planvote section */

xhr.planvote = xhr.plan
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_date_list';
	return get(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_location_list';
	return get(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_budget_list';
	return get(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_detail_list';
	return get(url, {
		plan_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_date_add';
	return post(url, {
		plan_id: 1,
        year: 2014,
        month: 12,
        time_of_month: 'begin',
        weekday_or_holiday: 'weekday'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_location_add';
	return post(url, {
		plan_id: 1,
		master_state_id: 2
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_budget_add';
	return post(url, {
		plan_id: 1,
		budget_price : 5000
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_detail_add';
	return post(url, {
		plan_id: 1,
		request_content: 'abcxyz'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_date_vote';
	return post(url, {
		plan_id: 1,
		request_date_id:1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_location_vote';
	return post(url, {
		plan_id: 1,
		request_location_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_budget_vote';
	return post(url, {
		plan_id: 1,
                request_budget_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_detail_vote';
	return post(url, {
		plan_id: 1,
		request_content_id:1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_date_fix';
	return post(url, {
		plan_id: 1,
		request_date_id:1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_location_fix';
	return post(url, {
		plan_id: 1,
		request_location_id:1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_budget_fix';
	return post(url, {
		plan_id: 1,
		request_budget_id:1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'plan/request_detail_fix';
	return post(url, {
		plan_id: 1,
		request_content_id:1
	});
});