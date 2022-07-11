const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')
const dinoAnimation = document.querySelector('.animate')
const ground = document.querySelector('.line')
const gameOverMessage = document.querySelector('.game-over')


window.onkeydown = jump
window.onclick = jumpWithMouse


function jump(e) {
	if (e.keyCode === 32 && dino.classList.contains('active') === false || e.keyCode === 38 && dino.classList.contains('active') === false || e.keyCode === 87 && dino.classList.contains('active') === false) {
		dino.classList.add('animate')
		cactus.classList.add('animate-cactus')
		dino.style.backgroundImage = 'url(img/dragon-jumping.png)'
		ground.style.display = 'flex'
		dino.style.animationPlayState = "running"
		cactus.style.animationPlayState = "running"
		dino.classList.add('active')

	setTimeout(function() {
		if (dino.classList.contains('isLose') === false) {
			dino.classList.remove('animate')
			dino.style.backgroundImage = 'url(img/dino-gif.gif)'
			dino.classList.remove('active')
		}
	}, 700) 
		
	checkDead()
	}
}

	
function jumpWithMouse() {
	if (dino.classList.contains('active') === false) {
		dino.classList.add('animate')
		cactus.classList.add('animate-cactus')
		dino.style.backgroundImage = 'url(img/dragon-jumping.png)'
		ground.style.display = 'flex'
		dino.style.animationPlayState = "running"
		cactus.style.animationPlayState = "running"
		dino.classList.add('active')

		setTimeout(function() {
			if (dino.classList.contains('isLose') === false) {
				dino.classList.remove('animate')
				dino.style.backgroundImage = 'url(img/dino-gif.gif)'
				dino.classList.remove('active')
			}
		}, 700) 

		checkDead()
	}	

}


const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
const deadDistantion = cactusLeft < 56 && cactusLeft > 0 && dinoTop >= 110

function checkDead() {

	setInterval(function() {
	const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
	const cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))



	if (cactusLeft < 56 && cactusLeft > 0 && dinoTop >= 110) {
		cactus.style.animationPlayState = "paused"
		dino.style.animationPlayState = "paused"
		dino.style.backgroundImage = 'url(img/dragon-game-over.png)'
		gameOverMessage.style.display = 'flex'
		dino.classList.add('isLose')
		restartWithKey()
		restartWithMouse()

	}
	}, 10)
}

function restartWithKey() {
	window.onkeydown = (e) => {
		if (dino.classList.contains('isLose') && e.keyCode === 13 || e.keyCode === 32 || e.keyCode === 87 || e.keyCode === 38) {
			gameOverMessage.style.display = 'none'
			dino.style.backgroundImage = 'url(img/dragon.png)'
			cactus.classList.remove('animate-cactus')
			ground.style.display = 'none'
			dino.classList.remove('isLose')
			dino.classList.remove('animate')
			dino.classList.remove('active')
			window.onkeydown = jump
			window.onclick = jumpWithMouse
			
		}
	}
}


function restartWithMouse() {
	window.onclick = () => {
		if (dino.classList.contains('isLose')) {
			gameOverMessage.style.display = 'none'
			dino.style.backgroundImage = 'url(img/dragon.png)'
			cactus.classList.remove('animate-cactus')
			ground.style.display = 'none'
			dino.classList.remove('isLose')
			dino.classList.remove('animate')
			dino.classList.remove('active')
			window.onkeydown = jump
			window.onclick = jumpWithMouse
			
		}
	}
}
