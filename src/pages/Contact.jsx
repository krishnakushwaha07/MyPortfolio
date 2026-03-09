
function Contact() {
  const handleSubmission = (formData) => {
    console.log(Object.fromEntries(formData.entries()));
  };

  return (
    <section className="max-w-4xl m-auto flex flex-col justify-center gap-7 min-h-screen">
      <div className="flex justify-center items-center ">
        <form
          action={handleSubmission}
          className="flex flex-col items-center gap-1 border shadow-xl border-gray-200 p-4 rounded-[10px]"
        >
          <label htmlFor="name" className="self-start">
            Name:
          </label>
          <input
            type="text"
            id="name"
            required
            autoComplete="off"
            name="name"
            className="border w-xs rounded-2xl p-2"
          />

          <label htmlFor="email" className="self-start">
            Email:
          </label>
          <input
            type="email"
            id="email"
            required
            autoComplete="off"
            name="email"
            className="border w-xs rounded-2xl p-2"
          />

          <label htmlFor="message" className="self-start">
            Message:
          </label>
          <textarea
            type="text"
            id="message"
            required
            autoComplete="off"
            name="message"
            rows={7}
            className="border w-xs rounded-2xl p-2"
          />

          <button
            type="submit"
           className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition cursor-pointer mt-4"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
