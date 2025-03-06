class CanvasRenderer
{
    /**
     * @type: {number}
     */
    w = 1920;

    /**
     * @type: {number}
     */
    h = 1080;

    /**
     * @type: {HTMLCanvasElement}
     */
    view = document.createElement("canvas");;

    /**
     * @type: {CanvasRenderingContext2D}
     */
    ctx = null;

    constructor(w = 1920, h = 1080)
    {
        this.w = this.view.width = w;
        this.h = this.view.height = h;
        this.ctx = canvas.getContext("2d");
    }

    render(container)
    {
        const {ctx} = this;

        const renderRec = (container) =>
        {
            // render the container children
            container.children.forEach(child =>
            {
                ctx.save();
                // draw the leaf node
                if(child.pos)
                {
                    ctx.translate(Math.round(child.pos.x), Math.round(child.pos.y));
                }

                if(child.text)
                {
                    const {font, fill, align} = child.style;
                    if(font)    ctx.font = font;
                    if(fill)    ctx.fillStyle = fill;
                    if(align)   ctx.textAlign = align;
                    ctx.fillText(child.text, 0, 0);
                }
                // handle the child types
                if(child.children)
                {
                    renderRec(child);
                }
                ctx.restore();
            });
        }
        ctx.clearRect(0,0,this.w,this.h);
        renderRec(container);
    }
}

export default CanvasRenderer;