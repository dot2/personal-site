Template.Header.rendered = function() {
    $(document).ready(function(){
    $(".nav-item").mouseover(function(){
        $("header").animate({
          backgroundColor: $(this).data('color')
        }, 300);
        }
    ) .mouseleave(function() {
      $("header").animate({
          backgroundColor: "#fff",
          color: "#000"
      }, 0);
    })
});
        //find a color > apply to background
        //off > revert the color
};

Template.registerHelper('posts', function() {
    return Posts.find({}, { sort: ['sort'] });
});

Template.Landing.helpers({
  posts: function () {
    return Posts.findOne();
  }
});
