// 创建信息对象
class Block {
    constructor(left, top) {
        this.left = left;
        this.top = top;
        this.currLeft = this.left;
        this.currTop = this.top;
    }
}
// 创建游戏
class CreateGame {
    constructor(config) {
        this.row = config.row;
        this.col = config.col;
        this.bg = config.img;
        this.ele = document.querySelector(config.ele);
        this.initGame();
    }
    // 初始化游戏
    initGame() {
        this.piceWidth = this.ele.clientWidth / this.col;
        this.piceHeight = this.ele.clientHeight / this.row;
        this.ele.style.position = 'relative';
        this.piceNumber = this.row * this. col;
        this.initBlockInfo();
        this.shuffle(this.blockInfoArr);
        this.blockRegEvent();
    }
    // 游戏信息初始化
    initBlockInfo() {
        this.blockInfoArr = [];
         for(let i = 0; i < this.row; i++) {
            for(let j = 0; j < this.col; j++) {
                this.blockInfoArr.push(new Block(i * this.piceWidth, j * this.piceHeight));
            }
        }
    }
    // 渲染dom
    createBlockDom() {
        this.blockInfoArr.forEach((item, index) => {
            const divBlock = document.createElement('div');
            divBlock.style.width = this.piceWidth + 'px';
            divBlock.style.height = this.piceHeight + 'px';
            divBlock.style.background = `url(${this.bg}) -${item.currLeft}px -${item.currTop}px`;
            divBlock.style.position = 'absolute';
            divBlock.style.left = item.left + "px";
            divBlock.style.top = item.top + "px";
            divBlock.style.border = '1px solid #FFf';
            divBlock.style.boxSizing = 'border-box';
            divBlock.style.cursor = "pointer";
            divBlock.style.backgroundSize = `${this.ele.clientWidth}px ${this.ele.clientHeight}px`;
            divBlock.style.transition = '.3s'
            if(index == this.piceNumber - 1) {
                divBlock.style.display = 'none';
            }
            this.ele.appendChild(divBlock);
        })
    }
    // 洗牌
    shuffle(arr) {
        for(let i = 0; i < arr.length - 1; i ++) {
            let item = arr[Math.floor(Math.random() * (this.piceNumber - 1))];
            let temp = arr[i].left;
            arr[i].left = item.left;
            item.left = temp;
            temp = arr[i].top;
            arr[i].top = item.top;
            item.top = temp;
        }
        this.createBlockDom();
    }
    // 方块事件注册 & 判定是否游戏结束
    blockRegEvent() {
        const blocks = this.ele.querySelectorAll('div');
        const targPosition = Array.from(blocks).find(item => item.style.display === 'none');
        const self = this;
        for(const item of blocks) {
            item.onclick = function() {
                if((self.isInteJudge(Math.abs(self.changeNum(this.style.left) - self.changeNum(targPosition.style.left)) , self.piceWidth) && this.style.top == targPosition.style.top)
                    ||
                    (self.isInteJudge(Math.abs(self.changeNum(this.style.top) - self.changeNum(targPosition.style.top)) , self.piceHeight) && this.style.left == targPosition.style.left)
                ) {
                    let tempLeft = this.style.left;
                    let tempTop = this.style.top;
                    this.style.left = targPosition.style.left;
                    this.style.top = targPosition.style.top;
                    targPosition.style.left = tempLeft;
                    targPosition.style.top = tempTop;
                }
                if(self.isAdjacent()) {
                    targPosition.style.display = "block";
                    self.blockEventRelieve();
                };
            }
        }
    }
    // 小数比较
    isInteJudge(num1, num2) {
        return parseInt(num1) === parseInt(num2);
    }
    // 判定结果
    isAdjacent() {
        return Array.from(this.ele.querySelectorAll('div')).every(item => {
            let arr = item.style.backgroundPosition.split(' ');
            return this.changeNum(item.style.left) == Math.abs(this.changeNum(arr[0])) && this.changeNum(item.style.top) == Math.abs(this.changeNum(arr[1]));
        })
    }
    // 方块的letf、top的转换
    changeNum(str) {
        return Number(str.slice(0, str.length -2));
    }
    // 方块的事件解除
    blockEventRelieve() {
        const blocks = this.ele.querySelectorAll('div');
        for(const item of blocks) {
            item.style.border = 'none'
            item.onclick = null;
        }
    }
}
