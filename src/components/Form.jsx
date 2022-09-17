

const Form = () => {
   

    return (
        <div class="mt-5 md:col-span-2 md:mt-0 text-center" >
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-white px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="Song" class="block text-sm font-medium text-gray-700">Song Title</label>
                <input type="text" name="song" id="song" autocomplete="given-name" class="mt-1 p-6 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="Artist" class="block text-sm font-medium text-gray-700">Artist Name</label>
                <input type="text" name="artist-name" id="artist-name" autocomplete="family-name" class="mt-1 p-6 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button type="submit" class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
          </div>
        </div>
      </form>
    </div>
    );
};

export default Form;
