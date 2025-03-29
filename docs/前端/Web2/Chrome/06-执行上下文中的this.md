
# 执行上下文中的 this

`this` 是 JavaScript 中的一个关键字，表示调用当前执行上下文的对象。其作用是**在函数体内部获取当前的运行环境**。

## 一、基本规则

`this` 的指向取决于**函数的调用位置**，而非定义位置。

### 1. **全局环境**
   - 在非严格模式下，`this` 指向 `window`。
   - 在严格模式下，`this` 为 `undefined`。

### 2. **普通函数**
   - 非严格模式：`this` 默认指向 `window`。
   - 严格模式：`this` 为 `undefined`。

### 3. **对象方法**
   - `this` 指向调用方法的对象。
   - 函数的定义位置不影响 `this`，调用位置才是决定因素。
   - **多层嵌套对象，`this` 指向离调用函数最近的对象。**

```javascript
const obj = {
  a: 10,
  b: 20,
  add: function () {
    return this.a + this.b;
  },
};

console.log(obj.add()); // 30
const add = obj.add;
console.log(add()); // NaN
```

### 4. **原型链中的方法**
   - `this` 仍然指向调用它的对象。

```javascript
const obj = { a: 10, b: 20 };
const prototypeObj = {
  add: function () {
    return this.a + this.b;
  },
};
Object.setPrototypeOf(obj, prototypeObj);
console.log(obj.add()); // 30
```

### 5. **构造函数**
   - `this` 绑定到新创建的对象上。

```javascript
function Fun() {
  this.a = 10;
}
const fun = new Fun();
console.log(fun.a); // 10
```

### 6. **`call()`、`apply()`、`bind()` 显式绑定**
   - `call()` 和 `apply()` 直接调用函数，并改变 `this`。
   - `bind()` 返回一个绑定了 `this` 的新函数。

### 7. **事件监听器**
   - `addEventListener` 内 `this` 指向触发事件的元素。

```javascript
const btn = document.getElementById('testId');
btn.addEventListener('click', function () {
  console.log(this); // 按钮元素
});
```

### 8. **内联事件处理**
   - 直接执行代码时，`this` 指向 DOM 元素。
   - 在函数内部执行时，非严格模式下指向 `window`，严格模式下 `undefined`。

```html
<button onclick="console.log(this)">按钮</button> 
<!-- 输出该 DOM 节点 -->
```

```javascript
<button onclick="clickFun()">按钮</button>
function clickFun() {
  console.log(this); // window（非严格模式）
}
```

### 9. **定时器回调**
   - `setTimeout` 回调函数的 `this` 指向 `window`。

```javascript
function Fun() {
  this.a = 10;
  this.method = function () {
    setTimeout(function () {
      console.log(this); // window
    }, 1000);
  };
}
const fun = new Fun();
fun.method();
```

### 10. **箭头函数**
   - **箭头函数不绑定 `this`**，它继承定义时的外层 `this`。
   - `call()`、`apply()`、`bind()` 对箭头函数的 `this` 无效。

```javascript
function Fun() {
  this.a = 10;
  this.method = function () {
    setTimeout(() => {
      console.log(this); // Fun { a: 10, method: ƒ }
    }, 1000);
  };
}
const fun = new Fun();
fun.method();
```

## 二、改变 `this` 指向

### 1. `call()`
使用 `call()` 显式指定 `this`，并传递参数。

```javascript
function method(val1, val2) {
  return this.a + this.b + val1 + val2;
}
const obj = { a: 1, b: 2 };
console.log(method.call(obj, 3, 4)); // 10
```

### 2. `apply()`
`apply()` 与 `call()` 类似，但参数以数组形式传递。

```javascript
console.log(method.apply(obj, [3, 4])); // 10
```

### 3. `bind()`
返回一个绑定 `this` 的新函数。

```javascript
const bindMethod = method.bind(obj, 3, 4);
console.log(bindMethod()); // 10
```

### `call()`、`apply()`、`bind()` 区别
1. `call()` 和 `apply()` 直接执行函数，`bind()` 返回一个新函数。
2. `call()` 传递参数列表，`apply()` 传递数组。
3. 多次 `bind()` 仅生效第一次绑定。
4. `call()`、`apply()`、`bind()` 对箭头函数无效。

## 三、总结

1. `this` 指向取决于**调用方式**。
2. 箭头函数不绑定 `this`，继承外层作用域 `this`。
3. `call()`、`apply()`、`bind()` 可用于显式修改 `this`。
4. 事件监听、定时器、内联事件处理等情况 `this` 指向特殊，需要注意。


