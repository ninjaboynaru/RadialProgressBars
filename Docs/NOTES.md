# Interesting notes taken during development

## Tutorials
Good img guide for "clip:" property along with corisponding code
[https://codropspz-tympanus.netdna-ssl.com/codrops/wp-content/uploads/2013/01/schema1.jpg]
[clip: rect(40px, 260px, 150px, 80px)]

Original tutorial at
https://fromanegg.com/post/2013/01/23/100-pure-css-radial-progress-bar/

Code Formating Library
https://github.com/google/code-prettify

Guide To Getting Elements Rotation
https://css-tricks.com/get-value-of-css-rotation-through-javascript/


## Clip Property
Only "absolute" position elements support clipping. This includes "fixed" position elements.

"clip:" has been removed from the Web Standards and is in the process of beaing droped.
"clip-path:" is pretty new but still experimental

"clip:" is more like crop and determines what part of the object will be
visable instead of what part will be hidden.

"absolute" positioned elements are removed from the flow, thus ignored by other elements.
Their parents wont expand to fit them.


## Absolute Property
When the size is set for an absolute element in %, it is a percent of the browser size, not its parent size;


## Transitions
	CSS transitions are a way of specifying the how the properties of elements 
	change from one state to another regardless of the start and end states.

	"transition: property duration"
	"transition: all duration"
	"transition: duration"

	"element.getComputedStyle()" to get an elements style properties at a point in the transition.
	"element.getComputedStyle().getPropertyValue(margin-left)" to get a specific property at some point.

	Set the elements style properties with the above code to prevent the element
	from reverting back to its initial state after the transition is cancled.

	"element.addEventListener(Transitionend, callback)"
	"element.addEventListiner(webkitTransitionend, callback)"

	
## Client Width and Height
 Element.clientWidth property is zero for elements with no CSS or inline layout boxes.
 The same applies for Element.clientHeight.

 https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements


## GetRotation
At the moment, the GetRotation() will return 0 for 360 degrees. So far this can be 
compensated for.


## Calling TurnDial(...) back to back
  TurnDial(...) should not be called on a dial while it is still turning because the 
 ApplyMask(...) or RemoveMask(...) from the previous call will still occure along with the
 current one.

  The previous one can not be stoped because the id of the timer is not stored.

## Proper Sizing
- The container can be an size (.Dial)

- The mask (.Mask) must have the same size as the circle's (.Circle) actual size.
  The actual size is the width/height along with the border width.
  [ actualSize = (circleSize + (circleBorderWidth * 2)) ]

- The clip of the mask must be
  rect(0px, maskWidth, maskHeight, maskWidth/2)

- The circle (.Circle) can be any size so long as it fits inside the container (.Dial)

- The circle clip must be
  rect(0px, actualWidth/2, actualHeight, 0px)

- The reason we use actual size is because it's not just the inside of the circle that is
  beaing used but also the border.

## Getting the sizes and clipping right
- The goal is to cover half the the circle, not the wrapper/mask or the dial, but the circle.
- Thus the mask must clip starting at the half point of the circle.

- The half point of the circle is given by its size.
- But size does not simply mean its css width and height.
- Since the only show part of the circle is its border, size means its css width and height along
  with its border width.

- Thus an 80x80 px circle with a border width of 10px has an actual width of 100px because
  80px + 10px on the left border and 10px on the right border add to 100px.
- Thus the clipping of the mask must begin at half 100px wich is 50 px.

- Simerly a 80x80px circle with a border width of 6px would actualy have a size of 92px
  and thus require the mask to start cliping at 92/2 wich is 16px.

- Simply lowering the border width to give the circle a different apperance will fail
 because if the border width changes so must the clipping and/or size of the mask change,
 
- Given that the javascript function ApplyMask(..) uses the masks's size to determine
  what size clip: property to apply, it may be fesible to only need to change the
  masks's width and height to account for the changed border width of the circle.


