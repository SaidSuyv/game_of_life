class Cell
{
    #x;
    #y;
    #size = 10;
    #limits = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    };
    #state = false;
    #ctx;

    constructor(x,y,context)
    {
        this.#x = x;
        this.#y = y;
        this.#ctx = context;
        this.init();
    }

    init()
    {
        this.defineLimits();
    }

    defineLimits()
    {
        this.#limits.top = this.#y;
        this.#limits.bottom = this.#y + this.#size;
        this.#limits.left = this.#x;
        this.#limits.right = this.#x + this.#size;
    }

    setState(state)
    {
        this.#state = state;
    }

    get state()
    {
        return this.#state;
    }

    isCell(pagex,pagey)
    {
        // console.log(pagex,pagey,this.#limits);
        if( 
            (this.#x < pagex && this.#limits.right > pagex) &&
            (this.#y < pagey && this.#limits.bottom < pagey)
        ) return true;
        else return false;
    }

    buildCell()
    {
        if( this.#state )
        {
            this.#ctx.fillStyle = 'black';
            this.#ctx.fillRect(this.#x,this.#y,this.#size,this.#size);
        }
        else
        {
            this.#ctx.fillStyle = 'white';
            this.#ctx.strokeRect(this.#x,this.#y,this.#size,this.#size);
        }
    }
}

export default Cell;