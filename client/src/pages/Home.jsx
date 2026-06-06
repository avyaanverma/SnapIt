import { Link } from 'react-router';

const Home = () => {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm flex items-center justify-between px-6 h-16">
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-blue-600 tracking-tight">
            SnapIt
          </span>
          <nav className="hidden md:flex items-center gap-6 ml-8">
            <a className="text-blue-600 font-bold border-b-2 border-blue-600 py-1 transition-colors" href="#">
              Features
            </a>
            <a className="text-gray-600 font-medium hover:bg-gray-100 transition-colors px-3 py-1 rounded-lg" href="#">
              Enterprise
            </a>
            <a className="text-gray-600 font-medium hover:bg-gray-100 transition-colors px-3 py-1 rounded-lg" href="#">
              Pricing
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden sm:block text-gray-600 font-medium px-3 py-2 hover:bg-gray-100 rounded-xl transition-all">
            Sign In
          </button>
          <button className="bg-blue-600 text-white font-bold px-6 py-2 rounded-xl shadow-sm hover:opacity-90 active:scale-95 duration-200">
            Get Started
          </button>
          <div className="flex gap-2">
            <span className="text-gray-600 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </span>
            <span className="text-gray-600 cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.35.884 2.573 2.573-.94 1.543.884 3.35 2.573 2.573 1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.884 3.35-2.573 2.573-1.543.94-3.35-.884-2.573-2.573-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.35-.884-2.573-2.573.94-1.543-.884-3.35-2.573-2.573-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.884-3.35 2.573-2.573 1.543.94 3.35.884 2.573 2.573z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </span>
          </div>
        </div>
      </header>

      <main className="pt-32">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1 rounded-full font-medium text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Introducing Real-Time Sync v2.0
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Connect your team with <span className="text-blue-600">SnapIt</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              The ultra-fast messaging platform built for high-performance teams. Experience seamless real-time communication that keeps your workflow moving without distractions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl text-lg shadow-lg hover:opacity-95 active:scale-95 transition-all">
                Get Started for Free
              </button>
              <button className="bg-white border border-gray-300 font-semibold px-8 py-3 rounded-xl text-lg hover:bg-gray-50 transition-all">
                Book a Demo
              </button>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
              <div className="flex -space-x-3">
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtvC-vLA2nPFHGBQ5KPSmOc3MlBAaCXzI7ssJntD30ad7OKHw_Np5LR565mh3PARbnFmoQ_61dZJ5mJUFzT_dhYcKIW9YElewttuNopgWWNBQfCV-h9IykP0uKQqRMHeZNj6vGyqbx0Erjn0un5IzXXPjSJ6Ses6oIgRPQH9VlU65TKYaZbU7mIIFDnZ14jMUy0Rs52SAcQw6id55y4AVQdUCtguzc3yqx43nW7dDK2PtgslfT77WGX_f0"
                />
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLtjT42fwMAVGE0qwkMlPgnCMgrfWCgTzZESaaTJjBh5XVBY66VDdXZDowYZ_SP6_ICKJZJ_BcmQWe1qCd9Dp4ir_uzw94XKQDpzAATmWu7_xa2Is0vMRhH2ZsrrgZQ0E3lbK16KwycEv0vN_RZ6OLDBUdAnLuLXn919QO6DPfCDzLv_kMD1yfzPRMhLB6VkplmaUWAVjIKWWms7SAFiHkSIs89uo_lhkndfGmLhyaXzf8q6YM4FigPtiRZd"
                />
                <img
                  alt="User"
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida/AP1WRLsCg--qByYE1NAda-cv96iaTcpe7doCYWHkqs4ZAYHk_8mvUdTdNirHJBR7VndedKn6YZv4-ruQts2fyJ2eiS2kaH-ZYOnbySwwjW0CZa6O4jWwrQ6rm7QVSfFkFGtpHTANjKrkxUvrn2Kz-7i0dloqj4cvqPikufIy79CJ3KVvfFMtAFGNuXpncfxQVrRkrgf0eCWwUiueocvwNL47dnRZoDzt6iiz2C-TyRM2o9V1NH56Q1jE0_0ZH78"
                />
              </div>
              <span className="text-gray-600 font-medium text-sm">
                Joined by 2,000+ companies worldwide
              </span>
            </div>
          </div>

          {/* Visual Teaser: Chat Interface */}
          <div className="relative w-full aspect-[4/3] lg:aspect-auto">
            <div className="absolute inset-0 bg-blue-50/50 rounded-[40px] blur-3xl -z-10"></div>
            <div className="bg-white border border-gray-200 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full max-h-[600px]">
              {/* Mini Header */}
              <div className="h-14 border-b border-gray-200 flex items-center justify-between px-6 bg-white/50 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="text-lg font-semibold">Marketing Sync</span>
                </div>
                <div className="flex gap-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              {/* Messages Area */}
              <div className="flex-1 p-6 space-y-6 overflow-y-auto bg-gray-50/30">
                <div className="flex flex-col items-start max-w-[80%]">
                  <div className="bg-white border border-gray-200 p-4 rounded-[20px] shadow-sm">
                    <p className="text-gray-600">
                      Hey everyone! Did we finalize the new hero design for SnapIt?
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 ml-2">Alex • 10:42 AM</span>
                </div>
                <div className="flex flex-col items-end ml-auto max-w-[80%]">
                  <div className="bg-blue-600 p-4 rounded-[20px] text-white shadow-md">
                    <p>
                      Just finished it. Sending over the link now! 🚀
                    </p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 mr-2">You • 10:44 AM</span>
                </div>
                <div className="flex flex-col items-start max-w-[80%]">
                  <div className="bg-white border border-gray-200 p-4 rounded-[20px] shadow-sm flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-sm">
                        Hey everyone! Did we finalize the new hero design for SnapIt?
                      </p>
                      <p className="text-xs text-gray-600">
                        Hey everyone! Did we finalize the new hero design for SnapIt?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Input Bar */}
              <div className="p-6 bg-white/50 backdrop-blur-sm border-t border-gray-100">
                <div className="bg-white border border-gray-300 rounded-full h-12 px-6 flex items-center gap-4 shadow-sm">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-500 flex-1">Type a message...</span>
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-gray-50 py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center font-medium text-xs text-gray-500 uppercase tracking-widest mb-6">
              Trusted by high-velocity teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
              <span className="font-bold text-3xl">TECHFLOW</span>
              <span className="font-bold text-3xl">LUMINA</span>
              <span className="font-bold text-3xl">VELOCITY</span>
              <span className="font-bold text-3xl">QUANTUM</span>
              <span className="font-bold text-3xl">NEXUS</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl font-semibold mb-4">
              Everything your team needs to stay in sync
            </h2>
            <p className="text-gray-600 text-lg">
              Stop juggling multiple apps. SnapIt centralizes all your communication in one beautiful, lightning-fast interface.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group bg-white border border-gray-200 p-8 rounded-[28px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-time sync</h3>
              <p className="text-gray-600 leading-relaxed">
                Your messages stay perfectly updated across all devices instantly. No delay, no lag, just pure conversation flow.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="group bg-white border border-gray-200 p-8 rounded-[28px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure groups</h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end encryption for all your conversations. Create private spaces for teams or clients with full control.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="group bg-white border border-gray-200 p-8 rounded-[28px] hover:shadow-[0_15px_40px_rgba(0,0,0,0.05)] transition-all duration-300">
              <div className="w-14 h-14 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">File sharing</h3>
              <p className="text-gray-600 leading-relaxed">
                Drag and drop any file type directly into the chat. Preview images and PDFs without ever leaving the conversation.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Showcase Section */}
        <section className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div className="md:col-span-2 md:row-span-2 bg-blue-600 rounded-[32px] p-8 flex flex-col justify-between relative overflow-hidden text-white">
              <div className="relative z-10">
                <h4 className="text-3xl mb-3">Fluidity across every pixel</h4>
                <p className="opacity-80 max-w-xs">
                  Built with our proprietary engine to ensure the lowest latency in the industry.
                </p>
              </div>
              <div className="absolute bottom-[-10%] right-[-10%] opacity-20 transform rotate-12">
                <svg className="w-[300px] h-[300px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <button className="w-fit bg-white text-blue-600 font-bold px-6 py-3 rounded-xl relative z-10 hover:shadow-lg transition-shadow">
                Explore Platform
              </button>
            </div>
            <div className="md:col-span-2 bg-gray-100 rounded-[32px] p-8 flex items-center gap-8 border border-gray-200">
              <div className="flex-1">
                <h4 className="text-2xl font-semibold mb-2">Crystal Clear Calls</h4>
                <p className="text-gray-600 text-sm">
                  Switch from text to voice or video with a single click, with noise cancellation built-in.
                </p>
              </div>
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div className="md:col-span-1 bg-green-100 rounded-[32px] p-8 flex flex-col justify-center items-center text-center">
              <span className="text-5xl font-bold mb-2">99.9%</span>
              <span className="text-green-600 font-medium uppercase text-sm">Uptime SLA</span>
            </div>
            <div className="md:col-span-1 bg-white border border-gray-200 rounded-[32px] p-8 flex flex-col justify-center items-center text-center">
              <svg className="w-12 h-12 text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1h-3a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1v-3a1 1 0 001-1h1a2 2 0 100-4H3a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 011-1V4z" />
              </svg>
              <span className="font-semibold">200+ Integrations</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="bg-gray-800 rounded-[40px] p-8 md:p-32 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600 opacity-10 blur-[100px] pointer-events-none"></div>
            <h2 className="text-5xl md:text-6xl font-black mb-4 relative z-10">
              Ready to transform your team?
            </h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8 relative z-10">
              Join thousands of companies already using SnapIt to power their daily communications. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-blue-600 text-white font-bold px-8 py-4 rounded-xl text-lg hover:opacity-90 transition-all">
                Create Free Account
              </button>
              <button className="bg-transparent border border-gray-400 text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-all">
                Talk to Sales
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-32 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 col-span-1 md:col-span-1">
            <span className="text-3xl font-bold text-blue-600 tracking-tight">
              SnapIt
            </span>
            <p className="text-gray-600 text-sm pr-4">
              The communication hub for modern teams. Built for speed, privacy, and productivity.
            </p>
            <div className="flex gap-4">
              <span className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 7H3m9 3a3 3 0 01-3-3m3-2h3" />
                </svg>
              </span>
              <span className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                </svg>
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold uppercase text-xs tracking-widest text-gray-500">Product</h5>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Features</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Desktop App</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Mobile App</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Integrations</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold uppercase text-xs tracking-widest text-gray-500">Company</h5>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">About Us</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Careers</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Press Kit</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-bold uppercase text-xs tracking-widest text-gray-500">Support</h5>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Help Center</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Security</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Terms of Service</a>
              </li>
              <li>
                <a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-4">
          <span>© 2024 SnapIt Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a className="hover:text-blue-600 transition-colors" href="#">Cookie Settings</a>
            <a className="hover:text-blue-600 transition-colors" href="#">English (US)</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;