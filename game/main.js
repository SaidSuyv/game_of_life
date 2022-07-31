const container = document.getElementById('container');
/*
    - CONSTRUCTION -
*/

for(let row=0;row<19;row++)
{
    for(let i=0;i<=19;i++)
    {
        let square = document.createElement('div');
        square.className = 'square dead';
        square.setAttribute('x',i);
        square.setAttribute('y',row);
        container.append(square);
    }
}

container.addEventListener('click',(ev)=>{
    if ( ev.target.className.includes('dead') )
    {
        ev.target.classList.remove('dead');
        ev.target.classList.add('alive');
    }
    else
    {
        ev.target.classList.remove('alive');
        ev.target.classList.add('dead');
    }
});

var timer = null;
var aroundSq = {
    leftUpCorner: {x:-1,y:-1},
    up: {x:0,y:-1},
    rightUpCorner: {x:1,y:-1},
    left: {x:-1,y:0},
    right: {x:1,y:0},
    leftDownCorner: {x:-1,y:1},
    down: {x:0,y:1},
    rightDownCorner: {x:1,y:1}
};

var dies = [];
var borns = [];

function die()
{
    // console.log(dies);
    for (let sq of dies)
    {
        sq.classList.remove("alive");
        sq.classList.add("dead");
    }
}

function live()
{
    // console.log(borns);
    for (let sq of borns)
    {
        sq.classList.remove("dead");
        sq.classList.add("alive");
    }
}

function play()
{
    timer = setInterval(()=>{

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
        die();
        live();
        dies = [];
        borns = [];
    
    },100);
}



function stop()
{
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