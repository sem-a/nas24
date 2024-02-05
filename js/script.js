const animStart = () => {
    discoBall = document.querySelector('.disco_ball_img');
    title = document.querySelector('.one_screen_title');
    text = document.querySelector('.one_screen_text');

    discoBall.classList.add('_active_ball');
    title.classList.add('_active_title');
    text.classList.add('_active_text');
}

window.onload = animStart;
