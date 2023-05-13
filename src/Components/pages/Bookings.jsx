import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingsPage from "./BookingsPage";
import { useNavigate } from "react-router-dom";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const url = `https://car-doctor-server-project.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem(
          "car-doctore-access-token"
        )}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setBookings(data);
        } else {
          navigate("/");
        }
      });
  }, [url, navigate]);

  const handelDelete = (id) => {
    const proside = confirm("Are You Sure Delete?");
    if (proside) {
      fetch(`https://car-doctor-server-project.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Youre Data Is Deleted");

            const remaining = bookings.filter((book) => book._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleConfirm = (id) => {
    fetch(`https://car-doctor-server-project.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirme" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          // updaTED
          const remaining = bookings.filter((book) => book._id !== id);
          const update = bookings.find((book) => book._id === id);
          update.status = "confirme";
          const newBookings = [update, ...remaining];
          setBookings(newBookings);
        }
      });
  };
  return (
    <div>
      <h1 className="text-4xl font-bold">Your Bookings : {bookings.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete</th>
              <th>Name</th>
              <th>Service</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((book) => (
              <BookingsPage
                key={book._id}
                book={book}
                handelDelete={handelDelete}
                handleConfirm={handleConfirm}
              ></BookingsPage>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
