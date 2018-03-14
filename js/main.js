// Put your JavaScript code in the block below. You can remove line 3.
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}


function goToWardrobe () {
  var heading = "Wardrobe";
  var text= "Crisp, white satin slips down one side of a coat hanger. The number of clothes in there is enough to fill all of the pews that day. It was a white one, with sugared almonds and a pageboy, who was the godson of some distant relation of his and just as sickly sweet. You wanted it here, but his mother was already unhappy about the match. On Sundays, you would sit in her <a href=\"#\" onclick=goToDiningRoom()> dining room </a> and match her crisp smile, both of you pretending not to notice the ring of cakes she had laid out in a ring on a paper plate. You chose a tangerine instead. You would both examine your shoes, whilst she would stroke her fur collar and her Siamese stared at you from the mantelpiece. Once, you tried to align your shoes according to preference. Best at the front. But in summer, your sandals were first and in winter they were last. You let them roam towards the back and tried to forget that the seasons could change. From then on, it could never be autumn. ";



    document.getElementById("storyheading").innerHTML = heading;
   document.getElementById("storyparagraph").innerHTML = text;
}

function goToDiningRoom()
{
  var heading = "Dining Room";
  var text= "";
    document.getElementById("storyheading").innerHTML = heading;
   document.getElementById("storyparagraph").innerHTML = text;
}
