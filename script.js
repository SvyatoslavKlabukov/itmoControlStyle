//считываем backgroundColor
//let firstrgb = getComputedStyle(document.querySelector('.first')).backgroundColor;
//убираем из строки rgb(xxx, xxx, xxx) "rgb(" и ")", остается xxx, xxx, xxx
//let str = firstrgb.slice(4, firstrgb.length-1);
//создаем массив из трех элементов
//let arr = str.split(',');
//console.log(arr);

document.querySelector('.first').addEventListener(
    'mouseover',
    e => {
        let firstrgb = getComputedStyle(e.target).backgroundColor;
        let str = firstrgb.slice(4, firstrgb.length-1);
        let arr = str.split(',');
        let firstcolor = getComputedStyle(e.target).color;
        let str2 = firstcolor.slice(4, firstrgb.length-1);
        let arr2 = str2.split(',');
        e.target.style.cssText = `color: rgb(${255-arr2[0]}, ${255-arr2[1]}, ${255-arr2[2]});
        background-color: rgb(${255-arr[0]}, ${255-arr[1]}, ${255-arr[2]});`;
    }
);
document.querySelector('.first').addEventListener(
    'mouseout',
    e => {
        let firstrgb = getComputedStyle(e.target).backgroundColor;
        let str = firstrgb.slice(4, firstrgb.length-1);
        let arr = str.split(',');
        let firstcolor = getComputedStyle(e.target).color;
        let str2 = firstcolor.slice(4, firstcolor.length-1);
        let arr2 = str2.split(',');
        e.target.style.cssText = `color: rgb(${255-arr2[0]}, ${255-arr2[1]}, ${255-arr2[2]});
        background-color: rgb(${255-arr[0]}, ${255-arr[1]}, ${255-arr[2]});`;
    }
);
document.querySelector('.second').addEventListener(
    'mouseover',
    e => {
        let firstrgb = getComputedStyle(e.target).backgroundColor;
        let str = firstrgb.slice(4, firstrgb.length-1);
        let arr = str.split(',');
        let firstcolor = getComputedStyle(e.target).color;
        let str2 = firstcolor.slice(4, firstcolor.length-1);
        let arr2 = str2.split(',');
        e.target.style.cssText = `color: rgb(${255-arr2[0]}, ${255-arr2[1]}, ${255-arr2[2]});
        background-color: rgb(${255-arr[0]}, ${255-arr[1]}, ${255-arr[2]});`;
    }
);
document.querySelector('.second').addEventListener(
    'mouseout',
    e => {
        let firstrgb = getComputedStyle(e.target).backgroundColor;
        let str = firstrgb.slice(4, firstrgb.length-1);
        let arr = str.split(',');
        let firstcolor = getComputedStyle(e.target).color;
        let str2 = firstcolor.slice(4, firstrgb.length-1);
        let arr2 = str2.split(',');
        e.target.style.cssText = `color: rgb(${255-arr2[0]}, ${255-arr2[1]}, ${255-arr2[2]});
        background-color: rgb(${255-arr[0]}, ${255-arr[1]}, ${255-arr[2]});`;
    }
);