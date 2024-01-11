//to seperate the name
const text = document.querySelector(".wavey");
const strText = text.textContent;
const splitText = strText.split("");

//stop it from repeating the name
text.textContent = "";
//to put span for each letter and add animation
for (let i=0; i < splitText.length; i++)
{
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

//interval that puts in the letter
let letter = 0;
let stopWatch = setInterval(onSecond, 50);

//get all the spans and add the chracter at the end and then eventually stop
function onSecond()
{
    const span = text.querySelectorAll('span')[letter];
    span.classList.add('fade');
    letter++;
    if (letter === splitText.length)
        {
            done();
            return;
        }
}

function done()
{
    clearInterval(stopWatch);
    stopWatch = null;
}