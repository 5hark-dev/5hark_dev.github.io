import Vec2 from "./vec2.js";

class Container
{
    /**
     * @type{Vec2}
     */
    pos = new Vec2();

    /**
     * @type: {Array}
     */
    children = [];
    
    // methods
    add(child)
    {
        this.children.push(child);
        return child;
    }
    remove(child)
    {
        this.children = this.children.filter(c => c !== child);
        return child;
    }

    update(dt, t)
    {
        this.children.forEach(child => 
        {
            if(child.update)
                child.update(dt, t);
        });
    }
}

export default Container;