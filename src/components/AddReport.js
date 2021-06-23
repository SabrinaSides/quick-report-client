import React, { Component } from 'react';
import ReportContext from '../ReportContext';
import config from '../config';
import '../styles/AddReport.css';
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";

class AddReport extends Component {
  state = {
    room_number: '',
    pt_initials: '',
    age: '',
    gender: '',
    diagnosis: '',
    allergies: '',
    code_status: '',
    a_o: '',
    pupils: '',
    other_neuro: '',
    heart_rhythm: '',
    bp: '',
    edema: '',
    other_cardiac: '',
    lung_sounds: '',
    oxygen: '',
    other_resp: '',
    last_bm: '',
    gu: '',
    other_gi_gu: '',
    skin: '',
    iv_access: '',
    additional_report: '',
    user_id: 1,
  };

  static contextType = ReportContext;

  static defaultProps = {
    history: {
      goBack: () => {},
    },
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  // handleChangeCalendar = (selected) => {
  //   this.setState({
  //     last_bm: selected
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault();
    const {
      room_number,
      pt_initials,
      diagnosis,
      allergies,
      age,
      gender,
      code_status,
      a_o,
      pupils,
      other_neuro,
      heart_rhythm,
      bp,
      edema,
      other_cardiac,
      lung_sounds,
      oxygen,
      other_resp,
      last_bm,
      gu,
      other_gi_gu,
      skin,
      iv_access,
      additional_report,
      user_id,
    } = this.state;
    const newReport = {
      room_number,
      pt_initials,
      diagnosis,
      allergies,
      age,
      gender,
      code_status,
      a_o,
      pupils,
      other_neuro,
      heart_rhythm,
      bp,
      edema,
      other_cardiac,
      lung_sounds,
      oxygen,
      other_resp,
      last_bm,
      gu,
      other_gi_gu,
      skin,
      iv_access,
      additional_report,
      user_id,
    };

    const options = {
      method: 'POST',
      body: JSON.stringify(newReport),
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(`${config.API_ENDPOINT}/reports`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(() => {
        this.props.history.goBack();
        this.context.fetchData();
      })
      .catch((error) => {
        this.setState({
          error,
        });
      });
  };

  render() {
    return (
      <div className='full-report-container'>
        <div className='add-edit-tab'>
          <h3>Add Report</h3>
        </div>
        <div className='folder-body'>
          <form onSubmit={this.handleSubmit}>
            <h3>Patient Info</h3>
            <label htmlFor='room_number'>Room Number: (required)</label>
            <input
              type='text'
              name='room_number'
              id='room_number'
              maxLength='8'
              value={this.state.room_number}
              onChange={this.handleChange}
              required
            />

            <label htmlFor='pt_initials'>Patient Initials: (required)</label>
            <input
              type='text'
              name='pt_initials'
              id='pt_initials'
              maxLength='3'
              value={this.state.pt_initials}
              onChange={this.handleChange}
              required
            />

            <label htmlFor='age'>Age:</label>
            <input
              type='text'
              name='age'
              id='age'
              value={this.state.age}
              onChange={this.handleChange}
            />

            <label htmlFor='gender'>Gender:</label>
            <select
              id='gender'
              name='gender'
              value={this.state.gender}
              onChange={this.handleChange}
            >
              <option value=''>---</option>
              <option value='male' defaultValue>
                Male
              </option>
              <option value='female'>Female</option>
              <option value='non-conforming'>Gender Non-conforming</option>
            </select>

            <label htmlFor='diagnosis'>Diagnosis:</label>
            <input
              type='text'
              name='diagnosis'
              id='diagnosis'
              value={this.state.diagnosis}
              onChange={this.handleChange}
            />

            <label htmlFor='code_status'>Code Status:</label>
            <select
              id='code_status'
              name='code_status'
              value={this.state.code_status}
              onChange={this.handleChange}
            >
              <option value=''>---</option>
              <option value='full-code' defaultValue>
                Full Code
              </option>
              <option value='DNR'>DNR</option>
              <option value='comfort-care'>Comfort Care</option>
            </select>

            <label htmlFor='allergies'>Allergies:</label>
            <input
              type='text'
              name='allergies'
              id='allergies'
              value={this.state.allergies}
              onChange={this.handleChange}
            />

            <h3>Neuro</h3>

            <label htmlFor='a_o'>Alert and Oriented:</label>
            <select
              id='a_o'
              name='a_o'
              value={this.state.a_o}
              onChange={this.handleChange}
            >
              <option value=''>---</option>
              <option value='x4'>x4</option>
              <option value='x3'>x3</option>
              <option value='x2'>x2</option>
              <option value='x1'>x1</option>
              <option value='x0'>x0</option>
            </select>

            <label htmlFor='pupils'>Pupils:</label>
            <select
              id='pupils'
              name='pupils'
              value={this.state.pupils}
              onChange={this.handleChange}
            >
              <option value=''>---</option>
              <option value='PERRLA' defaultValue>
                PERRLA
              </option>
              <option value='sluggish'>Sluggish</option>
              <option value='fixed'>Fixed</option>
              <option value='unequal'>Unequal</option>
            </select>

            <label htmlFor='other_neuro'>Other Neuro:</label>
            <input
              type='text'
              name='other_neuro'
              id='other_neuro'
              value={this.state.other_neuro}
              onChange={this.handleChange}
            />

            <h3>Cardiac</h3>
            <label htmlFor='heart_rhythm'>Rhythm:</label>
            <input
              type='text'
              name='heart_rhythm'
              id='heart_rhythm'
              value={this.state.heart_rhythm}
              onChange={this.handleChange}
            />

            <label htmlFor='bp'>BP:</label>
            <input
              type='text'
              name='bp'
              id='bp'
              value={this.state.bp}
              onChange={this.handleChange}
            />

            <label htmlFor='edema'>Edema:</label>
            <input
              type='text'
              name='edema'
              id='edema'
              value={this.state.edema}
              onChange={this.handleChange}
            />

            <label htmlFor='other_cardiac'>Other Cardiac:</label>
            <input
              type='text'
              name='other_cardiac'
              id='other_cardiac'
              value={this.state.other_cardiac}
              onChange={this.handleChange}
            />

            <h3>Respiratory</h3>
            <label htmlFor='lung_sounds'>Lung Sounds:</label>
            <input
              type='text'
              name='lung_sounds'
              id='lung_sounds'
              value={this.state.lung_sounds}
              onChange={this.handleChange}
            />

            <label htmlFor='oxygen'>Oxygen:</label>
            <input
              type='text'
              name='oxygen'
              id='oxygen'
              value={this.state.oxygen}
              onChange={this.handleChange}
            />

            <label htmlFor='other_resp'>Other Respiratory:</label>
            <input
              type='text'
              name='other_resp'
              id='other_resp'
              value={this.state.other_resp}
              onChange={this.handleChange}
            />

            <h3>GI/GU</h3>
            <label htmlFor='last_bm'>Last BM:</label>
            {/* <DatePicker selected={this.state.last_bm} onChange={this.handleChangeCalendar} /> */}
            <input
              type='text'
              name='last_bm'
              id='last_bm'
              value={this.state.last_bm}
              onChange={this.handleChange}
            />

            <label htmlFor='gu'>Genitourinary (GU):</label>
            <input
              type='text'
              name='gu'
              id='gu'
              value={this.state.gu}
              onChange={this.handleChange}
            />

            <label htmlFor='other_gi_gu'>Other GI/GU:</label>
            <input
              type='text'
              name='other_gi_gu'
              id='other_gi_gu'
              value={this.state.other_gi_gu}
              onChange={this.handleChange}
            />

            <h3>Other</h3>
            <label htmlFor='skin'>Skin:</label>
            <input
              type='text'
              name='skin'
              id='skin'
              value={this.state.skin}
              onChange={this.handleChange}
            />

            <label htmlFor='iv_access'>IV Access:</label>
            <input
              type='text'
              name='iv_access'
              id='iv_access'
              value={this.state.iv_access}
              onChange={this.handleChange}
            />

            <label htmlFor='additional_report'>Additional Report:</label>
            <input
              type='text'
              name='additional_report'
              id='additional_report'
              value={this.state.additional_report}
              onChange={this.handleChange}
            />
            <div className='submit-cancel-btns'>
              <button type='submit' className='submit-btn'>
                Submit
              </button>
              <button
                className='cancel-btn'
                onClick={() => this.props.history.push('/reports')}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default AddReport;
