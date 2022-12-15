import React, { useEffect, useReducer, useContext } from 'react'
import reducer from '../reducer/reducer'
import axios from 'axios'

const initialState = {
    receipt: '',
    courier: {id: 0, text: 'jne'},
    loading: false,
    result: [],
    theme: false
}

const GeneralContext = React.createContext()

export const GeneralProvier = ({children}) => {
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleLoading = (status) => {
        dispatch({type: 'SET_LOADING', payload: status})
    }

    const getPackageInformation = async(receipt, courier) => {
        handleLoading(true)
        try {
            const response = await axios.get(`https://tracking-resi-apps.herokuapp.com/api/v1/tracking/search?resi=${receipt}&courier=${courier}`)
            dispatch({type: 'SET_DATA', payload: response.data})
            handleLoading(false)
        } catch (error) {
            handleLoading(false)
        }
    }

    const handleReceipt = (value) => {
        dispatch({type: 'SET_RECEIPT', payload: value})
    }

    const handleCourier = (id, text) => {
        dispatch({type: 'SET_COURIER', payload: {id, text}})
    }

    const handleTheme = (value) => {
        dispatch({type: 'SET_THEME', payload: value})
    
        let storage = value ? 'dark' : 'light'
    
        if(value) {
          localStorage.setItem('theme', storage)
        } else {
          localStorage.setItem('theme', storage)
        }
      }

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme')
        if(currentTheme === 'dark') {
            document.documentElement.classList.remove('light')
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
            document.documentElement.classList.add('light')
        }

    }, [state.theme])

    return (
        <GeneralContext.Provider value={{
            ...state,
            handleReceipt,
            handleCourier,
            getPackageInformation,
            handleTheme
        }}>
            {children}
        </GeneralContext.Provider>
    )
}

export const useGeneralContext = () => {
    return useContext(GeneralContext)
}

