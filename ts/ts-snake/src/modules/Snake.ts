class Snake {

    private _element: HTMLElement
    // 蛇头
    private _head: HTMLElement
    // 蛇身
    private _body: HTMLCollection
    private _direction: string = 'ArrowRight'
    private _isAlive: boolean = true
    private _speed: number = 300
    private static readonly _directions = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

    constructor() {
        this._element = document.getElementById("snake")!
        this._head = document.querySelector("#snake > div")!
        this._body = this._element.getElementsByTagName("div")
    }

    get X() {
        return this._head.offsetLeft
    }

    set X(value: number) {
        if (this.X == value) {
            return
        }
        
        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!')
        }

        // 防止掉头
        if (this._body[1] && (this._body[1] as HTMLElement).offsetLeft === value) {
            if (value > this.X) {
                value = this.X - 10
            } else {
                value = this.X + 10
            }
        }

        this.moveBody()
        this._head.style.left = value + 'px'
        this.checkHeadHitBody()
    }
    
    get Y() {
        return this._head.offsetTop
    }

    set Y(value: number) {
        if (this.Y == value) {
            return
        }

        if (value < 0 || value > 290) {
            throw new Error('GAME OVER!')
        }

        // 防止掉头
        if (this._body[1] && (this._body[1] as HTMLElement).offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10
            } else {
                value = this.Y + 10
            }
        }

        this.moveBody()
        this._head.style.top = value + 'px'
        this.checkHeadHitBody()
    }

    set direction(direction: string) {
        if (Snake._directions.indexOf(direction) == -1) {
            return
        }
        this._direction = direction
    }

    set speed(speed: number) {
        this._speed = speed
    }

    set isAlive(isAlive: boolean) {
        this._isAlive = isAlive
    }

    addBody(): void {
        this._element.insertAdjacentHTML("beforeend", `<div></div>`)
    }

    moveBody(): void {
        for (let i = this._body.length - 1; i > 0; i--) {
            let pre = this._body[i - 1] as HTMLElement
            let preX = pre.offsetLeft;
            let preY = pre.offsetTop;

            (this._body[i] as HTMLElement).style.left = preX + 'px';
            (this._body[i] as HTMLElement).style.top = preY + 'px'
        }
    }

    move(checkEat: (snakeHeadX:number, snakeHeadY:number) => void): void {
        const promise = new Promise((res, rej) => {
            try {
                switch (this._direction) {
                    case "ArrowUp":
                        this.Y -= 10
                        break
                    case "ArrowDown":
                        this.Y += 10
                        break
                    case "ArrowLeft":
                        this.X -= 10
                        break
                    case "ArrowRight":
                        this.X += 10
                        break
                }

                this._isAlive && setTimeout(() => {
                    checkEat(this.X, this.Y)
                    this.move(checkEat)
                }, this._speed)
                res
            } catch(err) {
                rej(err)
            }
        })
        promise.then(() => {}, (err) => {
            alert(err.message)
            this.isAlive = false
        })
    }

    /**
     * 检查蛇头是否撞到自己
     */
    checkHeadHitBody(): void {
        for (let i = 1; i < this._body.length; i++) {
            let ele = this._body[i] as HTMLElement
            if (this.X === ele.offsetLeft && this.Y === ele.offsetTop) {
                throw new Error('GAME OVER!')
            }
        }
    }

}

export default Snake