import { FaRegImage, FaPlus, FaTrashCan, FaRegCircleXmark } from "react-icons/fa6";
import Header from "./Header";
import Links from "./Links";
import { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./SubmitBlog.css";
import { BiSend, BiTrash } from "react-icons/bi";

function SubmitBlog() 
{
    const [imagePreview, setImagePreview] = useState([]); // State to store the image preview
    const [dummyImage, setDummyImage] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]); // State to store the image preview
    const [value, setValue] = useState('');
    const [tags, setTags] = useState([]);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [images, setImages] = useState([]); // State to store the image
    
    const modules  = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
            [{ color: [] }, { background: [] }],
            [{ script:  "sub" }, { script:  "super" }],
            ["blockquote", "code-block"],
            [{ list:  "ordered" }, { list:  "bullet" }],
            ["link", "image", "video"],
            ["clean"],
        ],
    };
    
    const handleTags = () => {
        content !== '' && setTags([...tags, content]);
        setContent('');
    }
    
    // Function to handle the change of picture
    const handlePictureChange = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            setImagePreview([reader.result, ...imagePreview]);
            setDummyImage([...dummyImage.slice(0, dummyImage.length - 1)]);
            setImages([e.target.files[0], ...images]);
        }
    }    
    
  return (
    <div className='overflow-hidden'>
       <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:pl-[100px]">
            <Links link='Profile Send Post' />
            <Header />
            
            {/* Creating own form for taking a data from user */}
            <div className="form-container mt-12" style={{ fontSize : "15px" }}>
                <div className="func-desc font-medium" style={{ color : "#6e6565",  }}>Send Post</div>
                
                {/* Creating flexbox for input elements */}
                <div className="flex mt-12 w-100 gap-8 flex-wrap">
                    <div className="input-container flex flex-col gap-3" style={{ flex : "1 1 300px" }}>
                        <label htmlFor="title" className="font-medium">Title</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="rounded-lg" style={{ background : "#f5f5f5", outline : "none", padding : "10px 12px" }} required />
                    </div>
                    <div className="input-container flex flex-col gap-3 relative" style={{ flex : "1 1 300px" }}>
                    <div className="add-button" onClick={handleTags} style={{
                            fontSize : "14px",
                            fontWeight : "600",
                            padding : "10px",
                            border : "1px solid #1A6486",
                            width : "fit-content",
                            borderRadius : "10px",
                            color : "#1A6486",
                            position : "absolute",
                            right : "3px" ,
                            bottom : "3px",
                            cursor : "pointer"
                        }}><FaPlus /></div>
                        <label htmlFor="tags" className="font-medium">Add Tags</label>
                        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} className="rounded-lg" style={{ background : "#f5f5f5", outline : "none", padding : "10px 12px" }} required />
                    </div>
                </div>
                
                <div className="tags mt-5 flex items-center flex-wrap gap-3 font-medium text-cyan-600" >
                    {
                        tags.length > 0 && tags.map( (tag, index) => (
                            <div key={index} className="tag flex justify-center items-center gap-2 border-2 py-1 px-3 rounded-full border-cyan-600">
                                <div>{tag}</div>
                                <FaRegCircleXmark className="cursor-pointer font-semibold"
                                    onClick = {() => setTags(tags.filter((tag, i) => i !== index))}
                                />
                            </div>
                    ))
                    }
                </div>
                
                {/* Creating component for Explaination */}
                <div className="explaination">
                <div className="font-medium mb-4 mt-8" style={{ color : "#000", width : "100%" }}>Explaination</div>
                        <ReactQuill 
                            modules={modules}
                            theme="snow" 
                            value={value} 
                            onChange={(value) => setValue(value)}
                            style={{ height : "100%", width : "100%" }}
                           
                        />
                </div>
                
                {/* Creating component for Image Gallery */}
                <div className="image-gallery-container mt-8">
                    <div className="font-medium mb-4" style={{ color : "#000" }}>Image Gallery</div>
                    <div className="flex gap-12 p-6 rounded-md justify-between items-center flex-wrap p-2 bg-white shadow-lg">
                            <div className="drag-drop relative rounded-md" style={{ 
                                height : "20rem",
                                padding : "1rem",
                                textAlign : "center",
                                background : "#f5f5f5", 
                                flex : "1 1 18rem"
                            }}>
                                <div className="round" style={{
                                    position : "absolute",
                                    width : "100%",
                                    top :  0, left : 0,
                                    height : "100%",
                                    overflow : "hidden",
                                    border : "2px dashed #e1e1e1",
                                    borderRadius : "10px",
                                    display : "flex",
                                    justifyContent : "center",
                                    alignItems : "center",
                                    color : "#c7c4c4"
                                }}>
                                    <input type="file" name="imageGalleryPictures" id="imageGalleryPictures" style={{
                                        position : "absolute",
                                        transform : "scale(12)",
                                        opacity : "0",
                                        cursor : "pointer"
                                    }}
                                    onChange={handlePictureChange}
                                     />
                                    <div className="flex flex-col justify-center items-center gap-5">
                                        <FaRegImage style={{ fontSize : "4.5rem" }} />
                                        <p className="text-sm">Drag image here, paste or</p>
                                        <button className="flex justify-center items-center font-medium rounded-md gap-1 py-1 px-3 border mt-3" style={{
                                            borderColor : "#1A6486",
                                            color : "#1A6486",
                                        }}><FaPlus /> Select</button>
                                    </div>
                                </div>
                            </div>
                        <div className="image-gallery" style={{
                            width : "100%",
                            display : "grid",
                            gridTemplateColumns : "repeat(auto-fit, minmax(7rem, 1fr))",
                            gap : "1rem",
                            flex : "1 1 40rem"
                        }}>
                            {
                                imagePreview.length > 0 && imagePreview.map( (image, index) => (
                                    <div key={index} className=
                                    {`group img-box relative `}
                                     style={{ height : "8rem" }} onClick={() => {
                                            setImagePreview(imagePreview.filter((data, i) => i !== index));
                                            dummyImage.length < 10 && setDummyImage([1, ...dummyImage]);
                                            setImages(images.filter((data, i) => i !== index));
                                        }}>
                                        <img src= {image} className="
                                        transition-all group-hover:blur-[1px] group-hover:brightness-75 group-hover:cursor-pointer rounded-md
                                        " alt={"image" + index} style={{ width : "100%", height : "100%", objectFit : "cover" }} />
                                        <FaTrashCan className="cursor-pointer delete-icon group-hover:block hidden text-3xl text-white absolute" style={{ top : "40%", left : "40%" }}  />   
                                    </div>
                                ))
                            }
                        
                            {
                                dummyImage.length > 0 &&
                                dummyImage.map( (data, index) => (
                                    <div key={index} className="rounded-md p-1" style={{ background : "#f5f5f5", height : "8rem" }}>
                                        <div className="flex justify-center items-center w-full h-full" style={{ border : "2px dashed #e1e1e1" }}>
                                            <FaRegImage style={{ fontSize : "2rem", color : "#c7c4c4" }} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                
                {/* Creating send and reset button for our page */}
                <div className="mt-5  flex gap-5 w-full justify-between items-center">
                    <div 
                        className="bg-[#1A6486] shadow-sm flex transition-all justify-center gap-1 items-center rounded-md p-2 text-white font-medium text-[1rem] hover:bg-[#F5F5F5] hover:cursor-pointer hover:text-[#1A6486] send w-full text-center"
                        onClick={() => {
                            console.log('Title : ', title);
                            console.log('Tags : ', tags);
                            console.log('Body : ', value);
                            console.log('Image : ', images);
                        }}
                    >
                            <div>Send</div>
                            <BiSend className="mt-[1px]" />
                    </div>
                    <div  
                        className="bg-[#F5F5F5] shadow-sm flex transition-all justify-center gap-1 items-center rounded-md p-2 text-[#1A6486] font-medium text-[1rem] hover:bg-[#1A6486] hover:cursor-pointer hover:text-white delete w-full text-center"
                        onClick={() => {
                            setDummyImage([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
                            setContent('');
                            setImagePreview([]);
                            
                            setTitle('');
                            setTags([]);
                            setValue('');
                            setImages([]);
                        }}
                    >
                            <div>Delete</div>
                            <BiTrash className="mt-[1px]" />
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default SubmitBlog;