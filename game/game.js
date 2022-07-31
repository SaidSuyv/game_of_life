function play()
{
    isPlaying = true;
    timer = setInterval(()=>{

        logic();
        die();
        live();
        dies = [];
        borns = [];
    
    },velocity);
}
function stop()
{
    isPlaying = false;
    if (timer != null) clearInterval(timer);
}

function reset()
{
    container.childNodes.forEach((el)=>{
        if ( el.className.includes('alive') ) 
        {
            el.classList.remove('alive');
            el.classList.add('dead');
        }
    });
}

