const SELECT_BAND = 'SELECT_BAND';

export function selectBand(band) {
	//selectBand is an ActionCreator, it needs to return an action which is an object that must have a type property
	console.log("You have selected: ", band.name);
	return {
		type: SELECT_BAND,
		payload: band
	}
}

