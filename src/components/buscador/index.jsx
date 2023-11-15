import { useState, useEffect } from "react"
import axios from "axios" 
import Image from "next/image"



 const BuscadorPage = () => {
    const [search, setSearch]= useState("")
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
        .then((response) =>{
            console.log(response)
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])
    return (
        <div className='flex items-center justify-center '>
            <input type="search"
                placeholder='Buscador'
                name="src"
                className='border border-gray-300 px-3 py-2 rounded-l-md'
                value={search}
                onChange={(e) => {setSearch(e.target.value)}}
            />
            
            {
                data
                    .filter((row) => {
                        if(search == "") {
                            return row;
                        }
                        //@ts-ignore
                        else if (row.title.toLowerCase().includes(search.toLocaleLowerCase())){
                            return row
                        }
                    })
                    .map((row, i)=> {
                        return (
                            <div className="card" key={i} > 
                                <div className="image">
                                    <Image src={row.image} alt={row.image} width={200} height={200} />
                                </div>
                                <div className="title">
                                    <h3> {row.title.substring(0, 20)} </h3>
                                    <p>${row.price}</p>
                                </div>
                            </div>
                        )
                    })
            }
        </div>
 
    )
}
export default BuscadorPage;