const modalText = (id, time) => {
    id.classList.add('_active_modal_text');
    setTimeout(function() {
        id.classList.remove('_active_modal_text');
    }.bind(this), time)
}
const animStart = () => {
    text1 = document.querySelector('.m1');
    text2 = document.querySelector('.m2');
    text3 = document.querySelector('.m3');
    
    modalText(text1, 3000);
    setTimeout( function() {modalText(text2, 4000)}.bind(this), 4000);
    setTimeout( function() {    text3.classList.add('_active_modal_text'); }.bind(this), 9000);

}
const animOneScreen = () => {
    discoBall = document.querySelector('.disco_ball_img');
    title = document.querySelector('.one_screen_title');
    text = document.querySelector('.one_screen_text');

    discoBall.classList.add('_active_ball');
    title.classList.add('_active_title');
    text.classList.add('_active_text');
}


play = document.querySelector('#play');
modal = document.querySelector('.modal');
audio = document.querySelector('audio');
audio.muted = false;

window.onload = animStart;

play.onclick = () => {
    modal.classList.add('_hide_modal');
    document.body.classList.remove('modal_open');
    animOneScreen()
    audio.play();
}