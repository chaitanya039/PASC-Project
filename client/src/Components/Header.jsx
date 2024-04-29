import { FaUserPen } from "react-icons/fa6";
import headerImg from "../Images/header-image.jpeg";
import profileImg from "../Images/header-profile-image.jpeg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Box mt-5 p-3 rounded-md" style={{ background : "#F5F5F5" }}>
        <div className="image-container" style={{ 
            width : "100%",
            height : "150px",
         }}>
            <img className="rounded-md" src={headerImg} style={{ width : "100%", height : "100%", objectFit : "cover" }} alt="" />
        </div>
        <div className="content mt-4 flex justify-between flex-wrap items-center font-medium" style={{ 
            fontSize : "14px",
            
        }}>
            <div className="profile flex justify-center items-center gap-3">
                <img src={profileImg} className="rounded-md" style={{ width : "4rem", height : "4rem" }} alt="Profile Image" />
                <div className="name">Louis Hoebregts</div>
            </div>
            <div className="send-post-container flex justify-center items-center gap-5">
                <div className="send-post">Send Post</div>
                <div>Posts</div>
            </div>
            <div className="edit-profile-button flex justify-center items-center rounded-md gap-2 py-1 px-3 border" style={{
                borderColor : "#1A6486",
                color : "#1A6486"
            }}>
                <FaUserPen />
                Edit Profile
            </div>
        </div>
    </div>
  )
}

export default Header