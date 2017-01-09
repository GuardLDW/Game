class Player extends egret.DisplayObjectContainer{


    private static instance : Player;

    private bitmap;

    public static currentX;
    public static currentY;

    public isMove;

    public static getInstacne(){

        if(this.instance == null){

            this.instance = new Player();
        }

        return this.instance;
        
    }

    constructor(){

        super();

        Player.currentX = 0;
        Player.currentY = 0;
        this.isMove = false;

        //生成模型
        this.bitmap = new egret.Bitmap();
        this.bitmap.width = 128;
        this.bitmap.height = 128;
        this.bitmap.texture = RES.getRes("player_jpg");
        this.addChild(this.bitmap);
        

        

    }

    public move(path : MapNode[]){

        //移除移动
        var playerTween = egret.Tween.get(this.bitmap);
        egret.Tween.removeTweens(playerTween);

        //根据当前是否在移动进行下一步移动操作
        if(!this.isMove){

            this.isMove = true;
            playerTween = egret.Tween.get(this.bitmap);
            
            for(var i = 0; i < path.length; i++) {
           
                playerTween.to({x : path[i].x, y : path[i].y}, 500, egret.Ease.sineIn);
                Player.currentX = path[i].x;
                Player.currentY = path[i].y;
            }  

            //如果人物到达目标位置
            //if（this.x == path[path.length].x && this.y == path[path.length].y）
            this.isMove = false;

        
        }else{

            this.isMove = false;

        }

    }
}
