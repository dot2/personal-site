import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';

Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://dotolo.dylan2%40gmail.com:googleMustang08@smtp.gmail.com:587';
});

Meteor.settings.contactForm = {
  emailTo: 'dotolo.dylan2@gmail.com'
};
