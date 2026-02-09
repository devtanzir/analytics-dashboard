"use client"
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col gap-y-4 items-center justify-center'>
            <AlertTriangle className='size-6 text-muted-foreground'/>
            <p className='text-sm text-muted-foreground'>
                Something went wrong
            </p>
            <button className='px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition'>
                <Link href={"/"}>
                Back to home
                </Link>
            </button>
        </div>
    );
};

export default ErrorPage;