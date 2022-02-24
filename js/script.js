/* global $*/
$(function(){
    const moji = $('h1').text();
    // console.log(moji);
    $('h1').text('');
    // console.log(moji.length)
    const color_unit = 255 / moji.length;
    // カウンター
    let count = 0;
　　const text_animation = () => {
        let word = moji.substr(count, 1);
　　    console.log(word);
　　    let span = $('<span>', {text: word});
　　    span.css('color', 'rgb(' + color_unit * count + ', 0, 0)');
　　    $('h1').append(span);
　　    count++;
　　    if(count === moji.length){
　　        clearInterval(timer);
　　    }
　　}
    const timer = setInterval(text_animation, 1000);
    
    
    // const hello = (name, age) => {
    //     console.log(age + '歳の' + name + 'さんがこんにちはといった');
    // }
    // // hello('久保田', 20);
    // // コールバック関数
    // const add = (x, y) => {
    //     console.log(x + 'と' + y + 'の合計は' + (x + y))
    // }
    // // add(1, 2);
    
    // const test = (f, value1, value2) => {
    //     f(value1, value2);
    // }
    // // 高階関数
    // test(hello, '島', 48);
    // test(add, 10, 20);
});