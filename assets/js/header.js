window.addEventListener("scroll", myScript);
function myScript() {
    let y = window.scrollY;
    let maxHeight = document.body.scrollHeight;
    let turbo = 1.5; // Esto para acelerar el scroll
    let percentage = (y / maxHeight) * 100 * turbo;
    console.log(`${percentage}%, pos ${y}, maxHeight ${maxHeight}`);
    document.getElementById('header').style.height = percentage + 'vh';
}