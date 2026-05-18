import React, { useEffect, useRef, useState } from 'react'
import { fireDb } from '../Firebase/firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'

export default function HomePage() {

    const modalRef = useRef()
    const formRef = useRef()
    const editmodalRef = useRef()
    const filterRef = useRef()

    // from here we can get data from firebase
    const [productdb, setproductdb] = useState([])

    useEffect(() => {
        getproduct()
    }, [])

    const getproduct = async () => {
        try {
            const q = query(
                collection(fireDb, "product"),
                orderBy("time")
            )

            // const res = await getDocs(q)
            // console.log(res.docs[1].data())
            // console.log(res.docs)

            const product = onSnapshot(q, (qsnapshot) => {
                const data = qsnapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                }))
                // console.log(data)
                setproductdb(data)
            })

            return () => product()

            // This is basic method
            // const product = res.docs.map((doc) => ({
            //     ...doc.data(),
            //     id: doc.id
            // }))

            // console.log(productdb)

            // setproductdb(product)

            // const res = await getDocs(collection(fireDb,"product"))
            // console.log(res.docs[1].data())

        } catch (error) {
            console.log("Database Not Connected", error)
            toast.error("Database Not Connected")
        }
    }

    // Here new data add in database

    const [addproduct, setaddproduct] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        time: Timestamp.now()
    })

    const getchange = (e) => {
        setaddproduct({
            ...addproduct,
            [e.target.name]: e.target.value
        })
    }

    const adddb = async (e) => {
        e.preventDefault();
        try {
            const checkEmpty = Object.values(addproduct).some(
                value => !value?.toString().trim()
            )

            if (checkEmpty) {
                window.alert("Please fill all details")
                return false
            }

            const res = await addDoc(collection(fireDb, "product"), addproduct)
            // console.log("Product Added")
            toast.success("Product Added Sucessfully!")

            setaddproduct({
                name: "",
                price: "",
                image: "",
                category: "",
                time: Timestamp.now()
            })
            formRef.current.reset()
            modalRef.current.close()
        } catch (error) {
            console.log("Database not connected", error)
            modalRef.current.close()
            toast.error("Database Not Connected")

        }
    }

    const clearform = (e) => {
        setaddproduct({
            name: "",
            price: "",
            image: "",
            category: "",
            time: Timestamp.now()
        })
        formRef.current.reset()
        modalRef.current.close()
    }

    // Delete Data from Database
    const deletedb = async (id) => {
        try {
            const confirmDelete = window.confirm("Are you sure?")

            if (!confirmDelete) {
                return false
            }

            const res = await deleteDoc(doc(fireDb, "product", id))
            // console.log("Data Deleted Successfully")
            toast.success("Data Deleted Successfully")
        } catch (error) {
            console.log("Database Not Coonected")
            toast.error("Database Not Coonected")
        }
    }

    // Edit Data in Database

    const [editedpd, seteditedpd] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        id: "",
        time: ""
    })

    const getpdid = (data) => {
        // console.log(data)
        seteditedpd(data)
        editmodalRef.current.showModal()
    }

    const updatededit = (e) => {
        seteditedpd({
            ...editedpd,
            [e.target.name]: e.target.value
        })
    }

    const editdb = async (e) => {
        e.preventDefault();
        try {
            const checkEmpty = Object.values(editedpd).some(
                value => !value?.toString().trim()
            )

            if (checkEmpty) {
                window.alert("Please fill all details")
                return false
            }
            const res = await setDoc(doc(fireDb, "product", editedpd.id), editedpd)

            editmodalRef.current.close()
            toast.success("Updated Successfully")
        } catch (error) {
            console.log("Database Not Connected")
            editmodalRef.current.close()
            toast.error("Database Not Connected")
        }
    }

    // Search Functionality
    const [search, setsearch] = useState("")
    const [debouncedSearch, setDebouncedSearch] = useState("")

    // This help stop render for every time keyboard press. it wait for user to complete typing and then call api rather call api evry keypress
    useEffect(() => {
        const timer = setTimeout(() => {

            setDebouncedSearch(search)

        }, 500)
        return () => clearTimeout(timer)

    }, [search])

    // console.log(search)
    // multiple category selection
    const [categoryFil, setCategoryFil] = useState([])

    const filterpd = productdb.filter((data) => {
        const matchsearch = data?.name?.toLowerCase().includes(debouncedSearch.toLowerCase())
        const matchcategory = categoryFil.length == 0 || categoryFil.includes(data.category)

        return matchsearch && matchcategory
    })

    // console.log(filterpd)


    // Pagination
    const [currentPage, setCurrentPage] = useState(1)

    const productsPerPage = 5

    const lastIndex = currentPage * productsPerPage
    const firstIndex = lastIndex - productsPerPage

    const currentProducts = filterpd.slice(
        firstIndex,
        lastIndex
    )

    const totalPages = Math.ceil(filterpd.length / productsPerPage)
    useEffect(() => {

        setCurrentPage(1)

    }, [search])


    const categories = [...new Set(productdb.map((data) => data.category))]
    // console.log(categories)

    const FilteredCategory = (category) => {
        if (categoryFil.includes(category)) {
            setCategoryFil(categoryFil.filter((data) => data != category))
        }
        else {
            setCategoryFil([
                ...categoryFil,
                category
            ])
        }
    }
    return (
        <div className='w-5/6 mx-auto my-10'>
            <div className="bg-gray-100 rounded-2xl shadow-lg">
                {/* Header */}
                <div className="flex items-start p-10 pb-1 justify-between mb-10">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Product</h2>
                        <p className="text-gray-500 mt-2 text-lg">
                            Here is the list of all product available in database.
                        </p>
                        <input
                            type="text" value={search} onChange={(e) => setsearch(e.target.value)}
                            placeholder="Search products..."
                            className="w-full bg-white border border-gray-200 rounded-2xl pl-2 pr-4 py-3 mt-2 text-base outline-none focus:ring-4 focus:ring-indigo-200 shadow-sm transition"
                        />
                    </div>
                    <button onClick={() => modalRef.current.showModal()} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-medium transition">
                        Add Product
                    </button>

                </div>
                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        {/* Table Head */}
                        <thead>
                            <tr className="border-b border-gray-300 text-center">
                                <th className="py-5 text-xl font-semibold text-gray-900">
                                    Sr. No
                                </th>
                                <th className="py-5 text-xl font-semibold text-gray-900">
                                    Product Title
                                </th>
                                <th className="py-5 text-xl font-semibold text-gray-900">
                                    Image
                                </th>
                                <th className="py-5 text-xl font-semibold text-gray-900">
                                    Price
                                </th>
                                <th className="py-5 text-xl font-semibold text-gray-900">
                                    Category
                                    <div className="relative inline-block">

                                        <details ref={filterRef} className="group">

                                            <summary
                                                className="list-none cursor-pointer ps-2"
                                            >
                                                &#9660;
                                            </summary>

                                            {/* Dropdown */}
                                            <div className="absolute mt-3 w-50 border bg-gray-100 rounded-2xl shadow-xl p-4 z-50 font-semibold text-base">
                                                <div className="flex items-center justify-between mb-3">

                                                    <h2 className="font-semibold text-base text-gray-500">
                                                        Select Categories
                                                    </h2>

                                                    {/* Close Button */}
                                                    <button
                                                        type="button"
                                                        onClick={() => {

                                                            filterRef.current.removeAttribute("open")

                                                        }}
                                                        className="text-gray-500 hover:text-red-600 text-xl"
                                                    >
                                                        ✕
                                                    </button>

                                                </div>
                                                {
                                                    categories && categories.map((category) => (

                                                        <label
                                                            key={category}
                                                            className="flex items-center gap-3 py-2 cursor-pointer">
                                                            <input
                                                                type="checkbox"
                                                                checked={categoryFil.includes(category)}
                                                                onChange={() =>
                                                                    FilteredCategory(category)
                                                                }
                                                            />
                                                            <span>
                                                                {category}
                                                            </span>

                                                        </label>

                                                    ))
                                                }

                                            </div>

                                        </details>

                                    </div>
                                </th>
                                <th className="py-5 text-xl font-semibold text-gray-900">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {
                                currentProducts && currentProducts.map((data, key) => {
                                    return (
                                        <tr className="border-b border-gray-200 hover:bg-gray-50 text-center" key={data.id}>
                                            <td className="py-6 text-xl font-medium text-gray-900 ">
                                                {firstIndex + key + 1}
                                            </td>
                                            <td className="py-6 text-xl text-gray-500 ">
                                                {data.name}
                                            </td>
                                            <td className="py-6 text-xl text-gray-500">
                                                <img src={data.image} alt="No Image Found" className='mx-auto' style={{ width: 100 }} />
                                            </td>
                                            <td className="py-6 text-xl text-gray-500">
                                                $ {data.price}
                                            </td>
                                            <td className="py-6 text-xl text-gray-500">
                                                {data.category}
                                            </td>
                                            <td className="py-6 text-base">
                                                <button onClick={() => getpdid(data)} className="text-indigo-600 font-semibold hover:underline">
                                                    Edit
                                                </button>
                                                <button onClick={() => deletedb(data.id)} className="text-red-500 pl-3 font-semibold hover:underline">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            {
                                filterpd.length === 0 && (
                                    <tr>
                                        <td
                                            colSpan="6"
                                            className="py-10 text-center text-gray-400"
                                        >
                                            No Product Found
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                    <div className="flex justify-center items-center gap-3 py-8">

                        {/* Prev Button */}
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="px-4 py-2 bg-gray-200 rounded-xl disabled:opacity-50">
                            Prev
                        </button>

                        {/* Page Numbers */}
                        {
                            currentPage > 3 && (
                                <div>
                                    <button
                                        onClick={() => setCurrentPage(1)}
                                        className="px-4 py-2 rounded-xl bg-gray-200"
                                    >
                                        1
                                    </button>
                                    <span className="px-2">
                                        ...
                                    </span>
                                </div>
                            )
                        }
                        {
                            [...Array(totalPages)]
                                .slice(
                                    Math.max(currentPage - 3, 0),
                                    Math.min(currentPage + 2, totalPages)
                                )
                                .map((_, index) => {
                                    const pagenumber = Math.max(currentPage - 2, 1) + index
                                    return (
                                        <button
                                            key={pagenumber} onClick={() => setCurrentPage(pagenumber)}
                                            className={`px-4 py-2 rounded-xl transition
                                        ${currentPage === pagenumber ? "bg-indigo-600 text-white" : "bg-gray-200"}`}>
                                            {pagenumber}
                                        </button>
                                    )
                                })
                        }
                        {
                            currentPage < totalPages - 2 && (
                                <div>
                                    <span className="px-2">
                                        ...
                                    </span>
                                    <button
                                        onClick={() => setCurrentPage(totalPages)}
                                        className="px-4 py-2 rounded-xl bg-gray-200"
                                    >
                                        {totalPages}
                                    </button>
                                </div>
                            )
                        }


                        {/* Next Button */}
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="px-4 py-2 bg-gray-200 rounded-xl disabled:opacity-50">
                            Next
                        </button>

                    </div>
                </div>

            </div>
            <el-dialog>
                <dialog id="Add" ref={modalRef} aria-labelledby="dialog-title" >
                    {/* Modal Background */}
                    {
                        addproduct && (
                            <div className="fixed inset-0 bg-black/40 backdrop-blur-2xl flex items-center justify-center z-50">

                                {/* Modal */}
                                <div className="bg-[#f5f5f7] w-full max-w-3xl rounded-3xl shadow-2xl p-8 relative animate-[fadeIn_.3s_ease]">

                                    {/* Close Button */}
                                    <button onClick={() => modalRef.current.close()} className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl">
                                        ✕
                                    </button>

                                    {/* Header */}
                                    <div className="mb-8">

                                        <h2 className="text-4xl font-bold text-slate-900">
                                            Add New Product
                                        </h2>

                                        <p className="text-gray-500 mt-2 text-lg">
                                            Fill product information to add product into database.
                                        </p>

                                    </div>

                                    {/* Form */}
                                    <form className="space-y-6" onSubmit={adddb} ref={formRef}>

                                        {/* Product Title */}
                                        <div>
                                            <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                Product Title
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Enter product title"
                                                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                name='name' onChange={getchange}
                                            />
                                        </div>

                                        {/* Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            {/* Price */}
                                            <div>
                                                <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                    Price
                                                </label>

                                                <input
                                                    type="number"
                                                    placeholder="$ 0.00"
                                                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                    name='price' onChange={getchange}
                                                />
                                            </div>

                                            {/* Category */}
                                            <div>
                                                <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                    Category
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Category Name"
                                                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                    name='category' onChange={getchange}
                                                />
                                            </div>
                                        </div>

                                        {/* Image URL */}
                                        <div>
                                            <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                Product Image URL
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Paste image url"
                                                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                name='image' onChange={getchange}
                                            />
                                        </div>

                                        {
                                            addproduct.image && (
                                                <img src={addproduct.image} alt="No Image Found" className='mx-auto' style={{ width: 200 }} />
                                            )
                                        }

                                        {/* Buttons */}
                                        <div className="flex items-center justify-end gap-4 pt-4">

                                            <button
                                                type="button" onClick={clearform}
                                                className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition font-semibold"
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                type="submit"
                                                className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-300 transition"
                                            >
                                                Add Product
                                            </button>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        )
                    }
                </dialog>
            </el-dialog>

            <el-dialog>
                <dialog id="Edit" ref={editmodalRef} aria-labelledby="dialog-title" >
                    {/* Modal Background */}
                    {
                        editedpd && (
                            <div className="fixed inset-0 bg-black/40 backdrop-blur-2xl flex items-center justify-center z-50">

                                {/* Modal */}
                                <div className="bg-[#f5f5f7] w-full max-w-3xl rounded-3xl shadow-2xl p-8 relative animate-[fadeIn_.3s_ease]">

                                    {/* Close Button */}
                                    <button onClick={() => editmodalRef.current.close()} className="absolute top-5 right-5 text-gray-400 hover:text-black text-2xl">
                                        ✕
                                    </button>

                                    {/* Header */}
                                    <div className="mb-8">

                                        <h2 className="text-4xl font-bold text-slate-900">
                                            Edit Product
                                        </h2>

                                        <p className="text-gray-500 mt-2 text-lg">
                                            Edit product information to update product into database.
                                        </p>

                                    </div>

                                    {/* Form */}
                                    <form className="space-y-6" onSubmit={editdb}>

                                        {/* Product Title */}
                                        <div>
                                            <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                Product Title
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Enter product title"
                                                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                name='name' value={editedpd.name} onChange={updatededit}
                                            />
                                        </div>

                                        {/* Grid */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                            {/* Price */}
                                            <div>
                                                <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                    Price
                                                </label>

                                                <input
                                                    type="number"
                                                    placeholder="$ 0.00"
                                                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                    name='price' value={editedpd.price} onChange={updatededit}
                                                />
                                            </div>

                                            {/* Category */}
                                            <div>
                                                <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                    Category
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="Enter Category Name"
                                                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                    name='category' value={editedpd.category} onChange={updatededit}
                                                />
                                            </div>
                                        </div>

                                        {/* Image URL */}
                                        <div>
                                            <label className="block text-lg font-semibold text-slate-800 mb-2">
                                                Product Image URL
                                            </label>

                                            <input
                                                type="text"
                                                placeholder="Paste image url"
                                                className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:ring-4 focus:ring-indigo-200 text-lg transition"
                                                name='image' value={editedpd.image} onChange={updatededit}
                                            />
                                        </div>

                                        {
                                            editedpd.image && (
                                                <img src={editedpd.image} alt="No Image Found" className='mx-auto' style={{ width: 200 }} />
                                            )
                                        }

                                        {/* Buttons */}
                                        <div className="flex items-center justify-end gap-4 pt-4">

                                            <button
                                                type="button" onClick={() => editmodalRef.current.close()}
                                                className="px-6 py-3 rounded-2xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition font-semibold"
                                            >
                                                Cancel
                                            </button>

                                            <button
                                                type="submit"
                                                className="px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg shadow-indigo-300 transition"
                                            >
                                                Update Product
                                            </button>

                                        </div>

                                    </form>
                                </div>
                            </div>
                        )
                    }
                </dialog>
            </el-dialog>
        </div>
    )
}
