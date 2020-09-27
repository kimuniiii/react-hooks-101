// useReducer -> 状態を変えることが出来る関数

/* action = {
    type : 'CREATE_EVENT',
    title : '2020東京オリンピックのお知らせ',
    body : '2020年に東京オリンピックを開催します'
}

*/

/* 状態がある場合と状態が無い場合で場合分けをする
state = []
state = [
    {id:1,title:'タイトル',body:'ボディー'}
    {id:2,title:'タイトル',body:'ボディー'}
    {id:3,title:'タイトル',body:'ボディー'}
*/

const reducer = (state = [] , action) => {
    switch(action.type) {
        case 'CREATE_EVENT' :
            const event = { title : action.title,body : action.body }
            const length = state.length;
            const id = length === 0 ? 1 : state[length - 1].id + 1;
            return [...state, {id,...event}]
        case 'DELETE_EVENT' :
        return state;
        case 'DELETE_ALL_EVENT' :
        return []
        default :
        return state;
    }
}

export default reducer;

