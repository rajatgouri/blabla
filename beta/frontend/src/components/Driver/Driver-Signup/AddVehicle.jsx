import React , {useState} from "react";
import { Link } from "react-router-dom";
import { Stepper } from "react-form-stepper";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addVehicle } from "../../../actions/auth";

function AddVehicle() {
  const initialState = { vehicleType: "", places: "", modelYear: "", color: "" };
  const [formData, setformData] = useState(initialState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVehicle(formData, history));
    setformData(initialState);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
        <div className="col-lg-10 col-sm-12 col-md-12 col-12 font-regular px-0">
            <Stepper
              steps={[
                { label: "Step 1" },
                { label: "Step 2" },
                { label: "Step 3" },
                { label: "Step 4" },
              ]}
              connectorStateColors={true}
              className="text-primaryColor"
              connectorStyleConfig={{
                activeColor: "#1e4c6b",
                completedColor: "#1e4c6b",
                disabledColor: "#bdbdbd",
                size: 1,
                stepSize: "0em",
              }}
              styleConfig={{
                activeBgColor: "#00AFF5",
                completedBgColor: "#1e4c6b",
                labelFontSize: "1rem",
                circleFontSize: "1rem",
                size: "3em",
                fontWeight: 900,
              }}
              activeStep={3}
            />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12">
            <div className="card">
              <h1 className="text-center font-bold text-primaryColor mb-4">
                Add Vehicle Info
              </h1>
              <form>
                <div className="input-group mt-4 font-medium">
                <select
                    type="text"
                    className=""
                    placeholder="Vehicle Type"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  >
                    <option selected disabled>Vehicle type</option>
                    <option value="Bus">Bus</option>
                    <option value="Car">Car</option>
                  </select>
                </div>
                <div className="input-group mt-4">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Number of Places"
                    name="places"
                    value={formData.places}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Model Year"
                    name="modelYear"
                    value={formData.modelYear}
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="input-group mt-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Vehicle Color"
                    value={formData.color}
                    name="color"
                    onChange={(e) => {
                      setformData({
                        ...formData,
                        [e.target.name]: e.target.value,
                      });
                    }}
                  />
                </div>              
                <div className="text-center mt-4">
                  <button className="text-white bg-secondaryColor font-demi btn-blue" onClick={handleSubmit}>
                    Add Vehicle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddVehicle;
