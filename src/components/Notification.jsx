import React from 'react';
import { CheckCircle, AlertCircle, Info, XCircle, Loader2, Zap } from 'lucide-react';

const Notification = ({ type, title, message }) => {
  const themes = {
    success: { 
      bg: "bg-white/80 border-emerald-500", 
      iconBg: "bg-emerald-500", 
      title: "text-emerald-900", 
      icon: <CheckCircle className="text-white" size={16} /> 
    },
    error: { 
      bg: "bg-white/80 border-rose-500", 
      iconBg: "bg-rose-500", 
      title: "text-rose-900", 
      icon: <XCircle className="text-white" size={16} /> 
    },
    warning: { 
      bg: "bg-white/80 border-amber-500", 
      iconBg: "bg-amber-500", 
      title: "text-amber-900", 
      icon: <AlertCircle className="text-white" size={16} /> 
    },
    info: { 
      bg: "bg-white/80 border-sky-500", 
      iconBg: "bg-sky-500", 
      title: "text-sky-900", 
      icon: <Info className="text-white" size={16} /> 
    },
    loading: { 
      bg: "bg-white/80 border-slate-400", 
      iconBg: "bg-slate-500", 
      title: "text-slate-900", 
      icon: <Loader2 className="text-white animate-spin" size={16} /> 
    },
    urgent: { 
      bg: "bg-white/80 border-purple-500", 
      iconBg: "bg-purple-600 animate-pulse", 
      title: "text-purple-900", 
      icon: <Zap className="text-white" size={16} /> 
    },
  };

  const active = themes[type] || themes.info;

  return (
    <div className={`flex items-center p-4 mb-4 border-l-[6px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-md rounded-xl transition-all hover:scale-[1.02] cursor-pointer ${active.bg} ${active.border}`}>
      {/* Circular Icon Box */}
      <div className={`flex items-center justify-center w-10 h-10 rounded-full shadow-lg shrink-0 mr-4 ${active.iconBg}`}>
        {active.icon}
      </div>
      
      <div className="flex flex-col text-left">
        <h4 className={`font-black text-sm uppercase tracking-wide ${active.title}`}>
          {title}
        </h4>
        <p className="text-xs text-slate-500 font-medium mt-0.5">
          {message}
        </p>
      </div>
    </div>
  );
};

export default Notification;
