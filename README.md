# The F2E -- Week 2

實作線上**簽署 pdf**
目前僅完成重點功能（匯入 pdf、製作簽名、加入簽名、下載 pdf），也尚未完成 RWD。不支援手機，平板也可能會出問題 😵（請使用電腦查看 Demo）

[✨ Live Demo](https://annie-f2e-2022w2.netlify.app/)

[🎨 Design 設計稿](https://2022.thef2e.com/users/12061549261454740203)

## 使用技術

- [React](https://reactjs.org)
- [React Router](https://reactrouter.com/en/main)
- [Styled Components](https://styled-components.com)

## 第三方套件

- [react-signature-canvas](https://www.npmjs.com/package/react-signature-canvas): 方便實作簽名板
- [PDF.js](https://mozilla.github.io/pdf.js/):實現在網頁上渲染 pdf
- [jsPDF] (https://rawgit.com/MrRio/jsPDF/master/docs/index.html):實現匯出 pdf
- [Fabric.js](http://fabricjs.com):實現在 canvas 中加入圖片並有拖拉縮放效果

## 待完成之功能

- 登入/登出
- alert message
- [Home page] 使用 firebase 來儲存資料（我的文件、已封存、垃圾桶）
- [Home page] 搜尋功能
- [Edit page] 加入圖片、文字
- [Finish page] 右上封存按鈕

## 待處理問題

- [Edit page] 當 pdf 有多頁時，能匯出完成品只有目前檢視的那頁而已。目標行為是要匯出整份 pdf，原本有幾頁就得匯出幾頁。
  💡 想法：會這樣是因為所有 pdf 頁面都是共用同一個 canvas，點擊不同頁數只是更改右側 canvas 渲染的內容。可試看看讓每一頁都有自己的 canvas。

- [Edit page] 當 pdf 有多頁時，使用者在某頁加入簽名後，若又按到其他頁再回來該頁，簽名會消失。
  💡 想法：發生原因和解決辦法應該同上。

- [Edit page] 重新整理時，畫面右側匯入之檔案消失，使用者無所適從 🤣
  💡 想法：

- [Finish page / HomePage] 從 Finish Page 回到 Home Page 之後，prgress bar 出現
  💡 想法：

## File structure

```
src
|_ assets
|_ components
|_ pages
|_ utils

```

## Useful Links

如何客製化 Input type=file

https://css-tricks.com/snippets/css/custom-file-input-styling-webkitblink/
