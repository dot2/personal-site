FlowRouter.route('/', {
    name: 'Landing',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Landing'});
    },
    // triggersExit: function(){
    //     var selector = '.nav a[href="' + FlowRouter.current().path + '"]';
    //     $('.nav-item').removeClass('acitve');
    //     $(selector).addClass('acitve');
    // }
});

FlowRouter.route('/projects', {
    name: 'projects',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Projects'});
    },
    // triggersExit: function(){
    //     var selector = '.nav a[href="' + FlowRouter.current().path + '"]';
    //     $('.nav-item').removeClass('acitve');
    //     $(selector).addClass('acitve');
    // }
});

FlowRouter.route('/admin', {
    name: 'admin',
    action() {
        BlazeLayout.render('MainLayout', {main: 'Admin'});
    }
})
