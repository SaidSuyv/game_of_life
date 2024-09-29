import Cell from "./cell.js";

class Game
{
    #cells = [];
    #canvas;
    #context;
    
    constructor(){
        this.init();
    }
    
    init()
    {
        this.#canvas = document.getElementById("game");
        this.#canvas.setAttribute("width",window.innerWidth);
        this.#canvas.setAttribute("height",window.innerHeight);
        this.#context = this.#canvas.getContext("2d");
        
        this.addListeners();
        this.createCells();
    }

    handleClick(e)
    {
        const { pageX , pageY } = e;

        this.#cells.forEach(
            e => {
                const selected = e.filter(f=>f.isCell(pageX,pageY));
                if( selected.length > 0 )
                {
                    const cell = selected.filter(f=>f.isCell(pageX,pageY));
                    console.log(cell);
                }
            }
        );
    }
    
    addListeners()
    {
        this.#canvas.onclick = this.handleClick.bind(this);
    }
    
    createCells()
    {
        const AVAILABLE_WIDTH = window.innerWidth;
        const AVAILABLE_HEIGHT = window.innerHeight - 10;
        
        for( let x = 0; x < AVAILABLE_WIDTH ; x+=10 )
        {
            this.#cells[x] = [];
            for( let y = 0; y < AVAILABLE_HEIGHT ; y+=10 )
            {
                this.#cells[x][y] = new Cell(x,y,this.#context);
            }
        }
        console.log(this.#cells);
    }
    
    build()
    {
        for(let x of this.#cells)
        {
            if( x == undefined ) continue;
            for(let y of x)
            {
                if(y == undefined) continue;

                y.buildCell();
            }
        }
    }

    start()
    {
        this.build();
    }
}

export default Game;