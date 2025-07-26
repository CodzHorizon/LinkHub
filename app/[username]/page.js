import clientPromise from "../../lib/mongodb";
import Link from "next/link";
import Image from "next/image";
export default async function Page({ params }) {
    const { username } = await params;


    try {
        const client = await clientPromise;
        const db = client.db("linkit");
        const user = await db.collection("links").findOne({ username });
        console.log(user.pic)

        if (!user) {
            return (
                <main className="notfound flex flex-col items-center justify-center min-h-screen  px-4 py-12 text-center">
                    <h1 className="text-6xl text-gray-200 font-extrabold  mb-4">404</h1>
                    <p className="text-2xl text-gray-200 mb-6">Sorry, the page you’re looking for does not exist.</p>
                    <Link
                        href="/"
                        className="text-md font-semibold text-blue-300 hover:text-blue-400 transition-colors pointer"
                    >
                        ← Back to Home
                    </Link>
                </main>
            );
        }
        return (
            <div
                className=" min-h-screen flex items-center justify-center p-4 pt-0 overflow-hidden flex-col gap-1.5"
                style={{
                    backgroundImage: "linear-gradient(to bottom, #e0f7fa, #ffffff)"
                }}
            >
                <Link
                    href="/"
                    className="sm:absolute sm:left-4 sm:top-2 bg-white text-center w-28 rounded-2xl h-10 relative text-black text-md font-semibold group pointer"
                >
                    <div
                        className="bg-green-400 rounded-xl h-8 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[104px] z-10 duration-500"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            height="20px"
                            width="20px"
                        >
                            <path
                                d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                fill="#000000"
                            ></path>
                            <path
                                d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                fill="#000000"
                            ></path>
                        </svg>
                    </div>
                    <p className="pb-1 translate-x-2 h-full justify-center items-center flex">Home</p>
                </Link>
                <div className="w-full max-w-[24rem] mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl ">
                    <div className="flex flex-col items-center text-center">
                        <img
                            alt="Profile Preview"
                            className="w-28 h-28 rounded-full object-cover shadow-lg mb-4 border-4 border-white"
                            src={user.pic || "/profilepic.svg"}
                        />
                        <h1 className="text-xl font-bold text-[#101418]">@{user.username}</h1>
                        <p className="text-md text-[#5c738a] mt-4 max-w-xs text-center break-words break-all overflow-hidden whitespace-normal">
                            {user.bio}
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col space-y-4">
                        {user.links?.map(({ link, linktext }, idx) => (
                            <Link
                                key={idx}
                                className="w-full flex items-center justify-center gap-2 bg-white text-black font-medium py-2 px-4 rounded-full shadow hover:bg-gray-100 pointer uppercase active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#F44336,-0.5rem_-0.5rem_#00BCD4] transition hover:scale-105 duration-300"
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span>{linktext}</span>
                            </Link>
                        ))}
                    </div>

                </div>
                <Link href="https://github.com/CodzHorizon" className="absolute bottom-4 right-2 text-gray-600 text-sm font-medium mt-4">
                    Made By CodzHorizon
                </Link>
            </div>
        );
    } catch (error) {
        return (
            <div className="notfound min-h-screen flex items-center justify-center p-4 ">
                <p className="text-gray-100 font-semibold text-lg">Failed to load user data.</p>
            </div>
        );
    }
}
