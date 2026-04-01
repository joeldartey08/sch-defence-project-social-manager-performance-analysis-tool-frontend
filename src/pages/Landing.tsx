import { BarChart3, TrendingUp,  Users,  ArrowRight } from 'lucide-react';
import { useNavigate,} from 'react-router-dom';

const Landing = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="flex items-center w-full sticky top-0 backdrop-blur justify-between px-6 py-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tighter">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <BarChart3 size={24} />
          </div>
          <span>TubeMetrics</span>
        </div>
      
        <button onClick={()=> navigate("/login")}  className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <header className="px-6 pt-16 pb-24 max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-sm text-blue-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          New: Multi-platform support coming soon
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-[1.1]">
          Analyze your YouTube <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            growth in real-time.
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The all-in-one analytics dashboard for creators. Track subscribers, 
          engagement rates.
          {/* and get AI-suggested content ideas to scale your channel */}
        </p>
        <div className="flex items-center justify-center gap-4">
          <button onClick={()=> navigate("/login")} className="w-full cursor-pointer sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
            Get Started <ArrowRight size={20} />
          </button>
        </div>
      </header>

      {/* <section className="px-6 max-w-6xl mx-auto mb-32">
        <div className="bg-[#1a1a1a] rounded-3xl p-4 md:p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 w-32 bg-white/10 rounded-lg animate-pulse" />
            <div className="flex gap-2">
              <div className="h-8 w-8 bg-blue-800/40 rounded-lg" />
              <div className="h-8 w-24 bg-blue-800 rounded-lg" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[Users, TrendingUp, BarChart3, LayoutDashboard].map((Icon, i) => (
              <div key={i} className="bg-[#242424] p-4 rounded-2xl border border-white/5">
                <Icon size={24} className="text-gray-500 mb-2" />
                <div className="h-4 w-16 bg-white/10 rounded mb-2" />
                <div className="h-6 w-24 bg-white/20 rounded" />
              </div>
            ))}
          </div>

          <div className="bg-[#242424] h-64 w-full rounded-2xl border border-white/5 flex items-center justify-center">
            <BarChart3 size={48} className="text-white/10" />
          </div>
        </div>
      </section> */}

      {/* Features Grid */}
      <section className="px-6 py-24 bg-black/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-4 flex flex-col justify-center items-center border border-blue-50/20 backdrop-blur py-6 hover:-translate-y-2 active:-translate-y-2 bg-black/10 duration-300 rounded-lg shadow-md px-4">
            <div className="bg-blue-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-500">
              <TrendingUp />
            </div>
            <h3 className="text-xl font-bold">Deep Insights</h3>
            <p className="text-gray-400">Track watch time, average view duration, and engagement percentage at a glance.</p>
          </div>
          {/* <div className="space-y-4">
            <div className="bg-blue-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-500">
              <Plus />
            </div>
            <h3 className="text-xl font-bold">Content Suggestions<br></br>(Comming Soon)</h3>
            <p className="text-gray-400">Get data-driven recommendations on what videos you should film next to trend.</p>
          </div> */}
          <div className="space-y-4 flex flex-col justify-center items-center border border-blue-50/20 backdrop-blur py-6 hover:-translate-y-2 active:-translate-y-2 bg-black/10 duration-300 rounded-lg shadow-md px-4">
            <div className="bg-blue-600/10 w-12 h-12 rounded-xl flex items-center justify-center text-blue-500">
              <Users />
            </div>
            <h3 className="text-xl font-bold">Multi-Channel</h3>
            <p className="text-gray-400">Manage multiple YouTube accounts from a single dashboard with ease.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>© 2024 TubeMetrics Analytics. Built by <a className="text-white font-semeibold" href="http://joeldartey.vercel.app" target="_blank" rel="noopener noreferrer">Joel Dartey</a>.</p>
      </footer>
    </div>
  );
};

export default Landing;
