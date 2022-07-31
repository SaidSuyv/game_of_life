function construct()
{
    for(let row=0;row<heightSquares;row++)
    {
        for(let i=0;i<=widthSquares;i++)
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
}