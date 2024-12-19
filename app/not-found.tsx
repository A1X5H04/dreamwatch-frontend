'use client';
import Link from 'next/link';

export default function Custom404() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-500">404</h1>
                <h2 className="mt-4 text-2xl font-semibold text-gray-800">
                    Oops! Page Not Found
                </h2>
                <p className="mt-2 text-gray-600">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <div className="mt-6">
                    <Link href="/">
                        <span className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300">
                            Back to Home
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
