import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { skillStats } from '../data/portfolioData';

const SkillChart = () => {
  return (
    <div className="w-full h-[320px] md:h-[420px] glass-card p-4 border border-white/5 relative group flex flex-col">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      
      <div className="flex-grow w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart 
            cx="50%" 
            cy="50%" 
            outerRadius="65%" 
            data={skillStats}
            margin={{ top: 10, right: 30, bottom: 10, left: 30 }}
          >
            <PolarGrid stroke="#334155" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: '#94a3b8', fontSize: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#0f172a', 
                borderColor: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                color: '#fff'
              }}
            />
            <Radar
              name="Skill Level"
              dataKey="A"
              stroke="var(--primary-color, #10b981)"
              fill="var(--primary-color, #10b981)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-center mt-2 flex-shrink-0">
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Expertise Distribution</p>
      </div>
    </div>
  );
};

export default SkillChart;
