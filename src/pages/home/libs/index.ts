export const fadeIn = (el) => {
    
    const fade = () => {
        var val = parseFloat(el.style.opacity);
        if(!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    }

    fade();
}