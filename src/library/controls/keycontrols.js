import Keycodes from "./keycodes.js";
class KeyControls
{
    constructor()
    {
        this.keys = {};
        // bind event handlers
        document.addEventListener("keydown", e => 
        {
            if([37,38,39,40].indexOf(e.which) >= 1)
            {
                // disable the arrow keys
                e.preventDefault();
            }
            this.keys[e.which] = true;
        }, false);
        document.addEventListener("keyup", e => 
        {
            this.keys[e.which] = false;
        });
    }

    // handle key actions
    get x()
    {
        if(this.keys[Keycodes.A] && !this.keys[Keycodes.D])
        {
            return -1;
        }
        if(this.keys[Keycodes.D] && !this.keys[Keycodes.A])
        {
            return 1;
        }
        return 0;
    }

    get y()
    {
        if(this.keys[Keycodes.W] && !this.keys[Keycodes.S])
        {
            return -1;
        }
        if(this.keys[Keycodes.S] && !this.keys[Keycodes.W])
        {
            return 1;
        }
        return 0;
    }
}

export default KeyControls;