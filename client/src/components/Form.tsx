import { IoMdClose } from "react-icons/io";

interface formProps {
  updateShow: () => void;
}

export default function Form({ updateShow }: formProps) {
  return (
    <div className="flex flex-col fixed z-40  justify-center items-center w-full h-screen backdrop-blur-xl">
      <form className="max-w-md mx-auto scale-95 md:scale-100">
        <button
          className=""
          type="button"
          onClick={() => {
            updateShow();
          }}
        >
          <IoMdClose title="close" size={30} className="rounded-3xl text-red-500"/>
        </button>
        <div className="mb-5 w-96">
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Full name
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="foulen"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="name@gmail.com"
            required
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fullName"
            className="block mb-2 text-sm font-medium text-gray-900  dark:text-white"
          >
            phone number
          </label>
          <input
            type="number"
            name="fullName"
            id="fullName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
            name="fullName"
            id="fullName"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
            focus:ring focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Rue Tunis 3140"
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
