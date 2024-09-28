document.addEventListener('DOMContentLoaded',()=>{

    const CANVAS_WIDTH = window.innerWidth / 1.05;
    const CANVAS_HEIGHT = window.innerHeight / 1.05;

    const canvas = document.getElementById("game");
    canvas.setAttribute("width",window.innerWidth);
    canvas.setAttribute("height",window.innerHeight);
    // canvas.onclick = (e) => {
    //     e,preventDefault();
    //     e.stopPropagation();
    //     // Check if it clicked on a sqr
    //     handleCellClicked();
    // };

    const context = canvas.getContext("2d");

    const SQR_SIZE = 10;
    const AMOUNT_PER_WIDTH = CANVAS_WIDTH;
    const AMOUNT_PER_HEIGHT = CANVAS_HEIGHT;
    const CELLS = [];

    for( let x = 0; x <= AMOUNT_PER_WIDTH; x+=10 )
    {
        CELLS[x] = [];
        for( let y = 0; y <= AMOUNT_PER_HEIGHT; y+=10 )
        {
            context.strokeRect(x,y,SQR_SIZE,SQR_SIZE);
            const cell = { x , y , state: 0 };
            CELLS[x][y] = cell;
        }
    }

    const handleCellClicked = () => {};

});