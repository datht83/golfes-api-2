/* ticket section */

xhr.ticket = xhr.planner
.then(function(res) {
	App.log(url, res);

	url = 'ticket/list';
	return get(url, {
	    sort: 'ranking',
	    offset: 0,
	    hits: 20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'ticket/list';
	return get(url, {
	    sort: 'new',
	    offset: 0,
	    hits: 20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'ticket/detail';
	return get(url, {
	    ticket_id: 1
	});
})
//.then(function(res) {
//	App.log(url, res);
//
//	url = 'ticket/confirm';
//	return get(url, {
//	    ticket_id: 11
//	});
//})
.then(function(res) {
	App.log(url, res);

	url = 'ticket/like';
	return post(url, {
		ticket_id: 1
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'ticket/add_comment';
	return post(url, {
		ticket_id: 1,
                comment: 'tiket comment'
	});
})
//.then(function(res) {
//	App.log(url, res);
//
//	url = 'ticket/buy';
//	return post(url, {
//		ticket_id: 1,
//                comment: 'tiket buy'
//	});
//})
