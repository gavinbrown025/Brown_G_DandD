(() => {
	// set up the puzzle pieces and boards
	// navButtons -> images at the bottom of the page
	const navButtons = document.querySelectorAll('#buttonHolder img'),
		puzzlePiece = document.querySelectorAll('.puzzle-pieces img'),
		puzzleBoard = document.querySelector('.puzzle-board'),
		dropZones = document.querySelectorAll('.drop-zone');

	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	// functions go here => what we want to have happen when our triggers fire
	function changeImageSet() {
		// change the thumbnail images on the left to match the button images
		pieces.forEach((piece, index) => {
			puzzlePiece[index].src=`images/${piece + this.dataset.puzzleindex}.jpg`;
			puzzlePiece[index].id=`${piece + this.dataset.puzzleindex}`;
		});

		//add an id to the images
		
		// and set a background image on the drop zone container
		
		puzzleBoard.style.backgroundImage = `url(images/backGround${this.dataset.puzzleindex}.jpg`;
		//debugger;
		}

	function dragStart(event) {
		console.log('started a drag');
// we want to capture the id of the element that were dragging
// the dataTransfer object is part of the drag event - you can use this to 
//temporarily store data you retrieve you can use later like an audio track
		event.dataTransfer.setData("text/plain", this.id);

	}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('you drug me');
	}

	function allowDrop(event) {
		console.log('you dropped me');

		let currentPiece = event.dataTransfer.getData("text/plain");

		event.target.appendChild(document.querySelector(`#${currentPiece}`));
	}


	// add some event handling for the nav navButtons
	navButtons.forEach(button => button.addEventListener('click', changeImageSet));

	puzzlePiece.forEach(piece => piece.addEventListener('dragstart', dragStart));

	dropZones.forEach(zone => zone.addEventListener('dragover', allowDragOver));

	dropZones.forEach(zone => zone.addEventListener('drop', allowDrop));

	// call, apply, and bind are different ways to invoke a function
	// you should know what call does - research in mdn
	changeImageSet.call(navButtons[0]);

})();
