# RadialProgressBars

[Display Website!](https://ninjaboynaru.github.io/RadialProgressBars/)

## Description
Radial Progress Bars is a circular progress bar system made with pure CSS and vanilla Javascript.


It primarly utilizes the *clip* and transition properties to achive the end result. The dials are relative positioned, inline-block elements with fixed width and height.  

![CircularProgressBars](https://raw.githubusercontent.com/ninjaboynaru/RadialProgressBars/master/Docs/ExamplePic_1.JPG "Circular Progress Bars")



## Usage
Simply download the **dialStyle.css** and **dialControl.js** files and then include them in your html file as such.
```html
<link rel="stylesheet" href="dialStyle.css">
<script src="dialControl.js"></script>
```

Then add a dial to your html using the fallowing structure.
```html
<div class="Dial">
  <div class="DialText">0</div>
  <div class="Inset"></div>
  <div class="Mask">
    <div class="Circle"></div>
    <div class="Circle"></div>
  </div>
</div>
```


Use the fallowing javascript function (included in **dialControl.js**) to actualy turn the dial.
```javascript
TurnDial(dialContainer, percent)
```
Where **dialContainer** is the div element with the *Dial* class attached and **percent** is what percent of 360 degrees to turn the dial. Below is an example of turning the dial when it is clicked.
```html
<div class="Dial" onclick="TurnDial(this, 75)">
  <div class="DialText">0</div>
  <div class="Inset"></div>
  <div class="Mask">
    <div class="Circle"></div>
    <div class="Circle"></div>
  </div>
</div>
```


## Colors and Style
Currently there are 4 colors you can use, *Red*, *Yellow*, *Purple*, and *Black*. Add the **"[Color]Circle"** class to the 2 circles to change the color of the dial.
```html
  <div class="Mask">
    <div class="Circle RedCircle"></div>
    <div class="Circle RedCircle"></div>
  </div>
```

You can also specify a fill color as fallows
```html
  <div class="Mask">
    <div class="Circle PurpleCircle PurpleFill"></div>
    <div class="Circle PurpleCircle PurpleFill"></div>
  </div>
```
![Filled Circle](https://raw.githubusercontent.com/ninjaboynaru/RadialProgressBars/master/Docs/ExamplePic_4.JPG "Filled Progress Bar")

You can also specify your own colors by creating your own css classes as such
```css
.MyAwsomeCircle {
  border-color:green !important;
}

.MyAwsomeFill {
  background-color:orange !important;
}
```
```html
<div class="Mask">
  <div class="Circle MyAwsomeCircle MyAwsomeFill"></div>
  <div class="Circle MyAwsomeCircle MyAwsomeFill"></div>
</div>
```


## Sizes
As you can see in the very first image there are currently 3 sizes.
* Regular 100x100 px
* Large 160x160 px
* Huge 220x220 px

To change the size simply change the class of the container div element as such
```html
<div class="DialLarge">
  <div class="DialText">0</div>
  <div class="Inset"></div>
  <div class="Mask">
    <div class="Circle"></div>
    <div class="Circle"></div>
  </div>
</div>

<div class="DialHuge">
  <div class="DialText">0</div>
  <div class="Inset"></div>
  <div class="Mask">
    <div class="Circle"></div>
    <div class="Circle"></div>
  </div>
</div>
```

#### Also note that the fallowing elements are not required (Inset is the gray circle that is filled)
```html
<div class="DialText"> and <div class="Inset"> elements are not required
```