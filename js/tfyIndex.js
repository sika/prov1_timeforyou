/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function(){
    openCover(); 
});

function openCover(){
    $('.wrapperPicSer').fadeIn(300);
}
function closeCover(){
    $('.wrapperPicSer').hide();
}
$(document).keydown(function (e) { //exit slider and cover
    if (e.keyCode == 27) {
        closeCover();
    }
});