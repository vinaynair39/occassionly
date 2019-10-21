import React, { useState , useEffect} from 'react';
import { DateRangePicker, SingleDatePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import TimePicker from 'rc-time-picker';
const EventForm = (props) => {
    const [eventName, onEventNameChange] = useState(props.event ? props.event.eventName : '');
    const [description, onDescriptionChange] = useState(props.event ? props.event.description : '');
    const [imageUrl, onImageUrlChange] = useState(props.event ? props.event.imageUrl : '');
    const [startDate, onStartDateChange] = useState(props.event ? moment(props.event.startDate, 'LL') : moment());
    const [endDate, onEndDateChange] = useState(props.event ? moment(props.event.endDate, 'LL') : moment());
    const [startTime, onStartTimeChange] = useState(props.event ? moment(props.event.startTime, 'LT') : moment());
    const [endTime, onEndTimeChange] = useState(props.event ? moment(props.event.endTime, 'LT') : moment());
    const [location, onLocationChange] = useState(props.event ? props.event.location : '');
    const [fee, onFeeChange] = useState(props.event ? props.event.fee : '');
    const [focusedInput, onFocusedInputChange] = useState(null);
    const [calendarFocused, onCalendarFocusedChange] = useState(false);
    const [error, onErrorChange] = useState('');
    const [toggle, toggler] = useState(false);
    const [image, onImage] = useState();
    const [multiDayEvent, onMultiDayEventChange] = useState('');
    const formData = new FormData();

    const onTitleChange = (e) => {
        onEventNameChange(e.target.value);
    }

    const handleLocationChange = (e) => {
        onLocationChange(e.target.value)
    }
    const handleFeeChange = (e) => {
        const fees = e.target.value;
        if (!fees || fees.match(/^\d{1,}(\.\d{0,2})?$/)) {
            onFeeChange(fees)
        }
    }

    const handleDescriptionChange = (e) => {
        const description = e.target.value;
        onDescriptionChange(description);
    }

    const handleStartTimeChange = startTime => {
        onStartTimeChange(startTime);
        console.log(startTime);
    };

    const handleEndTimeChange = endTime => {
        onEndTimeChange(endTime);
        console.log(endTime);

    };

    const handleEditPicture = () => {
        const fileInput = document.getElementById('imageChange');
        fileInput.click();
    }
    const onImageChange = (e) => {
        onImage(e.target.files[0]);
        const url = URL.createObjectURL(e.target.files[0]);
        onImageUrlChange(url);
        console.log(!!image);

    }

    //for DateRangePicker
    const handleDatesChange = ({ startDate, endDate }) => {
        onStartDateChange(startDate);
        onEndDateChange(endDate);
    }

    const handleMultiFocusChange = (focusedInput) => {
        onFocusedInputChange(focusedInput);
    };

    // for singleDatePicker
    const handleDateChange = (startDate) => {
        onStartDateChange(startDate);
        onEndDateChange(startDate);
    };
    const handleFocusChange = ({ focused }) => {
        onCalendarFocusedChange(focused);
    };

    const isMultiDayEvent = () => {
        onMultiDayEventChange(!multiDayEvent);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!eventName) {
            onErrorChange('Please provide the Event name.');
        } 
        else if(!description) {
            onErrorChange('Please provide the description.');
        } 
        else if(!location) {
            onErrorChange('Please provide the venue.');
        } 
        else if(!fee) {
            onErrorChange('Please provide the fee.');
        } 

        else{
            onErrorChange('');
            const check = {
                eventName,
                description,
                startDate: startDate.format("LL"),
                endDate:endDate.format("LL"),
                startTime:startTime.format("LT"),
                endTime:endTime.format("LT"),
                fee,
                location
            }
            formData.append('eventName', eventName);
            formData.append('description',description)
            formData.append('startDate',startDate.format("LL"));
            formData.append('endDate', endDate.format("LL"))
            formData.append('startTime', startTime.format("LT"));
            formData.append('endTime', endTime.format("LT"))
            formData.append('fee', fee);
            formData.append('location', location);
            console.log(!!image);
            !!image && formData.append('image', image, image.name);
            console.log(check)
            props.onSubmit(formData);
        }
    };
    return (
        <div className="form">
            <div className="form-image">
                {props.event ? <div className="form-image-exist"><img src={imageUrl || props.event.imageUrl} alt='' /></div> : (imageUrl ? <img src={imageUrl} alt="" /> : <img src='images/empty.jpg' alt=''/>)}
                <input type="file" hidden="hidden" name="" id="imageChange" onChange={onImageChange} />
                <button className="btn third" onClick={handleEditPicture}>{props.event ? 'edit image' : "add image"}</button>
            </div>
            <form action="" onSubmit={onSubmit}>
                {error && <p className="form__error">{error}</p>}
                <div className="form-content__main">
                    <input type="text"
                        placeholder='Enter the title here'
                        className="form-title"
                        value={eventName}
                        onChange={onTitleChange}
                    />
                    <textarea
                        placeholder='A description for your event'
                        className="form-description"
                        value={description}
                        onChange={handleDescriptionChange}>
                    </textarea>
                    <div className="form-content__others">
                        <div className="form-content__others-others">
                            <div className="form-venue">
                                <label>Venue:</label>
                                <input type="text"
                                    className=""
                                    value={location}
                                    onChange={handleLocationChange}
                                />
                            </div>
                            <div className="form-fees">
                                <label>Fees:</label>
                                <div className="form-fees__icon">
                                    <input type="text"
                                        value={fee}
                                        onChange={handleFeeChange}
                                    />
                                    {/* <FontAwesomeIcon className="icon" icon={faRupeeSign} /> */}
                                </div>
                            </div>
                            <div className="form-time">
                                <label>Time:</label>
                                <TimePicker onChange={handleStartTimeChange} showSecond={false} format={'h:mm a'} use12Hours inputReadOnly value={startTime ? startTime : moment()} />
                                <label className="to">to</label>
                                <TimePicker onChange={handleEndTimeChange} showSecond={false} format={'h:mm a'} use12Hours inputReadOnly value={endTime ? endTime : moment()} />

                            </div>
                        </div>
                        <div className="form-content__checkbox">
                            <div><input type="checkbox" onClick={isMultiDayEvent} /><label>Multi-day Event?</label></div>
                            <div className="form-content__checkbox-calendar">
                                {multiDayEvent ? (
                                    <DateRangePicker
                                        startDate={startDate}
                                        startDateId="datepicker_start_home"
                                        endDate={endDate}
                                        endDateId="datepicker_end_home"
                                        onDatesChange={handleDatesChange}
                                        focusedInput={focusedInput}
                                        onFocusChange={handleMultiFocusChange}
                                        numberOfMonths={1}
                                        displayFormat={() => "DD/MM/YYYY"}
                                        isOutsideRange={() => false}
                                    />)
                                    :
                                    (
                                        <SingleDatePicker
                                            date={startDate}
                                            onDateChange={handleDateChange}
                                            focused={calendarFocused}
                                            onFocusChange={handleFocusChange}
                                            numberOfMonths={1}
                                            displayFormat={() => "DD/MM/YYYY"}
                                            isOutsideRange={() => false}
                                        />
                                    )
                                }

                            </div>
                        </div>
                    </div>
                    <button type="submit" className="button button-primary button-submit">Post</button>

                </div>
            </form>
        </div>

    );
}

export default EventForm;