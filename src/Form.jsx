import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [bio, setBio] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  return (
    <>
      {!isSubmitted ? (
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="first__Name">
              <label>
                <div>First Name:</div>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  disabled={isSubmitting}
                  required
                />
              </label>
            </div>
            <div className="last__name">
              <label>
                <div>Last Name:</div>
                <input
                  type="text"
                  value={lastName}
                  onChange={handleLastNameChange}
                  disabled={isSubmitting}
                  required
                />
              </label>
            </div>
            <div className="mail">
              <label>
                <div>Email:</div>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  disabled={isSubmitting}
                  required
                />
              </label>
            </div>
            <div className="gender">
              <div>Gender:</div>
              <div onChange={handleGenderChange} className="radio" >
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="Male"
                      checked={gender === "Male"}
                      disabled={isSubmitting}
                      required
                    />
                    &#160;Male
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="Female"
                      checked={gender === "Female"}
                      disabled={isSubmitting}
                    />
                  </label>
                  &#160;Female
                </div>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      id="other"
                      value="Other"
                      checked={gender === "Other"}
                      disabled={isSubmitting}
                    />
                  </label>
                  &#160;Other
                </div>
              </div>
            </div>
            <div className="address">
              <div>Address:</div>
              <input
                type="text"
                name="address"
                id="address"
                value={address}
                onChange={handleAddressChange}
                disabled={isSubmitting}
                required
              />
            </div>
            <div>
              <div>Bio:</div>
              <textarea
                className="bio"
                type="text"
                value={bio}
                onChange={handleBioChange}
                disabled={isSubmitting}
                required
              />
            </div>
            {isSubmitting && <div>Submitting..</div>}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="form__Details">
          <h1>My Profile</h1>
          <div>
            <h3>Name: </h3>
            <p>
              {name} {lastName}
            </p>
          </div>

          <div>
            <h3>Email: </h3>
            <p>{email}</p>
          </div>

          <div>
            <h3>Gender: </h3>
            <p>{gender}</p>
          </div>


          <div>
            <h3>Address: </h3>
            <p>{address}</p>
          </div>

          <div>
            <h3>Bio: </h3>
            <p>{bio}</p>
          </div>

          <form>
            <button type="submit">Back</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;