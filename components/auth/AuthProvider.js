// components/auth/AuthProvider.js
import { SignIn, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { Navbar } from '../inedx';

export function AuthProvider({ children }) {
  return (
    <>
      <SignedOut>
        <AuthScreen />
      </SignedOut>
      
      <SignedIn>
        <AuthenticatedLayout>{children}</AuthenticatedLayout>
      </SignedIn>
    </>
  );
}

function AuthScreen() {
  return (
    <div className="w-full h-screen signInScreen flex flex-col justify-center items-center bg-gray-50">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-center mb-2 text-[#e2e2e2]">Welcome to DRF</h1>
        <p className="text-gray-300">Please sign in to continue</p>
      </div>
      <SignIn routing="hash" />
    </div>
  );
}

function AuthenticatedLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </main>
    </div>
  );
}