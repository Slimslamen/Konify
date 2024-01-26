function Contact(){
    return (
        <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Contact us</h1>
        <p className="text-gray-700 mb-4">
        We are here to help you. Contact us if you have any questions, suggestions, or if you just want to say hello.
        </p>
        <form className="mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your e-mail"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-600">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-300 text-black p-2 rounded-md hover:bg-purple-400"
          >
            Submit
          </button>
        </form>
        <p className="text-gray-700">
          You can also e-mail us at: {' '}
          <a href="mailto:info@konify.com" className="text-purple-800">
            info@konify.com
          </a>
        </p>
      </div>
    )
}
export default Contact;