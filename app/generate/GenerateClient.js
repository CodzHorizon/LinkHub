"use client";
import Image from 'next/image';
import React from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const GenerateClient = () => {
    const searchParams = useSearchParams();
    const [imageErrored, setImageErrored] = useState(false);
    const [links, setlinks] = useState([{ link: "", linktext: "" }]);
    const [username, setusername] = useState(searchParams.get("username") || "");
    const [bio, setBio] = useState("");
    const [bioError, setBioError] = useState("");
    const [pic, setpic] = useState("");
    const [showLimitWarning, setShowLimitWarning] = useState(false);
    const [showCopyButton, setShowCopyButton] = useState(false);
    const [linkCreated, setLinkCreated] = useState(false);


    const handleAddLink = () => {
        const lastLink = links[links.length - 1];
        const isLastIncomplete = !lastLink.link.trim() || !lastLink.linktext.trim();
        if (isLastIncomplete) {
            warn("Please complete the current link before adding a new one.");
            return;
        }

        if (links.length < 8) {
            setlinks([...links, { link: "", linktext: "" }]);
            setShowLimitWarning(false);
        } else {
            setShowLimitWarning(true);
            warn("Maximum of 8 links allowed.");
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => setImageErrored(false), 300);
        return () => clearTimeout(timer);
    }, [pic]);

    const notify = (message) => toast.success(message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
    const error = (message) => toast.error(message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });
    const warn = (message) => toast.warn(message, {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
    });

    const handleChange = (index, link, linktext) => {
        setlinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i === index) {
                    return { link: link, linktext: linktext };
                }
                else {
                    return item;
                }
            });
        });
    }

    const removeLink = (indexToRemove) => {
        setlinks((prevLinks) => {
            if (prevLinks.length === 1) return prevLinks; // ⛔ prevent removing the last one
            const updatedLinks = prevLinks.filter((_, i) => i !== indexToRemove);
            if (updatedLinks.length < 8) setShowLimitWarning(false);
            return updatedLinks;
        });
    };
    const isValidUsername = (username) => {
        // Allowed chars: lowercase a-z, numbers 0-9, underscore, comma, dot
        // No uppercase, no other special chars
        const regex = /^[a-z0-9_,.]+$/;
        return regex.test(username);
    };
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isValidURL = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };
    const submitLinks = async () => {

        if (!username.trim()) {
            warn("Please enter your username.");
            return;
        }
        if (!isValidUsername(username)) {
            warn("Username can only contain lowercase letters, numbers, underscore (_), comma (,), and dot (.)");
            return;
        }
        if (links.some(l => !l.link.trim() || !l.linktext.trim())) {
            warn("Please complete all link fields.");
            return;
        }
        const normalizeUrl = (url) => url.trim().toLowerCase().replace(/\/$/, "");
        const hasDuplicateLinks = links.some(
            (linkObj, idx) =>
                links.findIndex(l => normalizeUrl(l.link) === normalizeUrl(linkObj.link)) !== idx
        )
        if (hasDuplicateLinks) {
            warn("You have duplicate links.");
            return;
        }
        if (pic.trim() && !isValidURL(pic)) {
            warn("Please enter a valid URL for your profile picture (or leave it blank).");
            return;
        }
        if (!bio.trim()) {
            warn("Please enter your bio.");
            return;
        }

        if (bio.length > 100) {
            warn("Bio must not exceed 100 characters.");
            return;
        }
        setIsSubmitting(true);

        const requestOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ links, username, pic, bio }),

        };

        try {
            const response = await fetch("/api/add", requestOptions);
            const result = await response.json();

            if (response.ok) {
                notify(result.message);
                setShowCopyButton(true); // ✅ Move here — only after successful API call
                setLinkCreated(true);
            } else {
                error(result.message);
            }
        } catch (err) {
            error("Something went wrong...");
            console.error("Error submitting form:", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const lastLink = links[links.length - 1];
    const isLastIncomplete = !lastLink.link.trim() || !lastLink.linktext.trim();
    const canAddLink = links.length < 8 && !isLastIncomplete;
    return (
        <main className="flex-1 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-5 border-x border-black/10 shadow-md rounded-lg ">
            <div className="space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900">Create your LinkHub</h2>
                    <p className="mt-2 text-gray-600">Fill out the form below to get started.</p>
                </div>
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">Profile</h3>
                    <div className="flex items-center sm:gap-6 gap-2 ">
                        <div className="relative">
                            <label className="relative flex  items-center justify-center  bg-white rounded-full border border-gray-300 pointer hover:bg-gray-100" htmlFor="pic">
                                <div className="profile_item w-18 h-18 sm:w-24 sm:h-24  border-2 rounded-full hover:border-gray-400/50 pointer transition-all duration-500 z-0 shadow-2xl ">
                                    <div className="w-full bg-white h-full flex items-center justify-center rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500 overflow-hidden">
                                        {pic && isValidURL(pic) && !imageErrored ? (
                                            <Image
                                                src={pic}
                                                alt="Profile Preview"
                                                width={96}
                                                height={96}
                                                className="rounded-full object-cover w-18 h-18 sm:w-24 sm:h-24"
                                                onError={() => {
                                                    if (!imageErrored) {
                                                        setImageErrored(true);
                                                        error("Could not load profile picture.");
                                                    }
                                                }}
                                            />
                                        ) : (
                                            <span className="w-18 h-18 sm:w-24 sm:h-24 inline-block">
                                                {/* Inline fallback SVG */}
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="#555" className="w-full h-full">
                                                    <path d="M9.99296258,10.5729355 C12.478244,10.5729355 14.4929626,8.55821687 14.4929626,6.0729355 C14.4929626,3.58765413 12.478244,1.5729355 9.99296258,1.5729355 C7.5076812,1.5729355 5.49296258,3.58765413 5.49296258,6.0729355 C5.49296258,8.55821687 7.5076812,10.5729355 9.99296258,10.5729355 Z M10,0 C13.3137085,0 16,2.6862915 16,6 C16,8.20431134 14.8113051,10.1309881 13.0399615,11.173984 C16.7275333,12.2833441 19.4976819,15.3924771 19.9947005,19.2523727 C20.0418583,19.6186047 19.7690435,19.9519836 19.3853517,19.9969955 C19.0016598,20.0420074 18.6523872,19.7816071 18.6052294,19.4153751 C18.0656064,15.2246108 14.4363723,12.0699838 10.034634,12.0699838 C5.6099956,12.0699838 1.93381693,15.231487 1.39476476,19.4154211 C1.34758036,19.7816499 0.998288773,20.0420271 0.614600177,19.9969899 C0.230911582,19.9519526 -0.0418789616,19.6185555 0.00530544566,19.2523267 C0.500630192,15.4077896 3.28612316,12.3043229 6.97954305,11.1838052 C5.19718955,10.1447285 4,8.21217353 4,6 C4,2.6862915 6.6862915,0 10,0 Z" />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="flex-1 flex-col ">
                            <div className="mb-0">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="username">Name/Username</label>
                                <input
                                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white transition-all duration-200 shadow-sm focus:outline-none focus:border-[#699bcd] focus:ring-2 focus:ring-[#699bcd] focus:ring-opacity-50 h-11 px-4 text-sm"
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                    placeholder="Your Name or Username"
                                    value={username || ""}
                                    maxLength={18}
                                    onChange={(e) => setusername(e.target.value)}
                                />
                                <div className="text-right text-xs text-gray-500 mt-1">{username.length}/18</div>
                                {username && !isValidUsername(username) && (
                                    <p className="text-red-600 text-xs -mt-2 sm:mr-0 mr-2">
                                        Username can only contain lowercase letters, numbers, underscore , comma , and dot
                                    </p>
                                )}
                            </div>
                            <div>
                                <p className="block text-sm font-medium text-gray-700">Profile Picture URL</p>
                                <input
                                    className="mt-2 block w-full rounded-lg border border-gray-300 bg-white transition-all duration-200 shadow-sm focus:outline-none focus:border-[#699bcd] focus:ring-2 focus:ring-[#699bcd] focus:ring-opacity-50 h-11 px-4 text-sm"
                                    id="pic"
                                    name="pic"
                                    type="text"
                                    autoComplete="off"
                                    placeholder="Your Profile Picture URL"
                                    value={pic || ""}
                                    onChange={(e) => setpic(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <label htmlFor="bio" className="block text-xl font-medium text-gray-700">
                        Bio <span className="text-gray-400 text-xs">(Max 100 characters)</span>
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        rows={3}
                        autoComplete="off"
                        maxLength={100}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="mt-2 block w-full rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:border-[#699bcd] focus:ring-2 focus:ring-[#699bcd] focus:ring-opacity-50 text-sm px-4 py-2 resize-none"
                        placeholder="Tell us about yourself..."
                    ></textarea>
                    <div className="text-right text-xs text-gray-500 mt-1">{bio.length}/100</div>
                </div>
                <div className="space-y-4">
                    <div className="flex justify-between  vertical-center">
                        <h3 className="text-xl font-semibold text-gray-900">Your Links</h3>
                        <ToastContainer />
                        <div className='flex flex-col gap-1 items-end justify-baseline'>
                            <button
                                className={`flex items-center gap-2 text-sm font-semibold text-[#699bcd] hover:text-blue-700 transition-colors duration-150 pointer`}
                                title={links.length >= 8 ? "Maximum of 8 links allowed." : ""}
                                onClick={handleAddLink}
                                disabled={isSubmitting}
                            >
                                <span className=" text-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                    </svg>
                                </span>
                                Add Link
                            </button>
                            {showLimitWarning && (
                                <span className="text-red-600 text-sm font-light">Maximum of 8 links allowed.</span>
                            )}
                        </div>
                    </div>
                    {links && links.map((item, index) => {
                        return <div className="space-y-4 p-4 border border-gray-200 rounded-xl bg-white relative pb-7" key={index}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`link-url-${index}`}>URL</label>
                                    <input className="mt-2 block w-full rounded-lg border border-gray-300 bg-white transition-all duration-200 shadow-sm focus:outline-none focus:border-[#699bcd] focus:ring-2 focus:ring-[#699bcd] focus:ring-opacity-50 h-11 px-4 text-sm"
                                        autoComplete="off" id={`link-url-${index}`} name={`link-url-${index}`} placeholder="https://example.com" type="url"
                                        value={item.link}
                                        onChange={(e) => handleChange(index, e.target.value, item.linktext)} />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor={`link-text-${index}`}>Display Text</label>
                                    <input className="mt-2 block w-full rounded-lg border border-gray-300 bg-white transition-all duration-200 shadow-sm focus:outline-none focus:border-[#699bcd] focus:ring-2 focus:ring-[#699bcd] focus:ring-opacity-50 h-11 px-4 text-sm" autoComplete="off" id={`link-text-${index}`} name={`link-text-${index}`} placeholder="My awesome website" type="text"
                                        value={item.linktext}
                                        onChange={(e) => handleChange(index, item.link, e.target.value,)} />
                                </div>
                            </div>
                            {links.length > 1 && (
                                <button
                                    type="button"
                                    className="absolute right-4 bottom-3 text-xs font-medium text-red-500 hover:underline hover:text-red-700 transition duration-200 pointer"
                                    onClick={() => removeLink(index)}
                                >
                                    Remove
                                </button>
                            )}
                        </div>
                    })}
                </div>
                <div className="pt-4 flex flex-row gap-1 sm:gap-4">
                    {!linkCreated ? (
                        <button
                            disabled={isSubmitting}
                            className={`w-full flex justify-center pointer py-3 px-4 border border-transparent rounded-full shadow-lg text-md sm:text-lg font-bold text-white ${isSubmitting ? "bg-gray-400" : "bg-[#699bcd] hover:bg-blue-600 pointer"
                                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#699bcd]`}
                            type="submit"
                            onClick={submitLinks}
                        >
                            {isSubmitting ? "Submitting..." : "Create LinkHub"}
                        </button>
                    ) : (
                        <>
                            <div className="w-full flex items-center justify-center py-2 px-3 rounded-full shadow-lg text-md sm:text-lg font-bold text-white bg-green-600 pointer">
                                LinkHub Created!
                            </div>

                            {showCopyButton && (
                                <button
                                    className="w-full justify-center items-center py-2 px-3 border border-[#699bcd] rounded-full shadow-lg text-md sm:text-lg font-bold text-[#699bcd] hover:bg-blue-100 transition-colors duration-200 pointer"
                                    onClick={() => {
                                        const link = `${window.location.origin}/${username}`;
                                        navigator.clipboard.writeText(link);
                                        notify("Link copied to clipboard!");
                                        window.open(link, "_blank"); // Open LinkHub in a new tab
                                    }}
                                >
                                    View & Copy LinkHub
                                </button>
                            )}
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default GenerateClient

