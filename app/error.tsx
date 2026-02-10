"use client"
import { AlertTriangle } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col gap-y-4 items-center justify-center'>
            <AlertTriangle className='size-6 text-muted-foreground dark:text-dark-muted-foreground'/>
            <p className='text-sm text-muted-foreground dark:text-dark-muted-foreground'>
                Something went wrong
            </p>
        </div>
    );
};

export default ErrorPage;