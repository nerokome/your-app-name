import React from 'react';

const Body = () => {
    return (
        <div className="flex flex-col items-center space-y-4 p-20">
            {/* Top Container */}
            <div className="w-full bg-black text-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold">Fans on UNRULY DAO</h2>
                <p>Lorem ipsum</p>
                <p>
                    The UNRULY DAO platform is like nothing you have ever seen. Lorem ipsum Lorem ipsum Lorem ipsum...
                </p>
                <div className="flex space-x-4 mt-4">
                    <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">
                        Join the gang
                    </button>
                    <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">
                        Read about us +
                    </button>
                </div>
                
            </div>

            {/* Bottom Containers */}
            <div className="flex w-full justify-between space-x-4">
                <div className="w-1/2 bg-black text-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-bold">Fans on UNRULY DAO</h2>
                    <p>Lorem ipsum</p>
                    <p>
                        The UNRULY DAO platform is like nothing you have ever seen. Lorem ipsum Lorem ipsum Lorem ipsum...
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">
                            Join the gang
                        </button>
                        <button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 rounded">
                            Read about us +
                        </button>
                    </div>
                </div>
                <div className="w-1/2 bg-black flex items-center justify-center p-6 rounded-lg shadow-lg">
                    <div className="text-center">
                        <h2 className="text-lg font-semibold">Oya drop da beat!</h2>
                        {/* Add your image or design here */}
                        <div className="mt-4">
                            <img src="/path/to/your/image.jpg" alt="Decorative Element" className="rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Body;