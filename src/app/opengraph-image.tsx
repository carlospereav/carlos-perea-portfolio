import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Carlos Perea - Data Scientist & AI Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0a0f1c 0%, #111827 50%, #0f172a 100%)',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34, 211, 238, 0.1) 0%, transparent 70%)',
            display: 'flex',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Name */}
          <h1
            style={{
              fontSize: 72,
              fontWeight: 700,
              background: 'linear-gradient(90deg, #22d3ee 0%, #38bdf8 50%, #22d3ee 100%)',
              backgroundClip: 'text',
              color: 'transparent',
              margin: 0,
              marginBottom: 16,
              letterSpacing: '-0.02em',
            }}
          >
            Carlos Perea Vega
          </h1>

          {/* Role */}
          <p
            style={{
              fontSize: 32,
              color: '#94a3b8',
              margin: 0,
              marginBottom: 24,
              fontWeight: 500,
            }}
          >
            Data Scientist & AI Engineer
          </p>

          {/* Tagline */}
          <p
            style={{
              fontSize: 24,
              color: '#64748b',
              margin: 0,
              maxWidth: 800,
              textAlign: 'center',
              lineHeight: 1.4,
            }}
          >
            Transforming complex data into intelligent decisions
          </p>

          {/* Tech badges */}
          <div
            style={{
              display: 'flex',
              gap: 12,
              marginTop: 40,
            }}
          >
            <div
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: '#22d3ee',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Python
            </div>
            <div
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: '#22d3ee',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              LangChain
            </div>
            <div
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: '#22d3ee',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              PyTorch
            </div>
            <div
              style={{
                padding: '8px 20px',
                borderRadius: 20,
                background: 'rgba(34, 211, 238, 0.1)',
                border: '1px solid rgba(34, 211, 238, 0.3)',
                color: '#22d3ee',
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              GCP
            </div>
          </div>
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ color: '#475569', fontSize: 20 }}>
            carlos-perea-portfolio.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
