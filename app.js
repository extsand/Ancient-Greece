const control = document.querySelectorAll('.conntroller')
const mainImage = document.querySelector('.main-image')

console.log(mainImage)
control.forEach((item) => {
	item.addEventListener('click', (e) => {
		const element = e.target.dataset.atr
		console.log(element)
		changeMainImage(element)
	})
})


function changeMainImage(name){
	mainImage.src = `./img/gods/${name}-min.png`
}

