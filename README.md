# RadialProgressBars

[Display Website!](https://ninjaboynaru.github.io/RadialProgressBars/)

## Description
Radial Progress Bars is a circular progress bar system made with pure CSS and vanilla Javascript.


It primarly utilizes the *clip* and transition properties to achive the end result. The dials are relative positioned, inline-block elements with fixed width and height.  

Currently no browser prefixes are used so this may not work with old versions of browsers and may not work with Internet Explorer.

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
   
     

## License
```
Copyright (C) 2017 Thiago Henrique Pereira Cordeiro

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS 
OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF 
MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE 
COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, 
EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING 
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
OF THE POSSIBILITY OF SUCH DAMAGE.
```
