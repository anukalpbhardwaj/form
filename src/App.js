import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"", country:"India",
    streetAddress:"", city:"", state:"", postalCode:"",
    comments:false, candidates:false, offers:false, pushNotifications:""
  })

  const [submittedData, setSubmittedData] = useState(null);
  

  function changeHandler(event) {
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) );
  }

  function submitHandler(event) {
    event.preventDefault();

    console.log("Finally printing the value of Form Data:" , formData);
    
    setSubmittedData(formData);
   
  }
 

  return (
   <div className=" flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
    
    <div className="max-w-2xl w-full p-6 border border-gray-300 rounded-lg shadow-md bg-white">
    <div className="flex flex-wrap gap-6">
    <form onSubmit={submitHandler}>

<label htmlFor="firstName">First name</label>
<br/>
<input
  type="text"
  name="firstName"
  id="firstName"
  placeholder="Anukalp"
  value={formData.firstName}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<label htmlFor="lastName">Last name</label>
<br/>
<input
  type="text"
  name="lastName"
  id="lastName"
  placeholder="Bhardwaj"
  value={formData.lastName}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<label htmlFor="email">Email Address</label>
<br/>
<input
  type="email"
  name="email"
  id="email"
  placeholder="anukalpbhardwaj653@gmail.com"
  value={formData.email}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<label htmlFor="country">Country</label>
<br/>
<select
  id="country"
  name="country"
  value={formData.country}
  onChange={changeHandler}
  className="outline"
  >

  <option>India</option>
  <option>United States</option>
  <option>Canada</option>
  <option>Mexico</option>
</select>

<br/>
<label htmlFor="streetAddress">Street Address</label>
<br/>
<input
  type="text"
  name="streetAddress"
  id="streetAddress"
  placeholder="B-25C"
  value={formData.streetAddress}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<label htmlFor="city">City</label>
<br/>
<input
  type="text"
  name="city"
  id="city"
  placeholder="B-25C"
  value={formData.city}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<label htmlFor="state">State / Province</label>
<br/>
<input
  type="text"
  name="state"
  id="state"
  placeholder="Bihar"
  value={formData.state}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<label htmlFor="postalCode">Postal Code</label>
<br/>
<input
  type="text"
  name="postalCode"
  id="postalCode"
  placeholder="110077"
  value={formData.postalCode}
  onChange={changeHandler}
  className="outline"
/>

<br/>
<br/>
<fieldset>
  <legend>By Email</legend>

  <div className="flex">
  <input
    id="comments"
    name="comments"
    type="checkbox"
    checked={formData.comments}
    onChange={changeHandler}
  />
  <div>
    <label htmlFor="comments">Comments</label>
    <p>Get notified when someones posts a comment on a posting.</p>
  </div>
  </div>

  <div className="flex">
  <input
    id="candidates"
    name="candidates"
    type="checkbox"
    checked={formData.candidates}
    onChange={changeHandler}
  />
  <div>
    <label htmlFor="candidates">Candidates</label>
    <p>Get notified when a candidate applies for a job.</p>
  </div>
  </div>

  <div className="flex">
  <input
    id="offers"
    name="offers"
    type="checkbox"
    checked={formData.offers}
    onChange={changeHandler}
  />
  <div>
    <label htmlFor="offers">Offers</label>
    <p>Get notified when a candidate accepts or rejects an offer.

</p>
  </div>
  </div>
  


</fieldset>

<br/>
<br/>
<fieldset>
  <legend>Push Notifications</legend>
  <p>These are delivered via SMS to your mobile phone.</p>

  <input
    type="radio"
    id="pushEverything"
    name="pushNotifications"
    value="Everything"
    onChange={changeHandler}
  />

  <label htmlFor="pushEverything">Everything</label>

  <br/>
  <input
    type="radio"
    id="pushEmail"
    name="pushNotifications"
    value="Same as email"
    onChange={changeHandler}
  />

  <label htmlFor="pushEmail">Same as email</label>

  <br/>
  <input
    type="radio"
    id="pushNothing"
    name="pushNotifications"
    value="No Push Notifications"
    onChange={changeHandler}
  />

  <label htmlFor="pushNothing">No Push Notifications</label>

</fieldset>



<button
className="bg-blue-500 text-white font-bold rounded py-2 px-4"
>Save</button>






</form>
 {submittedData && (
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <div className="p-4 border border-green-300 rounded-md bg-green-50">
              <h2 className="text-lg font-semibold text-green-700">Submitted Data</h2>
              <p><strong>First Name:</strong> {submittedData.firstName}</p>
              <p><strong>Last Name:</strong> {submittedData.lastName}</p>
              <p><strong>Email:</strong> {submittedData.email}</p>
              <p><strong>Country:</strong> {submittedData.country}</p>
              <p><strong>Street Address:</strong> {submittedData.streetAddress}</p>
              <p><strong>City:</strong> {submittedData.city}</p>
              <p><strong>State:</strong> {submittedData.state}</p>
              <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
              <p><strong>Comments:</strong> {submittedData.comments ? 'Yes' : 'No'}</p>
              <p><strong>Candidates:</strong> {submittedData.candidates ? 'Yes' : 'No'}</p>
              <p><strong>Offers:</strong> {submittedData.offers ? 'Yes' : 'No'}</p>
              <p><strong>Push Notifications:</strong> {submittedData.pushNotifications}</p>
            </div>
          </div>
        )}
    </div>

    </div>
   </div>
  );
}

export default App;

