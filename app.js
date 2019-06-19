var container = document.querySelector('.container')
var footer = document.querySelector('.foo')

var body = document.createElement('div')
var image = document.createElement('img')
image.classList.add('img')
image.src = "./images/3.jpg"
body.appendChild(image)
var nameCentre = document.createElement('p')
nameCentre.classList.add('name')
nameCentre.textContent = "Utsav Baral"
var description = document.createElement('p')
description.classList.add('description')
description.textContent = "Web Developer"
body.appendChild(nameCentre)
body.appendChild(description)
container.appendChild(body)

var social = document.createElement('div')
var facebook = document.createElement('a')
facebook.href = "https://www.facebook.com/"
var facebookImg = document.createElement('img')
facebookImg.classList.add('facebook')
facebookImg.src = "./images/facebook.png"
facebook.appendChild(facebookImg)
social.appendChild(facebook)

var twitter = document.createElement('a')
twitter.href = "https://www.twitter.com/"
var twitterImg = document.createElement('img')
twitterImg.classList.add('twitter')
twitterImg.src = "./images/twitter.png"
twitter.appendChild(twitterImg)
social.appendChild(twitter)

var google = document.createElement('a')
google.href = "https://aboutme.google.com/"
var googleImg = document.createElement('img')
googleImg.classList.add('google')
googleImg.src = "./images/google.png"
google.appendChild(googleImg)
social.appendChild(google)

var instagram = document.createElement('a')
instagram.href = "https://www.instagram.com/"
var instagramImg = document.createElement('img')
instagramImg.classList.add('instagram')
instagramImg.src = "./images/instagram.png"
instagram.appendChild(instagramImg)
social.appendChild(instagram)

var incwell = document.createElement('a')
incwell.href = "https://incwellventure.com/"
var incwellImg = document.createElement('img')
incwellImg.classList.add('incwell')
incwellImg.src = "./images/incwell.png"
incwell.appendChild(incwellImg)
social.appendChild(incwell)
container.appendChild(social)

var button = document.createElement('a')
button.href = "#"
var buttonImg = document.createElement('img')
buttonImg.classList.add('button')
buttonImg.src = "./images/button.png"
button.appendChild(buttonImg)
container.appendChild(button)

var workingArea = document.createElement('h3')
workingArea.classList.add('area')
workingArea.textContent = 'Working Area'
footer.appendChild(workingArea)

var workingArea1 = document.createElement('p')
workingArea1.textContent = "Hi I am Utsav Baral"
footer.appendChild(workingArea1)

var title = document.createElement('h2')
title.classList.add('title')
title.textContent = "Title goes here"
var title1 = document.createElement('h2')
title1.classList.add('title1')
title1.textContent = "Title goes here"
var title2 = document.createElement('h2')
title2.classList.add('title2')
title2.textContent = "Title goes here"
footer.appendChild(title)
footer.appendChild(title1)
footer.appendChild(title2)

var titleCircle = document.createElement('div')
titleCircle.classList.add('circle')
var titleCircleImg = document.createElement('img')
titleCircleImg.classList.add('circleImage')
titleCircleImg.src = "./images/javascript.png"
titleCircle.appendChild(titleCircleImg)
footer.appendChild(titleCircle)

var titleCircle1 = document.createElement('div')
titleCircle1.classList.add('circle1')
var titleCircleImg1 = document.createElement('img')
titleCircleImg1.classList.add('circleImage1')
titleCircleImg1.src = "./images/monitor.png"
titleCircle1.appendChild(titleCircleImg1)
footer.appendChild (titleCircle1)

var titleCircle2 = document.createElement('div')
titleCircle2.classList.add('circle2')
var titleCircleImg2 = document.createElement('img')
titleCircleImg2.classList.add('circleImage2')
titleCircleImg2.src = "./images/code.png"
titleCircle2.appendChild(titleCircleImg2)
footer.appendChild (titleCircle2)
container.appendChild(footer) 








