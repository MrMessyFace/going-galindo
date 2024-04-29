import React, { useState } from "react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rsvpStatus: "attending",
    foodIssue: "",
  });
  const [searchName, setSearchName] = useState("");
  const [searchSecondName, setSearchSecondName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [searchInputBorderColor, setSearchInputBorderColor] = useState("none");
  const [searchButtonColor, setSearchButtonColor] = useState("lightgray");
  const [searchButtonTextColor, setSearchButtonTextColor] = useState("white");
  const [searchButtonCursor, setSearchButtonCursor] = useState("cursor");

  // Guest data
  const guestData = [
    { id: 1, name: "Will Christophersen" },
    { id: 2, name: "Dustin Goeken" },
    { id: 3, name: "Jacey Christophersen" },
    { id: 4, name: "Shelby Allen" },
    // Add more guest data as needed
  ];

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
    setSearchSecondName(e.target.value);
    setSearchInputBorderColor(e.target.value.trim() ? "none" : "1px solid red");
    setSearchButtonColor(e.target.value.trim() ? "#ffe699" : "lightgray");
    setSearchButtonTextColor(e.target.value.trim() ? "#1c4835" : "white");
    setSearchButtonCursor(e.target.value.trim() ? "pointer" : "cursor");
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const results = guestData.filter((guest) =>
      guest.name.toLowerCase().includes(searchName.toLowerCase())
    );
    setSearchResults(results);
  };

  const handleSelectGuest = (guestId) => {
    const selectedGuestData = guestData.find((guest) => guest.id === guestId);
    setSelectedGuest(selectedGuestData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to send the updated RSVP status via email
    const emailContent = `
      Name: ${selectedGuest.name}
      RSVP Status: ${formData.rsvpStatus}
      Food Issues: ${formData.foodIssue}
    `;
    console.log(emailContent); // Log email content (replace with actual email sending logic)
    setSubmitted(true);
  };

  return (
    <div>
      <div className="rsvp-section">
        <h1>Kelsey and Jessie's Wedding</h1>
        <br></br>
        {submitted ? (
          <div>
            <h2>Thank you for your RSVP!</h2>
            <p>We look forward to seeing you at the event.</p>
          </div>
        ) : (
          <div>
            {!selectedGuest && searchResults.length === 0 && (
              <div className="guest-search">
                <p>RSVPs must be submitted individually.</p>
                <br></br>
                <input
                  type="text"
                  value={searchName}
                  onChange={handleSearchChange}
                  placeholder="Full Name"
                  style={{ border: searchInputBorderColor }}
                  required
                />
                <button
                  style={{
                    backgroundColor: searchButtonColor,
                    color: searchButtonTextColor,
                    cursor: searchButtonCursor,
                  }}
                  onClick={handleSearchSubmit}
                  disabled={!searchName.trim()}
                >
                  FIND YOUR INVITATION
                </button>
              </div>
            )}
            {!selectedGuest && searchResults.length > 0 && (
              <div className="guest-list">
                <h3>Select Your Name</h3>
                <br></br>
                <ul>
                  {searchResults.map((guest) => (
                    <li
                      key={guest.id}
                      onClick={() => handleSelectGuest(guest.id)}
                    >
                      {guest.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedGuest && (
              <div className="selected-guest">
                <form onSubmit={handleSubmit}>
                  <h2>
                    {selectedGuest.name}, we cordially invite you to attend our
                    wedding and reception on Saturday, December 7, 2024 in Sioux
                    City, Iowa.
                  </h2>
                  <br></br>
                  <label htmlFor="rsvpStatus">RSVP: </label>
                  <br></br>
                  <select
                    id="rsvpStatus"
                    name="rsvpStatus"
                    value={formData.rsvpStatus}
                    onChange={handleChange}
                    required
                  >
                    <option value="attending">Attending</option>
                    <option value="notAttending">Not Attending</option>
                  </select>
                  <br></br>
                  <label htmlFor="foodIssue">Food Issues:</label>
                  <br></br>
                  <input
                    type="text"
                    value={formData.foodIssue}
                    placeholder="Gluten-Free, Lactose Intolerant, Vegan, etc."
                  />
                  <br></br>
                  <button type="submit">Submit RSVP</button>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default RSVPForm;
