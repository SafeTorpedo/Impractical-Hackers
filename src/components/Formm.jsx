

const Formm = () => {
   

    return (
        <div className="mt-[-166px] md:col-span-2 md: text-center" >
      <form action="#" method="POST">
        <div className="overflow-hidden shadow sm:rounded-md">
          <div className=" px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                {/* <label for="Song" className="block text-sm font-medium text-gray-700">Song Title</label> */}
                <input type="text" name="song" id="song" autocomplete="given-name" placeholder="Enter a Song" className="mt-1 ml-auto p-6 block w-1/2 rounded-md border-red-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div className="col-span-6 sm:col-span-3">
                {/* <label for="Artist" className=" text-sm font-medium  text-gray-700">Artist Name</label> */}
                <input type="text" name="artist-name" id="artist-name" autocomplete="family-name" placeholder="Enter Artist Name" className="mt-1 mr-auto p-6 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>
            </div>
          </div>
          <div className=" px-4 py-3 text-center sm:px-6">
            <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Search</button>
          </div>
        </div>
      </form>
        <div>
            <span contentEditable>
                
            </span>
        </div>
     </div>
    );
};

export default Formm;
