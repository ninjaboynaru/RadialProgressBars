/*
	Copyright (C) 2017 Thiago Henrique Pereira Cordeiro
*/

function Rotate(element, degrees)
{
	element.style.transform = "rotate(" + degrees + "deg)";
}
function SetDuration(element, duration)
{
	element.style.transitionDuration = "" + duration + "s";
}
function SetDelay(element, delay)
{
	element.style.transitionDelay = delay + "s";
}


function GetRotation(element)
{
	//Solution found at https://codepen.io/jjeaton/pen/bzolH
	var matrix = window.getComputedStyle(element, null).getPropertyValue("transform");

	if(matrix == "none" || matrix == null || matrix == undefined){return 0;}
	
	var values = matrix.split("(")[1].split(")")[0].split(",");
	var a = values[0]; var b = values[1]; var c = values[2]; var d = values[3];
	
	var radians = Math.atan2(b,a);
	if(radians < 0){radians += 2*Math.PI}
	var angle = Math.round(radians * (180/Math.PI) );
	
	return angle;
}


function RemoveMask(mask, delay)
{
	setTimeout(function(){mask.style.clip = "rect(auto, auto, auto, auto)"}, delay*1000);
}
function ApplyMask(mask, delay)
{
	var height = mask.clientHeight;
	var width = mask.clientWidth;
	var clipString = "rect(0px," + width + "px," + height + "px," + (width/2) + "px)"; //Cover the left half of the mask
	
	setTimeout(function(){mask.style.clip = clipString}, delay*1000);
}
function IsMaskApplied(mask)
{
	var clipString = mask.style.clip;
	if(clipString == "rect(auto, auto, auto, auto)"){return true;}
	return false;
}



function TextFallowDial(dialText, dialContainer, previousDegree, attempts)
{	
	var circleRight = dialContainer.getElementsByClassName("Circle")[0];
	var circleLeft = dialContainer.getElementsByClassName("Circle")[1];
	
	var rightRotation = GetRotation(circleRight);
	var leftRotation = GetRotation(circleLeft);
	
	var degree = 0;
	
	degree = leftRotation;
	if(degree == 0 && rightRotation == 180){degree = 360;}	//GetRotation() will return 0 if the rotation is 360
	
	
	var percent = Math.round( (degree*100)/360 );
	dialText.innerText = percent;
	
	if(previousDegree == undefined){previousDegree = -1000}
	if(attempts == undefined){attempts = 0}
	if(degree == previousDegree && attempts > 10)
	{
		//If the dial has not moved since the last call, stop fallowing the dial
		return;
	}
	else
	{
		//Continue fallowing the dial
		setTimeout(function(){TextFallowDial(dialText, dialContainer, degree, attempts+1)}, 50);
	}
	
	
	
}

function TurnDial(dialContainer, percent, fullCircleDuration)
{
	if(fullCircleDuration == undefined){fullCircleDuration = 3}	//How long to complete a full circle (360degrees)
	
	
	var circleRight = dialContainer.getElementsByClassName("Circle")[0];
	var circleLeft = dialContainer.getElementsByClassName("Circle")[1];
	var mask = dialContainer.getElementsByClassName("Mask")[0];
	
	var degree = (percent * 360)/100;
	
	var circleTimeRatio = fullCircleDuration/360;	//Multiply a degree by this to get how long it should take to complete that degree
	
	var rightDuration = 0;
	var leftDuration = 0;
	var maskDelay = 0;
	
	var rightCurrentRotaton = GetRotation(circleRight);
	var leftCurrentRotation = GetRotation(circleLeft);
	var rightTargetRotation = 0;
	var leftTargetRotation = 0;
	
	var rightNetChange = 0;	//How many degrees in total that circle has to move
	var leftNetChange = 0;

	if(IsMaskApplied(mask) && leftCurrentRotation == 0){leftCurrentRotation = 360;} //GetRotation(...) will return 0 for 360 degree elements;
	
	if(degree <= 180)
	{
		rightTargetRotation = degree;
		leftTargetRotation = degree
	}
	else
	{
		rightTargetRotation = 180;
		leftTargetRotation = degree;
	}
	
	rightNetChange = Math.abs(rightTargetRotation - rightCurrentRotaton);
	leftNetChange = Math.abs(leftTargetRotation - leftCurrentRotation);
	rightDuration = rightNetChange * circleTimeRatio;
	leftDuration = leftNetChange * circleTimeRatio;
	
	if(degree > 180)
	{
		//Remove the mask when the rightCircle is finished rotating
		RemoveMask(mask, rightDuration)
		SetDelay(circleRight, 0);
	}
	else
	{
		if(leftCurrentRotation > 180)
		{
			//Don't remove the mask or move the right circle util the left circle has left the left side.
			var leftCircleTimeTo180 = Math.abs(leftCurrentRotation - 180) * circleTimeRatio;
			ApplyMask(mask, leftCircleTimeTo180);
			SetDelay(circleRight, leftCircleTimeTo180);
		}
		else
		{
			ApplyMask(mask, rightDuration);
		}
		
	}
	
	SetDuration(circleRight, rightDuration);
	SetDuration(circleLeft, leftDuration);
	Rotate(circleRight, rightTargetRotation);
	Rotate(circleLeft, leftTargetRotation);
	
	var dialText = dialContainer.getElementsByClassName("DialText")[0];
	if(dialText != null && dialText != undefined){TextFallowDial(dialText, dialContainer);}
	else{console.log("No dial text found for: " + dial)}
}