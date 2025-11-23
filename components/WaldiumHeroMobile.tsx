import { cn } from '@/lib/utils';
import { SourceCardMobile } from './SourceCardMobile'
import { WaldiumLogo } from './WaldiumLogo';

export default function WaldiumHeroMobile({
  className
}: {
  className?: string;
}) {

  const sources = [
    { id: 'github', label: 'Github Codebase', icon: 'github', color: '#1f2937' },
    { id: 'knowledge', label: 'Knowledge Base', icon: 'database', color: '#ea580c' },
    { id: 'sales', label: 'Sales Calls', icon: 'phone', color: '#059669' },
    { id: 'slack', label: 'Slack Huddles', icon: 'hash', color: '#7c3aed' },
    { id: 'web', label: 'Web Research', icon: 'globe', color: '#2563eb' },
  ];

  return (
    <div className={cn("relative bg-white font-sans", className)} style={{ width: '398px', padding: '16px 64px 16px 16px', height: 'fit-content' }}>
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main container - flexbox layout */}
      <div className="relative flex h-full m-0" style={{ gap: '-100px' }}>

        {/* Center: Editor - Takes remaining space */}
        <div className="flex-1 flex flex-col relative max-w-full m-0" style={{ zIndex: 2, gap: '16px' }}>

          {/* Source Cards and Editor Container */}
          <div className="flex-1 gap-4" style={{ width: '100%', height: '400px', display: 'flex', flexDirection: 'row', padding: '0' }}>
            {/* Source Cards Column */}
            <div className="flex items-center gap-2 flex-col pt-[100px]" style={{ width: '48px', height: '', display: 'flex', flexDirection: 'column', padding: '0', backgroundColor: '', paddingTop: '100px' }}>
              {sources.map((source, index) => (
                <SourceCardMobile
                  key={source.id}
                  icon={source.icon}
                  color={source.color}
                  index={index}
                />
              ))}
            </div>

            {/* New wrapper column */}
            <div className="flex-1 gap-2" style={{ width: '', height: '500px', display: 'flex', flexDirection: 'column' }}>

              {/* Notification Card */}
              <div className="w-full bg-white border border-neutral-200 shadow-xs rounded-md">
                <div className="flex items-start gap-4 p-3 rounded-md" style={{ width: '250px', gap: '12px' }}>
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1" style={{ margin: '0px' }}>
                      <span className="font-bold text-neutral-900 text-sm">Waldium</span>
                      <span className="text-xs text-neutral-400">Just now</span>
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-800 mb-0.5 overflow-hidden text-ellipsis max-w-full whitespace-nowrap" style={{ fontSize: '12px' }}>New Blog Post Drafted: Revolutionizing Product</h4>
                  </div>
                </div>
              </div>

              {/* Editor Window */}
              <div className="flex-1 bg-white border border-neutral-200 shadow-lg overflow-visible flex flex-col h-[600px] rounded-md" style={{ zIndex: '1', height: '400px', width: '100%' }}>

                {/* Editor Header */}
                <div className="h-12 border-b border-neutral-100 flex items-center px-2 justify-between shrink-0" style={{ height: 'fit-content', padding: '8px' }}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                    <span className="text-xs font-medium text-neutral-600">Post Editor</span>
                  </div>
                  <div className="flex items-center gap-0">
                    <span className="px-2 py-1 rounded-md bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wide border border-emerald-100">AUTO-SAVING</span>
                  </div>
                </div>

                {/* Toolbar */}
                <div className="h-11 border-b border-neutral-100 flex items-center px-4 gap-1 bg-neutral-50/30 shrink-0" style={{ padding: '4px', height: 'fit-content' }}>
                  <button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 text-sm font-semibold">B</button>
                  <button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 text-sm italic">I</button>
                  <button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600 text-sm underline">U</button>
                  <div className="w-[1px] h-5 bg-neutral-200 mx-2" />
                  <button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                  <button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </button>
                  <div className="w-[1px] h-5 bg-neutral-200 mx-2" />
                  <button className="p-1.5 hover:bg-neutral-100 rounded text-neutral-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </button>
                </div>

                {/* Editor Content */}
                <div className="flex-1 p-4 bg-white overflow-visible relative h-[500px]" style={{ padding: '12px' }}>

                  <h1 className="text-lg font-semibold text-neutral-900 tracking-tight mb-4" style={{ fontSize: '16px' }}>
                    Revolutionizing Product Marketing with Ambient Capture and AI
                  </h1>

                  <div className="text-sm leading-relaxed text-neutral-800 overflow-visible">
                    <div className="absolute top-0 left-0 w-full flex flex-col p-2 h-2.5" style={{
                      background: "linear-gradient(\n  to bottom right,\n  rgba(255, 255, 255, 0) 0%,\n  rgba(255, 255, 255, 0) 20%,\n  #ffffff 80%,\n  #ffffff 100%\n)"
                    }} />
                    <div className="inline overflow-visible">
                      <span>AI assistants like ChatGPT and Claude have become the main gateways through which developers and consumers discover software products.</span>
                      <span className="inline-block w-[2px] h-6 -mt-2 bg-emerald-500 ml-1 animate-pulse"></span>

                      {/* AI Badge */}
                      <span className="inline-block w-[2px] relative -mt-2 h-6 overflow-visible">
                        <div className="absolute w-fit whitespace-nowrap bg-emerald-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5"
                          style={{
                            top: -2,
                            left: 8
                          }}>
                          <WaldiumLogo width={12} height={12} />
                          Waldium
                        </div>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Editor Footer */}
                <div className="h-9 border-t border-neutral-100 bg-neutral-50 rounded-b-md flex items-center px-4 gap-4 text-[10px] text-neutral-400 font-medium shrink-0">
                  <span>Markdown</span>
                  <span className="ml-auto flex items-center gap-1.5 text-emerald-600">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Synced to Cloud
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Analytics - Positioned absolutely to overlap */}
        <div className="absolute right-4 w-fit" style={{ zIndex: 3, top: 'unset', bottom: '0px', transform: 'translateY(50%)', right: '-48px' }}>

          <div className="bg-white border border-neutral-200 rounded-2xl p-3 shadow-2xl flex flex-col gap-0 w-[200px]" style={{ right: '-48px', width: '180px' }}>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between m-0">
                <div className="flex flex-col">
                  <span className="text-[10px] text-neutral-400 font-semibold uppercase">Brand Visibility</span>
                  <span className="font-bold text-neutral-900 text-[20px]">87.6%</span>
                </div>
                <div className="flex items-center gap-1.5 bg-emerald-50 px-2 py-1 border border-emerald-100 rounded-sm" style={{ gap: '0px', padding: '4px' }}>
                  <svg className="w-3 h-3 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-emerald-700 font-bold">1.27%</span>
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="h-fit w-full relative mb-3">
              <svg className="w-full h-[60px]" viewBox="0 0 280 140" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#10B981" stopOpacity={0.35}/>
                    <stop offset="100%" stopColor="#10B981" stopOpacity={0.02}/>
                  </linearGradient>
                </defs>
                {/* Grid lines - horizontal */}
                <line x1="0" y1="0" x2="280" y2="0" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
                <line x1="0" y1="35" x2="280" y2="35" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
                <line x1="0" y1="70" x2="280" y2="70" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
                <line x1="0" y1="105" x2="280" y2="105" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>
                <line x1="0" y1="140" x2="280" y2="140" stroke="#e5e7eb" strokeWidth="1" opacity="0.5"/>

                {/* Area fill */}
                <path
                  d="M 0 100 Q 25 95 50 98 T 100 92 T 150 88 T 200 82 T 250 78 L 280 75 L 280 140 L 0 140 Z"
                  fill="url(#areaGradient)"
                />
                {/* Main line */}
                <path
                  d="M 0 100 Q 25 95 50 98 T 100 92 T 150 88 T 200 82 T 250 78 L 280 75"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
