var master = new TimelineMax(),
    banner = $("#banner"),
    girlTop = $("#girlTop"),
    girlStrip = $("#girlStrip"),
    girlBottom = $("#girlBottom"),
    iceTop = $("#iceTop"),
    ice1 = $("#ice1"),
    ice2 = $("#ice2"),
    ice3 = $("#ice3"),
    razorEnding = $("#razorEnding"),
    transitionTime = 1;

window.onload = function () {

    master
        .add(gilleteStrip(0), "-=1")
        .add(gilleteBottom(1), "-=1")
        .add(gilleteTop(1.3), "-=1")
        .add(gilleteBottom2(1.6), "-=1")
        .add(gilleteRazorEnding(1.8), "-=1");

};


function gilleteStrip(delay) {

    var tl = new TimelineMax(),
        razor = $("<img src='img/razor.png'/>").appendTo(banner);

    tl
        /* ICE1 */
        .fromTo(
            ice1, // id element
            .4, // duration
            /* clip: rect(<top>, <right>, <bottom>, <left>); */
            {clip: 'rect(0px 300px 250px 0px)'}, // from
            {clip: 'rect(0px 300px 250px 300px)'}, // to
            delay + .3 // delay
        )
        /* RAZOR */
        .fromTo(razor,
            1.8,
            {
                bezier: [{x: -300, y: -400}],
                rotation: -45
            },
            {
                bezier: [{x: -400, y: -800}, {x: 150, y: -200}, {x: 700, y: -800}]/*bezier end*/,
                ease: Linear.easeNone,
                rotation: -135
            },
            delay + -.7);

    return tl;
}

function gilleteBottom(delay) {
    var tl = new TimelineMax(),
        razor = $("<img src='img/razor.png'/>").appendTo(banner);

    tl
    /* ICE1 */
        .fromTo(
            ice2, // id element
            .4, // duration
            /* clip: rect(<top>, <right>, <bottom>, <left>); */
            {clip: 'rect(0px 300px 250px 0px)'}, // from
            {clip: 'rect(0px 0px 250px 0px)'}, // to
            delay + .3 // delay
        )
        /* RAZOR */
        .fromTo(razor,
            2.4,
            {
                bezier: [{x: 500, y: -800}],
                rotation: -315
            },
            {
                bezier: [{x: 400, y: -800}, {x: 150, y: -100}, {x: -1200, y: -800}],
                ease: Linear.easeNone,
                rotation: -225
            },
            delay + -.7);


    return tl;
}

function gilleteTop(delay) {
    var tl = new TimelineMax(),
        razor = $("<img src='img/razor.png'/>").appendTo(banner);
    tl
    /* iceTop */
        .fromTo(
            iceTop, // id element
            .4, // duration
            /* clip: rect(<top>, <right>, <bottom>, <left>); */
            {clip: 'rect(0px 300px 250px 0px)'}, // from
            {clip: 'rect(0px 300px 250px 300px)'}, // to
            delay + .3 // delay
        )
        /* RAZOR */
        .fromTo(razor,
            2.2,
            {
                bezier: [{x: -300, y: -1400}],
                rotation: -45
            },
            {
                bezier: [{x: -600, y: -1600}, {x: 150, y: -300}, {x: 1200, y: -1600}]/*bezier end*/,
                ease: Linear.easeNone,
                rotation: -135
            },
            delay + -.8);

    return tl;
}

function gilleteBottom2(delay) {
    var tl = new TimelineMax(),
        razor = $("<img src='img/razor.png'/>").appendTo(banner);

    tl
    /* ICE1 */
        .fromTo(
            ice3, // id element
            .4, // duration
            /* clip: rect(<top>, <right>, <bottom>, <left>); */
            {clip: 'rect(0px 300px 250px 0px)'}, // from
            {clip: 'rect(0px 0px 250px 0px)'}, // to
            delay + .3 // delay
        )
        /* RAZOR */
        .fromTo(razor,
            2.4,
            {
                bezier: [{x: 500, y: -800}],
                rotation: -315
            },
            {
                bezier: [{x: 400, y: -800}, {x: 150, y: -50}, {x: -1200, y: -800}],
                ease: Linear.easeNone,
                rotation: -225
            },
            delay + -.7);


    return tl;
}

function gilleteRazorEnding(delay) {

    var tl = new TimelineMax();

    tl
    /* RAZOR ENDING */
        .fromTo(
            razorEnding, // id element
            .3, // duration
            /* clip: rect(<top>, <right>, <bottom>, <left>); */
            {
                bezier: [{x: -99, y: 116}]
            }, // from
            {
                bezier: [{x: -99, y: 116}, {x: 10, y: 116}, {x: 0, y: 116}],
                ease: Linear.easeNone
            }, // to
            delay + 0 // delay
        );

    return tl;
}

