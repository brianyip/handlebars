import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Handlebars - Your embedded offline marketing partner'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: '#f5f0e8',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '0 120px',
          }}
        >
          <h1
            style={{
              fontSize: 72,
              fontWeight: 300,
              color: '#2c2c2c',
              margin: 0,
              marginBottom: 20,
              lineHeight: 1.1,
            }}
          >
            Your embedded offline
            <br />
            marketing partner.
          </h1>
          <p
            style={{
              fontSize: 24,
              color: '#666',
              margin: 0,
              lineHeight: 1.4,
              maxWidth: '80%',
            }}
          >
            Radio, podcast, TV, OOH, and influencer campaigns
            for fast-growing startups
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 32,
            fontWeight: 600,
            color: '#2c2c2c',
          }}
        >
          HANDLEBARS
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}