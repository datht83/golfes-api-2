/* user section */

xhr.user = xhr.init
.then(function(res) {
	App.log(url, res);

	url = 'user/signup';
	return post(url, {
	    first_name: 'daiki',
	    last_name: 'shirakawa',
	    email: 'shirakawa@excrew.net',
	    confirm_email: 'shirakawa@excrew.net',
	    password: '1234asdf',
	    confirm_password: '1234asdf',
	    gender: 'male',
	    user_golfer_type_id: 1,
	    agree: 1
    });
})
.then(function(res) {
	App.log(url, res);
	App.setToken(res.data.access_token);

	url = 'user/signup_fb';
	var fb_t = 'CAAEJZBURPM1YBAF6IrfDm6DDuKeJOl8NMW1ZB3GcGnw1YMmXcRQvOTQljZAkJeUQ3iW4iA3QTii0uItoZA3mNEymh4AwTURqwhZBamgihvZCuBgYapuQVpp5cvK06JiU7Rhn6hZA69mZB79cw4xVeqFexqL2qsTXuSg6fzCe1yBDYrZBnSYnFL6PuwaB25hg8sXC9rf445HlDp8WCiK8rqI51';
	return post(url, {
	    first_name: 'dat',
	    last_name: 'huynh',
	    email: 'trungdathuynh@gmail.com',
	    confirm_email: 'trungdathuynh@gmail.com',
	    password: '12345678',
	    confirm_password: '12345678',
	    gender: 'male',
	    user_golfer_type_id: 1,
		fb_token: fb_t,
		fb_uid: 605568276225774,
		fb_expires: 1416019736
    });
})
.then(function(res) {
	App.log(url, res);
	App.setToken(res.data.access_token);

	url = 'user/logout';
	return get(url, {});
})
.then(function(res) {
	App.log(url, res);
	App.resetToken();

	url = 'user/login_fb';
	return post(url, {
	    fb_uid: 605568276225774
	});
})
.then(function(res) {
	App.log(url, res);
	App.setToken(res.data.access_token);

	url = 'user/logout';
	return get(url, {});
})
.then(function(res) {
	App.log(url, res);
	App.resetToken();

	url = 'user/login';
	return post(url, {
	    email: 'shirakawa@excrew.net',
	    password: '1234asdf'
	});
})
.then(function(res) {
	App.log(url, res);
	App.setToken(res.data.access_token);

	url = 'user/contact';
	return post(url, {
		email: 'shirakawa@excrew.net',
		username: 'shirakawa',
		content: 'これはtestお問い合わせメールです'
	});
})
.then(function(res) {
	App.log(url, res);
	App.setToken(res.data.access_token);

	url = 'user/user_data';
	return get(url, {
		
	});
});