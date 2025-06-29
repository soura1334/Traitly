import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center m-10">
        <div className=" max-w-[60vw] text-center">
          <h1 className="text-4xl font-semibold">
            Got a question, suggestion, or just want to say hi?
          </h1>
          <h3 className="my-5 text-4xl font-semibold">
            We’d love to hear from you!
          </h3>
          <p className="text-xl text-gray-500">
            Whether you're curious about how Traitly works, want to report an
            issue, or just have something on your mind, drop us a message using
            the form below. We'll get back to you as soon as possible!
          </p>
          <div className="flex justify-center text-left mt-10">
            <form
              className="min-h-[70vh] min-w-[30vw] max-w-[30vw] bg-zinc-800 rounded-md px-10 flex flex-col justify-around p-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <p className="text-center text-3xl">Reach Out</p>
              <div className="relative mb-2">
                <label className="text-lg block mb-2">Name</label>
                <input
                  type="text"
                  className="bg-gray-500 w-full rounded-sm h-10"
                />
              </div>
              <div className="relative mb-2">
                <label className="text-lg block mb-2">Email</label>
                <input
                  type="email"
                  className="bg-gray-500 w-full rounded-sm h-10"
                ></input>
              </div>
              <div className="relative mb-2">
                <label className="text-lg block mb-2">Subject (Optional)</label>
                <input
                  type="text"
                  className="bg-gray-500 w-full rounded-sm h-10"
                ></input>
              </div>
              <div className="relative mb-2">
                <label className="text-lg block mb-2">Message</label>
                <textarea
                  type="text"
                  className="bg-gray-500 w-full rounded-sm h-40"
                ></textarea>
              </div>
              <div className="flex justify-center ">
                <button className="bg-blue-500 p-3 px-5 rounded-xl relative cursor-pointer hover:bg-blue-900">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
