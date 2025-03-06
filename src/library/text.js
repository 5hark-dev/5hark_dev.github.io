import Vec2 from "./vec2.js";

class Text
{
    /**
     * @type: {string}
     */
    text = "";
    /**
     * @type {Vec2}
     */
    pos = new Vec2();
    
    style = {};
    constructor(text = "", style = {})
    {
        this.text = text;
        this.style = style;
    }
}

export default Text;