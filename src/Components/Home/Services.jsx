import { useEffect, useState } from "react";
import Servicecard from "./Servicecard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-project.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Services</h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          officiis ducimus ipsam veritatis accusantium cupiditate, minus ad
          eligendi est labore.
        </p>
      </div>
      <div>
        <p> services data : {services.length}</p>
        <div className="grid grid-cols-3 gap-4">
          {services.map((service) => (
            <Servicecard key={service._id} service={service}></Servicecard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
