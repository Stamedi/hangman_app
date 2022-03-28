import React from 'react'

function Figure({attempts}) {
  return (
    <div>
    <svg height="400" width="300" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="200" y2="20" />
      <line x1="200" y1="20" x2="200" y2="50" />
      <line x1="60" y1="20" x2="60" y2="350" />
      <line x1="0" y1="350" x2="120" y2="350" />

      {/* <!-- Head --> */}
      {attempts < 6 &&
        <circle cx="200" cy="80" r="30" />
      }
      {/* <!-- Body --> */}
      {attempts < 5 &&
        <line x1="200" y1="110" x2="200" y2="190" />
      }
      {/* <!-- Arms --> */}
      {attempts < 4 &&
        <line x1="200" y1="140" x2="150" y2="110" />
      }
      {attempts < 3 &&
        <line x1="200" y1="140" x2="250" y2="110" />
      }
      {/* <!-- Legs --> */}
      {attempts < 2 &&
        <line x1="200" y1="190" x2="240" y2="240" />
      }
      {attempts < 1 &&
        <line x1="200" y1="190" x2="160" y2="240" />
      }
    </svg>
    </div>
  )
}

export default Figure