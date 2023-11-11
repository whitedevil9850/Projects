var tl = gsap.timeline()
tl.from('#nav img,#nav h3, #nav h4, #nav button', {
    y:-100,
    opacity: 0,
    duration:1,
    delay:1,
    stagger: 0.2

})
tl.from('#headings h1',{
    y:100,
    opacity: 0,
    duration:1,
    delay:1,
    stagger: 0.3
})
tl.from('#main>img',{
    scale:0,
    opacity:0,
    duration:1
})
tl.from('#scroll-btn',{
   scale:0,
   opacity:0
})
tl.to("#scroll-btn", {
    y:30,
    duration:0.8,
    repeat:-1,
    yoyo: true

})