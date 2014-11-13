/* profile section */

xhr.profile = xhr.mypage
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'planner_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'purchased_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'liked_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'past_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'planner_plan',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'liked_plan',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'profile/info';
	return get(url, {
	   uid: '007cd63740',
           tab: 'want_to_join_plan',
           offset:0,
           hits:20
	});
})