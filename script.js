let recentJson = [
  {
  "artist" : "Frank Ocean",
  "album" : "Single",
  "song" : "Cayendo (Side A - Acoustic)",
  "color" : "#F2E635",
  "pic_url" : "https://images.genius.com/b2d476a8ad596e89fe7278cd7c963eab.1000x1000x1.jpg"
},
{
  "artist" : "Childish Gambino",
  "album" : "3.15.20",
  "song" : "19.10",
  "color" : "#F5EFE0",
  "pic_url" : "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/c4/a2/69/c4a26947-9bc4-7310-a7cf-50c20d3caa1b/886448371472.jpg/600x600bf.png"
},
{
  "artist" : "Lil Uzi Vert",
  "album" : "Eternal Atake",
  "song" : "Silly Watch",
  "color" : "#023859",
  "pic_url" : "https://media.pitchfork.com/photos/5e6290565efdff0008ac725b/1:1/w_600/Eternal%20Atake_Lil%20Uzi%20Vert.jpg"
},
{
  "artist" : "Bad Bunny",
  "album" : "YHLQMDLG",
  "song" : "Si Veo a Tu Mamá",
  "color" : "#0C6F9C",
  "pic_url" : "https://media.pitchfork.com/photos/5e5d895d19382e0008724f89/1:1/w_600/YHLQMDLG_Bad%20Bunny.jpg"
},
{
  "artist" : "Joji",
  "album" : "Single",
  "song" : "Run",
  "color" : "#D32E30",
  "pic_url" : "https://images.genius.com/ebc451820e00bd9d3277f9f9ca45357f.1000x1000x1.jpg"
}
]

let contentGridElement = document.getElementById('contentGrid');


for (var i = 0; i < recentJson.length; i++){
  createElementProper(recentJson[i]);
}

function createElementProper(incomingJSON){

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = incomingJSON['color'];
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H4");
  newContentHeading.classList.add('CArtist');
  newContentHeading.innerHTML = incomingJSON['artist'];
  newContentElement.appendChild(newContentHeading);

  let newContentHeading2 = document.createElement("H5");
  newContentHeading2.classList.add('CAlbum');
  newContentHeading2.innerHTML = incomingJSON['album'];
  newContentElement.appendChild(newContentHeading2);

  let newContentHeading3 = document.createElement("H6");
  newContentHeading3.classList.add('CSong');
  newContentHeading3.innerHTML = incomingJSON['song'];
  newContentElement.appendChild(newContentHeading3);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['pic_url'];
  newContentElement.appendChild(newImage);
  contentGridElement.appendChild(newContentElement);

}

let favJson = [{
  "artist" : "Kid Cudi",
  "album" : "Passion,Pain & Demon Slayin'",
  "song" : "Baptized in Fire",
  "color" : "#D61D84",
  "pic_url" : "https://upload.wikimedia.org/wikipedia/en/a/a6/Kid_Cudi_–_Passion%2C_Pain_%26_Demon_Slayin%27.png"
},
{
  "artist" : "GoldLink",
  "album" : "At What Cost",
  "song" : "Crew",
  "color" : "#D93829",
  "pic_url" : "https://upload.wikimedia.org/wikipedia/en/b/b5/Goldlink-at-what-cost-album-.jpeg"
},
{
  "artist" : "J. Cole",
  "album" : "4 Your Eyez Only",
  "song" : "Deja Vu",
  "color" : "#262626",
  "pic_url" : "https://upload.wikimedia.org/wikipedia/en/b/bb/J._Cole_—_4_Your_Eyez_Only_album_cover.jpg"
},
{
  "artist" : "Kendrick Lamar",
  "album" : "DAMN.",
  "song" : "LOYALTY",
  "color" : "#733C4A",
  "pic_url" : "https://upload.wikimedia.org/wikipedia/en/5/51/Kendrick_Lamar_-_Damn.png"
},
{
  "artist" : "The Neighbourhood",
  "album" : "I Love You.",
  "song" : "Sweater Weather",
  "color" : "#A6A6A6",
  "pic_url" : "https://is4-ssl.mzstatic.com/image/thumb/Music2/v4/2d/7c/c0/2d7cc0ee-e179-e97e-0a85-7fe18937d275/886443969834.jpg/600x600bf.png"
},
{
  /* #2E5935*/
  "artist" : "SZA",
  "album" : "Ctrl",
  "song" : "Love Galore",
  "color" : "#97A663",
  "pic_url" : "https://images.genius.com/be7f8888b02ec8de90b71e6590692665.1000x1000x1.jpg"
},
{
  "artist" : "Paramore",
  "album" : "After Laughter",
  "song" : "Fake Happy",
  "color" : "#D9A9D1",
  "pic_url" : "https://is4-ssl.mzstatic.com/image/thumb/Music111/v4/2f/25/9f/2f259f40-e735-d94e-2814-00ee84420cd5/075679897121.jpg/600x600bf.png"
},
{
  "artist" : "Childish Gambino",
  "album" : "3.15.20",
  "song" : "19.10",
  "color" : "#F5EFE0",
  "pic_url" : "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/c4/a2/69/c4a26947-9bc4-7310-a7cf-50c20d3caa1b/886448371472.jpg/600x600bf.png"
},
{
  "artist" : "Lil Uzi Vert",
  "album" : "Eternal Atake",
  "song" : "Silly Watch",
  "color" : "#023859",
  "pic_url" : "https://media.pitchfork.com/photos/5e6290565efdff0008ac725b/1:1/w_600/Eternal%20Atake_Lil%20Uzi%20Vert.jpg"
},
{
  "artist" : "Bad Bunny",
  "album" : "YHLQMDLG",
  "song" : "Si Veo a Tu Mamá",
  "color" : "#0C6F9C",
  "pic_url" : "https://media.pitchfork.com/photos/5e5d895d19382e0008724f89/1:1/w_600/YHLQMDLG_Bad%20Bunny.jpg"
},
{
  "artist" : "Mac Miller",
  "album" : "Circles",
  "song" : "Good news",
  "color" : "#BFBFBF",
  "pic_url" : "https://is3-ssl.mzstatic.com/image/thumb/Music123/v4/60/67/ff/6067ffd1-5a4d-97f7-adb5-c14e405fa321/093624905981.jpg/600x600bf.png",
},
{
  "artist" : "Jaden",
  "album" : "SYRE",
  "song" : "Rapper",
  "color" : "#D9A9BF",
  "pic_url" : "https://is5-ssl.mzstatic.com/image/thumb/Music118/v4/02/8b/55/028b5574-5ca6-3513-3610-0baf76165406/00850494008934.rgb.jpg/1200x630bb.jpg"
},
{
  "artist" : "Rich Brian",
  "album" : "Head in the Clouds",
  "song" : "History",
  "color" : "#E4DFDE",
  "pic_url" : "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/54/94/4d/54944d72-35c9-1efb-51cc-ab3015b36a7b/190296951756.jpg/600x600bf.png"
},
{
  "artist" : "Khalid",
  "album" : "American Teen",
  "song" : "Coaster",
  "color" : "#2D5873",
  "pic_url" : "https://is4-ssl.mzstatic.com/image/thumb/Music122/v4/22/b1/df/22b1dfb2-1637-f3fd-79ce-9464340f7b95/886446326146.jpg/600x600bf.png"
},
{
  "artist" : "Tyler, The Creator",
  "album" : "Flower Boy",
  "song" : "911/Mr. Lonely",
  "color" : "#FCB52E",
  "pic_url" : "https://i.imgur.com/tmdyrPk.jpg"
},
{
  /* #0A0A0A */
  "artist" : "Bad Bunny",
  "album" : "X 100PRE",
  "song" : "Si Estuviésemos Juntos",
  "color" : "#EEF8FD",
  "pic_url" : "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/10/93/80/109380f6-cef8-a495-901b-fd88b9c919c7/193483317984.jpg/600x600bf.png"
},
{
  "artist" : "Jhené Aiko",
  "album" : "Trip",
  "song" : "Overstimulated",
  "color" : "#FD8A4F",
  "pic_url" : "https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/1e/ad/1f/1ead1feb-2888-e8e1-e2c0-dec7dc567f41/00602567097037.rgb.jpg/1200x630bb.jpg"
},
{
  "artist" : "Big Sean",
  "album" : "I Decided.",
  "song" : "Owe Me",
  "color" : "#1835D9",
  "pic_url" : "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/98/68/70/98687070-1ffb-0332-33a7-e2bf6e2b338b/00602557335835.rgb.jpg/1200x630bb.jpg"
},
{
  "artist" : "Frank Ocean",
  "album" : "Blonde",
  "song" : "Ivy",
  "color" : "#D9D9D9",
  "pic_url" : "https://is4-ssl.mzstatic.com/image/thumb/Music22/v4/08/e1/da/08e1dab2-375d-5491-83c1-77754dc2eb37/BlondCover-Final.jpg/268x0w.jpg"
},
{
  "artist" : "Fall Out Boy",
  "album" : "American Beauty/American Psycho",
  "song" : "Immortals",
  "color" : "#D9C6B0",
  "pic_url" : "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/85/df/40/85df4020-3b06-f6ee-0aa6-8ce6978ecc31/00602547168764.rgb.jpg/600x600bf.png"
}
]

let contentGridElement2 = document.getElementById('contentGrid2');

for (var i = 0; i < favJson.length; i++){
  createElementProper2(favJson[i]);
}

function createElementProper2(incomingJSON){

  let newContentElement2 = document.createElement("DIV");
  newContentElement2.style.backgroundColor = incomingJSON['color'];
  newContentElement2.classList.add('contentItem2');

  let newContentHeading4 = document.createElement("H4");
  newContentHeading4.classList.add('LArtist');
  newContentHeading4.innerHTML = incomingJSON['artist'];
  newContentElement2.appendChild(newContentHeading4);

  let newContentHeading5 = document.createElement("H5");
  newContentHeading5.classList.add('LAlbum');
  newContentHeading5.innerHTML = incomingJSON['album'];
  newContentElement2.appendChild(newContentHeading5);

  let newContentHeading6 = document.createElement("H6");
  newContentHeading6.classList.add('LSong');
  newContentHeading6.innerHTML = incomingJSON['song'];
  newContentElement2.appendChild(newContentHeading6);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = incomingJSON['pic_url'];
  newContentElement2.appendChild(newImage);
  contentGridElement2.appendChild(newContentElement2);

}
