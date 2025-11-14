// src/components/NewsletterSignup.tsx

"use client";

import React, { useState, useCallback } from 'react';

// Define the component's state interface for clarity and type safety
interface NewsletterState {
  email: string;
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
}

const NewsletterSignup: React.FC = () => {
  const [state, setState] = useState<NewsletterState>({
    email: '',
    isLoading: false,
    isSuccess: false,
    error: null,
  });

  const { email, isLoading, isSuccess, error } = state;

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || isSuccess) return;

    setState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      // 1. Simulate API call delay (replace this with your actual fetch call)
      await new Promise(resolve => setTimeout(resolve, 1500)); 
      
      const apiSuccess = true; // Assume success for this mock

      if (apiSuccess) {
        setState({
          email: '', // Clear email on success
          isLoading: false,
          isSuccess: true,
          error: null,
        });
      } else {
        throw new Error("Subscription failed. Please check your email and try again.");
      }
    } catch (err: any) {
      setState(prev => ({
        ...prev,
        isLoading: false,
        isSuccess: false,
        error: err.message || 'An unknown error occurred.',
      }));
    }
  }, [isLoading, isSuccess]);

  // Content for the call-to-action button
  const buttonText = isSuccess ? 'Subscribed! 🎉' : (isLoading ? 'Subscribing...' : 'Subscribe');

  if (isSuccess) {
    return (
      <section className="newsletter-section newsletter-success-state">
        <div className="newsletter-content-wrapper">
            <h3 className="newsletter-title">Welcome to the Club!</h3>
            <p className="newsletter-subtext">Your **10% off** coupon code is in your inbox. Happy shopping!</p>
        </div>
      </section>
    );
  }

  return (
    <section className="newsletter-section newsletter-initial-state">
        <div className="newsletter-content-wrapper">
            <div className="newsletter-text-container">
                <h3 className="newsletter-title">Get 10% Off Your First Order!</h3>
                <p className="newsletter-subtext">Join our community for **VIP access** to new product drops, members-only sales, and exclusive tech deals.</p>
            </div>
            
            <form className="newsletter-form-inline" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    required
                    disabled={isLoading}
                    className="newsletter-input"
                    aria-label="Email address for newsletter subscription"
                />
                <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`newsletter-button ${isLoading ? 'is-loading' : ''}`}
                >
                    {buttonText}
                </button>
            </form>
            
            {/* Display error message */}
            {error && <p className="newsletter-message newsletter-error">{error}</p>}
        </div>
    </section>
  );
};

export default NewsletterSignup;