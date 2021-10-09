import { useEffect, useState} from 'react'

const PREFIX = 'react-whatsapp-'

export default function useLocalStorage(key, initialValue) {
    const prefixedKey = PREFIX + key;
    const [value,setValue] = useState(()=> {
        const jsonValue = localStorage.getItem(prefixedKey)
        if (jsonValue != null) {return JSON.parse(jsonValue)}
        if (typeof initialValue === 'function') {return initialValue()}
        else {return initialValue}
    })
}
