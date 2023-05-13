const BookingsPage = ({ book, handelDelete, handleConfirm }) => {
  const { name, img, email, date, title, price, _id, status } = book;

  return (
    <tr>
      <th>
        <button
          onClick={() => handelDelete(_id)}
          className="btn btn-square btn-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm text-emerald-800 ">{date}</div>
            <div>{email}</div>
          </div>
        </div>
      </td>
      <div>
        <p>{title}</p>
      </div>
      <td>{price}</td>
      <th>
        {status === "confirme" ? (
          <span>confirme</span>
        ) : (
          <button
            onClick={() => handleConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            please confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingsPage;
