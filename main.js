var names=["my dad","my mom","my sister","mugilan narensimman"];

var images=
["https://www.clipartmax.com/png/middle/53-535980_folded-arms-and-hands-clipart-melonheadz-dad-clipart.png",
"https://www.nicepng.com/png/detail/29-291234_mom-clipart-kid-clipart-of-a-mom.png",
"https://s.clipartkey.com/mpngs/s/10-107920_melonheadz-lds-illustrating-sister-black-and-white.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbk4fA-CVqkMi1K4fyhRSa_D4oNdsjkS743sVvYKriQI-4mlkJJftnPiLAPkUBwRVVFY&usqp=CAU"];
 
 var i = 0;
  function update()
  {
      i++;
      var numbers_of_family_member_in_array = 3
      if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
      var updatedImage = images[i];
      var updatedName = names[i];
      document.getElementById("family_member_image").src = updatedImage;
      document.getElementById("family_member_name").innerHTML = updatedName; 
 }