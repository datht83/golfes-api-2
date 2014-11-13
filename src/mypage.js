/* mypage section */

xhr.mypage = xhr.ticket
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {

	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {
	   tab: 'planner_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {
	   tab: 'purchased_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {
	   tab: 'liked_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {
	   tab: 'past_ticket',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {
	   tab: 'planner_plan',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/info';
	return get(url, {
	   tab: 'want_to_join_plan',
           offset:0,
           hits:20
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/reset_photo';
	return get(url, {
	   type: 'icon'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/reset_photo';   
	return get(url, {
	   type: 'cover'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/edit';
	return post(url, {
	    first_name: 'huynh',
	    last_name: 'dat',
            gender: 'male',
            user_golfer_type_id:2
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/check_pass';
	return post(url, {
	    password:'1234asdf'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/change_mail';
	return post(url, {
	    new_email:'khangruaiiit@gmail.com'
	});
})
.then(function(res) {
	App.log(url, res);

	url = 'mypage/change_pass';
	return post(url, {
	    old_password:'1234asdf',
            new_password: '12345678'
	});
})

