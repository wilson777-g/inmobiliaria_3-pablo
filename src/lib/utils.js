
    import { clsx } from 'clsx';
    import { twMerge } from 'tailwind-merge';
    import { FaTiktok } from 'react-icons/fa';

    export function cn(...inputs) {
    	return twMerge(clsx(inputs));
    }
  