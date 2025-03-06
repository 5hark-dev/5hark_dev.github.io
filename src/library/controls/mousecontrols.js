import Vec2 from "../vec2.js";

class MouseControls
{
    /**
     * @type: {HTMLElement}
     */
    el = null;
    /**
     * @type: {Vec2}
     */
    pos = new Vec2();

    /**
     * @type: {boolean}
     */
    isDown = false;
    /**
     * @type: {boolean}
     */
    pressed = false;
    /**
     * @type: {boolean}
     */
    released = false;
    constructor(container = document.body)
    {
        this.el = container;
        // handlers
        document.addEventListener("mousemove", this.move.bind(this), false);
        document.addEventListener("mousedown", this.down.bind(this), false);
        document.addEventListener("mouseup", this.up.bind(this), false);
    }

    _mousePosFromEvent({clientX, clientY})
    {
        const {el, pos} = this;
        const rect = el.getClientBoundingRect();
        const xr = el.width / el.clientWidth;
        const yr = el.height / el.clientHeight;
        pos.x = (clientX - rect.left) * xr;
        pos.y = (clientY - rect.top) * yr;
    }

    move(e)
    {
        this._mousePosFromEvent(e);
    }

    down(e)
    {
        this.isDown = true;
        this.pressed = true;
        this._mousePosFromEvent(e);
    }

    up(e)
    {
        this.isDown = false;
        this.released = true;
    }

    update()
    {
        this.released = false;
        this.pressed = false;
    }
}

export default MouseControls;