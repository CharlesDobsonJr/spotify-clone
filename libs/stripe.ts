import Stripe from "stripe";

export const stripe = new Stripe (
 process.env.STRIPE_SECRET_KEY ?? '',
 {
    apiVersion: '2023-10-16',
    appInfo: {
        name: 'Spotify Clone Video',
        version: '0.1.0'
    }
 }   
);

// I need to check these dates to ensure I have the most up-to-date information.  The video has 2022-11-15 and version 0.1.0