//Main heading text slide down
TweenMax.from("#ctaHeading", 1.6, {top:"0px"});

//Page fade in
TweenMax.set(('body'), {className: '-=loading'});

//Banner text slide up on scroll
const timeline = new TimelineMax();
const controller = new ScrollMagic.Controller();

timeline.from(".banner h2", .5, {y: 100, opacity: 0, ease: Power4.easeOut});
const scene = new ScrollMagic.Scene({
  triggerElement: ".banner"
}).setTween(timeline).addTo(controller);