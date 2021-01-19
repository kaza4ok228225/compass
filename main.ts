input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
function Bom () {
    Enemy = game.createSprite(randint(0, 4), 0)
    basic.pause(120)
    Enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(120)
    Enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(120)
    Enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(120)
    Enemy.change(LedSpriteProperty.Y, 1)
    basic.pause(100)
    Enemy.delete()
}
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let Enemy: game.LedSprite = null
let sprite: game.LedSprite = null
game.addLife(5)
sprite = game.createSprite(2, 4)
game.setScore(1337)
Enemy = game.createSprite(randint(0, 4), 0)
basic.pause(170)
Enemy.change(LedSpriteProperty.Y, 1)
basic.pause(170)
Enemy.change(LedSpriteProperty.Y, 1)
basic.pause(170)
Enemy.change(LedSpriteProperty.Y, 1)
basic.pause(170)
Enemy.change(LedSpriteProperty.Y, 1)
basic.pause(100)
Enemy.delete()
basic.forever(function () {
    if (sprite.isTouching(Enemy)) {
        game.gameOver()
    }
})
basic.forever(function () {
    basic.pause(100)
    Bom()
})
