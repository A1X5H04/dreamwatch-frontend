import { useEffect, useState } from "react"

export default function Items() {
    const [dataList, setDataList ] = useState()

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:3000/meals')
            const resData = await response.json()
            setDataList(resData)
        }

        fetchData()
    },[])

    console.log(dataList)
}