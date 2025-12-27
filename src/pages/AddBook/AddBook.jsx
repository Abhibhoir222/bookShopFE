import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AddBook = () => {
    const [books, setBook] = useState([]);
        const navigate = useNavigate()


    const listBook = useCallback(async () => {
        try {
            const result = await axios.get("http://localhost:5000/api/get-book");

            setBook(result?.data?.book || []);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    }, []);

    useEffect(() => {
        listBook();
    }, [listBook]);


    const handleDelete = useCallback(
        async (id) => {
            try {
                await axios.delete(
                    `http://localhost:5000/api/delete-book/${id}`
                );

                // Refresh list after delete
                setBook((prev) => prev.filter((book) => book._id !== id));
            } catch (error) {
                console.error("Error deleting book:", error);
            }
        },
        []
    );

    return (
        <div className="container mt-4">
        <button
            className="btn btn-danger btn-sm cursor-pointer bg-green-800 mt-1"
            onClick={()=> navigate("/addNewBook")}
        >
            Add New Book record
        </button>
            <table className="table border shadow">
                <thead className="thead-dark">
                    <tr>
                        <th>Book Name</th>
                        <th>Type</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {books.length > 0 ? (
                        books.map((book, index) => (
                            <tr key={index} >
                                <td>{book.name}</td>
                                <td>{book.book_type}</td>
                                <td>{book.auther_name}</td>
                                <td> <Link className="btn btn-primary space-x-0 mr-12 " to={`editBook/${book._id}`}>
                                    Edit
                                </Link>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger btn-sm cursor-pointer bg-red-400 mt-1"
                                        onClick={() => handleDelete(book._id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3" className="text-center">
                                No books found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default AddBook;
