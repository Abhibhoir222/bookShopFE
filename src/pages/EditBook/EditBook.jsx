import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const EditBook = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        book_type: "",
        auther_name: ""
    })

    useEffect(() => {

        const fetchSingleBook = async () => {
            try {
                const result = axios.get(`http://localhost:5000/api/get-by-book/${id}`)
                setFormData((await result)?.data?.book)

            } catch (error) {
                console.log("error", error.message)
            }
        }
        fetchSingleBook()
    },[id])

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            await axios.put(`http://localhost:5000/api/update-book/${id}`, formData)
            navigate("/")
        } catch (error) {
                console.log("error",error.message)
        }
    }

    return (
        <div>
            <h1>
                Edit Book
            </h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label>Book Name</label>
                <input
                    type="test"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <label>Book Name</label>
                <input
                    type="test"
                    name="book_type"
                    className="form-control"
                    value={formData.book_type}
                    onChange={handleChange}
                />
            </div>
            
            <div className="mb-3">
                <label>Book Name</label>
                <input
                    type="test"
                    name="auther_name"
                    className="form-control"
                    value={formData.auther_name}
                    onChange={handleChange}
                />
            </div>

            <button type="submit" className="btn btn-success">
                update Book
            </button>
            <button
                type="button"
                className=" btn btn-secondry ms-2"
                onClick={()=> navigate("/")}
            >
                cancle
            </button>
        </form>
        </div>
    )
}

export default EditBook