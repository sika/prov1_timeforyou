/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/*--------------------------Shared----------------------------*/
/*--------------------------Shared----------------------------*/
/*--------------------------Shared----------------------------*/

page = null;
box = null;

$(document).ready(function () {

});

/*--------------------------Services----------------------------*/
/*--------------------------Services----------------------------*/
/*--------------------------Services----------------------------*/

function initiateSerInfo(id) {
    page = 'serPage';
    showCover(page);
    $('.wrapperPicSer').fadeIn(300); //dislay whole div
    $('.picSer#' + id).fadeIn(300); //starting with image with id=1
}

/*--------------------------Facilities----------------------------*/
/*--------------------------Facilities----------------------------*/
/*--------------------------Facilities----------------------------*/


sliderInt = null;
sliderNext = null;


function initiateSlider(id) {
    page = 'faciPage';
    showCover(page);
    $('.wrapperSS').fadeIn(300); //dislay whole div
    $('.slider > figure#' + id).fadeIn(300); //first image to show
    sliderNext = (id + 1);
    startSlider(); //start slider interval
}
function showCover(page)
{
    box = $('<div></div>').addClass('bgCoverSlider'); //Black faded cover
    $('body').prepend(box);
    if (page == 'serPage') {
        box.fadeTo('fast', 0.6);
    } //cover end
    else if (page == 'faciPage') {
        box.fadeTo('fast', 0.8);
    } //cover end
}
function startSlider() {
    count = $('.slider > figure').size(); //getting and storing the number of images inside #slider 
    loop = setInterval(function () {
        if (sliderNext > count) {
            sliderNext = 1;
            sliderInt = 1;
        }

        $('.slider > figure').fadeOut(500);
        $('.slider > figure#' + sliderNext).fadeIn(2000);

        sliderInt = sliderNext;
        sliderNext = sliderNext + 1;
    }, 3000);
}
function prev() {
    var newSlide = sliderInt - 1;
    showSlide(newSlide);
}
function next() {
    var newSlide = sliderInt + 1;
    showSlide(newSlide);
}
function showSlide(newSlideId) {
    stopLoop();
    if (newSlideId > count) {
        newSlideId = 1;
    } else if (newSlideId < 1) {
        newSlideId = count;
    }

    $('.slider > figure').fadeOut(500);
    $('.slider > figure#' + newSlideId).fadeIn(2000);

    sliderInt = newSlideId;
    sliderNext = newSlideId + 1;
    startSlider();
}

$('.slider > figure').hover(function () {
    stopLoop();
},
        function () {
            startSlider();
        });

function stopLoop() {
    clearInterval(loop); //stop slider
}
function closeSliderAndCover() {
    if (page == 'faciPage') {
        $('.wrapperSS').hide(); //close slider div
        stopLoop();//stop slider
        $('.slider > img').hide(); //prevent last shown img from being displayed on next click of image. Practically, slider is reset.
        $('.slider > figure').hide();
    }
    else if (page == 'serPage'){
        $('.wrapperPicSer').hide();
        $('.picSer').hide();
    }
    box.remove(); //cover-div removed from <body>
}
$(document).keydown(function (e) { //exit slider and cover
    if (e.keyCode == 27) {
        closeSliderAndCover();
//        $('.wrapperSS').hide(); //close slider div
//        stopLoop();//stop slider
//        $('.slider > img').hide(); //prevent last shown img from being displayed on next click of image. Practically, slider is reset.
//        closeCover(); 
    }
});


