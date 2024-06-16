function AboutMe() {
  return (
    <>
      <div className="bg-white py-8 sm:pt-2">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-2xl font-bold tracking-tight text-gray-600 sm:text-2xl">
              Want to know more? ☕
            </p>
            <div className="mt-4 text-lg leading-8 text-gray-600">
              <p>jakobhanseth 'at' gmail 'dot' com</p>
              <a href="https://www.linkedin.com/in/hanseth/">
                <button className="text-indigo-600  hover:text-indigo-500">
                  LinkedIn
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
