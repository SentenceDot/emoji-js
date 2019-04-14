# emoji-js
javascript裡對於emoji的處理並未妥當，最主要的原因還是因為底層的編碼是 `UCS-2`   
也可以從以下範例得知   `console.log('🤔'.length) // 2`   
雖然在 ES6 中已經對 emoji 這個深坑進行處理，不過這戰爭應該不會這麼快解決....

## 使用方法
var emoji_tools = require('./emoji-string.js')   
**請注意，不是從 `npm` 抓下來的 module 需要自行指出路徑**

## functions
* emoji_length (string)  
回傳該字串的正確長度
```
 var TestString = '讓我想想🤔'

 console.log(TestString.length) // 6
 console.log(emoji_tools.emoji_length(TestString)) // 5
```

* toUniString (string)  
回傳該字串的 unicode

🤔 在 javascript裡表示成 `\uD83E\uDD14`
```
 var TestString = '讓我想想🤔'

 console.log(emoji_tools.toUniString(TestString)) // \u8B93\u6211\u60F3\u60F3\uD83E\uDD14
```

* isEmoji (string)  
回傳該字串是否包含emoji
```
var TestString = '讓我想想🤔'

console.log(emoji_tools.isEmoji(TestString)) // true
```

* findEmoji (string)  
回傳該字串中第一個 emoji 所在的 index  
**這邊回傳的 index 僅代表第一個unicode所在位子**
```
var TestString = '讓我想想🤔'

console.log(emoji_tools.findEmoji(TestString)) // 4
console.log(TestString[4]) // �
console.log(TestString[5]) // �
console.log(TestString[4] + TestString[5]) // 🤔
```

* findLastEmoji (string)  
回傳該字串中最後一個 emoji 所在的 index  
**這邊回傳的 index 僅代表第一個unicode所在位子**
```
var TestString = '🤔讓我想想🤔'
console.log(emoji_tools.findEmoji(TestString)) // 6
```

* findAllEmoji (string)  
回傳一個包含該字串中全部 emoji 與所在 index 的陣列  
**這邊回傳的 index 僅代表第一個unicode所在位子**
```
var TestString = '🤔讓我想想🤔'
console.log(emoji_tools.findAllEmoji(TestString)) // 6
```
回傳：
```
[ { emoji: '🤔', index: '0' }, { emoji: '🤔', index: '6' } ]
```

* RemoveEmoji (string)  
回傳一個將所有 emoji 刪除後的乾淨字串
```
var TestString = '🤔讓我想想🤔'
console.log(emoji_tools.RemoveEmoji(TestString)) // 讓我想想
```

* RemoveEmojiIndex (string,index)  
回傳刪除指定 index 之後emoji的字串
```
var TestString = '🤔讓我想想🤔'
console.log(emoji_tools.RemoveEmojiIndex(TestString,2)) // 讓我想想🤔
```

