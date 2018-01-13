class Lives
{
    constructor(context,beginX,beginY,width,height,color,lives)
    {
        this._context=context
        this._beginX=beginX
        this._beginY=beginY*window.innerHeight
        this._width=width*window.innerWidth
        this._height=height*window.innerHeight
        this._color=color

        for(let i=0;i<lives;i++)
        {
          this.drawHeart((beginX+(0.03*i))*window.innerWidth,color)
        }
      
    }
    drawHeart(x,color){
        this._context.save();
        this._context.beginPath();
        let topCurveHeight = this._height * 0.3;
        this._context.moveTo(x,this._beginY+ topCurveHeight);
                // top left curve
        this._context.bezierCurveTo(
          x, this._beginY,
          x - this._width / 2, this._beginY,
          x - this._width / 2, this._beginY + topCurveHeight
        );
                // bottom left curve
        this._context.bezierCurveTo(
          x- this._width / 2, this._beginY + (this._height+ topCurveHeight) / 2,
          x, this._beginY + (this._height+ topCurveHeight) / 2,
          x, this._beginY +this._height
        );
                // bottom right curve
        this._context.bezierCurveTo(
          x, this._beginY + (this._height+ topCurveHeight) / 2,
          x + this._width / 2,this._beginY + (this._height+ topCurveHeight) / 2,
          x + this._width / 2, this._beginY + topCurveHeight
        );
                // top right curve
        this._context.bezierCurveTo(
          x + this._width / 2, this._beginY,
          x, this._beginY,
          x, this._beginY + topCurveHeight
        );
        this._context.closePath();
        this._context.fillStyle = color;
        this._context.fill();
        this._context.restore();
      }

}
