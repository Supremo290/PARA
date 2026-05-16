'use client'

import { motion } from 'framer-motion'
import { Users, Building2, Landmark, CheckCircle2, Bus, Car, Truck, MapPin, ShieldCheck } from 'lucide-react'

const stakeholders = [
  {
    id: 'passengers',
    icon: Users,
    title: 'Passengers',
    tagline: 'Travel with confidence.',
    taglineColor: '#3b82f6',
    iconBg: 'rgba(59,130,246,0.18)',
    iconBorder: 'rgba(59,130,246,0.35)',
    borderColor: 'rgba(59,130,246,0.22)',
    accentColor: '#3b82f6',
    features: [
      'Track vans, mini buses, and taxis in real-time',
      'See estimated time of arrival (ETA)',
      'Monitor distance and trip progress',
      'Access available vehicles and ride status',
    ],
    mockup: 'passenger',
  },
  {
    id: 'drivers',
    icon: () => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" style={{ width: '26px', height: '26px' }}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
      </svg>
    ),
    title: 'Drivers',
    tagline: 'Drive smarter. Operate better.',
    taglineColor: '#22c55e',
    iconBg: 'rgba(34,197,94,0.18)',
    iconBorder: 'rgba(34,197,94,0.35)',
    borderColor: 'rgba(34,197,94,0.22)',
    accentColor: '#22c55e',
    features: [
      'Start and manage trips',
      'Choose the best time to operate',
      'Monitor passenger count and trip status',
      'See where and when demand is highest',
    ],
    mockup: 'driver',
  },
  {
    id: 'cooperatives',
    icon: Building2,
    title: 'Cooperatives',
    tagline: 'Coordinate operations efficiently.',
    taglineColor: '#a78bfa',
    iconBg: 'rgba(167,139,250,0.18)',
    iconBorder: 'rgba(167,139,250,0.35)',
    borderColor: 'rgba(167,139,250,0.22)',
    accentColor: '#a78bfa',
    features: [
      'Monitor active vehicles, drivers, and trips',
      'Analyze demand patterns and peak hours',
      'View demand forecasts and heatmaps',
      'AI-generated recommendations for dispatch planning',
    ],
    mockup: 'cooperative',
  },
  {
    id: 'lgu',
    icon: Landmark,
    title: 'LGUs & Government',
    tagline: 'Enable smarter transportation governance.',
    taglineColor: '#f59e0b',
    iconBg: 'rgba(245,158,11,0.18)',
    iconBorder: 'rgba(245,158,11,0.35)',
    borderColor: 'rgba(245,158,11,0.22)',
    accentColor: '#f59e0b',
    features: [
      'Monitor transportation activity across municipalities',
      'View live vehicle operations and route coverage',
      'Analyze commuter demand and mobility trends',
      'Access transport analytics and operational reports',
      'Support data-driven transportation planning',
      'Improve coordination during peak seasons and emergencies',
    ],
    mockup: 'lgu',
  },
]

const bottomStats = [
  { icon: Bus,    value: '786',  label: 'UV Express Vans',  sub: 'Serving the province',        color: '#3b82f6' },
  { icon: Car,    value: '50',   label: 'Taxis',            sub: 'Providing daily service',      color: '#f59e0b' },
  { icon: Truck,  value: '10',   label: 'Mini Buses',       sub: 'On provincial routes',         color: '#22c55e' },
  { icon: MapPin, value: '29',   label: 'LGUs in Cagayan',  sub: '28 Municipalities + 1 City',   color: '#a78bfa' },
]

/* ── Mockup components ── */

function PassengerMockup() {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start' }}>
      {/* Map screen */}
      <div style={{
        width: '130px', borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(59,130,246,0.3)',
        background: 'rgba(4,9,30,0.95)',
        boxShadow: '0 8px 32px rgba(59,130,246,0.2)',
      }}>
        {/* Top bar */}
        <div style={{ background: 'rgba(15,23,60,0.9)', padding: '8px 10px', borderBottom: '1px solid rgba(59,130,246,0.15)' }}>
          <div style={{ fontSize: '7px', color: '#94a3b8', marginBottom: '3px' }}>← Tuguegarao → Gattaran</div>
        </div>
        {/* Map area */}
        <div style={{ height: '100px', background: 'linear-gradient(135deg, rgba(15,35,80,0.8) 0%, rgba(8,18,50,0.9) 100%)', position: 'relative', overflow: 'hidden' }}>
          {/* road lines */}
          <svg width="100%" height="100%" viewBox="0 0 130 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 80 Q60 40 110 20" stroke="rgba(59,130,246,0.5)" strokeWidth="2" fill="none" />
            <path d="M10 60 Q40 70 80 90" stroke="rgba(59,130,246,0.25)" strokeWidth="1.5" fill="none" />
            <circle cx="90" cy="28" r="5" fill="rgba(59,130,246,0.8)" />
            <circle cx="90" cy="28" r="10" fill="rgba(59,130,246,0.15)" />
            <rect x="36" y="52" width="14" height="10" rx="3" fill="#3b82f6" />
            <text x="39" y="59" fontSize="6" fill="white">🚐</text>
          </svg>
        </div>
        {/* Bottom info */}
        <div style={{ padding: '8px 10px' }}>
          <div style={{ fontSize: '7px', color: '#64748b', marginBottom: '2px' }}>UV Express Van</div>
          <div style={{ fontSize: '8px', color: '#e2e8f0', fontWeight: 700, marginBottom: '4px' }}>ABG 1234</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div>
              <div style={{ fontSize: '6px', color: '#64748b' }}>ETA</div>
              <div style={{ fontSize: '8px', color: '#3b82f6', fontWeight: 700 }}>12 min</div>
            </div>
            <div>
              <div style={{ fontSize: '6px', color: '#64748b' }}>Distance</div>
              <div style={{ fontSize: '8px', color: '#3b82f6', fontWeight: 700 }}>5.6 km</div>
            </div>
          </div>
          <div style={{
            marginTop: '8px', background: 'rgba(59,130,246,0.15)', border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: '6px', padding: '4px', textAlign: 'center', fontSize: '6.5px', color: '#60a5fa', fontWeight: 600,
          }}>View Details</div>
        </div>
      </div>

      {/* Available Rides screen */}
      <div style={{
        width: '130px', borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(59,130,246,0.3)',
        background: 'rgba(4,9,30,0.95)',
        boxShadow: '0 8px 32px rgba(59,130,246,0.2)',
      }}>
        <div style={{ background: 'rgba(15,23,60,0.9)', padding: '8px 10px', borderBottom: '1px solid rgba(59,130,246,0.15)' }}>
          <div style={{ fontSize: '8px', color: '#e2e8f0', fontWeight: 700 }}>Available Rides</div>
        </div>
        <div style={{ padding: '8px 10px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
          {[
            { type: '🚐', name: 'UV Express Van', route: 'Gattaran → Tuguegarao', status: 'On Route', eta: '12 min', color: '#3b82f6' },
            { type: '🚌', name: 'Mini Bus', route: 'Aparri → Tuguegarao', status: 'On Route', eta: '18 min', color: '#a78bfa' },
            { type: '🚕', name: 'Taxi', route: 'Centro → Tuguegarao', status: 'Available', eta: '6 min', color: '#f59e0b' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(15,23,60,0.6)', borderRadius: '6px', padding: '5px 7px', border: `1px solid ${item.color}22` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2px' }}>
                <span style={{ fontSize: '8px' }}>{item.type} <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{item.name}</span></span>
              </div>
              <div style={{ fontSize: '6px', color: '#64748b', marginBottom: '3px' }}>{item.route}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '6px', color: item.color, fontWeight: 600 }}>{item.status}</span>
                <span style={{ fontSize: '6px', color: '#94a3b8' }}>ETA: {item.eta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DriverMockup() {
  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'flex-start' }}>
      {/* Start Trip */}
      <div style={{
        width: '130px', borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(34,197,94,0.3)',
        background: 'rgba(4,9,30,0.95)',
        boxShadow: '0 8px 32px rgba(34,197,94,0.15)',
      }}>
        <div style={{ background: 'rgba(15,23,60,0.9)', padding: '8px 10px', borderBottom: '1px solid rgba(34,197,94,0.15)' }}>
          <div style={{ fontSize: '8px', color: '#e2e8f0', fontWeight: 700 }}>Start Trip</div>
        </div>
        <div style={{ padding: '10px' }}>
          {[
            { label: 'Route', value: 'Tuguegarao → Gattaran' },
            { label: 'Vehicle', value: 'UV Express Van\nABG 1234' },
            { label: 'Passenger Count', value: '12' },
            { label: 'Trip Status', value: 'Not Started' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '6px', color: '#64748b', marginBottom: '2px' }}>{item.label}</div>
              <div style={{ fontSize: '7.5px', color: '#e2e8f0', fontWeight: 600, whiteSpace: 'pre-line' }}>{item.value}</div>
            </div>
          ))}
          <div style={{
            background: '#22c55e', borderRadius: '6px', padding: '6px', textAlign: 'center',
            fontSize: '7px', color: '#ffffff', fontWeight: 700, marginTop: '8px',
          }}>Start Trip</div>
        </div>
      </div>

      {/* Demand Map */}
      <div style={{
        width: '130px', borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(34,197,94,0.3)',
        background: 'rgba(4,9,30,0.95)',
        boxShadow: '0 8px 32px rgba(34,197,94,0.15)',
      }}>
        <div style={{ background: 'rgba(15,23,60,0.9)', padding: '8px 10px', borderBottom: '1px solid rgba(34,197,94,0.15)' }}>
          <div style={{ fontSize: '8px', color: '#e2e8f0', fontWeight: 700 }}>Demand Map</div>
        </div>
        <div style={{ height: '140px', position: 'relative', overflow: 'hidden' }}>
          {/* Heatmap */}
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(8,18,50,1) 0%, rgba(15,35,80,0.7) 100%)', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: 0 }}>
              <div style={{ position: 'absolute', width: '60px', height: '60px', background: 'radial-gradient(circle, rgba(239,68,68,0.7) 0%, rgba(234,88,12,0.4) 40%, transparent 70%)', top: '30%', left: '30%', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', width: '40px', height: '40px', background: 'radial-gradient(circle, rgba(234,179,8,0.5) 0%, transparent 70%)', top: '15%', right: '20%', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', width: '30px', height: '30px', background: 'radial-gradient(circle, rgba(34,197,94,0.4) 0%, transparent 70%)', bottom: '20%', left: '15%', borderRadius: '50%' }} />
            </div>
            {/* bus icons */}
            {[[45, 55], [70, 30], [20, 70]].map(([x, y], i) => (
              <div key={i} style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)', fontSize: '10px' }}>🚐</div>
            ))}
          </div>
        </div>
        <div style={{ padding: '6px 10px', borderTop: '1px solid rgba(34,197,94,0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '6px', color: '#64748b' }}>
            <span style={{ color: '#3b82f6' }}>Low Demand</span>
            <span style={{ color: '#ef4444' }}>High Demand</span>
          </div>
          <div style={{ height: '4px', borderRadius: '2px', background: 'linear-gradient(90deg, #3b82f6, #22c55e, #f59e0b, #ef4444)', marginTop: '3px' }} />
        </div>
      </div>
    </div>
  )
}

function CooperativeMockup() {
  return (
    <div style={{ width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      <div style={{
        borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(167,139,250,0.3)',
        background: 'rgba(4,9,30,0.95)',
        boxShadow: '0 8px 32px rgba(167,139,250,0.15)',
      }}>
        {/* Header */}
        <div style={{ background: 'rgba(10,14,40,0.95)', padding: '10px 14px', borderBottom: '1px solid rgba(167,139,250,0.15)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '20px', height: '20px', borderRadius: '6px', background: 'rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>🚐</div>
          <span style={{ fontSize: '9px', color: '#e2e8f0', fontWeight: 700 }}>PARA</span>
          <span style={{ fontSize: '7px', color: '#64748b', marginLeft: 'auto' }}>Overview</span>
        </div>
        {/* Stats row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'rgba(167,139,250,0.08)' }}>
          {[
            { label: 'Active Vehicles', value: '642', delta: '+12%' },
            { label: 'Active Drivers', value: '256', delta: '+3%' },
            { label: 'Active Trips', value: '128', delta: '+5%' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(4,9,30,0.95)', padding: '10px 8px', textAlign: 'center' }}>
              <div style={{ fontSize: '14px', color: '#a78bfa', fontWeight: 800 }}>{item.value}</div>
              <div style={{ fontSize: '5.5px', color: '#64748b', marginTop: '2px' }}>{item.label}</div>
              <div style={{ fontSize: '5.5px', color: '#22c55e', marginTop: '2px' }}>{item.delta} vs yesterday</div>
            </div>
          ))}
        </div>
        {/* Heatmap & bar chart area */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', borderTop: '1px solid rgba(167,139,250,0.1)' }}>
          <div style={{ padding: '10px', borderRight: '1px solid rgba(167,139,250,0.1)' }}>
            <div style={{ fontSize: '6.5px', color: '#94a3b8', fontWeight: 600, marginBottom: '6px' }}>Demand Heatmap (Today)</div>
            <div style={{ height: '50px', background: 'linear-gradient(135deg, rgba(8,18,50,1) 0%, rgba(15,35,80,0.7) 100%)', borderRadius: '6px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', width: '30px', height: '30px', background: 'radial-gradient(circle, rgba(239,68,68,0.7) 0%, rgba(234,88,12,0.3) 50%, transparent 70%)', top: '20%', left: '30%', borderRadius: '50%' }} />
              <div style={{ position: 'absolute', width: '20px', height: '20px', background: 'radial-gradient(circle, rgba(234,179,8,0.5) 0%, transparent 70%)', top: '10%', right: '15%', borderRadius: '50%' }} />
            </div>
          </div>
          <div style={{ padding: '10px' }}>
            <div style={{ fontSize: '6.5px', color: '#94a3b8', fontWeight: 600, marginBottom: '6px' }}>Peak Hours (Today)</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '50px' }}>
              {[30, 50, 70, 100, 80, 60, 40, 55].map((h, i) => (
                <div key={i} style={{ flex: 1, background: i === 3 ? '#a78bfa' : 'rgba(167,139,250,0.3)', height: `${h}%`, borderRadius: '2px 2px 0 0' }} />
              ))}
            </div>
          </div>
        </div>
        {/* Top routes */}
        <div style={{ padding: '10px 14px', borderTop: '1px solid rgba(167,139,250,0.1)' }}>
          <div style={{ fontSize: '6.5px', color: '#94a3b8', fontWeight: 600, marginBottom: '6px' }}>Top Routes by Demand</div>
          {[
            { name: 'Tuguegarao - Aparri', level: 'High' },
            { name: 'Tuguegarao - Gattaran', level: 'High' },
            { name: 'Tuguegarao - Centro', level: 'Medium' },
            { name: 'Tuguegarao - Alcala', level: 'Medium' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span style={{ fontSize: '6px', color: '#cbd5e1' }}>{i + 1}. {r.name}</span>
              <span style={{ fontSize: '6px', color: r.level === 'High' ? '#ef4444' : '#f59e0b', fontWeight: 600 }}>{r.level}</span>
            </div>
          ))}
        </div>
        {/* AI banner */}
        <div style={{ background: 'linear-gradient(90deg, rgba(139,92,246,0.3), rgba(59,130,246,0.2))', padding: '8px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '7px', color: '#c4b5fd', fontWeight: 600 }}>AI Dispatch Recommendation</span>
          <span style={{ fontSize: '10px', color: '#a78bfa' }}>+</span>
        </div>
      </div>
    </div>
  )
}

function LGUMockup() {
  return (
    <div style={{ width: '100%', maxWidth: '320px', margin: '0 auto' }}>
      <div style={{
        borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(245,158,11,0.3)',
        background: 'rgba(4,9,30,0.95)',
        boxShadow: '0 8px 32px rgba(245,158,11,0.15)',
      }}>
        <div style={{ background: 'rgba(10,14,40,0.95)', padding: '10px 14px', borderBottom: '1px solid rgba(245,158,11,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '9px', color: '#e2e8f0', fontWeight: 700 }}>Cagayan Overview</span>
          <span style={{ fontSize: '7px', color: '#64748b' }}>Today ▾</span>
        </div>
        {/* Map area */}
        <div style={{ height: '100px', background: 'linear-gradient(135deg, rgba(8,20,60,1) 0%, rgba(12,30,80,0.9) 100%)', position: 'relative', overflow: 'hidden' }}>
          {/* glowing dots on map */}
          {[[25,40],[45,55],[60,30],[75,65],[35,70],[55,20],[80,45],[20,60]].map(([x,y], i) => (
            <div key={i} style={{
              position: 'absolute', left: `${x}%`, top: `${y}%`,
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#f59e0b', boxShadow: '0 0 8px rgba(245,158,11,0.8)',
              transform: 'translate(-50%,-50%)',
            }} />
          ))}
          {/* connection lines */}
          <svg style={{ position: 'absolute', inset: 0 }} width="100%" height="100%" viewBox="0 0 320 100">
            <line x1="80" y1="40" x2="144" y2="55" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8" />
            <line x1="144" y1="55" x2="192" y2="30" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8" />
            <line x1="192" y1="30" x2="240" y2="65" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8" />
          </svg>
        </div>
        {/* Key indicators */}
        <div style={{ padding: '10px 14px' }}>
          <div style={{ fontSize: '6.5px', color: '#94a3b8', fontWeight: 600, marginBottom: '8px' }}>Key Indicators</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            {[
              { label: 'Active Vehicles', value: '846', delta: '+10%', color: '#f59e0b' },
              { label: 'Total Passengers', value: '3,642', delta: '+12%', color: '#3b82f6' },
              { label: 'Routes Covered', value: '58', delta: '+8%', color: '#22c55e' },
              { label: 'Municipalities', value: '29', delta: '', color: '#a78bfa' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(15,23,60,0.6)', borderRadius: '8px', padding: '8px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: item.color }}>{item.value}</div>
                <div style={{ fontSize: '5.5px', color: '#64748b', marginTop: '1px' }}>{item.label}</div>
                {item.delta && <div style={{ fontSize: '5.5px', color: '#22c55e', marginTop: '1px' }}>{item.delta}</div>}
              </div>
            ))}
          </div>
          {/* Trend line */}
          <div style={{ marginTop: '8px' }}>
            <div style={{ fontSize: '6.5px', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>Daily Passenger Trend</div>
            <svg width="100%" height="30" viewBox="0 0 280 30">
              <polyline points="0,25 40,20 80,22 120,12 160,15 200,8 240,10 280,5" fill="none" stroke="rgba(245,158,11,0.7)" strokeWidth="1.5" />
              <polyline points="0,25 40,20 80,22 120,12 160,15 200,8 240,10 280,5 280,30 0,30" fill="rgba(245,158,11,0.08)" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

const mockupMap: Record<string, React.ReactNode> = {
  passenger: <PassengerMockup />,
  driver: <DriverMockup />,
  cooperative: <CooperativeMockup />,
  lgu: <LGUMockup />,
}

export default function Features() {
  return (
    <section
      id="features"
      style={{
        background: '#04091e',
        position: 'relative',
        padding: '7rem 4rem',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .feat-grid {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .feat-orb-1 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%);
          top: -150px; left: -200px; filter: blur(80px);
        }
        .feat-orb-2 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(167,139,250,0.1) 0%, transparent 70%);
          bottom: -100px; right: -100px; filter: blur(80px);
        }
        .feat-orb-3 {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(34,197,94,0.07) 0%, transparent 70%);
          top: 50%; right: 10%; filter: blur(60px);
        }

        .stakeholder-card {
          background: rgba(10, 16, 42, 0.8);
          backdrop-filter: blur(16px);
          border-radius: 1.25rem;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .stakeholder-card:hover {
          transform: translateY(-6px);
        }

        .feature-check-item {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          margin-bottom: 0.6rem;
        }

        .stat-bottom-card {
          background: rgba(10,16,42,0.8);
          backdrop-filter: blur(16px);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.25s ease;
        }
        .stat-bottom-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

      <div className="feat-grid" />
      <div className="feat-orb-1" />
      <div className="feat-orb-2" />
      <div className="feat-orb-3" />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ color: '#3b82f6', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
              Key Features
            </span>
            <div style={{ width: '36px', height: '2px', background: '#3b82f6', margin: '6px auto 0', borderRadius: '2px' }} />
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}>
            Smart tools for every{' '}
            <span style={{
              background: 'linear-gradient(90deg, #3b82f6, #a78bfa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>stakeholder.</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto' }}>
            PARA empowers passengers, drivers, cooperatives, and the government with real-time data, analytics, and intelligent insights for better transportation management.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.75rem', marginBottom: '2rem' }}>
          {stakeholders.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                className="stakeholder-card"
                style={{ border: `1px solid ${s.borderColor}` }}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: false }}
              >
                {/* Top accent */}
                <div style={{ height: '3px', background: s.accentColor, opacity: 0.85 }} />

                <div style={{ padding: '2rem' }}>
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '1.25rem' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '50%',
                      background: s.iconBg,
                      border: `1px solid ${s.iconBorder}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      {typeof Icon === 'function' && Icon.toString().includes('svg') ? (
                        <span style={{ color: s.accentColor }}><Icon /></span>
                      ) : (
                        <Icon style={{ width: '24px', height: '24px', color: s.accentColor }} />
                      )}
                    </div>
                    <div>
                      <h3 style={{ color: '#ffffff', fontSize: '1.15rem', fontWeight: 700, marginBottom: '2px' }}>
                        {s.title}
                      </h3>
                      <p style={{ color: s.taglineColor, fontSize: '0.82rem', fontWeight: 600 }}>
                        {s.tagline}
                      </p>
                    </div>
                  </div>

                  {/* 2-col layout: features + mockup */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', alignItems: 'center' }}>
                    {/* Feature list */}
                    <div>
                      {s.features.map((f, fi) => (
                        <div key={fi} className="feature-check-item">
                          <CheckCircle2 style={{ width: '15px', height: '15px', color: s.accentColor, flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ color: '#cbd5e1', fontSize: '0.83rem', lineHeight: 1.55 }}>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Mockup */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      {mockupMap[s.mockup]}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ── Bottom Banner ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{
            background: 'rgba(10,16,42,0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(59,130,246,0.15)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            marginTop: '2rem',
          }}
        >
          {/* Banner tagline */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', marginBottom: '2rem' }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '50%', flexShrink: 0,
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ShieldCheck style={{ width: '26px', height: '26px', color: '#3b82f6' }} />
            </div>
            <div>
              <p style={{ color: '#e2e8f0', fontSize: '1.05rem', fontWeight: 600, marginBottom: '2px' }}>
                Building a smarter, safer, and more connected Cagayan.
              </p>
              <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.65 }}>
                Together with our LGUs, cooperatives, and transport operators, we can create a modern transportation system for every Cagayano.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {bottomStats.map((stat, i) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={i}
                  className="stat-bottom-card"
                  style={{ border: `1px solid ${stat.color}22` }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  viewport={{ once: false }}
                >
                  <Icon style={{ width: '28px', height: '28px', color: stat.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#e2e8f0', fontWeight: 600, marginTop: '2px' }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', marginTop: '1px' }}>
                      {stat.sub}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}