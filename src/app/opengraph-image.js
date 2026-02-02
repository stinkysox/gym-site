import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Golden Fitness - Premium Gym & Training';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          border: '20px solid #D4AF37', // Gold border
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '4px',
              marginBottom: 20,
              fontFamily: 'sans-serif',
            }}
          >
            Golden <span style={{ color: '#D4AF37', marginLeft: 15 }}>Fitness</span>
          </div>
          <div
            style={{
              fontSize: 30,
              color: '#D4AF37', // Gold text
              textTransform: 'uppercase',
              letterSpacing: '8px',
              fontFamily: 'sans-serif',
            }}
          >
            Premium Gym & Training
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
