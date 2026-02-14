"use client";

export default function Footer() {
  return (
    <footer className="bg-[#080B10]">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 md:px-16 lg:px-24 xl:px-32">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-bold tracking-[0.25em] text-white">
              COORS
            </h3>
            <span className="text-[10px] tracking-[0.4em] text-[#7AB8E0]/50">LIGHT</span>
            <p className="mt-4 text-xs leading-relaxed text-[#8A9BB5]/40">
              Cold-filtered. Rocky Mountain refreshment since 1978.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] text-[#7AB8E0]/40">COMPANY</h4>
            <div className="mt-4 flex flex-col gap-3">
              {["About", "Careers", "Press", "News"].map((link) => (
                <a key={link} href="#" className="text-xs text-[#8A9BB5]/50 transition-colors hover:text-[#7AB8E0]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] text-[#7AB8E0]/40">LEGAL</h4>
            <div className="mt-4 flex flex-col gap-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Accessibility"].map((link) => (
                <a key={link} href="#" className="text-xs text-[#8A9BB5]/50 transition-colors hover:text-[#7AB8E0]">
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-semibold tracking-[0.3em] text-[#7AB8E0]/40">CONNECT</h4>
            <div className="mt-4 flex gap-4">
              {/* X */}
              <a href="#" className="text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" className="text-[#8A9BB5]/40 transition-colors hover:text-[#7AB8E0]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#1A3A52]/30 pt-6 sm:mt-16 sm:pt-8 md:flex-row">
          <p className="text-[10px] text-[#8A9BB5]/30">
            &copy; {new Date().getFullYear()} Coors Brewing Company. All rights reserved.
          </p>
          <p className="text-[10px] text-[#8A9BB5]/30">
            PLEASE DRINK RESPONSIBLY. Must be 21+ to consume.
          </p>
        </div>
      </div>
    </footer>
  );
}
