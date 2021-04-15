class Block {
    constructor(left, top) {
        this.left = left;
        this.top = top;
        this.currLeft = this.left;
        this.currTop = this.top;
    }
}
class CreateGame {
    constructor(config) {
        this.row = config.row;
        this.col = config.col;
        this.bg = config.img;
        this.ele = document.querySelector(config.ele);
        this.initGame();
    }
    initGame() {
        this.piceWidth = this.ele.clientWidth / this.col;
        this.piceHeight = this.ele.clientHeight / this.row;
        this.ele.style.position = 'relative';
        this.piceNumber = this.row * this. col;
        this.initBlockInfo();
        this.createBlockDom();
    }
    initBlockInfo() {
        this.blockArr = [];
         for(let i = 0; i < this.row; i++) {
            for(let j = 0; j < this.col; j++) {
                this.blockArr.push(new Block(i * this.piceWidth, j * this.piceHeight));
            }
        }
        // this.blockArr.sort(() => Math.random() - 0.5);
    }
    createBlockDom() {
        this.blockArr.forEach((item, index) => {
            const divBlock = document.createElement('div');
            divBlock.style.width = this.piceWidth + 'px';
            divBlock.style.height = this.piceHeight + 'px';
            divBlock.style.background = `url(${this.bg}) -${item.currLeft}px -${item.currTop}px`;
            divBlock.style.position = 'absolute';
            divBlock.style.left = item.left + "px";
            divBlock.style.top = item.top + "px";
            divBlock.style.border = '1px solid #FFf';
            divBlock.style.boxSizing = 'border-box';
            divBlock.style.backgroundSize = `${this.ele.clientWidth}px ${this.ele.clientHeight}px`;
            if(index == this.piceNumber - 1) {
                divBlock.style.display = 'none';
            }
            this.ele.appendChild(divBlock);
        })
        
    }
}
