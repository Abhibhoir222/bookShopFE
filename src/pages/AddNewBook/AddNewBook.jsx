import axios from "axios"
import {useState } from "react"
import { useNavigate } from "react-router-dom"

const AddNewBook = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        book_type: "",
        auther_name: ""
    })


    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try {
            await axios.post(`http://localhost:5000/api/add-book`, formData)
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
                Add Book
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

export default AddNewBook