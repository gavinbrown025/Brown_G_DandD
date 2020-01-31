(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page
	const navButtons = document.querySelectorAll('#buttonHolder img'),
		puzzlePieces = document.querySelectorAll('.puzzle-images');

	// functions go here => what we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail images on the left to match the button images
		// and set a background image on the drop zone container
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg`;
		puzzlePieces.src = `url(images/topRight${this.dataset.puzzlepieces}.jpg`;
		//debugger;
}


	// add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));
})();
