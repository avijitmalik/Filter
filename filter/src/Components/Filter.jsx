import React,{useState,useEffect} from 'react'
import  axios  from 'axios'


const Filter = () => {
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [post, setPost] = useState([])

    const filterData =async()=>{
        setLoading(true)
        const respone = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        setPost(respone.data)
        setLoading(false)
    }

    useEffect(() => {
        filterData()
    }, [])
    
  return (
    <div>
        <h2>Search Filter Methods.</h2>
        <div className='Input-filt'>
            <input type="text" value={search} placeholder='Search...!' onChange={(e) =>setSearch(e.target.value)} />
        </div>
        <div className="show-data">
            {loading? (<h2>loading...!</h2>) : ((
                post.filter((item) => {
                    return search.toLowerCase() === "" 
                    ? item : item.name.toLowerCase().includes(search)
                })
                .map((item) =>{
                    const {name,username} = item;
                    return(
                        <div key={item.id} className="show-data">
                            <p>{name}</p>
                            <p>{username}</p>
                        </div>
                    )})))}
        </div>
    </div>
  )
}

export default Filter