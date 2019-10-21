import React, {useState} from 'react';
import {connect} from 'react-redux';
import {startAddUserDetails, startAddUserImage} from '../actions/user';
export const EditUserDetails = ({user, addUserDetails, addUserImage}) => {

    const [name, setName] = useState(user.name);
    const [college, setCollege] = useState(user.college);
    const [year, setYear] = useState(user.year);
    const [contact_no, setContact] = useState(user.contact_no);
    const [imageUrl, setImageUrl] = useState(user.imageUrl)
    const onSubmit = (e) => {
        e.preventDefault();
        const details = {
            name,
            college,
            year: year.toString(),
            contact_no
        }
        console.log(details);       
        addUserDetails(details);
    }
    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageChange');
        fileInput.click();
    }

    const onImageChange = (e) => {
        const image = e.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        console.log(1234)
        addUserImage(formData).then(data => setImageUrl(data))
        
    }
    return(
        <div className="edit-user">
            <div className="edit-user__image">
                <img src={imageUrl || user.imageURL} alt=""/>   
                <input type="file" hidden="hidden" name="" id="imageChange" onChange={onImageChange}/>
                <button className="btn third" onClick={handleEditPicture}>Change Image</button>
            </div>
            <div className="edit-user__contents">
                <form onSubmit={onSubmit}>
                    <div className="edit-user__userHandle">
                        <h3>{user.handle}</h3>
                    </div>
                    <div className="edit-user__contents-data">
                        <div className="edit-user__contents-data-flex">
                           <h5>Name:</h5><input type="text" value={name || user.name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="edit-user__contents-data-flex">
                            <h5>college:</h5><input type="text"  value={college || user.college} onChange={(e) => setCollege(e.target.value)}/>
                        </div>
                        <div className="edit-user__contents-data-flex">
                            <h5>year:</h5><input type="number" value={year || user.year} onChange={(e) => setYear(e.target.value)}/>
                        </div>
                        <div className="edit-user__contents-data-flex">
                            <h5>Number:</h5><input type="text"  value={contact_no || user.contact_no} onChange={(e) => setContact(e.target.value)}/>
                        </div>
                    </div>
                    <button type="submit" className="button button-primary button-submit">submit</button>    
                </form>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
    addUserDetails: (details) => dispatch(startAddUserDetails(details)),
    addUserImage: (formData) => dispatch(startAddUserImage(formData))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditUserDetails);