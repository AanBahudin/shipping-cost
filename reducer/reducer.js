const reducer = (state, action) => {
    if(action.type === 'SET_DATA') {
        return {...state, result: action.payload}
    }
    if(action.type === 'SET_LOADING') {
        return {...state, loading: action.payload}
    }
   if(action.type === 'SET_RECEIPT') {
        return {...state, receipt: action.payload}
   }
   if(action.type === 'SET_COURIER') {
        const {id, text} = action.payload
        return {...state, courier: {id, text}}
   }
   if(action.type === 'SET_THEME') {
    return {...state, theme: action.payload}
   }
}  

export default reducer