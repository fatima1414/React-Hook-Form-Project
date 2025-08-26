import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";

function PetAdoptionForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    reset();
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center text-danger mb-4"> Pet Adoption Form</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="mb-3">
            <label className="form-label fw-bold">Your Full Name</label>
            <input
              type="text"
              {...register("fullName", { required: "Full Name is required" })}
              className="form-control"
            />
            <p className="text-danger">{errors.fullName?.message}</p>
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label fw-bold">Gender</label><br />

            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="male"
                value="Male"
                {...register("gender", { required: "Select your gender" })}
                className="form-check-input"
              />
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                type="radio"
                id="female"
                value="Female"
                {...register("gender", { required: "Select your gender" })}
                className="form-check-input"
              />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>

            <p className="text-danger">{errors.gender?.message}</p>
          </div>


          {/* Preferred Pets */}
          <div className="mb-3">
            <label className="form-label fw-bold">Preferred Pets</label><br />
            
            <label className="me-3">
              <input
                type="checkbox"
                value="Dog"
                {...register("pets", { required: "Select at least one pet" })}
                className="form-check-input me-1"
              /> Dog
            </label>

            <label className="me-3">
              <input
                type="checkbox"
                value="Cat"
                {...register("pets", { required: "Select at least one pet" })}
                className="form-check-input me-1"
              /> Cat
            </label>

            <label className="me-3">
              <input
                type="checkbox"
                value="Rabbit"
                {...register("pets", { required: "Select at least one pet" })}
                className="form-check-input me-1"
              /> Rabbit
            </label>

            <label className="me-3">
              <input
                type="checkbox"
                value="Bird"
                {...register("pets", { required: "Select at least one pet" })}
                className="form-check-input me-1"
              /> Bird
            </label>

            <p className="text-danger">{errors.pets?.message}</p>
          </div>


          {/* Pet Type */}
          <div className="mb-3">
            <label className="form-label fw-bold">Pet Type</label>
            <select
              className="form-select"
              {...register("petType", { required: "Please select pet type" })}
            >
              <option value="">Select a type</option>
              <option value="Puppy">Puppy</option>
              <option value="Kitten">Kitten</option>
              <option value="Adult">Adult</option>
            </select>
            <p className="text-danger">{errors.petType?.message}</p>
          </div>

          {/* Address */}
          <div className="mb-3">
            <label className="form-label fw-bold">Home Address</label>
            <textarea
              className="form-control"
              rows="2"
              {...register("address", { required: "Address is required" })}
            />
            <p className="text-danger">{errors.address?.message}</p>
          </div>

          {/* Adoption Date */}
          <div className="mb-3">
            <label className="form-label fw-bold">Preferred Adoption Date</label>
            <input
              type="date"
              className="form-control"
              {...register("adoptionDate", { required: "Date is required" })}
            />
            <p className="text-danger">{errors.adoptionDate?.message}</p>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button type="submit" className="btn btn-outline-warning text-danger fw-bold py-3 w-25">
              Submit Adoption Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PetAdoptionForm;
