    //variables for each image//
let coral;
let fishschool;
let octopus;
let jelly;
let whaleshark;
let seahorse;
let diver;
let bluewhale;
let ele;
let theAlert;
let sampleIsLooping;


    //loading all images//
function preload(){
ocean = loadImage ('ocean_new.gif');
coral = loadImage ('coral.png');
fishschool = loadImage ('fishschool_3.png');
jelly = loadImage ('jelly_3.png');
octopus = loadImage ('octopus_3.png');
whaleshark = loadImage('whaleshark_2.png');
seahorse = loadImage ('seahorse_3.png');
diver = loadImage ('diver2.png');
bluewhale = loadImage ('bluewhale_2.png');
   }

    // canvas setup //
function setup() {
  createCanvas(800, 600);
  selected = jelly;
  
  //establishing buttons for images//
  
  // fishschool
  imgButton = createButton('Tropical Fish');
  imgButton.mousePressed(fishschool_f);
  imgButton.mouseReleased(theAlert1_f);
  
    // jelly
  imgButton = createButton('Jellyfish');
  imgButton.mousePressed(jelly_f);
  imgButton.mouseReleased(theAlert2_f);
  
    // octopus
  imgButton = createButton('Octopus');
  imgButton.mousePressed(octopus_f);
  imgButton.mouseReleased(theAlert3_f);
  
    // whaleshark
  imgButton = createButton('Whale Shark');
  imgButton.mousePressed(whaleshark_f);
  imgButton.mouseReleased(theAlert4_f);

    // seahorse
  imgButton = createButton('Seahorses');
  imgButton.mousePressed(seahorse_f);
  imgButton.mouseReleased(theAlert5_f);
  
      // diver
  imgButton = createButton('Diver');
  imgButton.mousePressed(diver_f);
  imgButton.mouseReleased(theAlert6_f);
  
    // bluewhale
  imgButton = createButton('Gray Whale');
  imgButton.mousePressed(bluewhale_f);
  imgButton.mouseReleased(theAlert7_f);
  
  
   //aquarium audio  
  imgButton = createButton('Audio On/Off');
  ele = createAudio('Aquarium.mp3');
   imgButton.mouseReleased(musicControl_f);
}

function theAlert1_f(){
  alert("Tropical fish are a type of fish that live in the tropical waters, areas of warm water found near the equator. Tropical fish with vibrant colors and patterns are one of the prominent features of the reef ecosystem. Interestingly, these creatures have well-developed vision and can recognize different colors and color patterns. There are over 30,000 species of tropical fish.");
}

function theAlert2_f(){
  alert("Jellyfish have no brain, heart, bones or eyes. They are made up of a smooth, bag-like body and tentacles armed with tiny, stinging cells. These incredible invertebrates use their stinging tentacles to stun or paralyse prey before gobbling it up.There are more than 2,000 known species of jellyfish.");
}

function theAlert3_f(){
  alert("Octopuses live in all the world’s oceans but are especially abundant in warm, tropical waters. Crabs, shrimps, and lobsters rank among their favorite foods. If threatened, octopuses shoot an inky fluid that darkens the water, confusing the aggressor. The octopus can also change to gray, brown, pink, blue, or green to blend in with its surroundings.");
}

function theAlert4_f(){
  alert("Growing up to 40 feet long, or the size of a school bus, the whale shark is the largest fish in the world. Despite their large size, whale sharks are filter feeders and feed on tiny prey such as plankton, small crustaceans, and schooling fish. Whale sharks are found through all tropical and warm temperate seas.");  
}

function theAlert5_f(){
  alert("Seahorses are small bony fish that live in shallow temperate and tropical habitats.They are most commonly found hiding in sea grasses, reef systems and mangrove forests. Seahorses have excellent eyesight and their eyes function independently like a chameleon's. Male seahorses carry the eggs in a brooding pouch until they hatch.");
}

function theAlert6_f(){
  alert("Marine biologists are scientists who research life in the oceans and other saltwater environments such as estuaries and wetlands. They observe and analyze data, conduct experiments, rehabilitate injured marine animals and document the origins, behavior, genetics and diseases of marine life.");
}

function theAlert7_f(){
  alert("Gray whales have a hump and a ridge of sharp bumps along their backs, instead of a dorsal fin. They are a type of baleen whale, which means they filter food from the water through special bristly structures in their mouths. Gray whales stay close to shore and feed in shallow water. Their well-known migrations take them between feeding and breeding areas, swimming as much as 12,000 miles round trip.");
}

  // audio loop function //

function musicControl_f(){
  
  if (!sampleIsLooping) {
     ele.loop();
     
     sampleIsLooping = true;
    
   } else {
     ele.stop();
     
     sampleIsLooping = false;
   } 
  }


//establishing functions for each button//
function fishschool_f(){
  selected = fishschool;
} 

function jelly_f(){
  selected = jelly;
} 

function octopus_f(){
  selected = octopus;
} 

function whaleshark_f(){
  selected = whaleshark;
} 

function seahorse_f(){
  selected = seahorse;
} 

function diver_f(){
 selected = diver;
} 

function bluewhale_f(){
  selected = bluewhale;
} 

    //establishing background ocean image//
function draw() {
  background (ocean,800,600); 
  if (mouseIsPressed === true) {
 image(selected, 100, mouseY -100, 600, 600);
    mouseX = 100;
  } else {
    image(selected, mouseX -100, 100, 600, 600);
  }
     
  
    // the x,y axis coordinates//
  text(mouseX + "," + mouseY, 20, 20);
  fill(255);
    
    // the coral and seaweed image placement in the corners//
image(coral,-10, 05, 860, 610);
    
    }