'use client';
import { Spinner } from '@/components/spinner';
import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/clerk-react';
import { useConvexAuth } from 'convex/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Heading = () => {
    const { isAuthenticated, isLoading } = useConvexAuth();
    return (
        <div className="max-w-3xl space-x-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas,Document & plans , Unified.
                welcome to <span className="underline">Jotion</span>
            </h1>
            <h3 className="text-base sm:text-xl md:text-2xl font-medium">
                Jotion is connected workspace where <br />
                better , faster work happens.
            </h3>
            {isLoading && (<div className='w-full flelx items-center justify-center'><Spinner /></div>)}
            {
                isAuthenticated && !isLoading && (
                    <>
                        <Button>
                            <Link href='/documents' className='flex'>
                                Enter Jotion
                                <ArrowRight />
                            </Link>
                        </Button>
                    </>
                )
            }
            {
                !isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode='modal'>
                            <Button size='sm'>
                                Get Jotion Free
                            </Button>
                        </SignInButton>
                    </>
                )
            }

        </div >
    )
}

export default Heading;
