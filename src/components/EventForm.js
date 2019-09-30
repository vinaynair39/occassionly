import React, {Component} from 'react';
import {DateRangePicker} from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
export default class EventForm extends Component {
    constructor(props){
        super(props);
        this.formData = new FormData();
        this.state = {
            eventTitle: props.event ?  props.event.eventTitle : '',
            description: props.event ? props.event.description : '',
            imageUrl: props.event ? props.event.imageUrl: '',
            startDate: props.event ? moment(props.event.startDate) : moment(),
            endDate: props.event ? moment(props.event.endDate) : moment(),
            startTime: props.event ? props.event.startTime: '',
            endTime: props.event ? props.event.endTime: '',
            focusedInput:null,
            error: '',
            multiDayEvent: false
        }
        this.onDatesChange = this.onDatesChange.bind(this);
        this.onFocusChange = this.onFocusChange.bind(this);
        this.isMultiDayEvent = this.isMultiDayEvent.bind(this);

    }

    onTitleChange = (e) =>{
        const title = e.target.value;
        this.setState(() => ({title}));
    }
    
    onDescriptionChange = (e) =>{
        const description = e.target.value;
        this.setState(() => ({description}));
    }
    handleEditPicture = () => {
        const fileInput = document.getElementById('imageChange');
        fileInput.click();
    }
    onImageChange = (e) => {
        const image = e.target.files[0];
        this.formData.append('image', image, image.name);        
    }

    //for the calender
    onDatesChange({ startDate, endDate }) {

        this.setState(() => ({ startDate, endDate }));
    }
    
    onFocusChange = (focusedInput ) => {
        console.log(focusedInput);
        this.setState(() => ({focusedInput}));
    };

    isMultiDayEvent = () => {
        this.setState(() => ({multiDayEvent:true}))
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.title || !this.state.description) {
          this.setState(() => ({ error: 'Please provide title and content.' }));
        } else {
          this.setState(() => ({ error: '' }));
          this.formData.append('title',this.state.title );
          this.formData.append('description',this.state.description)
          this.props.onSubmit(this.formData);
        }
      };
    render(){
        return(
            <div>
                {/* {this.props.event.imageUrl && <div className="form-image-exist"><img src={this.props.event.imageUrl} alt='' /></div> }         */}
                {/* <div className="form-image">
                    <p>{this.props.event.imageUrl ? 'edit image': "add an image"}</p><input type="file" hidden="hidden" name="" id="imageChange" onChange={this.onImageChange}/>
                    <button className="button-secondary" onClick={this.handleEditPicture}>change</button> 
                </div> */}
                <form className = "form" action="" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}    
                <input type="text" 
                placeholder='Enter the title here' 
                className="form-title"
                value={this.state.title}
                onChange={this.onTitleChange}
                />
                <label>Multi-day Event?</label><input type="checkbox" onClick={this.isMultiDayEvent}/>
                <DateRangePicker
                startDate={this.state.startDate}
                startDateId="datepicker_start_home"
                endDate={this.state.endDate}
                endDateId="datepicker_end_home"                    
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={() => false} 
                />
                <textarea name="" id="" cols="30" rows="10" 
                placeholder='your content' 
                value={this.state.description}
                onChange={this.onDescriptionChange}
                ></textarea>
                <div>
                        <button>Post</button>
                </div>
            </form>
            </div>
            
        );
    }
}