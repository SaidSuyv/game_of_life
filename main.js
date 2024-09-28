document.addEventListener('DOMContentLoaded',()=>{

    const CANVAS_WIDTH = window.innerWidth;
    const CANVAS_HEIGHT = window.innerHeight;

    const canvas = document.getElementById("game");
    canvas.setAttribute("width",CANVAS_WIDTH);
    canvas.setAttribute("height",CANVAS_HEIGHT);
    canvas.onclick = (e) => {
         e.stopPropagation();
         // Check if it clicked on a sqr
         console.log(e);
    };

    const context = canvas.getContext("2d");

    const SQR_SIZE = 10;
    
    var AMOUNT_PER_WIDTH = CANVAS_WIDTH - 10;
    var AMOUNT_PER_HEIGHT = CANVAS_HEIGHT - 10;
    
    const CELLS = [];

    for( let x = 0; x <= AMOUNT_PER_WIDTH; x+=10 )
    {
        CELLS[x] = [];
        for( let y = 0; y <= AMOUNT_PER_HEIGHT; y+=10 )
        {
            context.strokeRect(x,y,SQR_SIZE,SQR_SIZE);
            const cell = { x , y , size: 10, state: 0 };
            CELLS[x][y] = cell;
        }
    }

});