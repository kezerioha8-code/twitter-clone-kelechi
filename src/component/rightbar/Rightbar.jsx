import "./rightbar.css"
import { Users } from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar({ profile }) {
    const HomeRightbar = () => {
        return (
            <>
            <div className="birthdayContainer">
                <img className="birthdayImg" src="assests/gifts.png" alt="" />
                <span className="birthdayText">
                    <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                </span>
                </div>
                <img className="rightbarAd" src="assests/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
                </>
            
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">city</span>
                    <span className="rightbarInfoValue">new york</span>
                    </div>
                     <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">from</span>
                    <span className="rightbarInfoValue">madrid</span>
                    </div>
                     <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship</span>
                    <span className="rightbarInfoValue">Single</span>
                    </div>
                     <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">User friends</span>
                    <span className="rightbarInfoValue">new york</span>
                    </div>
