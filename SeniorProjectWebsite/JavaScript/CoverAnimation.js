window.onload   = coverAnimation;
window.onresize = coverAnimation;
var animationID = 0;

function coverAnimation()
{
    var left  = document.getElementById("left");
    var right = document.getElementById("right");

    var rWidth = right.scrollWidth;

    var timer = 0;
    var forwards = true;

    if (animationID != 0)
    {
        clearInterval(animationID);
        left.style.backgroundPosition = "0 0";
        right.style.backgroundPosition = "0 0";
    }

    animationID = setInterval(animation, 5);

    function animation()
    {
        var lOffset = timer + "px 0";
        var rOffset = (rWidth - timer) + "px 0";

        left.style.backgroundPosition = lOffset;
        right.style.backgroundPosition = rOffset;

        if (forwards)
            timer++;
        else
            timer--;

        if (timer == Math.trunc(rWidth * 0.87))
            forwards = false;
        if (timer == 0)
            forwards = true;
    }
}
