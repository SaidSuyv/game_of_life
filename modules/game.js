import Cell from "./cell";

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
    
    addListeners()
    {
        this.#canvas.onclick = this.handleClick;
    }
    
    createCells()
    {
        const AVAILABLE_WIDTH = window.innerWidth - 10;
        const AVAILABLE_HEIGHT = window.innerHeight - 10;
        
        for( let x = 0; x < AVAILABLE_WIDTH ; x += 10 )
        {
            this.#cells[x] = [];
            for( let y = 0; y < AVAILABLE_HEIGHT ; y += 10 )
            {
                this.#cells[x][y] = new Cell();
            }
        }
    }
    
    build(){}
}

export default Game;