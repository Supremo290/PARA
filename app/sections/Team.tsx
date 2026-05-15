'use client'

import { motion } from 'framer-motion'
import { Code2, BarChart2, Database } from 'lucide-react'

const team = [
  {
    name: 'Robbie Fuggan',
    role: 'Full Stack Developer',
    roleColor: '#3b82f6',
    icon: Code2,
    iconBg: '#3b82f6',
    // ↓ Replace with actual image path e.g. '/team/christian.jpg'
    image: '/images/CTO-Robbie.jpeg',
    initials: 'RF',
    desc: 'Handles system development, frontend and backend, and ensures that PARA runs smoothly and efficiently.',
    skills: ['React', 'Laravel', 'PHP', 'MySQL'],
  },
  {
    name: 'Regine Sorita',
    role: 'UI/UX Designer',
    roleColor: '#3b82f6',
    icon: BarChart2,
    iconBg: '#3b82f6',
    // ↓ Replace with actual image path e.g. '/team/kyle.jpg'
    image: '/images/CEO-Rine.jpeg',
    initials: 'RS',
    desc: 'Designs user-friendly interfaces and creates seamless experiences for passengers, drivers, and administrators.',
    skills: ['Figma', 'UI Design', 'Prototyping', 'UX Research'],
  },
  {
    name: 'Dane Gestiada',
    role: 'Data Analyst',
    roleColor: '#3b82f6',
    icon: Database,
    iconBg: '#3b82f6',
    // ↓ Replace with actual image path e.g. '/team/angela.jpg'
    image: '/images/CMO-Dane.jpeg',
    initials: 'DG',
    desc: 'Analyzes transportation data, builds insights and dashboards, and supports data-driven decision making.',
    skills: ['Python', 'SQL', 'Data Visualization', 'Excel'],
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
          padding: 2.5rem 2rem 2rem;
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
        .skill-badge {
          background: rgba(15,23,60,0.9);
          border: 1px solid rgba(59,130,246,0.2);
          border-radius: 0.5rem;
          padding: 0.3rem 0.75rem;
          font-size: 0.78rem;
          color: #94a3b8;
          white-space: nowrap;
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
        }
        .avatar-img {
          width: 160px;
          height: 160px;
          object-fit: cover;
          object-position: center top;
          border-radius: 50%;
          display: block;
          flex-shrink: 0;
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
          {/* Label */}
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

          {/* Title */}
          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.25rem)',
            fontWeight: 800,
            color: '#ffffff',
            lineHeight: 1.18,
            marginBottom: '1.25rem',
          }}>
            The Minds Behind PARA
          </h2>

          {/* Subtitle */}
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
                {/* Avatar */}
                <div className="avatar-ring">
                  {member.image ? (
                    /* ── When you have a photo, it renders here ── */
                    <img
                      src={member.image}
                      alt={member.name}
                      className="avatar-img"
                      width={160}
                      height={160}
                      onError={(e) => {
                        const target = e.currentTarget
                        target.style.display = 'none'
                        const fallback = target.nextElementSibling as HTMLElement
                        if (fallback) fallback.style.display = 'flex'
                      }}
                    />
                  ) : (
                    /* ── Placeholder shown until photo is added ── */
                    <span style={{
                      fontSize: '2.5rem',
                      fontWeight: 700,
                      color: 'rgba(59,130,246,0.5)',
                      userSelect: 'none',
                      display: 'none',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                    }}>
                      {member.initials}
                    </span>
                  )}

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
                  marginBottom: '1.1rem',
                }}>
                  {member.role}
                </p>

                {/* Divider */}
                <div style={{
                  width: '100%',
                  height: '1px',
                  background: 'rgba(59,130,246,0.12)',
                  marginBottom: '1.1rem',
                }} />

                {/* Description */}
                <p style={{
                  color: '#94a3b8',
                  fontSize: '0.88rem',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}>
                  {member.desc}
                </p>

                {/* Skill badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center',
                }}>
                  {member.skills.map((skill, j) => (
                    <span key={j} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}