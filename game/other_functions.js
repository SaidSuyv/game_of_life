function die()
{
    for (let sq of dies)
    {
        sq.classList.remove("alive");
        sq.classList.add("dead");
    }
}

function live()
{
    for (let sq of borns)
    {
        sq.classList.remove("dead");
        sq.classList.add("alive");
    }
}

function setVelocity()
{
    const inp = document.getElementById('velocity');
    velocity = inp.value;
    if (isPlaying)
    {
        stop();
        play();
    }
    else stop();
}

function logic()
{
    container.childNodes.forEach((square,i,array)=>{
        let coords = {x:parseInt(square.getAttribute('x')),y:parseInt(square.getAttribute('y'))};
        let around = [];
        var parentArr = [...array];

        for ( let ub in aroundSq )
        {
            around.push(
                parentArr.filter( (el) => 
                {
                    return el.getAttribute('x') == (coords.x + aroundSq[ub].x) && el.getAttribute('y') == (coords.y + aroundSq[ub].y)
                })[0]
            );
        }

        let aliveInRange = 0;

        for ( let aroundSquare of around )
        {
            if (aroundSquare != undefined )
                if (aroundSquare.className.includes('alive')) aliveInRange++;
        }

        

        if ( square.className.includes('alive') )
        {
            if ( aliveInRange < 2 || aliveInRange > 3 ) dies.push(square);
        }
        
        if ( square.className.includes('dead') )
        {
            if ( aliveInRange == 3 ) borns.push(square);
        }
    });
}