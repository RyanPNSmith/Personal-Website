import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background-primary">
      <div className="text-center p-8 max-w-md">
        <div className="inline-block bg-primary text-text-light p-4 rounded-full mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-6">Page Not Found</h2>
        <p className="text-text-secondary mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="inline-block bg-primary text-text-light hover:bg-primary-light transition-colors py-2 px-4 rounded-md">
          Return to Homepage
        </Link>
      </div>
    </div>
  )
} 