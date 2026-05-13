"use client";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function ContactPage() {
  return (
    <footer className="w-full border-t border-white/5">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://x.com/bhavyakashmira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <FaXTwitter size={22} />
          </a>
          <a
            href="https://linkedin.com/in/bhavyakashmira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://github.com/bhavyakashmira"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <FaGithub size={22} />
          </a>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} bhavyakashmira.
        </p>
      </div>
    </footer>
  );
}
