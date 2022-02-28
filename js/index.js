function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomTurnDial(dial)
{
	var percent = RandomInt(1,100);
	TurnDial(dial, percent);
}

function TurnAllDials()
{
	var dials = [];
	dials.push(document.getElementsByClassName("Dial") );
	dials.push(document.getElementsByClassName("DialLarge") );
	dials.push(document.getElementsByClassName("DialHuge") );

	var percent = 0;
	for(var i = 0; i < dials.length; i++)
	{
		for(var x = 0; x < dials[i].length; x++)
		{
			percent = RandomInt(1,100);
			TurnDial(dials[i][x], percent);
		}
	}
}