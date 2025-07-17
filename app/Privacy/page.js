import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <main className="flex-grow">
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="page mx-auto max-w-5xl rounded-2xl border border-gray-200 pl-16 p-8 shadow-sm">
                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
                        <p className="mt-4 text-lg ">Last updated: July 20, 2025</p>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold">1. Information We Collect</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                When you create a LinkHub page, we collect the following:
                                your display name, a profile image URL you provide, and any links you choose to include.
                                We do not collect email addresses, passwords, or use any form of user authentication.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                Your data is used solely to generate and display your public LinkHub page.
                                We do not use your information for marketing, analytics, or tracking purposes.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">3. Data Storage</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                All submitted information is stored securely on our backend (e.g., via Vercel infrastructure).
                                Since no sensitive data is collected, storage is minimal and purpose-driven.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">4. Public Visibility</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                Pages created using LinkHub are publicly accessible.
                                Do not submit any personal or sensitive information that you do not want visible to others.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">5. Cookies and Tracking</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                LinkHub does not use cookies or tracking technologies.
                                We do not use analytics tools, and no usage data is collected.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">6. Data Sharing</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                We do not sell, rent, or share any user data with third parties.
                                All information stays within the system and is used strictly for page display purposes.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">7. Children’s Privacy</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                LinkHub is not intended for children under 13.
                                We do not knowingly collect any personal information from minors.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">8. Changes to This Policy</h2>
                            <p className="mt-4  leading-7 text-gray-800 text-md md:text-lg">
                                This Privacy Policy may be updated occasionally. The latest version will always be available here with an updated effective date.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold">9. Contact</h2>
                            <p className="mt-4 text-base leading-7 ">
                                If you have any questions, feel free to reach out via:
                                <a className="font-medium trext-md text-blue-700  hover:underline pl-2 pr-3" href="mailto:youremail@example.com">kshitizsh.8@gmail.com</a> or
                                <a className="font-medium trext-md text-blue-700  hover:underline pl-3" href="https://github.com/CodzHorizon" target="_blank" rel="noopener noreferrer">My GitHub</a>.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8 text-center">
                        <Link className="text-md font-semibold text-blue-700  transition-colors hover:text-blue-600 pointer" href="/">← Back to Home</Link>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default page
