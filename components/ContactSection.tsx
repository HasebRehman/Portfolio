"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./contactsection.module.css";

export default function ContactSection() {

  return (
    <section className={styles.contactSection}>
      {/* Marquee Slider with Hollow Text */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className={styles.marqueeItem}>
              <span className={styles.marqueeText}>LET'S WORK TOGETHER</span>
              <div className={styles.sparkleWrapper}>
                <svg
                  className={styles.sparkleIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C12 7.52285 7.52285 12 2 12C7.52285 12 12 16.4771 12 22C12 16.4771 16.4771 12 22 12C16.4771 12 12 7.52285 12 2Z"
                    fill="var(--accent)"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Copy */}
          <div className={styles.leftCol}>
            <div className={styles.tagRow}>
              <span className={styles.sparkle}>✦</span>
              <span className={styles.tagText}>Contact me</span>
            </div>
            <h2 className={styles.title}>Start Your Project</h2>
            <p className={styles.subText}>
              I'll help you plan and build a website that actually performs.
            </p>
          </div>

          {/* Right Column: Form */}
          <div className={styles.rightCol}>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              {/* Name and Email Rows */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="formName" className={styles.label}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="formName"
                    name="name"
                    placeholder="Your Name"
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="formEmail" className={styles.label}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="formEmail"
                    name="email"
                    placeholder="Your Email Address"
                    className={styles.input}
                    required
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className={styles.formGroup}>
                <label htmlFor="formPhone" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="formPhone"
                  name="phone"
                  placeholder="Your Phone Number (Optional)"
                  className={styles.input}
                />
              </div>

              {/* Message Details */}
              <div className={styles.formGroup}>
                <label htmlFor="formMessage" className={styles.label}>
                  Tell me about your project
                </label>
                <textarea
                  id="formMessage"
                  name="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className={styles.textarea}
                  required
                />
              </div>

              {/* Privacy Checkbox */}
              <div className={styles.checkboxGroup}>
                <input
                  type="checkbox"
                  id="formPrivacy"
                  name="privacy"
                  className={styles.checkbox}
                  required
                />
                <label htmlFor="formPrivacy" className={styles.checkboxLabel}>
                  By submitting this form I accept the{" "}
                  <Link href="/privacy" className={styles.privacyLink}>
                    Privacy Policy
                  </Link>{" "}
                  of this site.
                </label>
              </div>

              {/* Submit Capsule Button */}
              <div className={styles.btnWrapper}>
                <button type="submit" className={styles.btnPrimary}>
                  <span className={styles.btnText}>Send Project Details</span>
                  <div className={styles.circleArrow}>
                    <span className={styles.arrowIconInner}>↗</span>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
