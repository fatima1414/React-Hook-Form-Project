import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PetAdoptionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    pets: [],
    petType: "",
    address: "",
    adoptionDate: "",
  });


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        if (checked) {
          return { ...prev, pets: [...prev.pets, value] };
        } else {
          return { ...prev, pets: prev.pets.filter((pet) => pet !== value) };
        }
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);

    setFormData({
      fullName: "",
      gender: "",
      pets: [],
      petType: "",
      address: "",
      adoptionDate: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center text-danger mb-4">Pet Adoption Form</h3>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-bold">Your Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>


          <div className="mb-3">


            <label className="form-label fw-bold">Gender</label><br />

            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Male</label>
            </div>


            <div className="form-check form-check-inline">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
                className="form-check-input"
              />
              <label className="form-check-label">Female</label>
            </div>


          </div>



          <div className="mb-3">
            <label className="form-label fw-bold">Preferred Pets</label><br />
            <label className="me-3">
              <input
                type="checkbox"
                name="pets"
                value="Dog"
                checked={formData.pets.includes("Dog")}
                onChange={handleChange}
                className="form-check-input me-1"
              /> Dog
            </label>
            <label className="me-3">
              <input
                type="checkbox"
                name="pets"
                value="Cat"
                checked={formData.pets.includes("Cat")}
                onChange={handleChange}
                className="form-check-input me-1"
              /> Cat
            </label>
            <label className="me-3">
              <input
                type="checkbox"
                name="pets"
                value="Rabbit"
                checked={formData.pets.includes("Rabbit")}
                onChange={handleChange}
                className="form-check-input me-1"
              /> Rabbit
            </label>
            <label className="me-3">
              <input
                type="checkbox"
                name="pets"
                value="Bird"
                checked={formData.pets.includes("Bird")}
                onChange={handleChange}
                className="form-check-input me-1"
              /> Bird
            </label>
          </div>



          <div className="mb-3">
            <label className="form-label fw-bold">Pet Type</label>
            <select
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select a type</option>
              <option value="Puppy">Puppy</option>
              <option value="Kitten">Kitten</option>
              <option value="Adult">Adult</option>
            </select>
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold">Home Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="form-control"
              rows="2"
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold">Preferred Adoption Date</label>
            <input
              type="date"
              name="adoptionDate"
              value={formData.adoptionDate}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>


          <div className="text-center">
            <button
              type="submit"
              className="btn btn-outline-warning text-danger fw-bold py-3 w-25"
            >
              Submit Adoption Request
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default PetAdoptionForm;
