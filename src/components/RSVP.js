import React, { useState } from "react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rsvpStatus: "attending", // Default value
  });
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  // Guest data
  const guestData = [
    { id: 1, name: "Will Christophersen and Jacey Christophersen" },
    { id: 2, name: "Dustin Goeken and Shelby Allen" },
    // Add more guest data as needed
  ];

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
    // Filter guest data based on search input
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
      Email: ${selectedGuest.email}
      RSVP Status: ${formData.rsvpStatus}
    `;
    console.log(emailContent); // Log email content (replace with actual email sending logic)
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <h2>Thank you for your RSVP!</h2>
          <p>We look forward to seeing you at the event.</p>
        </div>
      ) : (
        <div className="rsvp-section">
          <h1>Kelsey and Jessie's Wedding</h1>
          <br></br>
          <p>
            If you're responding for you and a guest (or your family), you'll be
            able to RSVP for your entire group.
          </p>
          <br></br>
          <input
            type="text"
            value={searchName}
            onChange={handleSearchChange}
            placeholder="Enter your name"
          />
          <ul>
            {searchResults.map((guest) => (
              <li key={guest.id} onClick={() => handleSelectGuest(guest.id)}>
                {guest.name}
              </li>
            ))}
          </ul>
          {selectedGuest && (
            <form onSubmit={handleSubmit}>
              <h3>Select Your Name</h3>
              <p>Name: {selectedGuest.name}</p>
              <label htmlFor="rsvpStatus">RSVP Status:</label>
              <select
                id="rsvpStatus"
                name="rsvpStatus"
                value={formData.rsvpStatus}
                onChange={handleChange}
                required
              >
                <option value="attending">Attending</option>
                <option value="notAttending">Not Attending</option>
                <option value="maybe">Maybe</option>
              </select>
              <button type="submit">Submit RSVP</button>
            </form>
          )}
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
