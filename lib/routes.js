FlowRouter.route('/', {
    name: 'Landing',
    action() {
        BlazeLayout.render('Landing');
    }
});

FlowRouter.route('/home', {
    name: 'home',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Landing'});
    }
});
