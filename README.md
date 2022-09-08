# React Hooks Practice
## `React.momo` -> 優化主要關注在 component 的props
   跟據 props 有無變更，判斷是否要 render 子 component
   **區塊只用 render 一次之後再也不用 render -> memo 的第二個參數設 true**
## `React.useMomo` -> 
    1. 大量運算、吃效能的 method 
    2. 不太需要 render 的component
    3. 避免 {} !== {} (call by reference) 
## `React.useCallback` -> solves the functions equality check
    1. 與 useMemo 大同小異 -> useMemo(() => fn, deps) === useCallback(fn, deps)
    usage: 
    1. A functional component wrapped inside React.memo() accepts a function object prop
    2. When the function object is a dependency to other hooks, e.g. useEffect(..., [callback])
    3. When the function has some internal state, e.g. when the function is debounced or throttled.
### 使用情境：
    Tip: function 傳給其他 component 使用的話，都用 useCallback 包起來
**useMomo/useCallback 差別**
    useCallback 回傳 function 且可以傳遞參數
    useMomo 回傳值
## `React.Effect` -> 
    1. 可以代表 component 的生與死（只執行一次）
```js
    useEffect(() => {
        // born
        return () => {
            // dead
        }
    }, []);
```
    2. 關注值的異動
```js
    useEffect(() => {

    }, [??]);
```
    3. 依賴值變動時，先執行 return method
    ```js
    useEffect(() => {
        return () => {}
    }, [??]);
    ```

**dependency 是 [] 只會執行一次，不關注任何值**

**dependency 是 [??] 值有變動才執行**

**dependency 沒帶陣列 每一次 render 都會執行**


## `React.useRef` ->
    1. 可以記錄 mounted 狀態
    2.（當成class component 的 this 紀錄使用）
    3. 取得 dom 元素  

## `React.useContext` -> 用太多會有效能低落的問題，小範圍可以使用
**只要用到 Context 的 component，當context 值有更改，一律rerender，且無法阻擋(memo/useMemo都無效)。**

**key 關鍵字**

# css 全域污染 solutions : CSS module
檔名取：names.module.scss
import style from './name'


<!-- # Problems and solutions

## `Problem 1` 
    git -> Met with authentication problems when pushing code
## `Solution 1`
    https://hoohoo.top/blog/github-ssh-key/ 
    
## `Problem 2  Cross-Origin Resource Sharing (CORS)` 
    因安全考量，瀏覽器有同源政策限制對其他伺服器存取資料。
    cross origin 定義：下三者有不同即非同源
    {scheme}[host]<port>
    {https}://[www.shaun.com]:<6666>

    ### 錯誤訊息：Access to fetch at 'https://randomuser.me/api/' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
    ### 請求已送出，回傳時被攔截。

## `Solution 2`
    後端在 response header 中 加入 
    Access-Control-Allow-Origin: *   -> 全部同意
    Access-Control-Allow-Origin: http://shaun.com:6666   -> 只允許 http://shaun.com:6666

    ### Cross-Origin resource sharing 分兩種：
    ### 1. 簡單請求：會成功發送 request 
    ### request method 為 GET POST HEAD && request header 為 application/x-www-form-urlencoded multipart/form-data text/plain
        
    ### 2. 預檢請求（preflight）發送 request 前會先檢查
    ### 瀏覽器發出 options method
    ### OPTIONS /data HTTP/1.1
    ### Origin: http://example.com
    ### Access-Control-Request-Method: PUT
    ### Access-Control-Request-Headers: X-Custom-Header
    ### 後端決定規則
    ### Access-Control-Allow-Origin: *
    ### Access-Control-Allow-Methods: PUT, POST, GET, DELETE, OPTIONS
    ### Access-Control-Allow-Headers: X-Custom-Header
    ### Access-Control-Max-Age: 86400 -> 86400 秒內不用再預檢
    ### origin 符合後端 Access-Control 規定 則瀏覽器可發出 request，response 一樣要符合的 header 才能完成CORS。

    ### 3. CORS request 是匿名發送，要攜帶 cookie 的話，前後端設定：
    ### frontend: fetch('https://example.com', { credentials: 'include' })
    ### backend: Access-Control-Allow-Origin: https://example.com Access-Control-Allow-Credentials: true
    ### 設定 cookie 的 samesite 屬性
-->


# 參考資料
## [useCallback](https://dmitripavlutin.com/dont-overuse-react-usecallback/)  
## [use the Chrome DevTools Performance panel to analyze runtime performance](https://developer.chrome.com/docs/devtools/evaluate-performance/)  
## [git github-ssh-key](https://hoohoo.top/blog/github-ssh-key/ )  
## [setTimeout / setInterval](https://kuro.tw/posts/2019/02/23/談談-JavaScript-的-setTimeout-與-setInterval/)  





