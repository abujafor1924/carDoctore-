import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const ChecOut = () => {
  const service = useLoaderData();
  const { title, price, _id, img } = service;

  const { user } = useContext(AuthContext);

  const handaleService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
      name,
      email,
      date,
      service_id: _id,
      title,
      price,
      img,
    };
    console.log(order);
    fetch("https://car-doctor-server-project.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Booking Successfully");
        }
      });
  };
  return (
    <div>
      <h1>Book Service :{title} </h1>

      <form onSubmit={handaleService} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            defaultValue={user?.displayName}
            name="name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            defaultValue={user?.email}
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            defaultValue={"$" + price}
            className="input input-bordered"
          />
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary"
            type="submit"
            value="Booking Now"
          />
        </div>
      </form>
    </div>
  );
};

export default ChecOut;
