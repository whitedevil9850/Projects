let tl = gsap.timeline()
tl.from ('#nav',{
    opacity:0,
    delay:.8
})
tl.from('#nav h1, #nav h3, #nav h4',{
    duration:.7,
    opacity:0,
  y:-50,
  opacity:0,
  stagger:.2,

})

tl.from('#left h1',{
    opacity:0,
    x:-30,
    duration:0.6,
    stagger:.3
})
tl.from('#right img',{
    opacity:0,
    scale:.8,
    duration:0.5,
})
gsap.from('#page2 .box', {
    opacity:0,
    scale:0,
    duration:1,
    stagger:.3,
    scrollTrigger:{
        trigger:'#page2 .box',
        scroller:"body",
    }
})