var maze
var database, position1, position2

function preload() {
img=loadImage("robber.png")
drinkimg=loadImage("redkey.png")
copimg=loadImage("police.png")
treasurimg=loadImage("treasure.png")
rulesimg=loadImage("wecome.png")
gunimg=loadImage("gunpolice.png")
endimg=loadImage("Untitled.png")
}



function setup() {
  
  createCanvas(windowWidth, windowHeight);
  robber = createSprite(1500,40,20,20)
  //1500
  robber.addImage(img)

  robber.scale=0.25
  robber.setCollider("circle",0,0,60)
 //robber.debug=true



  blockpolice   =createSprite(640,520,5,20)
  blockpolice.addImage(gunimg)
  blockpolice.scale=0.07
  blockpolice2   =createSprite(545,520,5,20)
  blockpolice2.addImage(gunimg)
  blockpolice2.scale=0.07
  blockpolice3   =createSprite(440,520,5,20)
  blockpolice3.addImage(gunimg)
  blockpolice3.scale=0.07
  blockpolice4   =createSprite(345,520,5,20)
  blockpolice4.addImage(gunimg)
  blockpolice4.scale=0.07

  Lblockpolice=createSprite(640,630,5,20)
  Lblockpolice.addImage(gunimg)
  Lblockpolice.scale=0.07
  Lblockpolice2=createSprite(545,630,5,20)
  Lblockpolice2.addImage(gunimg)
  Lblockpolice2.scale=0.07
  Lblockpolice3=createSprite(440,630,5,20)
  Lblockpolice3.addImage(gunimg)
  Lblockpolice3.scale=0.07
  Lblockpolice4=createSprite(345,630,5,20)
  Lblockpolice4.addImage(gunimg)
  Lblockpolice4.scale=0.07

  Tblockpolice=createSprite(875,520,5,20)
  Tblockpolice.addImage(gunimg)
  Tblockpolice.scale=0.07
  Tblockpolice2=createSprite(970,520,5,20)
  Tblockpolice2.addImage(gunimg)
  Tblockpolice2.scale=0.07
  Tblockpolice3=createSprite(1070,520,5,20)
  Tblockpolice3.addImage(gunimg)
  Tblockpolice3.scale=0.07
  Tblockpolice4=createSprite(1170,520,5,20)
  Tblockpolice4.addImage(gunimg)
  Tblockpolice4.scale=0.07

  LTblockpolice=createSprite(875,630,5,20)
  LTblockpolice.addImage(gunimg)
  LTblockpolice.scale=0.07
  LTblockpolice2=createSprite(970,630,5,20)
  LTblockpolice2.addImage(gunimg)
  LTblockpolice2.scale=0.07
  LTblockpolice3=createSprite(1070,630,5,20)
  LTblockpolice3.addImage(gunimg)
  LTblockpolice3.scale=0.07
 LTblockpolice4=createSprite(1170,630,5,20)
 LTblockpolice4.addImage(gunimg)
 LTblockpolice4.scale=0.07

  laser1=createSprite(1400,113,5,70)
  laser1.shapeColor="red"
  laser2=createSprite(150,113,5,80)
  laser2.shapeColor="red"

  laserP1=createSprite(390,236,5,50)
  laserP1.shapeColor="red"
  laserP2=createSprite(590,236,5,50)
  laserP2.shapeColor="red"
  laserP3=createSprite(930,236,5,50)
  laserP3.shapeColor="red"
  laserP4=createSprite(1150,236,5,50)
  laserP4.shapeColor="red"
  laserP5=createSprite(500,360,57,5)
  laserP5.shapeColor="red"
  laserP6=createSprite(1035,360,64,5)
  laserP6.shapeColor="red"

  laserD1=createSprite(757,480,115,5)
  laserD1.shapeColor="green"

 key1=createSprite(1500,630,20,20)
 key1.addImage(drinkimg)
 key1.scale=0.1
 key2=createSprite(750,690,20,20)
 key2.visible=false
 key2.addImage(drinkimg)
 key2.scale=0.1
  key3=createSprite(756,233,10,10)
  
  key3.scale=0.1
  key3.visible=false
  key3.addImage(drinkimg)
  key3.scale=0.1
  key4=createSprite(70,90,20,20)
  key4.addImage(drinkimg)
  key4.scale=0.1
  key4.visible=false
  police1=createSprite(1300,100,30,30)
  police1.addImage(copimg)
  police1.scale=0.13
  police2=createSprite(180,100,30,30)
  police2.addImage(copimg)
  police2.scale=0.13
  treasure=createSprite(65,640,50,50)
  treasure.visible=false
  treasure.addImage(treasurimg)
  treasure.scale=0.2
  maze1=createSprite(368, 361, 200, 5);
  maze2=createSprite(390,160,5, 100)
  maze3=createSprite(390,312,5, 100)
  maze4=createSprite(590,312,5, 100)
  maze5=createSprite(590,160,5, 100)
  maze6=createSprite(368, 110, 200, 5);
  maze7=createSprite(630, 361, 200, 5);
  maze8=createSprite(630, 110, 200, 5);
  maze9=createSprite(536, 25, 5, 100);
  maze10=createSprite(900, 110, 200, 5);
  maze11=createSprite(900, 361, 200, 5);
  maze12=createSprite(1170, 110, 200, 5);
  maze13=createSprite(1170, 361, 200, 5);
  maze14=createSprite(930,160,5, 100);
  maze15=createSprite(930,312,5, 100);
  maze16=createSprite(1150,160,5, 100);
  maze17=createSprite(1150,312,5, 100);
  maze18=createSprite(150,20,5, 100);
  maze19=createSprite(1000, 25, 5, 100);
  maze20=createSprite(1400, 25, 5, 100);
  maze21=createSprite(147, 440, 5, 560);
  maze22=createSprite(1400, 400, 5, 500);
  maze23=createSprite(30, 213, 70, 5);
  maze24=createSprite(114, 280, 70, 5);
  maze25=createSprite(30, 340, 70, 5);
  maze26=createSprite(114, 400, 70, 5);
  maze27=createSprite(30, 460, 70, 5);
  maze28=createSprite(114, 520, 70, 5);
  maze29=createSprite(30, 580, 70, 5);
  maze30=createSprite(147, 650, 5, 120);
  maze31=createSprite(1510, 213, 70, 5);
  maze32=createSprite(1435, 280, 70, 5);
  maze33=createSprite(1510, 340, 70, 5);
  maze34=createSprite(1435, 400, 70, 5);
  maze35=createSprite(1510, 460, 70, 5);
  maze36=createSprite(1435, 520, 70, 5);
  maze37=createSprite(1510, 580, 70, 5);
  maze38=createSprite(1400, 690, 5, 95);
  maze39=createSprite(760, 361, 100,5)
  maze40=createSprite(420, 480, 550,5)
  maze41=createSprite(1110, 480, 580,5)
  //maze41.shapeColor="blue"
  maze42=createSprite(430,415,5,30)
  maze43=createSprite(500,415,5,30)
  maze44=createSprite(570,415,5,30)
  maze45=createSprite(640,415,5,30)
  maze46=createSprite(870,415,5,30)
  maze47=createSprite(940,415,5,30)
  maze48=createSprite(1010,415,5,30)
  maze49=createSprite(1080,415,5,30)
  maze50=createSprite(765, 500,5, 40)
  maze51=createSprite(765, 600,5, 40)
  maze52=createSprite(420, 690, 550,5)
  maze53=createSprite(1110, 690, 580,5)
  maze54=createSprite(765, 580, 1000,5)
  rules=createSprite(760,315,50,50)
rules.addImage(rulesimg)
  edges=createEdgeSprites()
  gameOver=createSprite(744,246,50,50)
   gameOver.addImage(endimg)
   gameOver.visible=false
  //key2
 // key3 
  //key4
  

  //createSprite()
  //maze42.velocityY=-2;
  //maze44.velocityY=2; 
  police1.velocityY=-20
  police2.velocityY=-20

  blockpolice.velocityY=3
  blockpolice2.velocityY =-3
  blockpolice3.velocityY=3
  blockpolice4.velocityY=-3

  Lblockpolice.velocityY=3
  Lblockpolice2.velocityY =-3
  Lblockpolice3.velocityY=3
  Lblockpolice4.velocityY=-3

  Tblockpolice.velocityY=3
  Tblockpolice2.velocityY =-3
  Tblockpolice3.velocityY=3
  Tblockpolice4.velocityY=-3

  LTblockpolice.velocityY=3
  LTblockpolice2.velocityY =-3
  LTblockpolice3.velocityY=3
  LTblockpolice4.velocityY=-3
}

function draw() {
  background(0);  
  
  console.log("mouseX="+mouseX)
  console.log("mouseY="+mouseY)
  console.log("width/2="+width/2)
  console.log("height/2="+height/2)
  
  if (keyDown("left")) {
    
    robber.x=robber.x-4
   }
   if (keyDown("right")) {
    
    robber.x=robber.x+4
   }
   if (keyDown("up")) {
   
  robber.y=robber.y-4
   }
   if (keyDown("down")) {
    
    robber.y=robber.y+4

   }
   if(police1.isTouching(robber)){
     robber.x=1500
     robber.y=40
    }
    if(police2.isTouching(robber)){
      robber.x=756
      robber.y=40
     }
    if(robber.isTouching(key1)){
      //alert(" you grabber the first key!!")
      laser1.destroy()
      laserP1.destroy()
      laserP2.destroy()
      laserP3.destroy()
      laserP4.destroy()
      key1.destroy()
     // key2.visible=true
      key3.visible=true



    }
    if(robber.isTouching(key3)){
      key2.visible=true
      laserP5.destroy()
      laserP6.destroy()
      laserD1.destroy()
      key3.destroy()
    }
    if(robber.isTouching(key2)){
      key4.visible=true
      laser2.destroy()
      key2.destroy()
      
    }
    if(robber.isTouching(key4)){
      key4.destroy()
      treasure.visible=true
      
    }
    if(blockpolice.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(blockpolice2.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(blockpolice3.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(blockpolice4.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Lblockpolice.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Lblockpolice2.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Lblockpolice3.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Lblockpolice4.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Tblockpolice.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Tblockpolice2.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Tblockpolice3.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(Tblockpolice4.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(LTblockpolice.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(LTblockpolice2.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(LTblockpolice3.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(LTblockpolice4.isTouching(robber)){
      robber.x=756
      robber.y=437
     }
     if(keyDown("space")){
       rules.destroy()
     }
     if(robber.isTouching(treasure)){
      gameOver.visible=true
     }
  
   robber.collide(maze1)
   robber.collide(maze2)
   robber.collide(maze3)
   robber.collide(maze4)
   robber.collide(maze5)
   robber.collide(maze6)
   robber.collide(maze7)
   robber.collide(maze8)
   robber.collide(maze9)
   robber.collide(maze10)
   robber.collide(maze11)
   robber.collide(maze12)
   robber.collide(maze13)
   robber.collide(maze14)
   robber.collide(maze15)
   robber.collide(maze16)
   robber.collide(maze17)
   robber.collide(maze18)
   robber.collide(maze19)
   robber.collide(maze20)
   robber.collide(maze21)
   robber.collide(maze22)
   robber.collide(maze23)
   robber.collide(maze24)
   robber.collide(maze25)
   robber.collide(maze26)
   robber.collide(maze27)
   robber.collide(maze28)
   robber.collide(maze29)
   robber.collide(maze30)
   robber.collide(maze31)
   robber.collide(maze32)
   robber.collide(maze33)
   robber.collide(maze34)
   robber.collide(maze35)
   robber.collide(maze36)
   robber.collide(maze37)
   robber.collide(maze38)
   robber.collide(maze39)
   robber.collide(maze40)
   robber.collide(maze41)
   robber.collide(maze42)
   robber.collide(maze43)
   robber.collide(maze44)
   robber.collide(maze45)
   robber.collide(maze46)
   robber.collide(maze47)
   robber.collide(maze48)
   robber.collide(maze49)
   robber.collide(maze50)
   robber.collide(maze51)
   robber.collide(maze52)
   robber.collide(maze53)
   robber.collide(maze54)
   robber.collide(laser1)
   
   robber.collide(laser2)
   robber.collide(laserP1)
   robber.collide(laserP2)
   robber.collide(laserP3)
   robber.collide(laserP4)
   robber.collide(laserP5)
   robber.collide(laserP6)
   robber.collide(laserD1)



















   //maze42.velocityY=-2;
   //maze42.bounceOff(maze1)
   maze42.bounceOff(maze1)
  maze42.bounceOff(maze40)
  maze44.bounceOff(maze40)
  maze44.bounceOff(maze7)
  blockpolice.bounceOff(maze40)
  blockpolice2.bounceOff(maze40)
  blockpolice3.bounceOff(maze40)
  blockpolice4.bounceOff(maze40)
  blockpolice.bounceOff(maze54)
  blockpolice2.bounceOff(maze54)
  blockpolice3.bounceOff(maze54)
  blockpolice4.bounceOff(maze54)

  Tblockpolice.bounceOff(maze41)
  Tblockpolice2.bounceOff(maze41)
  Tblockpolice3.bounceOff(maze41)
  Tblockpolice4.bounceOff(maze41)
  Tblockpolice.bounceOff(maze54)
  Tblockpolice2.bounceOff(maze54)
  Tblockpolice3.bounceOff(maze54)
  Tblockpolice4.bounceOff(maze54)

  Lblockpolice.bounceOff(maze54)
  Lblockpolice2.bounceOff(maze54)
  Lblockpolice3.bounceOff(maze54)
  Lblockpolice4.bounceOff(maze54)
  Lblockpolice.bounceOff(maze52)
  Lblockpolice2.bounceOff(maze52)
  Lblockpolice3.bounceOff(maze52)
  Lblockpolice4.bounceOff(maze52)

  
  Tblockpolice.bounceOff(maze41)
  Tblockpolice2.bounceOff(maze41)
  Tblockpolice3.bounceOff(maze41)
  Tblockpolice4.bounceOff(maze41)
  Tblockpolice.bounceOff(maze54)
  Tblockpolice2.bounceOff(maze54)
  Tblockpolice3.bounceOff(maze54)
  Tblockpolice4.bounceOff(maze54)

  LTblockpolice.bounceOff(maze54)
  LTblockpolice2.bounceOff(maze54)
  LTblockpolice3.bounceOff(maze54)
  LTblockpolice4.bounceOff(maze54)
  LTblockpolice.bounceOff(maze53)
  LTblockpolice2.bounceOff(maze53)
  LTblockpolice3.bounceOff(maze53)
  LTblockpolice4.bounceOff(maze53)

  
  
  police1.bounceOff(edges[2])
  police1.bounceOff(maze41)
  police2.bounceOff(edges[2])
  police2.bounceOff(maze40)

  robber.bounceOff(edges[0])
 robber.bounceOff(edges[1])
  robber.bounceOff(edges[2])
 robber.bounceOff(edges[3])
  drawSprites();
  

}
