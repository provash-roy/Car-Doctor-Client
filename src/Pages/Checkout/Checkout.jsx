import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const service = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const order = {
      customerName: name,
      date,
      email,
      phone,
      serviceId: service._id,
      serviceTitle: service.title,
      servicePrice: service.price,
      serviceImage: service.img,
    };

    console.log("Order Submitted:", order);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Server response:", data);
      });
  };

  return (
    <div className="p-4">
      <div className="text-center">
        {" "}
        <h2 className="text-xl font-bold mb-2">Checkout: {service.title}</h2>
        <p className="mb-4">Price: ${service.price}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Name"
            required
          />
          <input
            type="date"
            name="date"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="phone"
            className="input input-bordered w-full"
            placeholder="Phone"
            required
          />
        </div>

        <input
          type="submit"
          className="btn btn-primary mt-6 w-full"
          value="Order Confirm"
        />
      </form>
    </div>
  );
};

export default Checkout;
