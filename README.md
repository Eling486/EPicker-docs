---
search: english
---

# ESelector

 🍡 A simple and beautiful selector kit.

## Installation

 + Download from [GitHub](https://github.com/Eling486/ESelector/releases).

 + Using npm:

    ```
    npm install eselector --save
    ```

## Quick Start

```html
<link rel="stylesheet" type="text/css" href="ESelector.min.css" />
<div class="input-wrap">
    <input id="eselector-target" type="text">
    <div id="eselector"></div>
</div>
<script src="ESelector.min.js"></script>
```

```js
const es = new ESelector({
    container: document.getElementById('eselector'),
    target: document.getElementById('eselector-target')
});
```

## Basic Options

Name | Default | Description
----|-------|----
container | document.querySelector('.eselector') | selector container
target | document.querySelector('.eselector-target') | selector's target
readonly | true | enable the `target` readOnly
type | 'calendar' | the type of selector, values: 'calendar'

## General API

+ `ESelector.version`: static property, return the version of ESelector

+ `es.destroy()`: destroy selector

## Date Selector (Calendar)

 📅 A calendar with dates to choose from.

```js
const es = new ESelector({
    container: document.getElementById('eselector'),
    target: document.getElementById('eselector-target'),
    type: 'calendar'
});
```

### Additional Options

Name | Default | Description
----|-------|----
rules | 'all' | rules for optional dates, values: 'all', 'past', 'future', 'weekday', 'fromData'
rules_data | - | supplementary options of `rules`
default | - | default date selection, values: 'today', '[date]' , `Date()`
theme | 'default' | theme color

+ rules & rules_data

    Set the judgment rule of optional date

    + `rules` values: `all` , `future` , `past` , `weekday` , `fromData`
        + `all` : all dates are optional
        + `future` : future dates are optional
        + `past` : past dates are optional
        + `weekday` : the corresponding day of the week is optional
        + `fromData` : specify an optional date based on the data in the `rules_data`
    + When using the `weekday` rule, you should also specify the `rules_data` , `rules_data` is an array, the values of elements are from `1` to `7` , they represent Monday to Sunday, the day of the week for all elements in the array is optional.
    + `weekday` can be used together with `future` OR `past` , for example:

        ```js
        const es = new ESelector({
            container: document.getElementById('eselector'),
            target: document.getElementById('eselector-target'),
            type: 'calendar',
            rules: 'future weekday',
            rules_data: [1,3,7]
        });
        ```
        It means that you can choose a future Monday, Wednesday or Sunday
	
	+ When using the `fromData` rule, you should also specify the `rules_data` , `rules_data` is an array, It contains multiple `JSON data` , the date corresponding to the value of `date` becomes optional, for example:

        ```js
        const es = new ESelector({
            container: document.getElementById('eselector'),
            target: document.getElementById('eselector-target'),
            type: 'calendar',
            rules: 'fromData',
            rules_data: [
                {
                    'date': '2021-01-01', // Date format: yyyy-MM-dd
                },
                {
                    'date': '2021-01-4',
                },
                {
                    'date': '2021-1-12',
                }
            ]
        });
        ```

    + The `fromData` and `all` rules can only be used separately.



+ default
    Set whether there is a default selection when the selector is activated (this selection will be automatically filled in the target element).
    + values: `today` , `[date]` , `Date()`
    + `today` : the default selection is the current date
    + `[date]` format: 'yyyy-MM-dd', for example:`2021-01-01`
    + leave this option blank for no default selection



+ theme
    Set selector theme
    + values:  `[name]` , `{[color_name: value]}`
        - `[name]`:  Use the default theme. [View available themes](https://eselector.js.org/#/home?id=available-themes)
		
        - `{[color_name: value]}`: set colors individually
		
Color_name | Default | Description
----|------|----
bgcolor | #ffffff | selector body background_color
txtcolor | #000000 | selector text color
shadow_color | 21, 101, 192 | selector shadow color, a string composed of three RGB values, separated by ','
bgcolor_able | #ffffff | optional date background_color
txtcolor_able | #1565C0 | optional date text color
bgcolor_disabled | #ededed | the background_color of the date cannot be selected
txtcolor_disabled | #888888 | the text color of the date cannot be selected
bgcolor_hover | #6999d3 | background color when hovering
txtcolor_hover | #ffffff | text color when hovering

for example:

```js
const es = new ESelector({
	container: document.getElementById('eselector'),
	target: document.getElementById('input'),
	type: 'calendar',
	rules: 'future',
	default: 'today',
	theme: {
	shadow_color: '243, 131, 143',
	txtcolor_able: '#d45966',
	bgcolor_disabled: '#fff1f1'
	}
});
```
			
#### Available Themes

name | Description
----|----
default | Default theme. Blue and gray are the main colors
sakura | Cherry Blossom theme. Cherry powder is the main color
sakura_light | The light color theme of cherry blossom. More concise Cherry Blossom theme

### Event binding

`es.on(event, handler)`

```js
es.on('selected', function () {
    console.log('date selected');
});
```

#### Available Events

- selected
- destroy
- cancel