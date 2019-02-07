window.onload = coverAnimation;

function coverAnimation()
{
    console.log("coverAnimation() started");

    var cover = document.getElementById("cover")
    var timer = 0;
    var id = setInterval(tick, 5);

    function tick()
    {
        cover.style.backgroundColor = color(128 - 128 * Math.sin(timer + 128), 128 - 64 * Math.sin(timer - 64), 128 - 128 * Math.sin(timer), 1, true);
        timer += 0.01;
    }
}

function color(r, g, b, a = 1, debug = false)
{
    if (r < 0)
        r = 0;
    else if (r > 255)
        r = 255;

    r = Math.trunc(r);

    if (g < 0)
        g = 0;
    else if (g > 255)
        g = 255;

    g = Math.trunc(g);

    if (b < 0)
        b = 0;
    else if (b > 255)
        b = 255;

    b = Math.trunc(b);

    if (a < 0)
        a = 0;
    else if (a > 1)
        a = 1;

    //Shows values used for color code conversion
    if (debug)
        console.log("R: " + r + " G: " + g + " B: " + b + " A: " + a);

    //Rounds a to nearest 100th
    a *= 100;
    a = Math.round(a);

    var aConverter = () => //converts alpha value to relative hex code
    {
        switch (a)
        {
            case 00:
                return 0x00;
            case 01:
                return 0x03;
            case 02:
                return 0x05;
            case 03:
                return 0x08;
            case 04:
                return 0x0a;
            case 05:
                return 0x0d;
            case 06:
                return 0x0f;
            case 07:
                return 0x12;
            case 08:
                return 0x14;
            case 09:
                return 0x17;
            case 10:
                return 0x1a;
            case 11:
                return 0x1c;
            case 12:
                return 0x1f;
            case 13:
                return 0x21;
            case 14:
                return 0x24;
            case 15:
                return 0x26;
            case 16:
                return 0x29;
            case 17:
                return 0x2b;
            case 18:
                return 0x2e;
            case 19:
                return 0x30;
            case 20:
                return 0x33;
            case 21:
                return 0x36;
            case 22:
                return 0x38;
            case 23:
                return 0x3b;
            case 24:
                return 0x3d;
            case 25:
                return 0x40;
            case 26:
                return 0x42;
            case 27:
                return 0x45;
            case 28:
                return 0x47;
            case 29:
                return 0x4a;
            case 30:
                return 0x4d;
            case 31:
                return 0x4f;
            case 32:
                return 0x52;
            case 33:
                return 0x54;
            case 34:
                return 0x57;
            case 35:
                return 0x59;
            case 36:
                return 0x5c;
            case 37:
                return 0x5e;
            case 38:
                return 0x61;
            case 39:
                return 0x63;
            case 40:
                return 0x66
            case 41:
                return 0x69;
            case 42:
                return 0x6b;
            case 43:
                return 0x6e;
            case 44:
                return 0x70;
            case 45:
                return 0x73;
            case 46:
                return 0x75;
            case 47:
                return 0x78;
            case 48:
                return 0x7a;
            case 49:
                return 0x7d;
            case 50:
                return 0x80;
            case 51:
                return 0x82;
            case 52:
                return 0x85;
            case 53:
                return 0x87;
            case 54:
                return 0x8a;
            case 55:
                return 0x8c;
            case 56:
                return 0x8f;
            case 57:
                return 0x91;
            case 58:
                return 0x94;
            case 59:
                return 0x96;
            case 60:
                return 0x99;
            case 61:
                return 0x9c;
            case 62:
                return 0x9e;
            case 63:
                return 0xa1;
            case 64:
                return 0xa3;
            case 65:
                return 0xa6;
            case 66:
                return 0xa8;
            case 67:
                return 0xab;
            case 68:
                return 0xad;
            case 69:
                return 0xb0;
            case 70:
                return 0xb3;
            case 71:
                return 0xb5;
            case 72:
                return 0xb8;
            case 73:
                return 0xba;
            case 74:
                return 0xbd;
            case 75:
                return 0xbf;
            case 76:
                return 0xc2;
            case 77:
                return 0xc4;
            case 78:
                return 0xc7;
            case 79:
                return 0xc9;
            case 80:
                return 0xcc;
            case 81:
                return 0xcf;
            case 82:
                return 0xd1;
            case 83:
                return 0xd4;
            case 84:
                return 0xd6;
            case 85:
                return 0xd9;
            case 86:
                return 0xdb;
            case 87:
                return 0xde;
            case 88:
                return 0xe0;
            case 89:
                return 0xe3;
            case 90:
                return 0xe6;
            case 91:
                return 0xe8;
            case 92:
                return 0xeb;
            case 93:
                return 0xed;
            case 94:
                return 0xf0;
            case 95:
                return 0xf2;
            case 96:
                return 0xf5;
            case 97:
                return 0xf7;
            case 98:
                return 0xfa;
            case 99:
                return 0xfc;
            case 100:
                return 0xff;
        }
    }
    a = aConverter();

    var format = n =>
    {
        if (n < 0x10)
            return "0" + n.toString(16);
        return n.toString(16);
    }

    r = format(r);
    g = format(g);
    b = format(b);
    a = format(a);

    //Shows color code when debug == true
    if (debug)
        console.log("Code: #" + r + g + b + a);

    return "#" + r + g + b + a;

}
