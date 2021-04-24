/* getting hold of text inside h1 tags as list */
document.getElementsByTagName('h1')[0].textContent

/* changing content of text inside h1 tag */
document.getElementsByTagName('h1')[0].textContent='Good Bye!'

/* geting hold of angertag and changin its color */
document.querySelector('.list a').style.color='gold';

/* Adding class to a element using javascript */
document.querySelector('h1').classList.add('huge');

/* get hold of the html tag and text inside the tag h1*/
document.querySelector('h1').innerHTML;

/* show all the attributes of a */
document.querySelector('a').attributes;

/* get hold of attribute*/
document.querySelector('a').getAttribute('href');

/* change attribute of href to the given value*/
document.querySelector('a').setAttribute('href', 'https://www.amazon.com');