let a = +prompt('Введите число')

party(a)

function party(a) {
    explodeId = setInterval(() => {
        a--;
        document.write(
            `<div style="` +
            `margin: 5px;` +
            `background-color: rgb(${Random(0, 255)}, ${Random(0, 255)}, ${Random(0, 255)});` +
            `width: 100px;` +   
            `height: 100px;` +
            `border-radius: 50px;` +
            `display: inline-block">` +
            `</div>`
            )
        if (a <= 0)       
        clearInterval(explodeId)
        }, 300);
    }
    
function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
