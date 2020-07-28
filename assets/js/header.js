window.addEventListener("scroll", myScript);
function myScript() {
    let y = window.scrollY;
    let maxHeight = document.body.scrollHeight;
    let turbo = 2; // Esto para acelerar el scroll
    let percentage = (y / maxHeight) * 100 * turbo;
    console.log(`${percentage}%, pos ${y}, maxHeight ${maxHeight}`);
    document.getElementById('header').style.height = percentage + 'vh';
    document.getElementById('header').style.opacity = 0.4 + (percentage / 100);
    // border-radius: 0 0 20px 20px;
    document.getElementById('header').style.borderRadius = `0 0 ${percentage-5}px ${percentage-5}px`;
    if( parseInt(document.getElementById('header').style.height) > 16 )
        document.getElementById('header').classList.add('bgLightBlueGradient');
    else
        document.getElementById('header').classList.remove('bgLightBlueGradient');
}