function display(input)
{
    // console.log('Hii');
    document.getElementById('screen_p').innerText += input;
}

function calculate()
{
    let result = eval(document.getElementById('screen_p').innerText);
    document.getElementById('screen_p').innerText = result;
}

function clear_p()
{
    // console.log('Hii');
    document.getElementById('screen_p').innerText = '';

}

function backspace()
{
    let exp = document.getElementById('screen_p').innerText;
    document.getElementById('screen_p').innerText = exp.substring(0, exp.length - 1);
}