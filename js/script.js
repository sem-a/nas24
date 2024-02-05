const animStart = () => {
    text1 = document.querySelector('.m1');
    text2 = document.querySelector('.m2');
    text3 = document.querySelector('.m3');
    
    text1.classList.add('_active_modal_text');
    setTimeout(100, () => {
        console.log('fsdf');
        text1.classList.remove('_active_modal_text');
    })

}
const animOneScreen = () => {
    discoBall = document.querySelector('.disco_ball_img');
    title = document.querySelector('.one_screen_title');
    text = document.querySelector('.one_screen_text');

    discoBall.classList.add('_active_ball');
    title.classList.add('_active_title');
    text.classList.add('_active_text');
}

window.onload = animStart;
