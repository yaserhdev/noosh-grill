'use client';

import { useState, useRef, type FormEvent } from 'react';
import { getOpenStatus } from '@/lib/utils';
import { useGsapReveal } from '@/hooks/useGsapReveal';

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID ?? '';
const MAPS_URL =
  'https://www.google.com/maps/place/Noosh+Grill/@38.8176352,-77.2787273,17z';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const sectionRef = useGsapReveal<HTMLElement>({ y: 20, stagger: 0.1 });
  const { isOpen, label } = getOpenStatus();
  const [formState, setFormState] = useState<FormState>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!FORMSPREE_ID) {
      setFormState('error');
      return;
    }

    setFormState('loading');
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormState('success');
        formRef.current?.reset();
      } else {
        setFormState('error');
      }
    } catch {
      setFormState('error');
    }
  };

  const inputClasses =
    'w-full rounded-md border-2 border-noosh-red bg-noosh-cream p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-noosh-red transition-colors duration-200';

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        className="w-full px-5 py-16 lg:py-24"
        style={{ backgroundColor: '#ffbe37' }}
        aria-labelledby="contact-heading"
      >
        <div className="mx-auto max-w-[2000px] xl:px-5">
          <h2
            id="contact-heading"
            data-reveal
            className="mb-12 text-center text-4xl text-noosh-red lg:text-5xl"
          >
            Get In Touch
          </h2>

          <div
            data-reveal
            className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16"
          >
            {/* Info — order-1 on mobile (top), order-1 on desktop (left) */}
            <div className="order-1 flex flex-col items-center justify-center gap-3 text-center lg:order-1">
              <h3 className="mb-2 text-2xl text-noosh-red">
                Noosh Grill Location and Hours
              </h3>

              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-noosh-red underline transition-colors duration-200 hover:text-noosh-green"
              >
                9573 Braddock Rd., Fairfax, VA 22032
              </a>

              <a
                href="tel:+17038889256"
                className="font-bold text-noosh-red underline transition-colors duration-200 hover:text-noosh-green"
              >
                (703) 888-9256
              </a>

              <p className="font-bold text-noosh-red">
                Every Day: 11 AM - 10 PM
              </p>

              <div className="flex items-center gap-2">
                <span
                  className={`h-3 w-3 rounded-full ${isOpen ? 'bg-green-600' : 'bg-red-600'}`}
                  aria-hidden="true"
                />
                <span className="font-bold text-noosh-red">{label}</span>
              </div>
            </div>

            {/* Form — order-2 on mobile (bottom), order-2 on desktop (right) */}
            <div className="order-2 flex flex-col items-center justify-center lg:order-2">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="flex w-full flex-col gap-4"
                noValidate
              >
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-name"
                    className="font-bold text-noosh-red"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-email"
                    className="font-bold text-noosh-red"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClasses}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="contact-message"
                    className="font-bold text-noosh-red"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    required
                    className={inputClasses}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formState === 'loading'}
                  className="self-center rounded-md border-2 border-noosh-red bg-noosh-gold-contact px-6 py-2 text-xl text-noosh-red transition-all duration-200 hover:border-noosh-green hover:text-noosh-green disabled:cursor-not-allowed disabled:opacity-60 font-[family-name:var(--font-tanker)]"
                >
                  {formState === 'loading' ? 'Sending...' : 'Send Message'}
                </button>

                {formState === 'error' && (
                  <p
                    className="text-center text-sm text-red-700"
                    role="alert"
                  >
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {formState === 'success' && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75"
          role="dialog"
          aria-modal="true"
          aria-label="Message sent"
        >
          <div className="mx-4 w-full max-w-md rounded-lg bg-noosh-cream p-8 text-center">
            <p className="mb-6 text-xl font-bold text-gray-700">
              Thank you for reaching out — we will get back to you soon!
            </p>
            <button
              type="button"
              onClick={() => setFormState('idle')}
              className="rounded-md bg-noosh-red px-6 py-2 text-xl text-white transition-colors duration-200 hover:bg-noosh-green font-[family-name:var(--font-tanker)]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
