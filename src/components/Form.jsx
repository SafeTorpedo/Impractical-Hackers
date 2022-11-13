import { useEffect, useState } from "react";
import axios from "axios";

const Form = () => {

    const [song, setSong] = useState({});
    const [artist, setArtist] = useState("");
    const [state, setState] = useState("");
   
  

    useEffect(() => {
          axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.artists.get?page=1&page_size=3&country=it&apikey=${my_apiKey}`
          )
          .then(res => {
            console.log(res.data);
          })
          .catch(err => console.log(err));
      }, [song]);

   

    const getSong = e => {
        e.preventDefault();
        setState(song);
      };

      const songName = e => {
        setSong(e.target.value);
      };

      const artistName = e => {
        setArtist(e.target.value);
      };
    
    return (
        <div className="mt-[-166px] md:col-span-2 md: text-center py-10">
            <form onSubmit={getSong} >
                <div className="overflow-hidden shadow sm:rounded-md">
                    <div className=" px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <input
                                    type="text"
                                    name="song"
                                    value={song}
                                    autoComplete="song"
                                    onChange={songName}
                                    placeholder="Enter a Song"
                                    className=" placeholder:text-gray-600 mt-1 ml-auto p-6 block w-1/2  rounded-md border-red-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <input
                                    type="text"
                                    name="artist-name"
                                    autocomplete="artist-name"
                                    value={artist}
                                    onChange={artistName}
                                    placeholder="Enter Artist Name"
                                    className="placeholder:text-gray-600 mt-1 mr-auto p-6 block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" px-4 py-2 text-center sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Search
                        </button>
                    </div>
                </div>
            </form>
            <div id="lyrics_container"></div>
        </div>
    );
};

export default Form;
