'use client'

import { motion } from 'framer-motion'
import { Code2, BarChart2, Database } from 'lucide-react'

const team = [
  {
    name: 'Robbie Fuggan',
    role: 'Chief Technology Officer',
    roleColor: '#3b82f6',
    icon: Code2,
    iconBg: '#3b82f6',
    initials: 'RF',
  },
  {
    name: 'Regine Sorita',
    role: 'Chief Executive Officer',
    roleColor: '#3b82f6',
    icon: BarChart2,
    iconBg: '#3b82f6',
    initials: 'RS',
  },
  {
    name: 'Dane Gestiada',
    role: 'Chief Marketing Officer',
    roleColor: '#3b82f6',
    icon: Database,
    iconBg: '#3b82f6',
    initials: 'DG',
  },
]

export default function Team() {
  return (
    <section
      id="team"
      style={{
        background: '#04091e',
        position: 'relative',
        padding: '7rem 4rem',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .team-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(59,130,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59,130,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .team-orb-left {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%);
          bottom: -120px; left: -150px; filter: blur(80px);
        }
        .team-orb-right {
          position: absolute; border-radius: 50%; pointer-events: none;
          width: 450px; height: 450px;
          background: radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%);
          top: -80px; right: -80px; filter: blur(80px);
        }
        .team-card {
          background: rgba(10, 16, 48, 0.85);
          border: 1px solid rgba(59,130,246,0.18);
          border-radius: 1.25rem;
          padding: 2.5rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .team-card:hover {
          border-color: rgba(59,130,246,0.45);
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(59,130,246,0.12);
        }
        .avatar-ring {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 3px solid rgba(59,130,246,0.3);
          background: linear-gradient(135deg, rgba(29,78,216,0.3) 0%, rgba(10,14,39,0.9) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 1.5rem;
          overflow: hidden;
          flex-shrink: 0;
        }
        .avatar-initials {
          font-size: 3.5rem;
          font-weight: 800;
          color: rgba(59,130,246,0.7);
          user-select: none;
        }
        .role-icon-badge {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid rgba(4,9,30,1);
          z-index: 2;
        }
      `}</style>

      <div className="team-grid-bg" />
      <div className="team-orb-left" />
      <div className="team-orb-right" />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <div style={{ marginBottom: '0.75rem' }}>
            <span style={{
              color: '#3b82f6',
              fontSize: '0.82rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}>
              Meet the Team
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.18,
            marginBottom: '1.25rem',
          }}>
            The Minds Behind PARA
          </h2>

          <p style={{
            color: '#94a3b8',
            fontSize: '1.05rem',
            lineHeight: 1.75,
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            We are three passionate individuals driven by innovation and a shared vision for smarter, more connected public transportation in Cagayan.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
        }}>
          {team.map((member, i) => {
            const Icon = member.icon
            return (
              <motion.div
                key={i}
                className="team-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                viewport={{ once: false }}
              >
                {/* Avatar with Initials */}
                <div className="avatar-ring">
                  <div className="avatar-initials">
                    {member.initials}
                  </div>

                  {/* Role icon badge */}
                  <div
                    className="role-icon-badge"
                    style={{ background: member.iconBg }}
                  >
                    <Icon style={{ width: '18px', height: '18px', color: '#ffffff' }} />
                  </div>
                </div>

                {/* Name */}
                <h3 style={{
                  color: '#ffffff',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '0.35rem',
                }}>
                  {member.name}
                </h3>

                {/* Role */}
                <p style={{
                  color: member.roleColor,
                  fontSize: '0.92rem',
                  fontWeight: 500,
                }}>
                  {member.role}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}