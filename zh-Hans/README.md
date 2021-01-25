---
nav: zh-Hans
search: zh-Hans
---

# ESelector

 🍡 一套简洁、美观的选择器插件

## 快速入门

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

## 基础参数

名称 | 默认值 | 描述
----|-------|----
container | document.querySelector('.eselector') | 选择器容器元素
target | document.querySelector('.eselector-target') | 选择结果填充元素
readonly | true | 结果填充元素是否为只读（当 `target` 为 `<input>` 时生效）
type | 'calendar' | 选择器种类

## 通用API

+ `ESelector.version`: 静态属性, 返回 ESelector 的版本号

+ `es.destroy()`: 销毁选择器

## 日期选择器

 📅 一个可供选择日期的日历

```js
const es = new ESelector({
    container: document.getElementById('eselector'),
    target: document.getElementById('eselector-target'),
    type: 'calendar'
});
```

### 附加参数

名称 | 默认值 | 描述
----|-------|----
rules | 'all' | 可选日期规则
rules_data | - | rules的补充参数
default | - | 默认选择日期
theme | 'default' | 主题色

+ rules & rules_data

    设置可选的日期的判断规则

    + `rules` 可取值: `all`、`future`、`past`、`weekday`、`fromData`
        + `all` : 所有日期都可选
        + `future` : 可选择未来的日期
        + `past` : 可选择过去的日期
        + `weekday` : 可选择对应的星期
        + `fromData` : 根据参数中的数据规定可选日期
    + 使用 `weekday` 规则时，要同时规定 `rules_data` 参数，`rules_data` 为一个数组，其中元素取值为 `1` ~ `7` ，分别代表星期一到星期日，数组包含的所有元素对应的星期都将可选。
    + `weekday` 可与 `future` 或 `past` 同时使用，例如: 

        ```js
        const es = new ESelector({
            container: document.getElementById('eselector'),
            target: document.getElementById('eselector-target'),
            type: 'calendar',
            rules: 'future weekday',
            rules_data: [1,3,7]
        });
        ```
        表示可以选择未来的星期一、星期三、星期日

    + 使用 `fromData` 规则时，要同时规定 `rules_data` 参数，`rules_data` 为一个数组，其中包含多个 `JSON数据` ， `date` 的值对应日期将变为可选项，例如: 

        ```js
        const es = new ESelector({
            container: document.getElementById('eselector'),
            target: document.getElementById('eselector-target'),
            type: 'calendar',
            rules: 'fromData',
            rules_data: [
                {
                    'date': '2021-01-01', // 日期格式为: yyyy-MM-dd
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

    + `fromData` 及 `all` 规则仅可单独使用



+ default
    规定在选择器被激活时，是否存在默认选项（该选项将自动填入目标元素中）
    + 可取值: `today` 、 `[date]`
    + `today` 为当天
    + `[date]` 格式为: 'yyyy-MM-dd'，例如：`2021-01-01`
    + 该参数留空为不设置默认选项



+ theme
    设置选择器主题
    + 可取值:  `[主题名]` 、 `{[名称: 值]}`
        + `[主题名]`:  使用预设主题。[查看可用主题](/#/zh-Hans?id=available-themes)

        + `{[名称: 值]}`: 单独设置颜色
		
名称 | 默认值 | 描述
----|------|----
bgcolor | #ffffff | 选择器主体背景颜色
txtcolor | #000000 | 选择器文字颜色
shadow_color | 21, 101, 192 | 选择器阴影颜色，由RGB的三个数值组成的字符串，用 `,` 分隔
bgcolor_able | #ffffff | 可选择日期的背景颜色
txtcolor_able | #1565C0 | 可选择日期的文字颜色
bgcolor_disabled | #ededed | 不可选择日期的背景颜色
txtcolor_disabled | #888888 | 不可选择日期的文字颜色
bgcolor_hover | #6999d3 | 鼠标悬停时的背景颜色
txtcolor_hover | #ffffff | 鼠标悬停时的字体颜色

例如: 

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

#### 可用主题

主题名 | 描述
----|----
default | 默认主题，以蓝色与灰色为主色调
sakura | 樱花主题，以樱花粉为主色调
sakura_light | 樱花浅色主题，更为简洁的樱花主题

### 事件绑定

`es.on(event, handler)`

```js
es.on('selected', function () {
    console.log('date selected');
});
```

#### 可用事件

- selected
- destroy
- cancel