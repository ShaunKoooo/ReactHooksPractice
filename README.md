# React Hooks Practice
## `React.momo` -> 優化主要關注在 component 的props
   跟據 props 有無變更，判斷是否要 render 子 component
## `React.useMomo` -> 
    1. 大量運算、吃效能的 method 
    2. 不太需要 render 的component
## `React.useCallback` ->
    1. 與 useMemo 大同小異 -> useMemo(() => fn, deps) === useCallback(fn, deps)
### 使用情境：
    1. 若子組建被memo包，則注意傳遞進子組建的值是否為 call by reference ，是的話則加 useCallback
**Note: useMomo/useCallback 差別**
    useCallback 回傳 function 且可以傳遞參數
    useMomo 回傳值
## `React.Effect` -> 
    1. 可以代表 component 的生與死（只執行一次）
    useEffect(() => {
        // born
        return () => {
            // dead
        }
    }, []);
    2. 關注值的異動
    useEffect(() => {

    }, [??]);
**Note: dependency 是 [] 只會執行一次，不關注任何值**
**Note: dependency 是 [??] 值有變動才執行**
**Note: dependency 沒帶陣列 每一次 render 都會執行**

## `React.useRef` ->
    1. 可以記錄 mounted 狀態
    2.（當成class component 的 this 紀錄使用）
    3. 取得 dom 元素  
<!-- # Problems and solutions

## `Problem 1` 
    git -> Met with authentication problems when pushing code
## `Solution 1`
    https://hoohoo.top/blog/github-ssh-key/ -->

