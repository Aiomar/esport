export default function Form() {
  return (
    <form className="flex flex-col scale-95 md:scale-100 items-center p-5">
        <div className="mb-5 w-96">
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
           Full Name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-96"
            placeholder="foulen"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-96"
            placeholder="name@gmail.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-96"
            placeholder="+216"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
          >
            Adress
          </label>
          <input
            type="text"
            name="adress"
            id="adress"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block w-96 p-2.5 "
            placeholder="6 Rue Tunis Centre Ville 3140"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="details"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
          >
            Details (optional)
          </label>
          <textarea
            name="details"
            id="details"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block w-96 h-20 p-2.5 "
            placeholder=""
          />
        </div>
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none
          focus:ring-green-400 font-medium rounded-lg text-sm  px-5 py-2.5 text-
          dark:bg-green-700 dark:hover:bg-green-600  w-96"
        >
          Submit to Buy 
        </button>
      </form>
  );
}
