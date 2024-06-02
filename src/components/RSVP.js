import React, { useState } from "react";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rsvpStatus: "attending",
    foodIssue: "",
  });
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [searchInputBorderColor, setSearchInputBorderColor] = useState("none");
  const [searchButtonColor, setSearchButtonColor] = useState("lightgray");
  const [searchButtonTextColor, setSearchButtonTextColor] = useState("white");
  const [searchButtonCursor, setSearchButtonCursor] = useState("cursor");

  // Guest data
  const guestData = [
    { id: 1, name: "Anyssa Larson" },
    { id: 2, name: "Brett Larson" },
    { id: 3, name: "Sabrina Ward" },
    { id: 4, name: "April Mesler" },
    { id: 5, name: "Ally Blackburn" },
    { id: 6, name: "Mark Altena" },
    { id: 7, name: "Mitchell Trejo" },
    { id: 8, name: "Dana Trejo" },
    { id: 9, name: "Carolina Trejo" },
    { id: 10, name: "Mark Blackburn" },
    { id: 11, name: "Khristy Blackburn" },
    { id: 12, name: "Nick Blackburn" },
    { id: 13, name: "Larry Arens" },
    { id: 14, name: "Carolyn Arens" },
    { id: 15, name: "Byron Blackburn" },
    { id: 16, name: "Bev Blackburn" },
    { id: 17, name: "Marcos Trejo" },
    { id: 18, name: "Olga Trejo" },
    { id: 19, name: "Julian Trejo" },
    { id: 20, name: "Jeff Peters" },
    { id: 21, name: "Beth Peters" },
    { id: 22, name: "Alex Peters" },
    { id: 23, name: "Ethan Peters" }, // And Guest
    { id: 24, name: "Sydney Peters" },
    { id: 25, name: "Michael Scheitler" },
    { id: 26, name: "Ken Arens" },
    { id: 27, name: "Robin Arens" },
    { id: 28, name: "Benjamin Arens" },
    { id: 29, name: "AJ Arens" },
    { id: 30, name: "Bart Galles" },
    { id: 31, name: "Kelly Galles" },
    { id: 32, name: "Grace Galles" },
    { id: 33, name: "Emma Galles" },
    { id: 34, name: "Jake Schrik" },
    { id: 35, name: "Brett Galles" }, // And Guest
    { id: 36, name: "Bryan Arens" },
    { id: 37, name: "Brenda Arens" },
    { id: 38, name: "Isabella Arens" },
    { id: 39, name: "Jessica Ward" },
    { id: 40, name: "Michael Vacha" },
    { id: 41, name: "Kurt Sales" },
    { id: 42, name: "DeAnn Sales" },
    { id: 43, name: "Brogan Gough" },
    { id: 44, name: "Spencer Gough" },
    { id: 45, name: "Sam Sales" },
    { id: 46, name: "Libby Sales" },
    { id: 47, name: "Ellen Hofer" },
    { id: 48, name: "Vince Hofer" },
    { id: 49, name: "Brooke Sitzmann" },
    { id: 50, name: "Matthew Riordan" },
    { id: 51, name: "Alex Riordan" },
    { id: 52, name: "Maria Stuart" },
    { id: 53, name: "Ed Stuart" },
    { id: 54, name: "Chris Paredes" },
    { id: 55, name: "Sarah Paredes" },
    { id: 56, name: "Alex Paredes" },
    { id: 57, name: "Cubby Paredes" },
    { id: 58, name: "Jaime Navarro" },
    { id: 59, name: "Lori Navarro" },
    { id: 60, name: "Michael Trejo" },
    { id: 61, name: "Veronica Trejo" },
    { id: 62, name: "Gilbert Trejo" },
    { id: 63, name: "Mindo Trejo" },
    { id: 64, name: "Cari Higgins" },
    { id: 65, name: "Shane Higgins" },
    { id: 66, name: "Jackie Benstead" }, // And Guest
    { id: 67, name: "Julianna" }, // And Guest
    { id: 68, name: "Julie Athens" },
    { id: 69, name: "Eric Athens" },
    { id: 70, name: "Theresa Pederson" },
    { id: 71, name: "Wesley Ruden" },
    { id: 72, name: "Luke Smedley" },
    { id: 73, name: "Emma Carlock" },
    { id: 74, name: "Levi Carlock" },
    { id: 75, name: "Stephanie Begnoche" },
    { id: 76, name: "Colin Neuman" },
    { id: 77, name: "Jess Kuennen" }, // And Guest
    { id: 78, name: "Tanya Rozeboom" },
    { id: 79, name: "Ryan Rozeboom" },
    { id: 80, name: "Marla Carrillo" },
    { id: 81, name: "Raul Carrillo" },
    { id: 82, name: "Jenny Joaquin" },
    { id: 83, name: "Evan Reser" },
    { id: 84, name: "Alex Inselman" }, // And Guest
    { id: 85, name: "Paige Tuttle" },
    { id: 86, name: "Jacob Thompson" },
    { id: 87, name: "Angel Dominguez" }, // And Guest
    { id: 88, name: "Sarah Stevens" },
    { id: 89, name: "Dean Stevens" },
    { id: 90, name: "Becky Ryan" },
    { id: 91, name: "Jeff Ryan" },
    { id: 92, name: "Simon Pick" }, // And Guest
    { id: 93, name: "Steve Pick" },
    { id: 94, name: "Christy Pick" },
    { id: 95, name: "Carla Ahlers" },
    { id: 96, name: "Randy Ahlers" },
    { id: 97, name: "Susie Pick" }, // And Guest
    { id: 98, name: "Ray Harpenau" },
    { id: 99, name: "Shirley Harpenau" },
    { id: 100, name: "Janet Fiedler" },
    { id: 101, name: "Joyce Arens" },
    { id: 102, name: "MaryAnn Arens" },
    { id: 103, name: "Mike Arens" },
    { id: 104, name: "Frank Arens" },
    { id: 105, name: "Linda Arens" },
    { id: 106, name: "Rich Arens" },
    { id: 107, name: "Bonnie Arens" },
    { id: 108, name: "Kendra Schroeder" },
    { id: 109, name: "Joe Schroeder" },
    { id: 110, name: "Lorna Full" },
    { id: 111, name: "Jim Full" },
    { id: 112, name: "Margie Harmelink" },
    { id: 113, name: "Patty Winokur" },
    { id: 114, name: "Rick Winokur" },
    { id: 115, name: "Jack Arens" },
    { id: 116, name: "Patty Arens" },
    { id: 117, name: "Rich Schnurr" },
    { id: 118, name: "Judy Schnurr" },
    { id: 119, name: "Mike Schnurr" },
    { id: 120, name: "Irene Foreman" },
    { id: 121, name: "Scott Foreman" },
    { id: 122, name: "Dennis Schnurr" },
    { id: 123, name: "Delores Schultes" },
    { id: 124, name: "Marv Schultes" },
    { id: 125, name: "Katie Mockler" },
    { id: 126, name: "Ryan Mockler" },
    { id: 127, name: "Vinny Furino" },
    { id: 128, name: "Juan Gallegos" },
    { id: 129, name: "Karin Galindo" }, // And Guest
    { id: 130, name: "George Galindo" }, // And Guest
    { id: 131, name: "Kylie Galindo" },
    { id: 132, name: "Michael Fladby" },
    { id: 133, name: "Aliyana Garcia" },
    { id: 134, name: "Olivia Fladby" },
    { id: 135, name: "Holden Fladby" },
    { id: 136, name: "John Robert Galindo" },
    { id: 137, name: "Ashley Plambeck-Galindo" },
    { id: 138, name: "Logan Galindo" },
    { id: 139, name: "Colton Galindo" },
    { id: 140, name: "Nicole Leslie" },
    { id: 141, name: "Michael Leslie" },
    { id: 142, name: "Hannah/Oliver Leslie" },
    { id: 143, name: "Sophia Leslie" },
    { id: 144, name: "Demetrius Hearte" },
    { id: 145, name: "Lia Hearte" },
    { id: 146, name: "Dustin Goeken" },
    { id: 147, name: "Shelby Allen" },
    { id: 148, name: "AJ Ellingwood" },
    { id: 149, name: "Joshua Valencia" },
    { id: 150, name: "Kevin Daniels" },
    { id: 151, name: "Nicole Daniels" },
    { id: 152, name: "Will Christophersen" },
    { id: 153, name: "Jacey Christophersen" },
    { id: 154, name: "Rena Cuadras" },
    { id: 155, name: "Hector Cuadras" },
    { id: 156, name: "Monica Galindo" }, // And Guest
    { id: 157, name: "Steve Galindo" },
    { id: 158, name: "Annette Apodaca-Galindo" },
    { id: 159, name: "Bianca Madrid" },
    { id: 160, name: "Aaron Madrid" },
    { id: 161, name: "Emilio Cuadras" },
    { id: 162, name: "Emily Cuadras" },
    { id: 163, name: "Alicia Hubbell-Fernandez" },
    { id: 164, name: "Joel Fernandez" },
    { id: 165, name: "Ashley Galindo" },
    { id: 166, name: "Audrey Hubbell" },
    { id: 167, name: "Amber Galindo" }, // And Guest
    { id: 168, name: "Tyler Galindo" },
    { id: 169, name: "Alejandra Galindo-Rojas" },
    { id: 170, name: "Parker Galindo" },
    { id: 171, name: "Alexis Snell" },
    { id: 172, name: "Rob Snell" },
    { id: 173, name: "Rosalie Ledesma" },
    { id: 174, name: "Jesse Young" },
    { id: 175, name: "Jennifer Young" },
    { id: 176, name: "Jon Vecchio" }, // And Guest
    { id: 177, name: "Phil Reed" }, // And Guest
    { id: 178, name: "Justin Stade" }, // And Guest
    { id: 179, name: "Tanner Soderstrum" },
    { id: 180, name: "Stacy Soderstrum" },
    { id: 181, name: "Brandon Stevens" }, // And Guest
    { id: 182, name: "Ruben Barron" },
    { id: 183, name: "Michelle Barron" },
    { id: 184, name: "Gabriel Mendoza" },
    { id: 185, name: "Ruben Barron II" },
    { id: 186, name: "Isaiah Barron" },
    { id: 187, name: "AJ Mendoza" },
    { id: 188, name: "Alec Carnes" },
    { id: 189, name: "Amanda Connole" },
    { id: 190, name: "Amber Wycuff" }, // And Guest
    { id: 191, name: "Amber Carmack" },
    { id: 192, name: "Joshua Carmack" },
    { id: 193, name: "Todd Van Galen" },
    { id: 194, name: "Marcy Ewing" },
    { id: 195, name: "Vince Galindo Jr." }, // And Guest
    { id: 196, name: "Naomi Charter" },
    { id: 197, name: "Tyler Charter" },
    { id: 198, name: "Heather Juarez" },
    { id: 199, name: "Rafa Juarez" },
    { id: 200, name: "Sherry Roberts" }, // And Guest
    { id: 201, name: "Jerry Huffman" },
    { id: 202, name: "Margaret Huffman" },
    { id: 203, name: "Marilyn Appel" },
    { id: 204, name: "Roger Appel" },
  ];

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
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
      Guest: ${selectedGuest.name}
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
                <h3>Search Your Name</h3>
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
                    id="foodIssue"
                    name="foodIssue"
                    value={formData.foodIssue}
                    onChange={handleChange}
                    placeholder="Gluten-Free, Lactose Intolerant, Vegan, etc."
                  />
                  <br></br>
                  <button type="submit" onClick={handleSubmit}>
                    Submit RSVP
                  </button>
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
