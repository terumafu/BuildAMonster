class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
        this.akey = this.input.keyboard.addKey("A");
        this.dkey = this.input.keyboard.addKey("D");
        
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.rightarm = this.add.sprite(this.bodyX + 100, this.bodyY+30, "monsterParts", "arm_blueA.png");

        my.sprite.leftarm = this.add.sprite(this.bodyX - 100, this.bodyY+30, "monsterParts", "arm_redC.png");
        my.sprite.leftarm.flipX = true;

        my.sprite.rightleg = this.add.sprite(this.bodyX + 50, this.bodyY+150, "monsterParts", "leg_greenA.png");

        my.sprite.leftleg = this.add.sprite(this.bodyX - 50, this.bodyY+120, "monsterParts", "leg_redD.png");
        my.sprite.leftleg.flipX = true;

        my.sprite.eyes = this.add.sprite(this.bodyX, this.bodyY-20, "monsterParts", "eye_blue.png");
        
        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthA.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY+40, "monsterParts", "mouthF.png");
        my.sprite.fangs.visible = false;
        
        my.sprite.antennae = this.add.sprite(this.bodyX+10, this.bodyY-100, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.horn = this.add.sprite(this.bodyX-50, this.bodyY-80, "monsterParts", "detail_blue_horn_large.png");
        my.sprite.horn.flipX = true;

        this.input.keyboard.on('keydown-S', (event) => {
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        });
        this.input.keyboard.on('keydown-F', (event) => {
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        });
    }   

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if(this.akey.isDown){
           for(let prop in my.sprite){
               console.log(prop);
               my.sprite[prop].x -=1;
           }
        }
        if(this.dkey.isDown){
            for(let prop in my.sprite){
                my.sprite[prop].x +=1;
            }
         }
       
    }

}