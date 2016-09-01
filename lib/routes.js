FlowRouter.route('/', {
    name: 'Landing',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Landing'});
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Landing'});
    }
});
